// src/pages/Game.tsx
import { useParams } from "react-router-dom";
import { eventDataMap } from "../data/event-data";
import PageNotFound from "./404";

function isYouTube(url: string) {
  return /youtube\.com|youtu\.be/.test(url);
}

export default function Game() {
  const { eventId, gameId } = useParams();
  const event = eventDataMap[eventId as keyof typeof eventDataMap]; // cast eventId to the map's key union
  const game = event?.data?.games?.find((g: any) => g.slug === gameId);

  if (!event || !game) return <PageNotFound />;

  return (
    <div style={{ padding: 16 }}>
      <h1>{game.title}</h1>
      <p><strong>Slug:</strong> {game.slug}</p>
      <p><strong>ID:</strong> {game.id}</p>
      <p><strong>Brief:</strong> {game.brief}</p>
      <p><strong>Version:</strong> {game.version}</p>
      <p><strong>Platforms:</strong> {game.platforms?.join(", ")}</p>
      <p><strong>Tags:</strong> {game.tags?.join(", ")}</p>
      <p><strong>Featured:</strong> {String(game.isFeatured)}</p>
      <p><strong>Booth Available:</strong> {String(game.isBoothAvailable)}</p>
      <p><strong>Playable:</strong> {String(game.isPlayable)}</p>

      {game.authors && (
        <section>
          <h2>Authors</h2>
          <ul>
            {Object.entries(game.authors).map(([role, name]: [string, string]) => (
              <li key={role}><strong>{role}:</strong> {name}</li>
            ))}
          </ul>
        </section>
      )}

      {game.thumbnail && (
        <section>
          <h2>Thumbnail</h2>
          <img src={game.thumbnail} alt={`${game.title} thumbnail`} style={{ maxWidth: 480 }} />
        </section>
      )}

      {Array.isArray(game.logo) && game.logo.length > 0 && (
        <section>
          <h2>Logo (all)</h2>
          {game.logo.map((u: string, i: number) => (
            <img key={i} src={u} alt={`logo-${i}`} style={{ maxWidth: 320, display: "block", marginBottom: 8 }} />
          ))}
        </section>
      )}

      {Array.isArray(game.icon) && game.icon.length > 0 && (
        <section>
          <h2>Icon (all)</h2>
          {game.icon.map((u: string, i: number) => (
            <img key={i} src={u} alt={`icon-${i}`} style={{ maxWidth: 160, display: "block", marginBottom: 8 }} />
          ))}
        </section>
      )}

      {Array.isArray(game.hero) && game.hero.length > 0 && (
        <section>
          <h2>Hero (all)</h2>
          {game.hero.map((u: string, i: number) => (
            <img key={i} src={u} alt={`icon-${i}`} style={{ maxWidth: 160, display: "block", marginBottom: 8 }} />
          ))}
        </section>
      )}

      {game.trailers?.length ? (
        <section>
          <h2>Trailers</h2>
          {game.trailers.map((t: string, i: number) =>
            isYouTube(t) ? (
              <div key={i} style={{ aspectRatio: "16/9", maxWidth: 720 }}>
                <iframe
                  src={t.replace("watch?v=", "embed/")}
                  title={`trailer-${i}`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  style={{ width: "100%", height: "100%", border: 0 }}
                />
              </div>
            ) : (
              <video key={i} src={t} controls style={{ maxWidth: 720, display: "block", marginBottom: 8 }} />
            )
          )}
        </section>
      ) : null}

      {game.screenshots?.length ? (
        <section>
          <h2>Screenshots</h2>
          <div style={{ display: "grid", gap: 8, gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))" }}>
            {game.screenshots.map((s: string, i: number) => (
              <img key={i} src={s} alt={`screenshot-${i}`} style={{ width: "100%" }} />
            ))}
          </div>
        </section>
      ) : null}

      {game.description?.length ? (
        <section>
          <h2>Description</h2>
          {game.description.map((p: string, i: number) => <p key={i}>{p}</p>)}
        </section>
      ) : null}

      {game.urls && Object.values(game.urls).some(Boolean) ? (
        <section>
          <h2>Links</h2>
          <ul>
            {Object.entries(game.urls).map(([k, v]) => v ? (
              <li key={k}><a href={v as string} target="_blank" rel="noreferrer">{k}</a></li>
            ) : null)}
          </ul>
        </section>
      ) : null}
    </div>
  );
}
