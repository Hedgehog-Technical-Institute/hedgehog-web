import { useEffect, useMemo, useRef, useState } from "react";

export type MediaItem =
  | { type: "image"; url: string; alt?: string }
  | { type: "video"; url: string; alt?: string };

type Props = {
  media: MediaItem[];
  className?: string;
  aspectClass?: string; // tailwind aspect, defaults to aspect-video
  fadeMs?: number;      // defaults to 250
  // Thumb sizing
  thumbWidth?: number;  // defaults to 120
  thumbGapPx?: number;  // defaults to 8
};

/**
 * MediaCarousel
 * - Top: main viewer (image or video)
 * - Bottom: horizontal thumbnail belt that never cuts off
 * - Responsive perView based on the belt viewport width (uses ResizeObserver)
 * - Keyboard arrows, autoplay current video, fade transition
 * - Steam-like feel without external libs
 */
export default function MediaCarousel({
  media,
  className = "",
  aspectClass = "aspect-video",
  fadeMs = 250,
  thumbWidth = 120,
  thumbGapPx = 8,
}: Props) {
  const [idx, setIdx] = useState(0);
  const [prevIdx, setPrevIdx] = useState<number | null>(null);
  const [isFading, setIsFading] = useState(false);

  // Thumbnail window state
  const [perView, setPerView] = useState(6);
  const [thumbStart, setThumbStart] = useState(0);

  const beltViewportRef = useRef<HTMLDivElement | null>(null);
  const videoRefs = useRef<Array<HTMLVideoElement | null>>([]);

  const mediaCount = media?.length ?? 0;
  const stepPx = thumbWidth + thumbGapPx; // one thumbnail + gap

  // Clamp helpers
  const clampIdx = (n: number) => (mediaCount ? (n + mediaCount) % mediaCount : 0);
  const clampThumbStart = (n: number, maxStart: number) => {
    if (!mediaCount) return 0;
    return Math.max(0, Math.min(maxStart, n));
  };

  // Derived: max window start so that a full window stays inside the belt
  const maxScrollStart = useMemo(() => {
    if (!mediaCount) return 0;
    return Math.max(0, mediaCount - perView);
  }, [mediaCount, perView]);

  // Compute perView responsively from actual belt viewport width
  useEffect(() => {
    const el = beltViewportRef.current;
    if (!el) return;
    const ro = new ResizeObserver(() => {
      const w = el.clientWidth;
      const canFit = Math.max(1, Math.floor((w + thumbGapPx) / stepPx));
      setPerView(canFit);
      setThumbStart((s) => clampThumbStart(s, Math.max(0, (mediaCount || 0) - canFit)));
    });
    ro.observe(el);
    return () => ro.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mediaCount, stepPx, thumbGapPx]);

  // Keep active index in view
  const ensureThumbInView = (target: number) => {
    setThumbStart((start) => {
      if (target < start) return clampThumbStart(target, maxScrollStart);
      const end = start + perView - 1;
      if (target > end) return clampThumbStart(target - (perView - 1), maxScrollStart);
      return start;
    });
  };

  // Move to slide n with fade
  const to = (n: number) => {
    if (!mediaCount) return;
    const next = clampIdx(n);
    if (next === idx) return;
    setPrevIdx(idx);
    setIdx(next);
    setIsFading(true);
    ensureThumbInView(next);
  };

  // End fade after transition
  useEffect(() => {
    if (!isFading) return;
    const t = window.setTimeout(() => setIsFading(false), fadeMs);
    return () => window.clearTimeout(t);
  }, [isFading, fadeMs]);

  const next = () => to(idx + 1);
  const prev = () => to(idx - 1);

  // Autoplay current video, pause others
  useEffect(() => {
    videoRefs.current.forEach((v, i) => {
      if (!v) return;
      if (i === idx) {
        // Best effort play without throwing
        const p = v.play?.();
        if (p && typeof p.catch === "function") p.catch(() => {});
      } else {
        try { v.pause?.(); } catch {}
        try { v.currentTime = 0; } catch {}
      }
    });
  }, [idx]);

  // Keyboard navigation when component is focused
  const rootRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") next();
      else if (e.key === "ArrowLeft") prev();
    };
    const root = rootRef.current;
    root?.addEventListener("keydown", onKey as any);
    return () => root?.removeEventListener("keydown", onKey as any);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [idx]);

  // Update when media changes
  useEffect(() => {
    if (!mediaCount) return;
    setIdx((i) => Math.min(i, mediaCount - 1));
    setThumbStart((s) => clampThumbStart(s, Math.max(0, mediaCount - perView)));
  }, [mediaCount, perView]);

  if (!media || mediaCount === 0) {
    return (
      <div className={`w-full max-w-full ${aspectClass} grid place-items-center rounded-2xl border border-white/10 bg-black/20 ${className}`}>
        <span className="opacity-60 text-sm">No media</span>
      </div>
    );
  }

  // Rendering helpers
  const renderMedia = (m: MediaItem, i: number, bindRef = false) =>
    m.type === "image" ? (
      <img
        src={m.url}
        alt={m.alt || `media-${i}`}
        className="w-full h-full object-contain"
        draggable={false}
      />
    ) : (
      <video
        ref={bindRef ? (el) => { videoRefs.current[i] = el; } : undefined}
        src={m.url}
        autoPlay={i === idx}
        muted
        playsInline
        controls
        className="w-full h-full"
      />
    );

  const translateX = thumbStart * stepPx;

  const thumbHeight = Math.round((thumbWidth * 9) / 16); // 16:9 preview crop

  return (
    <div
      ref={rootRef}
      className={`w-full max-w-full select-none ${className}`}
      tabIndex={0}
      aria-roledescription="carousel"
    >
      {/* Main viewer */}
      <div className={`relative w-full max-w-full ${aspectClass} rounded-2xl overflow-hidden bg-charcoal`}>
        {/* Prev / Next arrow buttons for main slide */}
        <button
          onClick={prev}
          aria-label="Previous media"
          className="absolute left-2 top-1/2 -translate-y-1/2 z-20 font-black bg-ylw hover:bg-white transition rounded-full w-10 h-10 grid place-items-center"
        >
          ‹
        </button>
        <button
          onClick={next}
          aria-label="Next media"
          className="absolute right-2 top-1/2 -translate-y-1/2 z-20 font-black bg-ylw hover:bg-white transition rounded-full w-10 h-10 grid place-items-center"
        >
          ›
        </button>

        {/* Current slide */}
        <div className="absolute inset-0">
          {renderMedia(media[idx], idx, true)}
        </div>

        {/* Fading previous slide */}
        {prevIdx !== null && isFading && (
          <div
            className="absolute inset-0"
            style={{ opacity: 0, transition: `opacity ${fadeMs}ms ease` }}
            onTransitionEnd={() => setPrevIdx(null)}
          >
            {renderMedia(media[prevIdx], prevIdx)}
          </div>
        )}
      </div>

      {/* Thumbnail belt */}
      {mediaCount > 1 && (
        <div className="mt-2 flex items-center gap-2">
          <button
            onClick={() => setThumbStart((s) => (s === 0 ? maxScrollStart : s - 1))}
            aria-label="Scroll thumbnails left"
            className="shrink-0 rounded-md w-8 h-8 grid place-items-center text-light font-black bg-charcoal hover:bg-ylw hover:text-charcoal transition"
          >
            ‹
          </button>

          <div ref={beltViewportRef} className="relative overflow-hidden flex-1">
            <div
              className="flex items-center"
              style={{
                gap: `${thumbGapPx}px`,
                transform: `translateX(-${translateX}px)`,
                transition: "transform 200ms ease",
                willChange: "transform",
              }}
            >
              {media.map((m, i) => {
                const isActive = i === idx;
                return (
                  <button
                    key={i}
                    onClick={() => {
                      setIdx(i);
                      ensureThumbInView(i);
                    }}
                    className={`shrink-0 rounded-md border-2 ${isActive ? "border-cgs border-3" : "border-white/20"} bg-black/30 focus:outline-none`}
                    style={{ width: thumbWidth, height: thumbHeight }}
                    aria-label={`Go to media ${i + 1}`}
                  >
                    {m.type === "image" ? (
                      <img
                        src={m.url}
                        alt={m.alt || `thumb-${i}`}
                        className="w-full h-full object-cover rounded-[calc(theme(borderRadius.md)-2px)]"
                        draggable={false}
                      />
                    ) : (
                      <div className="w-full h-full grid place-items-center text-[10px] tracking-wide uppercase opacity-80 rounded-[calc(theme(borderRadius.md)-2px)] text-charcoal">
                        TRAILER
                      </div>
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          <button
            onClick={() => setThumbStart((s) => (s >= maxScrollStart ? 0 : s + 1))}
            aria-label="Scroll thumbnails right"
            className="shrink-0 rounded-md w-8 h-8 grid place-items-center text-light font-black bg-charcoal hover:bg-ylw hover:text-charcoal transition"
          >
            ›
          </button>
        </div>
      )}
    </div>
  );
}
