import { cloneElement, isValidElement, useEffect, useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { useLocation } from "react-router-dom";

export function RouteTransition({ children }) {
  const location = useLocation();
  const [displayLocation, setDisplayLocation] = useState(location);
  const [stage, setStage] = useState("enter");
  const containerRef = useRef(null);

  const isSameRoute =
    location.pathname === displayLocation.pathname && location.search === displayLocation.search;

  useEffect(() => {
    if (!isSameRoute) {
      setStage("leave");
    }
  }, [isSameRoute]);

  useLayoutEffect(() => {
    const node = containerRef.current;
    if (!node) {
      return undefined;
    }

    if (!isSameRoute && stage === "enter") {
      return undefined;
    }

    let tween = null;
    const hasSharedTransition = Boolean(location.state?.sharedTransition);

    if (stage === "leave") {
      tween = gsap.to(node, {
        autoAlpha: 0,
        y: hasSharedTransition ? 8 : 16,
        filter: hasSharedTransition ? "blur(0px)" : "blur(3px)",
        duration: hasSharedTransition ? 0.14 : 0.26,
        ease: "power2.in",
        onComplete: () => {
          window.scrollTo({ top: 0, behavior: "auto" });
          setDisplayLocation(location);
          setStage("enter");
        }
      });
    } else {
      tween = gsap.fromTo(
        node,
        {
          autoAlpha: 0,
          y: hasSharedTransition ? 8 : 16,
          filter: hasSharedTransition ? "blur(0px)" : "blur(3px)"
        },
        {
          autoAlpha: 1,
          y: 0,
          filter: "blur(0px)",
          duration: hasSharedTransition ? 0.32 : 0.4,
          ease: "power3.out"
        }
      );
    }

    return () => {
      tween?.kill();
    };
  }, [isSameRoute, location, stage]);

  const content = isValidElement(children)
    ? cloneElement(children, { location: displayLocation })
    : children;

  return (
    <div ref={containerRef} className="route-transition">
      {content}
    </div>
  );
}
