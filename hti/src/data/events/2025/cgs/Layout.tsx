// src/pages/layouts/CGS25Layout.tsx
import { Link, useParams } from "react-router-dom";
import type { Event as EventModel, Game } from "../../../../lib/models";
import React from "react";

/** Robust YT URL -> embed URL */
// 1) cleaner embed URL with params
const toEmbedUrl = (src?: string | null): string | null => {
  if (!src) return null;

  const addParams = (base: string) => {
    const url = new URL(base);
    // keep existing params, add nice defaults
    if (!url.searchParams.has("rel")) url.searchParams.set("rel", "0");
    if (!url.searchParams.has("modestbranding")) url.searchParams.set("modestbranding", "1");
    if (!url.searchParams.has("playsinline")) url.searchParams.set("playsinline", "1");
    return url.toString();
  };

  try {
    const u = new URL(src);

    if (u.hostname === "youtu.be") {
      const id = u.pathname.replace("/", "");
      return id ? addParams(`https://www.youtube.com/embed/${id}`) : null;
    }

    if (u.hostname.includes("youtube.com")) {
      const v = u.searchParams.get("v");
      if (v) return addParams(`https://www.youtube.com/embed/${v}`);

      const shorts = u.pathname.match(/^\/shorts\/([A-Za-z0-9_-]+)/);
      if (shorts?.[1]) return addParams(`https://www.youtube.com/embed/${shorts[1]}`);

      if (u.pathname.startsWith("/embed/")) return addParams(src);
    }
  } catch {
    const short = src.match(/https?:\/\/youtu\.be\/([A-Za-z0-9_-]+)/);
    if (short) return `https://www.youtube.com/embed/${short[1]}?rel=0&modestbranding=1&playsinline=1`;
    const watch = src.match(/[?&]v=([A-Za-z0-9_-]+)/);
    if (watch) return `https://www.youtube.com/embed/${watch[1]}?rel=0&modestbranding=1&playsinline=1`;
    if (/youtube\.com\/embed\//.test(src)) {
      // append if missing
      return src.includes("?") ? `${src}&rel=0&modestbranding=1&playsinline=1`
                               : `${src}?rel=0&modestbranding=1&playsinline=1`;
    }
  }

  return null;
};

/** Fully responsive embed with intrinsic 16:9 ratio */
const ResponsiveYouTube = ({ src, title }: { src: string; title?: string }) => (
  <div className="w-full max-w-5xl mx-auto">
    <div className="relative w-full aspect-[16/9] overflow-hidden rounded-xl border-6 border-light">
      <iframe
        src={src}
        title={title ?? "YouTube video"}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        loading="lazy"
        referrerPolicy="strict-origin-when-cross-origin"
        className="absolute inset-0 h-full w-full border-0"
      />
    </div>
  </div>
);

// The main layout component
const CGS25Layout = ({ data }: { data: EventModel }) => {
  const { eventId } = useParams();

  const playable = data.games.filter((g) => Boolean(g.isPlayable && g.urls?.booth));
  const comingSoon = data.games.filter((g) => !g.isPlayable || !g.urls?.booth);

  const yt = toEmbedUrl(data.direct || "");

  return (
    <section
      className="px-4 py-8 font-happiness bg-charcoal text-light min-h-screen relative"
      style={{
        backgroundImage: `url('/assets/cgs/cgs25-bg.png')`,
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        zIndex: 0,
      }}
    >
      <div className="max-w-6xl mx-auto flex flex-col gap-12">
        {/* Hero Section */}
        <header className="flex flex-col gap-4">
            <div className="lg:mx-30 text-center px-6 bg-cgs-pink border-6 rounded-xl border-light">
          <div className="overflow-hidden lg:mx-50 mt-5 mb-10 content-center text-center">
            <img
              src={data.media?.[0] ?? ""}
              alt="Stream Schedule"
              className="w-full h-auto"
            />
          </div>
            <h1 className="text-4xl mt-5 font-bold">{data.name}</h1>
            <h2 className="text-xl my-5">{data.description}</h2>
          </div>
        </header>

        {/* Direct */}
        {yt && (
          <section className="rounded-xl overflow-hidden text-center p-6 bg-cgs-orange border-6 border-light mx-auto w-full">
            <h2 className="text-2xl font-bold mb-6">Watch the Direct!</h2>
            <ResponsiveYouTube src={yt} title="CGS Direct" />
          </section>
        )}

        {/* PLAYABLE */}
        <section className="pt-8">
          <h2 className="text-center text-4xl font-bold mb-8 px-6 py-2 bg-cgs-pink border-6 rounded-xl border-light">
            Booths
          </h2>
          <CardFlex>
            {playable.map((g) => (
              <GameCard key={g.id} game={g} eventId={eventId || ""} />
            ))}
          </CardFlex>
        </section>

        {/* COMING SOON */}
        <section className="pt-8">
          <h3 className="text-center text-3xl font-bold mb-8 px-6 py-2 bg-cgs-pink border-6 rounded-xl border-light">
            Coming Soon!
          </h3>
          <CardFlex>
            {comingSoon.map((g) => (
              <GameCard key={g.id} game={g} eventId={eventId || ""} />
            ))}
          </CardFlex>
        </section>
      </div>
    </section>
  );
};

export default CGS25Layout;

/* ---------- helpers / subs ---------- */

const CardFlex = ({ children }: { children: React.ReactNode }) => (
  <div className="flex flex-wrap gap-8 justify-center">{children}</div>
);

const GameCard = ({ game, eventId }: { game: Game; eventId: string }) => (
  <article
    className="
      flex flex-col gap-4 p-5 rounded-xl bg-cgs 
      transition-transform duration-200 hover:scale-[1.02]
      basis-full sm:basis-[calc(50%-1rem)] lg:basis-[calc(33.333%-1.333rem)] text-center
      font-happiness border-6 border-light
    "
  >
    <Link
      to={`/events/${eventId}/${game.slug}`}
      className="block rounded-xl overflow-hidden flex-shrink-0 max-w-50 mx-auto border-6 border-light"
    >
      <div className="w-full aspect-square grid place-items-center bg-black">
        <img
          src={game.thumbnail}
          alt={`${game.title} thumbnail`}
          className="w-full h-full object-scale-down"
        />
      </div>
    </Link>

    <h3 className="text-xl font-bold flex-grow-0 mt-2 px-6 bg-cgs-pink border-6 rounded-xl border-light">
      <Link to={`/events/${eventId}/${game.slug}`} className="transition-colors">
        {game.title}
      </Link>
    </h3>

    <p className="text-xl font-happiness text-charcoal flex-grow">{game.brief}</p>

    <div className="mt-auto pt-3 flex flex-wrap gap-2 justify-center flex-shrink-0">
      <Link
        to={`/events/${eventId}/${game.slug}`}
        className="inline-block text-xl text-center font-semibold px-6 py-3 bg-cgs-orange text-light rounded-xl border-6 border-light hover:bg-cgs-purple hover:text-cgs-ylw transition my-3 mx-3"
      >
        Learn More
      </Link>
    </div>
  </article>
);
