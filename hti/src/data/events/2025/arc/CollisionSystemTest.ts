// src/data/events/2025/cgs/CollisionSystemTest.ts
import { Game, type GameUrls } from "../../../../lib/models";
import { sortByNumericSuffix } from "../../../../lib/asset-helpers";

// Auto-import: hero, icon, logo, screenshots, trailers

const heroGlob = import.meta.glob<string>("../../../../assets/events/2025/arcindie/CollisionSystemTest/hero*.*", { eager: true, query: "?url", import: "default" });
const hero = Object.values(heroGlob);
const iconGlob = import.meta.glob<string>("../../../../assets/events/2025/arcindie/CollisionSystemTest/icon.*", { eager: true, query: "?url", import: "default" });
const icon = Object.values(iconGlob);
const logoGlob = import.meta.glob<string>("../../../../assets/events/2025/arcindie/CollisionSystemTest/logo.*", { eager: true, query: "?url", import: "default" });
const logo = Object.values(logoGlob);

const screenshotsGlob = import.meta.glob<string>(
  "../../../../assets/events/2025/arcindie/CollisionSystemTest/ss*.*",
  { eager: true, query: "?url", import: "default" }
);
const screenshots = sortByNumericSuffix(Object.values(screenshotsGlob));

const trailersGlob = import.meta.glob<string>(
  "../../../../assets/events/2025/arcindie/CollisionSystemTest/trailer*.*",
  { eager: true, query: "?url", import: "default" }
);
const trailers = Object.values(trailersGlob);


const thumbnail =
  icon[0] ||
  logo[0] ||
  hero[0] ||
  screenshots[0] ||
  "";


