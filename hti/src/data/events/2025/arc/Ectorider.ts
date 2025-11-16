// src/data/events/2025/cgs/Ectorider.ts
import { Game, type GameUrls } from "../../../../lib/models";
import { sortByNumericSuffix } from "../../../../lib/asset-helpers";

// Auto-import: hero, icon, logo, screenshots, trailers

const heroGlob = import.meta.glob<string>("../../../../assets/events/2025/arcindie/Ectorider/hero*.*", { eager: true, query: "?url", import: "default" });
const hero = Object.values(heroGlob);
const iconGlob = import.meta.glob<string>("../../../../assets/events/2025/arcindie/Ectorider/icon.*", { eager: true, query: "?url", import: "default" });
const icon = Object.values(iconGlob);
const logoGlob = import.meta.glob<string>("../../../../assets/events/2025/arcindie/Ectorider/logo.*", { eager: true, query: "?url", import: "default" });
const logo = Object.values(logoGlob);

const screenshotsGlob = import.meta.glob<string>(
  "../../../../assets/events/2025/arcindie/Ectorider/ss*.*",
  { eager: true, query: "?url", import: "default" }
);
const screenshots = sortByNumericSuffix(Object.values(screenshotsGlob));

const trailersGlob = import.meta.glob<string>(
  "../../../../assets/events/2025/arcindie/Ectorider/trailer*.*",
  { eager: true, query: "?url", import: "default" }
);
const trailers = Object.values(trailersGlob);


const thumbnail =
  icon[0] ||
  logo[0] ||
  hero[0] ||
  screenshots[0] ||
  "";


const brief: string = `Save the world at full speed with your electromagnetic gadgets!​`;
const description: string[] = [
  `Ectorider is a fast-paced 3D platformer combining Extreme Sports and Third Person Shooter. Fight a robot army with your super magnet or use them to do insane tricks with your rollerblades. Save the Ectomorphs and stop Professor Ecto's evil plan.`,
  `Use the powers of the super magnet to grab, throw, propell yourself at fullspeed, fly high in the air or smash robots into them.`,
  `Dash, grind, and soar through levels on high-speed rollers. Chain tricks, wall-runs, and aerial stunts to keep your momentum flowing and your style sharp.`,
  `Discover each enemies special ability, unlock new gadgets and combine them to find alternate paths into each levels.`,
  `Humanity has been changed to Ectomorphs by the evil Professor Ektos! You must race at full speed around the world with your group of friends to find them, fight Ecto's robot army and turn them back into humans.`
];
const urls: GameUrls = {
  booth: `https://hedgehogtechnicalinstitute.com/forum/viewtopic.php?t=185&sid=ec392933d1dff13ce14a938f65819794`,
  steam: null,
  steamwishlist: 'https://store.steampowered.com/login/?redir=app/3970010',
  gamejolt: null,
  itchio: 'https://taldius.itch.io/ectorider-arcindie?secret=TLEO3gAMNtJKKFwL2Nr6qhiKp3o',
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
  "3D",
  "platformer",
]

// EXPORT TIME !!! (<- sonic megamix reference :D)

export const Ectorider = new Game(
  "ectorider",            // slug
  "Ectorider",        // title
  brief,                        // brief
  {'Developer':'Taldius'},    // authors
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