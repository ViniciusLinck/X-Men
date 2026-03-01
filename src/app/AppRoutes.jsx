import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { RouteTransition } from "@/components/transitions/RouteTransition";

const HomePage = lazy(() =>
  import("@/pages/HomePage").then((module) => ({
    default: module.HomePage
  }))
);

const HeroPage = lazy(() =>
  import("@/pages/HeroPage").then((module) => ({
    default: module.HeroPage
  }))
);

const NotFoundPage = lazy(() =>
  import("@/pages/NotFoundPage").then((module) => ({
    default: module.NotFoundPage
  }))
);

function RouteFallback() {
  return (
    <div className="page-content route-loading">
      <p>Carregando modulo...</p>
    </div>
  );
}

export function AppRoutes() {
  return (
    <RouteTransition>
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<RouteFallback />}>
              <HomePage />
            </Suspense>
          }
        />
        <Route
          path="/heroi/:heroId"
          element={
            <Suspense fallback={<RouteFallback />}>
              <HeroPage />
            </Suspense>
          }
        />
        <Route
          path="*"
          element={
            <Suspense fallback={<RouteFallback />}>
              <NotFoundPage />
            </Suspense>
          }
        />
      </Routes>
    </RouteTransition>
  );
}
