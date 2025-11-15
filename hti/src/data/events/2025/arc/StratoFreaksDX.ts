// src/data/events/2025/cgs/StratoFreaks.ts
import { Game, type GameUrls } from "../../../../lib/models";
import { sortByNumericSuffix } from "../../../../lib/asset-helpers";

// Auto-import: hero, icon, logo, screenshots, trailers

const heroGlob = import.meta.glob<string>("../../../../assets/events/2025/arcindie/StratoFreaks/hero*.*", { eager: true, query: "?url", import: "default" });
const hero = Object.values(heroGlob);
const iconGlob = import.meta.glob<string>("../../../../assets/events/2025/arcindie/StratoFreaks/icon.*", { eager: true, query: "?url", import: "default" });
const icon = Object.values(iconGlob);
const logoGlob = import.meta.glob<string>("../../../../assets/events/2025/arcindie/StratoFreaks/logo.*", { eager: true, query: "?url", import: "default" });
const logo = Object.values(logoGlob);

const screenshotsGlob = import.meta.glob<string>(
  "../../../../assets/events/2025/arcindie/StratoFreaks/ss*.*",
  { eager: true, query: "?url", import: "default" }
);
const screenshots = sortByNumericSuffix(Object.values(screenshotsGlob));

const trailersGlob = import.meta.glob<string>(
  "../../../../assets/events/2025/arcindie/StratoFreaks/trailer*.*",
  { eager: true, query: "?url", import: "default" }
);
const trailers = Object.values(trailersGlob);


const thumbnail =
  icon[0] ||
  logo[0] ||
  hero[0] ||
  screenshots[0] ||
  "";


const brief: string = `"You can't get away! The Powerful Monkey Council members will be my ultimate power source!" - Sticky Funnybone`;
const description: string[] = [
  `Strato Freaks DX is a not-so-classic style shoot-'em-up, loosely based on classic games like Fantasy Zone, packed full of modern score attack elements. Fly around each looping level, collect the magic monkeys, rack up your combo, and beat the boss in a frantic winner-takes-all slugfest in the sky!`,
  ``,
  `Features:`,
  `- 8 different planets, each crazier than the last!`,
  `- Multiple game modes such as Turbo, Sticky Survival, and Hi-Speed Havoc.`,
  `- A wide cast of playable characters spanning the entire Super Freaks series.`,
  `- A wide array of powerups to raze those robots!`,
  `Can YOU save the Council and kick Sticky's skeletal behind before he takes over the world?`
];
const urls: GameUrls = {
  booth: `https://hedgehogtechnicalinstitute.com/forum/viewtopic.php?t=211&sid=ec392933d1dff13ce14a938f65819794`,
  steam: null,
  steamwishlist: 'https://store.steampowered.com/app/3957840/Strato_Freaks_DX/',
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
  "flight",
  "pve",
  "action",
  "casual",
]

// EXPORT TIME !!! (<- sonic megamix reference :D)

export const StratoFreaks = new Game(
  "stratofreaksdx",            // slug
  "Strato Freaks DX",        // title
  brief,                        // brief
  {'Team':'Team Ulminac'},    // authors
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