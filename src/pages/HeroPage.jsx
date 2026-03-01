import { useLayoutEffect, useRef } from "react";
import { Navigate, useLocation, useParams } from "react-router-dom";
import { gsap } from "gsap";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { getCharacterById } from "@/features/characters/data/characters";
import { HeroBanner } from "@/features/characters/components/hero/HeroBanner";
import { HeroDetailsGrid } from "@/features/characters/components/hero/HeroDetailsGrid";
import { MarvelIntelSection } from "@/features/characters/components/hero/MarvelIntelSection";
import { useMarvelCharacter } from "@/hooks/useMarvelCharacter";

export function HeroPage() {
  const { heroId } = useParams();
  const location = useLocation();
  const pageRef = useRef(null);
  const heroImageRef = useRef(null);
  const character = getCharacterById(heroId);
  const { status, loading, error, data, attributionText } = useMarvelCharacter(character?.marvelName);

  useLayoutEffect(() => {
    const shared = location.state?.sharedTransition;
    const targetImage = heroImageRef.current;

    if (!character || !shared || shared.heroId !== character.id || !targetImage) {
      return undefined;
    }

    const start = shared.rect;
    if (!start?.width || !start?.height) {
      return undefined;
    }

    const end = targetImage.getBoundingClientRect();
    if (!end.width || !end.height) {
      return undefined;
    }

    const clone = document.createElement("img");
    clone.className = "shared-transition-clone";
    clone.src = shared.imageSrc || character.portraitImage;

    Object.assign(clone.style, {
      left: `${start.left}px`,
      top: `${start.top}px`,
      width: `${start.width}px`,
      height: `${start.height}px`,
      borderRadius: shared.borderRadius || "8px"
    });

    document.body.appendChild(clone);

    const targetRadius = window.getComputedStyle(targetImage).borderRadius || "16px";
    gsap.set(targetImage, { autoAlpha: 0 });

    const timeline = gsap.timeline({
      defaults: { ease: "power3.inOut" },
      onComplete: () => {
        clone.remove();
        gsap.set(targetImage, { autoAlpha: 1 });
      }
    });

    timeline.to(clone, {
      left: end.left,
      top: end.top,
      width: end.width,
      height: end.height,
      borderRadius: targetRadius,
      duration: 0.6
    });

    return () => {
      timeline.kill();
      clone.remove();
      gsap.set(targetImage, { autoAlpha: 1 });
    };
  }, [character, location.key]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const targets = gsap.utils.toArray(".hero-anim");
      gsap.set(targets, { autoAlpha: 0, y: 24 });
      gsap.to(targets, {
        autoAlpha: 1,
        y: 0,
        duration: 0.62,
        ease: "power3.out",
        stagger: 0.08
      });
    }, pageRef);

    return () => ctx.revert();
  }, []);

  if (!character) {
    return <Navigate to="/" replace />;
  }

  return (
    <div ref={pageRef} className="page-content">
      <SiteHeader />

      <main className="hero-page">
        <HeroBanner character={character} imageRef={heroImageRef} />
        <HeroDetailsGrid character={character} />
        <MarvelIntelSection
          character={character}
          status={status}
          loading={loading}
          error={error}
          data={data}
          attributionText={attributionText}
        />
      </main>
    </div>
  );
}
