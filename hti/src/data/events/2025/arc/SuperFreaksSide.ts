// src/data/events/2025/cgs/SuperFreaksSide.ts
import { Game, type GameUrls } from "../../../../lib/models";
import { sortByNumericSuffix } from "../../../../lib/asset-helpers";

// Auto-import: hero, icon, logo, screenshots, trailers

const heroGlob = import.meta.glob<string>("../../../../assets/events/2025/arcindie/SuperFreaksSide/hero*.*", { eager: true, query: "?url", import: "default" });
const hero = Object.values(heroGlob);
const iconGlob = import.meta.glob<string>("../../../../assets/events/2025/arcindie/SuperFreaksSide/icon.*", { eager: true, query: "?url", import: "default" });
const icon = Object.values(iconGlob);
const logoGlob = import.meta.glob<string>("../../../../assets/events/2025/arcindie/SuperFreaksSide/logo.*", { eager: true, query: "?url", import: "default" });
const logo = Object.values(logoGlob);

const screenshotsGlob = import.meta.glob<string>(
  "../../../../assets/events/2025/arcindie/SuperFreaksSide/ss*.*",
  { eager: true, query: "?url", import: "default" }
);
const screenshots = sortByNumericSuffix(Object.values(screenshotsGlob));

const trailersGlob = import.meta.glob<string>(
  "../../../../assets/events/2025/arcindie/SuperFreaksSide/trailer*.*",
  { eager: true, query: "?url", import: "default" }
);
const trailers = Object.values(trailersGlob);


const thumbnail =
  icon[0] ||
  logo[0] ||
  hero[0] ||
  screenshots[0] ||
  "";


const brief: string = `Bringing back gameplay inspired by the classic Super Freaks games, Scruffy Minus is a new platforming adventure (with some freaky surprises!) Run, jump, and use your Battle Suit power to kick some butt!`;
const description: string[] = [
  `After numerous battles, the Super Freaks appear to have finally defeated their enemy Sticky for good, and he has vanished to parts unknown. Yet, trouble is once again brewing in the United States of Craziness. Sticky's robots are running around causing havoc once again, despite the absence of their master.`,
  `The Super Freaks do have a lead; Kranion, Sticky's half-brother, is having a castle of his own constructed over the remains of one of Sticky's former bases--and yet, he's still just a mob guy who hasn't truly achieved power for himself, at least at the moment. Is he really behind this?`,
];
const urls: GameUrls = {
  booth: `https://hedgehogtechnicalinstitute.com/forum/viewtopic.php?t=205&sid=ec392933d1dff13ce14a938f65819794`,
  steam: null,
  steamwishlist: null,
  gamejolt: null,
  itchio: 'https://riegelsoft.itch.io/scruffy-minus',
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
  "casual",
]

// EXPORT TIME !!! (<- sonic megamix reference :D)

export const SuperFreaksSide = new Game(
  "superfreakssidestory",            // slug
  "Super Freaks Side Story: Scruffy Minus: Rise of the Anti-Freaks",        // title\
  brief,                        // brief
  {'By':'Rigel25'},    // authors
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