import { Suspense, lazy } from "react";
import { AppRoutes } from "@/app/AppRoutes";

const MutantBackgroundScene = lazy(() =>
  import("@/components/scene/MutantBackgroundScene").then((module) => ({
    default: module.MutantBackgroundScene
  }))
);

export function App() {
  return (
    <div className="app-shell">
      <div className="page-gradient" />
      <Suspense fallback={null}>
        <MutantBackgroundScene />
      </Suspense>
      <AppRoutes />
    </div>
  );
}
