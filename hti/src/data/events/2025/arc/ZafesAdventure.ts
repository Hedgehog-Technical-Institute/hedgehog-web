// src/data/events/2025/cgs/ZafesAdventure.ts
import { Game, type GameUrls } from "../../../../lib/models";
import { sortByNumericSuffix } from "../../../../lib/asset-helpers";

// Auto-import: hero, icon, logo, screenshots, trailers

const heroGlob = import.meta.glob<string>("../../../../assets/events/2025/arcindie/ZafesAdventure/hero*.*", { eager: true, query: "?url", import: "default" });
const hero = Object.values(heroGlob);
const iconGlob = import.meta.glob<string>("../../../../assets/events/2025/arcindie/ZafesAdventure/icon.*", { eager: true, query: "?url", import: "default" });
const icon = Object.values(iconGlob);
const logoGlob = import.meta.glob<string>("../../../../assets/events/2025/arcindie/ZafesAdventure/logo.*", { eager: true, query: "?url", import: "default" });
const logo = Object.values(logoGlob);

const screenshotsGlob = import.meta.glob<string>(
  "../../../../assets/events/2025/arcindie/ZafesAdventure/ss*.*",
  { eager: true, query: "?url", import: "default" }
);
const screenshots = sortByNumericSuffix(Object.values(screenshotsGlob));

const trailersGlob = import.meta.glob<string>(
  "../../../../assets/events/2025/arcindie/ZafesAdventure/trailer*.*",
  { eager: true, query: "?url", import: "default" }
);
const trailers = Object.values(trailersGlob);


const thumbnail =
  icon[0] ||
  logo[0] ||
  hero[0] ||
  screenshots[0] ||
  "";


const brief: string = `Zafe blast into fiery and voluminous journey from just one small ordinary day at the outdoor hills with run n' gun elements and fast-paced side-scrolling movements.`;
const description: string[] = [
  `Inspired by various generic genre of platformer adventure like Sonic the Hedgehog and Jazz Jackrabbit. Zafe blast into fiery and voluminous journey from just one small ordinary day at the outdoor hills with run n' gun elements and fast-paced side-scrolling movements.`,
  `Welcomes you to the town of Rosewood Valley, a remote area locate across the hill alongside the park nearby and you are Zafe, a young cautious humanoid with pyrokinetic ability, when he was about to take an usual day in one specific outdoor activity, jogging, but now, things started to crumbled up and all hell breaks loose when some kind of evil forces tries to overrun the area and he must finds a way to investigate and deal against them, while they expected to move along the path to stand up from situation, however, the situation becomes more longer to take a stand and it becomes really complicated when he finds a portal appears across the area which takes him to random destination, and now, it's up for him to faces another difficulty again around the journey. How far could he go to save his town before he can finally go home?`
];
const urls: GameUrls = {
  booth: `https://hedgehogtechnicalinstitute.com/forum/viewtopic.php?t=195&sid=ec392933d1dff13ce14a938f65819794`,
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
  "platformer",
  "2D"

]

// EXPORT TIME !!! (<- sonic megamix reference :D)

export const ZafesAdventure = new Game(
  "zafeadventures",            // slug
  "Zafe's Adventures",        // title
  brief,                        // brief
  {'Developer':'TuanBaoGames'},    // authors
  description,                  // description
  thumbnail,                    // thumbnail
  trailers,                     // trailers
  screenshots,                  // screenshots
  hero,                         // hero
  logo,                         // logo
  icon,                         // icon
  ["Windows"],                  // platforms
  tags,                         // tags
  "ArcIndie Demo",                      // version
  urls,                         // URLS
  false,                        // Is it featured?
  true,                         // Is there a Booth in the forums?
  true,                         // Is it playable?
)