// src/data/events/2025/cgs/DogsoftheBARK.ts
import { Game, type GameUrls } from "../../../../lib/models";
import { sortByNumericSuffix } from "../../../../lib/asset-helpers";

// Auto-import: hero, icon, logo, screenshots, trailers

const heroGlob = import.meta.glob<string>("../../../../assets/events/2025/arcindie/DogsoftheBARK/hero*.*", { eager: true, query: "?url", import: "default" });
const hero = Object.values(heroGlob);
const iconGlob = import.meta.glob<string>("../../../../assets/events/2025/arcindie/DogsoftheBARK/icon.*", { eager: true, query: "?url", import: "default" });
const icon = Object.values(iconGlob);
const logoGlob = import.meta.glob<string>("../../../../assets/events/2025/arcindie/DogsoftheBARK/logo.*", { eager: true, query: "?url", import: "default" });
const logo = Object.values(logoGlob);

const screenshotsGlob = import.meta.glob<string>(
  "../../../../assets/events/2025/arcindie/DogsoftheBARK/ss*.*",
  { eager: true, query: "?url", import: "default" }
);
const screenshots = sortByNumericSuffix(Object.values(screenshotsGlob));

const trailersGlob = import.meta.glob<string>(
  "../../../../assets/events/2025/arcindie/DogsoftheBARK/trailer*.*",
  { eager: true, query: "?url", import: "default" }
);
const trailers = Object.values(trailersGlob);


const thumbnail =
  icon[0] ||
  logo[0] ||
  hero[0] ||
  screenshots[0] ||
  "";


const brief: string = `The Tale of THE DARK. Follow Addie, a teenage girl left to her own devices, who gets dragged into a parallel realm by its former prince, Dexter. The two of them team up to return to the capital and reclaim the throne from the "tyrannical" king Jester.`;
const description: string[] = [
  `The Tale of THE DARK. Follow Addie, a teenage girl left to her own devices, who gets dragged into a parallel realm by its former prince, Dexter. The two of them team up to return to the capital and reclaim the throne from the "tyrannical" king Jester.`,
  `Cain works as a barista at the local mall's Starbuzz franchisee. Due to requirements from higher Starbuzz management, his boss Sergio has to give Cain a week off work for the summer. Cain and Iddo have decided to create a list of activities to do over this week-long break... but you can probably guess that finishing that list is not going to be as simple as it seems.`
];
const urls: GameUrls = {
  booth: `https://hedgehogtechnicalinstitute.com/forum/viewtopic.php?t=183&sid=ec392933d1dff13ce14a938f65819794`,
  steam: null,
  steamwishlist: null,
  gamejolt: null,
  itchio: null,
  gamebanana: null,
  website: 'https://ko-fi.com/s/bd662009c8',
  portfolio: null,
  youtube: null,
  discord: null,
  twitter: null,
  bluesky: null,
  download: null,
  roblox: null
};
const tags: string[] = [
  "rpg",
  "topdown",
  "dogs"
]

// EXPORT TIME !!! (<- sonic megamix reference :D)

export const DogsoftheBARK = new Game(
  "dogsofthedark",            // slug
  "Dogs of the Dark",        // title
  brief,                        // brief
  {'Developer':'fwugFaz'},    // authors
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