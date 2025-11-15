// src/data/events/2025/cgs/Cain&Iddo.ts
import { Game, type GameUrls } from "../../../../lib/models";
import { sortByNumericSuffix } from "../../../../lib/asset-helpers";

// Auto-import: hero, icon, logo, screenshots, trailers

const heroGlob = import.meta.glob<string>("../../../../assets/events/2025/arcindie/Cain&Iddo/hero*.*", { eager: true, query: "?url", import: "default" });
const hero = Object.values(heroGlob);
const iconGlob = import.meta.glob<string>("../../../../assets/events/2025/arcindie/Cain&Iddo/icon.*", { eager: true, query: "?url", import: "default" });
const icon = Object.values(iconGlob);
const logoGlob = import.meta.glob<string>("../../../../assets/events/2025/arcindie/Cain&Iddo/logo.*", { eager: true, query: "?url", import: "default" });
const logo = Object.values(logoGlob);

const screenshotsGlob = import.meta.glob<string>(
  "../../../../assets/events/2025/arcindie/Cain&Iddo/ss*.*",
  { eager: true, query: "?url", import: "default" }
);
const screenshots = sortByNumericSuffix(Object.values(screenshotsGlob));

const trailersGlob = import.meta.glob<string>(
  "../../../../assets/events/2025/arcindie/Cain&Iddo/trailer*.*",
  { eager: true, query: "?url", import: "default" }
);
const trailers = Object.values(trailersGlob);


const thumbnail =
  icon[0] ||
  logo[0] ||
  hero[0] ||
  screenshots[0] ||
  "";


const brief: string = `Cain the dog and Iddo the hyena are two plucky 24-year-olds navigating life alone in the east coast American metropolis of Westside City. Their zany misadventures don't turn out exactly as planned, wacky unforeseen circumstances arise, and hijinx ensue...`;
const description: string[] = [
  `Cain the dog and Iddo the hyena are two plucky 24-year-olds navigating life alone in the east coast American metropolis of Westside City. Their zany misadventures don't turn out exactly as planned, wacky unforeseen circumstances arise, and hijinx ensue...`,
  `Cain works as a barista at the local mall's Starbuzz franchisee. Due to requirements from higher Starbuzz management, his boss Sergio has to give Cain a week off work for the summer. Cain and Iddo have decided to create a list of activities to do over this week-long break... but you can probably guess that finishing that list is not going to be as simple as it seems.⠀‌`
];
const urls: GameUrls = {
  booth: `https://hedgehogtechnicalinstitute.com/forum/viewtopic.php?t=191&sid=ec392933d1dff13ce14a938f65819794`,
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
  "sidescroller",
  "wacky",
  "dogs"
]

// EXPORT TIME !!! (<- sonic megamix reference :D)

export const CainAndIddo = new Game(
  "cainandiddo",            // slug
  "Cain & Iddo: Break Week",        // title
  brief,                        // brief
  {'Developer':'JumboDS64'},    // authors
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