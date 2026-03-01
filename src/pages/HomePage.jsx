import { useLayoutEffect, useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { gsap } from "gsap";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { characters } from "@/features/characters/data/characters";
import { HomeIntroSection } from "@/features/characters/components/home/HomeIntroSection";
import { CharacterSelectionSection } from "@/features/characters/components/home/CharacterSelectionSection";
import { SelectedCharacterSection } from "@/features/characters/components/home/SelectedCharacterSection";
import { buildSharedTransitionPayload } from "@/features/characters/utils/sharedTransition";

export function HomePage() {
  const [selectedId, setSelectedId] = useState(characters[0].id);
  const navigate = useNavigate();
  const pageRef = useRef(null);

  const selectedCharacter = useMemo(
    () => characters.find((character) => character.id === selectedId) ?? characters[0],
    [selectedId]
  );

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const homeBlocks = gsap.utils.toArray(".home-anim");
      const cards = gsap.utils.toArray(".home-card-anim");

      gsap.set(homeBlocks, { autoAlpha: 0, y: 24 });
      gsap.set(cards, { autoAlpha: 0, y: 20, scale: 0.96 });

      gsap
        .timeline({ defaults: { ease: "power3.out" } })
        .to(homeBlocks, { autoAlpha: 1, y: 0, duration: 0.62, stagger: 0.08 })
        .to(cards, { autoAlpha: 1, y: 0, scale: 1, duration: 0.42, stagger: 0.04 }, "-=0.28");
    }, pageRef);

    return () => ctx.revert();
  }, []);

  const handleCardSelection = (characterId) => {
    setSelectedId(characterId);

    if (window.innerWidth < 450) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleGoToHero = (characterId, sourceElement) => {
    const character = characters.find((entry) => entry.id === characterId);
    const sharedTransition = buildSharedTransitionPayload(sourceElement, character?.portraitImage);

    navigate(`/heroi/${characterId}`, {
      state: sharedTransition
        ? {
            sharedTransition: {
              ...sharedTransition,
              heroId: characterId
            }
          }
        : undefined
    });
  };

  return (
    <div ref={pageRef} className="page-content">
      <SiteHeader />
      <HomeIntroSection />

      <main className="selecao-de-personagens">
        <CharacterSelectionSection
          characters={characters}
          selectedId={selectedId}
          onSelectCharacter={handleCardSelection}
          onOpenCharacter={handleGoToHero}
        />
        <SelectedCharacterSection character={selectedCharacter} onOpenCharacter={handleGoToHero} />
      </main>
    </div>
  );
}
