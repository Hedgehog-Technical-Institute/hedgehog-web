// src/data/events/2025/cgs/CubenenGardens.ts
import { Game, type GameUrls } from "../../../../lib/models";
import { sortByNumericSuffix } from "../../../../lib/asset-helpers";

// Auto-import: hero, icon, logo, screenshots, trailers

const heroGlob = import.meta.glob<string>("../../../../assets/events/2025/arcindie/CubenenGardens/hero*.*", { eager: true, query: "?url", import: "default" });
const hero = Object.values(heroGlob);
const iconGlob = import.meta.glob<string>("../../../../assets/events/2025/arcindie/CubenenGardens/icon.*", { eager: true, query: "?url", import: "default" });
const icon = Object.values(iconGlob);
const logoGlob = import.meta.glob<string>("../../../../assets/events/2025/arcindie/CubenenGardens/logo.*", { eager: true, query: "?url", import: "default" });
const logo = Object.values(logoGlob);

const screenshotsGlob = import.meta.glob<string>(
  "../../../../assets/events/2025/arcindie/CubenenGardens/ss*.*",
  { eager: true, query: "?url", import: "default" }
);
const screenshots = sortByNumericSuffix(Object.values(screenshotsGlob));

const trailersGlob = import.meta.glob<string>(
  "../../../../assets/events/2025/arcindie/CubenenGardens/trailer*.*",
  { eager: true, query: "?url", import: "default" }
);
const trailers = Object.values(trailersGlob);


const thumbnail =
  icon[0] ||
  logo[0] ||
  hero[0] ||
  screenshots[0] ||
  "";


const brief: string = `Cubenen Gardens: Befriend is a story-driven indie RPG created with RPG Maker MZ.`;
const description: string[] = [
  `The Gardens is a world inhabited by cartoon animals and friendly cube people known as cubenen. This city is separated into seven districts, atop a concrete island, in a sea of ink. This world is also home to hostile monsters, abstract and strange in design. They manifest where hope has been lost, and terrorize citizens.`,
  `You play as Michael, a kangaroo scientist and inventor from the Tech District. They have a lifelong goal of making monsters less of a threat to society. And their research takes them to the abandoned offices of the Mall District to test a theory regarding how monsters relate to the memories of the deceased. Things go well, but then they get caught up in a corporate nightmare. Slowly breaking them down and leaving them desperately searching for a way to escape.`,
];
const urls: GameUrls = {
  booth: `https://hedgehogtechnicalinstitute.com/forum/viewtopic.php?t=194&sid=ec392933d1dff13ce14a938f65819794`,
  steam: null,
  steamwishlist: null,
  gamejolt: null,
  itchio: 'https://thegamedawg.itch.io/cgbefriend-demo',
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
  "indie",
  "rpg",
  "final demo"
]

// EXPORT TIME !!! (<- sonic megamix reference :D)

export const CubenenGardens = new Game(
  "cubenengardens",            // slug
  "Cubenen Gardens: Befriend",        // title
  brief,                        // brief
  {'Developer':'TheGamedawg'},    // authors
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