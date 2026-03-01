import { useLayoutEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { gsap } from "gsap";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { characters } from "@/features/characters/data/characters";

export function NotFoundPage() {
  const navigate = useNavigate();
  const pageRef = useRef(null);
  // Options: "light" | "medium" | "aggressive"
  const glitchIntensity = "medium";

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const blocks = gsap.utils.toArray(".notfound-anim");
      gsap.set(blocks, { autoAlpha: 0, y: 26 });
      gsap.to(blocks, {
        autoAlpha: 1,
        y: 0,
        duration: 0.58,
        ease: "power3.out",
        stagger: 0.08
      });
    }, pageRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={pageRef} className="page-content not-found-page">
      <SiteHeader />

      <main className={`not-found-shell notfound-anim glitch-${glitchIntensity}`}>
        <div className="not-found-grid-overlay" aria-hidden="true" />

        <div className="not-found-code" aria-label="Erro 404">
          <span className="not-found-code-base">404</span>
          <span className="not-found-code-layer not-found-code-layer-cyan" aria-hidden="true">
            404
          </span>
          <span className="not-found-code-layer not-found-code-layer-red" aria-hidden="true">
            404
          </span>
          <span className="not-found-code-scan" aria-hidden="true" />
        </div>
        <p className="not-found-kicker">ALERTA CEREBRO // ROTA INVALIDA</p>
        <h1>A coordenada mutante solicitada nao foi encontrada.</h1>
        <p className="not-found-text">
          O endereco acessado nao existe neste universo. Retorne para a base dos X-Men ou abra um
          heroi para continuar a navegacao.
        </p>

        <div className="not-found-actions">
          <Link to="/" className="btn-solid">
            Voltar para Home
          </Link>
          <button type="button" className="btn-outline" onClick={() => navigate(-1)}>
            Voltar pagina anterior
          </button>
        </div>

        <section className="not-found-links notfound-anim">
          <h2>Atalhos rapidos</h2>
          <ul>
            {characters.slice(0, 4).map((character) => (
              <li key={`nf-${character.id}`}>
                <Link to={`/heroi/${character.id}`}>{character.name}</Link>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
}