const brief: string = `⠀⠀　⠀ ⠀　⠀⠀⠀　⠀‌ ⠀⠀　⠀⠀ ⠀⠀　⠀ ⠀　 ⠀⠀　⠀⠀　⠀⠀ ⠀⠀　 ⠀　　⠀　⠀　　 　⠀ ⠀⠀⠀⠀ 　⠀⠀ 　⠀　 ⠀⠀　 　⠀⠀　⠀⠀　⠀　　⠀ 　⠀ ⠀　⠀⠀ ⠀　 ⠀⠀　⠀⠀　⠀⠀ ⠀⠀⠀　　⠀⠀ ⠀⠀　 ⠀　⠀　⠀⠀　⠀　 　⠀⠀　⠀　⠀⠀　⠀⠀ 　⠀ ⠀　⠀　⠀⠀　⠀⠀　‌`;
const description: string[] = [
  `⠀⠀⠀　⠀　⠀　　⠀ 　⠀ ⠀　⠀⠀　⠀　　⠀ ⠀⠀⠀⠀　⠀ ⠀　⠀⠀ 　⠀ ⠀　⠀ 　⠀ ⠀⠀⠀　　⠀⠀⠀⠀　⠀⠀　⠀⠀ 　⠀ ⠀　⠀　⠀　⠀ ⠀⠀⠀⠀‌⠀⠀⠀⠀⠀　　⠀⠀⠀ ⠀　 ⠀⠀　⠀⠀　⠀⠀ 　⠀⠀　⠀⠀　⠀⠀　⠀⠀　　⠀ 　⠀ ⠀⠀　⠀ ⠀⠀⠀⠀ ⠀　⠀ ⠀　⠀⠀　⠀ ⠀⠀　⠀ 　⠀⠀　　⠀⠀⠀ ⠀　⠀⠀　⠀⠀ 　⠀ ⠀⠀　 ⠀　⠀⠀⠀‌ ⠀⠀　⠀⠀　⠀⠀ 　⠀⠀　⠀　⠀　⠀ 　⠀⠀　⠀　⠀⠀　⠀　　⠀‌ 　⠀ ⠀　⠀⠀⠀⠀ ⠀　　⠀⠀ ⠀　⠀⠀⠀　⠀⠀⠀ 　⠀ 　⠀ 　⠀⠀⠀　⠀⠀ ⠀　　⠀ ⠀　 　⠀⠀　⠀　 　⠀ 　 ⠀　⠀ ⠀⠀　⠀　‌ ⠀⠀　 ⠀　⠀⠀⠀ ⠀　⠀⠀⠀ 　⠀ 　⠀ ⠀　⠀⠀　⠀　⠀　⠀ ⠀⠀　　⠀⠀‌ ⠀　　⠀　⠀⠀ ⠀⠀　⠀ ⠀⠀　⠀⠀　⠀⠀ 　⠀ ⠀　⠀ ⠀　⠀　　⠀ 　⠀⠀ ⠀　⠀　 ⠀　⠀⠀⠀　⠀ ⠀　⠀ ⠀　⠀⠀ ⠀　　 ⠀　 　 ⠀　⠀⠀　⠀　⠀⠀ 　⠀　⠀ 　⠀ 　 ⠀⠀　⠀　 ⠀　　 ⠀　⠀ ⠀　⠀　 　⠀⠀　　⠀⠀ ⠀　⠀　⠀　⠀‌⠀⠀⠀⠀　⠀　　⠀ ⠀　⠀ 　 ⠀　⠀⠀⠀ ⠀　⠀　⠀　　⠀ ⠀　 ⠀　⠀⠀ ⠀　　 ⠀　　⠀ ⠀⠀　⠀⠀ 　⠀ ⠀　⠀ 　 ⠀　⠀⠀⠀　 ⠀　⠀　⠀　　⠀ ⠀　⠀ ⠀　　 ⠀　 　 ⠀⠀　⠀　⠀　⠀ ⠀⠀　⠀　 　⠀ ⠀⠀　 ⠀　⠀⠀⠀‌`,
  `⠀　⠀⠀⠀　⠀ 　⠀　 　⠀⠀　 　⠀⠀　⠀　⠀⠀‌ ⠀　　⠀⠀⠀ ⠀　⠀　 ⠀　 ⠀　　⠀ ⠀　⠀ 　⠀　　⠀⠀⠀ 　⠀⠀　⠀⠀ 　⠀　⠀　⠀　　⠀ ⠀　 　⠀⠀ ⠀　⠀　⠀　 ⠀　　 ⠀　⠀ 　⠀⠀　⠀⠀ 　⠀　　⠀‌ ⠀　⠀ ⠀　　 ⠀　⠀ 　⠀⠀　 　⠀　 ⠀⠀　⠀ 　⠀　　⠀⠀⠀ ⠀　　⠀ 　⠀　⠀　　⠀‌ 　⠀ ⠀　　 ⠀⠀　⠀ ⠀⠀　⠀ 　⠀　⠀⠀ 　 ⠀　⠀⠀ ⠀　⠀⠀　⠀ ⠀　⠀　‌ 　⠀⠀⠀ ⠀　　⠀ ⠀　⠀⠀ ⠀⠀　⠀ 　⠀ ⠀⠀⠀　⠀　⠀⠀ ⠀　⠀⠀ ⠀　⠀⠀ ⠀　　⠀ 　⠀⠀ ⠀　⠀⠀⠀‌`
];
const urls: GameUrls = {
  booth: `https://hedgehogtechnicalinstitute.com/forum/viewtopic.php?t=208&sid=ec392933d1dff13ce14a938f65819794`,
  steam: null,
  steamwishlist: null,
  gamejolt: null,
  itchio: 'https://phiiraco.itch.io/collision-system-test',
  gamebanana: null,
  website: null,
  portfolio: null,
  youtube: 'https://www.youtube.com/@phiiraco',
  discord: null,
  twitter: null,
  bluesky: 'https://bsky.app/profile/philraco.lhlgames.com',
  download: null,
  roblox: null
};
const tags: string[] = [
  "topdown",
  "trippy",
  "test"
]

// EXPORT TIME !!! (<- sonic megamix reference :D)

export const CollisionSystemTest = new Game(
  "collisionsystemtest",            // slug
  "Collision System Test",        // title
  brief,                        // brief
  {'Developer':'philraco'},    // authors
  description,                  // description
  thumbnail,                    // thumbnail
  trailers,                     // trailers
  screenshots,                  // screenshots
  hero,                         // hero
  logo,                         // logo
  icon,                         // icon
  ["Windows"],                  // platforms
  tags,                         // tags
  "ArcIndie Build",                      // version
  urls,                         // URLS
  false,                        // Is it featured?
  true,                         // Is there a Booth in the forums?
  true,                         // Is it playable?
)