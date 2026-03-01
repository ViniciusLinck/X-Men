import { spawn } from "node:child_process";
import http from "node:http";
import { readFile, stat } from "node:fs/promises";
import path from "node:path";
import { chromium } from "playwright";

const PORT = 4340;
const BASE_PATH = process.env.VERIFY_BASE_PATH || "/X-Men/";
const DIST_DIR = path.resolve("dist");

function mimeType(filePath) {
  if (filePath.endsWith(".html")) return "text/html; charset=utf-8";
  if (filePath.endsWith(".js")) return "application/javascript; charset=utf-8";
  if (filePath.endsWith(".css")) return "text/css; charset=utf-8";
  if (filePath.endsWith(".svg")) return "image/svg+xml";
  if (filePath.endsWith(".png")) return "image/png";
  if (filePath.endsWith(".jpg") || filePath.endsWith(".jpeg")) return "image/jpeg";
  if (filePath.endsWith(".gif")) return "image/gif";
  return "application/octet-stream";
}

function createServer() {
  return http.createServer(async (req, res) => {
    try {
      const rawUrl = req.url || "/";
      if (!rawUrl.startsWith(BASE_PATH)) {
        res.statusCode = 404;
        res.end("Not Found");
        return;
      }

      let routePath = rawUrl.slice(BASE_PATH.length);
      routePath = routePath.split("?")[0];

      let filePath = path.join(DIST_DIR, routePath);
      if (!routePath || routePath.endsWith("/")) {
        filePath = path.join(DIST_DIR, "index.html");
      }

      try {
        const info = await stat(filePath);
        if (info.isDirectory()) {
          filePath = path.join(filePath, "index.html");
        }
      } catch {
        filePath = path.join(DIST_DIR, "index.html");
      }

      const content = await readFile(filePath);
      res.setHeader("Content-Type", mimeType(filePath));
      res.end(content);
    } catch {
      res.statusCode = 500;
      res.end("Server Error");
    }
  });
}

function runBuild() {
  return new Promise((resolve, reject) => {
    const child = spawn("npm.cmd", ["run", "build"], {
      shell: true,
      stdio: "inherit",
      windowsHide: true,
      env: {
        ...process.env,
        VITE_BASE_PATH: BASE_PATH
      }
    });

    child.on("exit", (code) => {
      if (code === 0) {
        resolve();
      } else {
        reject(new Error(`Build failed with code ${code}`));
      }
    });
  });
}

async function runE2E() {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1366, height: 768 } });
  const errors = [];

  page.on("pageerror", (error) => errors.push(`PAGEERROR: ${error.message}`));
  page.on("console", (msg) => {
    if (msg.type() === "error") {
      errors.push(`CONSOLE: ${msg.text()}`);
    }
  });

  const homeResponse = await page.goto(`http://127.0.0.1:${PORT}${BASE_PATH}`, {
    waitUntil: "networkidle"
  });
  await page.waitForTimeout(300);
  await page.locator(".card-image-button").first().click();
  await page.waitForURL(`**${BASE_PATH}heroi/**`, { timeout: 7000 });
  await page.waitForTimeout(700);

  const heroVisible = await page.locator(".hero-page").isVisible();
  const heroTitle = (await page.locator(".hero-banner-content h1").first().textContent())?.trim();

  await browser.close();

  return {
    homeStatus: homeResponse?.status() || null,
    heroVisible,
    heroTitle: heroTitle || "",
    errors
  };
}

async function main() {
  await runBuild();

  const server = createServer();
  await new Promise((resolve) => server.listen(PORT, "127.0.0.1", resolve));

  try {
    const result = await runE2E();
    console.log(`VERIFY_HOME_STATUS=${result.homeStatus}`);
    console.log(`VERIFY_HERO_VISIBLE=${result.heroVisible}`);
    console.log(`VERIFY_HERO_TITLE=${result.heroTitle}`);
    console.log(`VERIFY_ERROR_COUNT=${result.errors.length}`);

    for (const error of result.errors) {
      console.log(error);
    }

    if (result.homeStatus !== 200 || !result.heroVisible || result.errors.length > 0) {
      process.exitCode = 1;
    }
  } finally {
    await new Promise((resolve) => server.close(resolve));
  }
}

main().catch((error) => {
  console.error(`VERIFY_FAILED=${error.message}`);
  process.exitCode = 1;
});
