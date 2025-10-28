// src/data/events/2025/cgs/Sonic2Gearshift.ts
import { Game, type GameUrls } from "../../../../lib/models";
import { sortByNumericSuffix } from "../../../../lib/asset-helpers";

// Auto-import: hero, icon, logo, screenshots, trailers

const heroGlob = import.meta.glob<string>("../../../../assets/events/2025/cgs/Sonic2Gearshift/hero1.*", { eager: true, as: "url" });
const hero = Object.values(heroGlob);
const iconGlob = import.meta.glob<string>("../../../../assets/events/2025/cgs/Sonic2Gearshift/icon.*", { eager: true, as: "url" });
const icon = Object.values(iconGlob);
const logoGlob = import.meta.glob<string>("../../../../assets/events/2025/cgs/Sonic2Gearshift/logo.*", { eager: true, as: "url" });
const logo = Object.values(logoGlob);

const screenshotsGlob = import.meta.glob<string>(
  "../../../../assets/events/2025/cgs/Sonic2Gearshift/ss*.*",
  { eager: true, as: "url" }
);
const screenshots = sortByNumericSuffix(Object.values(screenshotsGlob));

const trailersGlob = import.meta.glob<string>(
  "../../../../assets/events/2025/cgs/Sonic2Gearshift/trailer*.*",
  { eager: true, as: "url" }
);
const trailers = Object.values(trailersGlob);


const thumbnail =
  icon[0] ||
  logo[0] ||
  hero[0] ||
  screenshots[0] ||
  "";


const brief: string = `Take it 2 the Max with Sonic 2: Gear Shift! The diabolical Dr. Ivo Robotnik has returned, capturing Sonic's new best friend, Miles "Tails" Prower! It is up to Sonic to not only save South Island once again, but to rescue Tails from Robotnik's clutches!`;
const description: string[] = [
  `Sonic the Hedgehog 2: Gear Shift (previously known as Sonic 2 SMS/GG 16-Bit) or it's alternative JP subtitle: Running for Miles, is a re-imagining of Sonic the Hedgehog 2 for the Sega Master System and Game Gear, updated with 16-Bit graphics inspired by those of the likes of Sonic 2 and Sonic CD. The goal of this project to bring out the best aspects of the original game, while correcting major issues and bringing some new ideas to the table.`,
  `This demo features 2 zones to play, Under Ground Zone and Sky High Zone!`,
  ``,
  `Plot Synopsis:`,
  `Shortly following his first journey across South Island, Sonic the Hedgehog relishes in the peaceful aftermath of his encounter with Dr. Ivo Robotnik.`,
  `Some time relaxing later though, he opens one eye to find no sign of any of his flicky friends... Before he let that thought linger, the hedgehog hears something swoosh by, looking to only see Dr. Robotnik chasing after his new friend, Miles "Tails" Prower!`,
  `Try as he might, Sonic could only catch up just in time to see the mad doctor snatch his buddy and take off, only leaving a note written by the diabolical doctor behind, taunting the hedgehog that he is holding Tails hostage in the Crystal Egg Zone in exchange for the six Chaos Emeralds!`,
  `The note also remarks that Robotnik has built a new series of robots that is awaiting to destroy the hedgehog at every turn of the island, called "Master Robots"...`,
  `After reading the note, Sonic sets out to thwart Dr. Robotnik's scheme and save his friend!`
];
const urls: GameUrls = {
  booth: null,
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
  "remake",
  "platformer",
  "2d",
  "fangame",
  "sonic",
]

// EXPORT TIME !!! (<- sonic megamix reference :D)

export const Sonic2Gearshift = new Game(
  "sonic2gearshift",            // slug
  "Sonic 2: Gear Shift",        // title
  brief,                        // brief
  {'Team':'Team Supernova'},    // authors
  description,                  // description
  thumbnail,                    // thumbnail
  trailers,                     // trailers
  screenshots,                  // screenshots
  hero,                         // hero
  logo,                         // logo
  icon,                         // icon
  ["Windows"],                  // platforms
  tags,                         // tags
  "2.0.0",                      // version
  urls,                         // URLS
  false,                        // Is it featured?
  true,                         // Is there a Booth in the forums?
  true,                         // Is it playable?
)