// src/pages/Game.tsx
import { useParams, Link } from "react-router-dom";
import { eventDataMap } from "../data/event-data";
import PageNotFound from "./404";
import MediaCarousel, { type MediaItem } from "../components/MediaCarousel";
import type { GameUrls } from "../lib/models";

function labelFor(key: string) {
  switch (key) {
    case "booth": return "Visit the Booth";
    case "download": return "Download";
    case "itchio": return "itch.io";
    case "gamejolt": return "Game Jolt";
    case "steam": return "Steam";
    case "steamwishlist": return "Wishlist on Steam";
    case "roblox": return "Roblox";
    case "website": return "Website";
    case "youtube": return "YouTube";
    case "discord": return "Discord";
    case "twitter": return "Twitter";
    case "bluesky": return "Bluesky";
    case "portfolio": return "Portfolio";
    case "gamebanana": return "GameBanana";
    default: return key;
  }
}

export default function Game() {
  const { eventId, gameId } = useParams();
  const entry = eventDataMap[eventId as keyof typeof eventDataMap];
  const game = entry?.data?.games?.find((g) => g.slug === gameId);
  if (!entry || !game) return <PageNotFound />;

  const media: MediaItem[] = [
    ...(game.trailers ?? []).map((t) => ({ type: "video", url: t }) as const),
    ...(game.screenshots ?? []).map((s) => ({ type: "image", url: s }) as const),
  ];

  const primaryLogo = Array.isArray(game.logo) && game.logo.length ? game.logo[0] : undefined;
  // const primaryIcon = Array.isArray(game.icon) && game.icon.length ? game.icon[0] : undefined;

  const preferredOrder = [
    "booth","download","itchio","gamejolt","steam","steamwishlist","roblox","website",
    ,"youtube","discord","twitter","bluesky","portfolio","gamebanana",
  ] as const;

  const links = preferredOrder
    .map((k) => ({ key: k as keyof GameUrls, url: game.urls?.[k as keyof GameUrls] ?? undefined }))
    .filter(({ url }) => !!url) as { key: string; url: string }[];

  return (
    <section className="min-h-screen bg-light text-charcoal px-4 py-10">
      <div className="max-w-6xl mx-auto">
        <p className="mb-4">
          <Link to={`/events/${eventId}`} className="text-charcoal/80 hover:text-ylw transition underline underline-offset-4">
            ← Back to {entry.data.name}
          </Link>
        </p>

        <div className="flex flex-col md:flex-row gap-10 items-stretch">
          {/* RIGHT (first on mobile) */}
          <aside className="order-1 lg:order-2 space-y-4 md:w-1/2">
            {primaryLogo ? (
              <img
                src={primaryLogo}
                alt={`${game.title} logo`}
                className="w-full p-4 object-contain"
              />
            ) : (
              <h1 className="text-4xl font-bold font-spacegrotesk text-center">{game.title}</h1>
            )}

            {game.authors && (
              <p className="text-2xl font-black text-center">
                {Object.entries(game.authors)
                  .map(([role, name]) =>
                    role.toLowerCase() === "team" ? `By: ${name}` : `${role}: ${name}`
                  )
                  .join(" • ")}
              </p>
            )}

            {game.brief && (
              <p className="text-base lg:text-lg opacity-90 text-center ">{game.brief}</p>
            )}

            {links.length ? (
              <div className="flex flex-col gap-2 items-center ">
                {links.map(({ key, url }) => (
                  <a
                    key={key}
                    href={url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-block text-xl text-center font-semibold px-6 py-3 bg-ylw text-charcoal rounded-full custom-shadow-2 hover:bg-cgs hover:text-charcoal transition my-3 mx-3"
                  >
                    {labelFor(key)}
                  </a>
                ))}
              </div>
            ) : null}

            <div className="rounded-2xl p-4 bg-charcoal text-light">
              <h3 className="text-xl font-bold font-spacegrotesk mb-2">Details</h3>
              <dl className="space-y-1 text-sm">
                <Row label="Version" value={game.version || "—"} />
                <Row label="Platforms" value={game.platforms?.join(", ") || "—"} />
                {/* <Row label="Featured" value={game.isFeatured ? "Yes" : "No"} /> */}
                <Row label="Booth" value={game.isBoothAvailable ? "Yes" : "No"} />
                <Row label="Playable" value={game.isPlayable ? "Yes" : "No"} />
              </dl>
              {game.tags?.length ? (
                <div className="mt-3 flex flex-wrap gap-2">
                  {game.tags.map((t) => (
                    <span key={t} className="px-3 py-1 rounded-full bg-white/10 text-xs font-medium">
                      {t}
                    </span>
                  ))}
                </div>
              ) : null}
            </div>
          </aside>

          {/* LEFT (second on mobile): media → description */}
          <div className="order-2 lg:order-1 md:w-1/2">
            <MediaCarousel media={media} />

            {game.description?.length ? (
              <section className="mt-8">
                <h2 className="text-2xl font-bold font-spacegrotesk mb-3">About</h2>
                <div className="space-y-3 leading-relaxed">
                  {game.description.map((p, i) => <p key={i}>{p}</p>)}
                </div>
              </section>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between gap-3">
      <dt className="opacity-70">{label}</dt>
      <dd className="text-right">{value}</dd>
    </div>
  );
}