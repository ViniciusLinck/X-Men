import { HeroMetaSection } from "@/features/characters/components/hero/HeroMetaSection";

export function MarvelIntelSection({ character, status, loading, error, data, attributionText }) {
  const marvelDescription = data?.description?.trim();
  const thumbnailUrl = data?.thumbnail
    ? `${data.thumbnail.path}.${data.thumbnail.extension}`.replace("http://", "https://")
    : null;

  return (
    <section className="hero-block hero-marvel hero-anim">
      <h3>Intel da API Marvel</h3>

      {status === "disabled" && (
        <p className="api-hint">
          Defina <code>VITE_MARVEL_PUBLIC_KEY</code> no arquivo <code>.env</code> para carregar
          dados oficiais da Marvel nesta tela.
        </p>
      )}

      {status === "ready" && loading && <p className="api-hint">Carregando dados oficiais...</p>}

      {status === "ready" && error && (
        <p className="api-hint">
          Nao foi possivel carregar a API agora. Erro: <span>{error}</span>
        </p>
      )}

      {status === "ready" && !loading && !error && data && (
        <div className="marvel-grid">
          <div className="marvel-overview">
            {thumbnailUrl && <img src={thumbnailUrl} alt={`Arte oficial de ${character.name}`} />}
            <div>
              <p>
                <strong>Nome oficial:</strong> {data.name || character.marvelName}
              </p>
              <p>
                <strong>Ultima atualizacao:</strong> {data.modified || "Nao informado"}
              </p>
              <p>
                <strong>Descricao:</strong>{" "}
                {marvelDescription || "A Marvel nao retornou descricao para este personagem."}
              </p>
              {Array.isArray(data.urls) && data.urls.length > 0 && (
                <p className="marvel-links">
                  {data.urls.slice(0, 3).map((urlEntry) => (
                    <a key={urlEntry.url} href={urlEntry.url} target="_blank" rel="noreferrer">
                      {urlEntry.type}
                    </a>
                  ))}
                </p>
              )}
            </div>
          </div>

          <div className="marvel-lists">
            <HeroMetaSection
              title="Comics"
              items={(data.comics?.items || []).slice(0, 8).map((item) => item.name)}
            />
            <HeroMetaSection
              title="Series"
              items={(data.series?.items || []).slice(0, 8).map((item) => item.name)}
            />
            <HeroMetaSection
              title="Eventos"
              items={(data.events?.items || []).slice(0, 8).map((item) => item.name)}
            />
          </div>
        </div>
      )}

      {status === "ready" && !loading && !error && !data && (
        <p className="api-hint">A API da Marvel nao retornou este personagem pelo nome consultado agora.</p>
      )}

      {attributionText && <p className="api-attribution">{attributionText}</p>}
    </section>
  );
}
