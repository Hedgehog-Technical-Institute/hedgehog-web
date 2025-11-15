// src/pages/layouts/ARC25Layout.tsx
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
    <div className="relative w-full aspect-[16/9] overflow-hidden  border-4 border-light rounded-b-4xl">
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
const ARC25Layout = ({ data }: { data: EventModel }) => {
  const { eventId } = useParams();

  const playable = data.games.filter((g) => Boolean(g.isPlayable && g.urls?.booth));
  const comingSoon = data.games.filter((g) => !g.isPlayable || !g.urls?.booth);

  const yt = toEmbedUrl(data.direct || "");

  return (
    <section
      className="px-4 py-8 font-arc bg-light min-h-screen relative "
      style={{
        backgroundImage: `url('/assets/arcindie/arc25-bg.png')`,
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        zIndex: 0,
      }}
    >
      <div className="max-w-6xl mx-auto flex flex-col gap-12 text-charcoal">
        {/* Hero Section */}
        <header className="flex flex-col gap-4">
            <div className="mx-15 text-center px-1 bg-light border-4 border-arc rounded-b-4xl">
          <div className="overflow-hidden mx-50 mt-5 mb-10 content-center text-center">
            <img
              src={data.media?.[0] ?? ""}
              alt="ArcIndie"
              className="w-full h-auto"
            />
          </div>
            <h1 className="text-4xl mt-5 font-bold">{data.name}</h1>
            <h2 className="text-xl my-5 mx-2 font-spacegrotesk font-black">{data.description}</h2>
          </div>
        </header>

        {/* Direct */}
        {yt && (
          <section className=" overflow-hidden text-center p-6 bg-arc border-4 border-light mx-auto w-full rounded-bl-4xl rounded-tr-4xl">
            <h2 className="text-2xl font-bold text-light mb-6">Tune into the Current!</h2>
            <ResponsiveYouTube src={yt} title="ArcIndie Current" />
          </section>
        )}

        {/* PLAYABLE */}
        <section className="pt-8">
          <h2 className="text-center text-4xl font-bold mb-8 px-6 py-2 bg-cgs border-4 border-arc rounded-b-4xl ">
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
          <h3 className="text-center text-3xl font-bold mb-8 px-6 py-2 bg-cgs border-4 border-arc rounded-b-4xl">
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

export default ARC25Layout;

/* ---------- helpers / subs ---------- */

const CardFlex = ({ children }: { children: React.ReactNode }) => (
  <div className="flex flex-wrap gap-8 justify-center">{children}</div>
);

const GameCard = ({ game, eventId }: { game: Game; eventId: string }) => (
  <article
    className="
      flex flex-col gap-4 p-5 bg-light 
      transition-transform duration-200 hover:scale-[1.02]
      basis-full sm:basis-[calc(50%-1rem)] lg:basis-[calc(33.333%-1.333rem)] text-center
      font-spacegrotesk border-4 border-arc rounded-bl-4xl rounded-tr-4xl
    "
  >
    <Link
      to={`/events/${eventId}/${game.slug}`}
      className="block overflow-hidden flex-shrink-0 mx-auto hover:scale-[1.02] border-arc border-4 transition"
    >
      <div className="w-full aspect-square grid place-items-center bg-black ">
        <img
          src={game.thumbnail}
          alt={`${game.title} thumbnail`}
          className="min-w-full min-h-full object-scale-down "
        />
      </div>
    </Link>

    <h3 className="text-xl font-black flex-grow-0 mt-2 px-6 bg-charcoal  text-light rounded-bl-4xl rounded-tr-4xl">
      <Link to={`/events/${eventId}/${game.slug}`} className="transition-colors">
        {game.title.toUpperCase()}
      </Link>
    </h3>

    <p className="text-xl font-spacegrotesk text-charcoal flex-grow">{game.brief}</p>

    <div className="mt-auto pt-3 flex flex-wrap gap-2 justify-center flex-shrink-0">
      <Link
        to={`/events/${eventId}/${game.slug}`}
        className="inline-block text-xl text-center font-semibold px-6 py-3 bg-arc text-light rounded-b-2xl hover:bg-cgs hover:text-charcoal transition my-3 mx-3 hover:scale-[1.08]"
      >
        LEARN MORE
      </Link>
    </div>
  </article>
);
