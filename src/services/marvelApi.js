const MARVEL_API_URL = "https://gateway.marvel.com/v1/public/characters";

function buildMarvelParams(name) {
  const params = new URLSearchParams({
    name,
    limit: "1",
    apikey: import.meta.env.VITE_MARVEL_PUBLIC_KEY || ""
  });

  const ts = import.meta.env.VITE_MARVEL_TS;
  const hash = import.meta.env.VITE_MARVEL_HASH;

  if (ts && hash) {
    params.set("ts", ts);
    params.set("hash", hash);
  }

  return params;
}

export async function fetchMarvelCharacterByName(name, signal) {
  const apiKey = import.meta.env.VITE_MARVEL_PUBLIC_KEY;

  if (!apiKey) {
    return { status: "disabled" };
  }

  const requestUrl = `${MARVEL_API_URL}?${buildMarvelParams(name).toString()}`;
  const response = await fetch(requestUrl, { signal });

  if (!response.ok) {
    throw new Error(`HTTP ${response.status}`);
  }

  const payload = await response.json();
  const character = payload?.data?.results?.[0] || null;

  return {
    status: "ready",
    character,
    attributionText: payload?.attributionText || ""
  };
}
