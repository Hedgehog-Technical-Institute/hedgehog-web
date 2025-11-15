// src/data/events/2025/cgs/StratoFreaks1Ultimate.ts
import { Game, type GameUrls } from "../../../../lib/models";
import { sortByNumericSuffix } from "../../../../lib/asset-helpers";

// Auto-import: hero, icon, logo, screenshots, trailers

const heroGlob = import.meta.glob<string>("../../../../assets/events/2025/arcindie/StratoFreaks1Ultimate/hero*.*", { eager: true, query: "?url", import: "default" });
const hero = Object.values(heroGlob);
const iconGlob = import.meta.glob<string>("../../../../assets/events/2025/arcindie/StratoFreaks1Ultimate/icon.*", { eager: true, query: "?url", import: "default" });
const icon = Object.values(iconGlob);
const logoGlob = import.meta.glob<string>("../../../../assets/events/2025/arcindie/StratoFreaks1Ultimate/logo.*", { eager: true, query: "?url", import: "default" });
const logo = Object.values(logoGlob);

const screenshotsGlob = import.meta.glob<string>(
  "../../../../assets/events/2025/arcindie/StratoFreaks1Ultimate/ss*.*",
  { eager: true, query: "?url", import: "default" }
);
const screenshots = sortByNumericSuffix(Object.values(screenshotsGlob));

const trailersGlob = import.meta.glob<string>(
  "../../../../assets/events/2025/arcindie/StratoFreaks1Ultimate/trailer*.*",
  { eager: true, query: "?url", import: "default" }
);
const trailers = Object.values(trailersGlob);


const thumbnail =
  icon[0] ||
  logo[0] ||
  hero[0] ||
  screenshots[0] ||
  "";


const brief: string = `They're super. They're freaky! And they star in the secret best platformer this year!`;
const description: string[] = [
  `Super Freaks 1 Ultimate Edition was featured at SAGE 2022 - 2025, where it was one of the most talked about games of the event. Many games at SAGE had Super Freaks cameos!`,
  `Super Freaks 1 Ultimate Edition is a 2D platformer featuring single player and up to four player drop-in/drop-out cooperative gameplay.`,
];
const urls: GameUrls = {
  booth: `https://hedgehogtechnicalinstitute.com/forum/viewtopic.php?t=207&sid=ec392933d1dff13ce14a938f65819794`,
  steam: null,
  steamwishlist: null,
  gamejolt: null,
  itchio: null,
  gamebanana: null,
  website: null,
  portfolio: null,
  youtube: null,
  discord: null,
  twitter: null,
  bluesky: null,
  download: null,
  roblox: null
};
const tags: string[] = [
  "side scroller",
  "casual"
]

// EXPORT TIME !!! (<- sonic megamix reference :D)

export const StratoFreaks1Ultimate = new Game(
  "stratofreaks1ultimate",            // slug
  "Strato Freaks 1 Ultimate Edition Turbo",        // title
  brief,                        // brief
  {'By':'Mr.Freaks'},    // authors
  description,                  // description
  thumbnail,                    // thumbnail
  trailers,                     // trailers
  screenshots,                  // screenshots
  hero,                         // hero
  logo,                         // logo
  icon,                         // icon
  ["Windows, Linux"],                  // platforms
  tags,                         // tags
  "ArcIndie Build",                      // version
  urls,                         // URLS
  false,                        // Is it featured?
  true,                         // Is there a Booth in the forums?
  true,                         // Is it playable?
)