// src/data/events/2025/cgs/SonicErazor.ts
import { Game, type GameUrls } from "../../../../lib/models";
import { sortByNumericSuffix } from "../../../../lib/asset-helpers";

// Auto-import: hero, icon, logo, screenshots, trailers

const heroGlob = import.meta.glob<string>("../../../../assets/events/2025/cgs/SonicErazor/hero*.*", { eager: true, query: "?url", import: "default" });
const hero = Object.values(heroGlob);
const iconGlob = import.meta.glob<string>("../../../../assets/events/2025/cgs/SonicErazor/icon.*", { eager: true, query: "?url", import: "default" });
const icon = Object.values(iconGlob);
const logoGlob = import.meta.glob<string>("../../../../assets/events/2025/cgs/SonicErazor/logo.*", { eager: true, query: "?url", import: "default" });
const logo = Object.values(logoGlob);

const screenshotsGlob = import.meta.glob<string>(
  "../../../../assets/events/2025/cgs/SonicErazor/ss*.*",
  { eager: true, query: "?url", import: "default" }
);
const screenshots = sortByNumericSuffix(Object.values(screenshotsGlob));

const trailersGlob = import.meta.glob<string>(
  "../../../../assets/events/2025/cgs/SonicErazor/trailer*.*",
  { eager: true, query: "?url", import: "default" }
);
const trailers = Object.values(trailersGlob);


const thumbnail =
  icon[0] ||
  logo[0] ||
  hero[0] ||
  screenshots[0] ||
  "";


const brief: string = `"What if Michael Bay directed Sonic 1?" The definitively definitive deluxe version, 15 years in the making: Sonic ERaZor Zenith Edition!`;
const description: string[] = [
  "Sonic ERaZor is a complete reinvention of Sonic the Hedgehog (16-bit) for the SEGA Mega Drive: a chaotic, cinematic, and often bizarre remix that throws out most of the original game’s rules in favor of unpredictable spectacle. It's been described as \"What if Michael Bay directed Sonic 1?\" thanks to its constant explosions, visual chaos, and sheer absurdity. Originally released in 2010 as a brutally hard curiosity, ERaZor has evolved over 15 years into a polished, highly replayable, and award-winning full-game experience.",
  "",
  "Sonic ERaZor: Zenith Edition (released in 2025) is a fully self-contained, standalone port of the ROM hack as a Windows EXE, coming with glorious 16:9 widescreen support out of the box! Indeed, one could argue this ROM hack is starting to play footsies with the very definition of an original Sonic fan-game (although the underlying engine of this release is still technically just a turbo-charged SEGA Mega Drive emulator, forked from heyjoeway’s Sonic 2 Community's Cut, so I'll leave it up to you what category it falls into).",
  "",
  "Overview:",
  "• 8 Unique Levels: Inspired and based on the original Sonic 1 levels, each one comes with its own gimmick, theme, and challenge",
  "• 2 Unique Difficulties: Casual and Frantic, both being delicately handcrafted and wildly different experiences to allow everyone to get started with the game while also rewarding practice!",
  "• Crazy Mechanics: From Inhuman Mode to Space Golf, from lethal cinematic black bars to intense escape sequences; this isn't a typical Sonic game anymore",
  "• Cinematic Flair: Lots of cutscenes, stylized transitions, visual effects, and story text screens that aren't shy to break the fourth wall and give you a good laugh",
  "• Tons of Secrets: Unlockables, alternate endings, and Easter eggs (some obvious, some very hidden)",
  "• And Also: A save select with three slots, a ton of options to customize your experience to your liking, a custom sound test, and so much more!"
];
const urls: GameUrls = {
  booth: null,
  steam: null,
  steamwishlist: null,
  gamejolt: null,
  itchio: null,
  gamebanana: null,
  website: "https://sonic-erazor.selbi.club",
  portfolio: null,
  youtube: null,
  discord: null,
  twitter: null,
  bluesky: null,
  download: null,
  roblox: null
};
const tags: string[] = [
  "fangame",
  "romhack",
  "platformer",
  "2d",
  "sonic",
  "retro",
  "action",
  "cinematic",
  "challenge",
  "mega-drive",
  "remake",
];
// EXPORT TIME !!! (<- sonic megamix reference :D)

export const SonicErazor = new Game(
  "sonicerazor",                // slug
  "Sonic ERaZor: Zenith Edition", // title
  brief,                        // brief
  {'Developer':'Selbi'},        // authors
  description,                  // description
  thumbnail,                    // thumbnail
  trailers,                     // trailers
  screenshots,                  // screenshots
  hero,                         // hero
  logo,                         // screenshots
  icon,                         // screenshots
  ["Windows, Sega Genesis"],    // platforms
  tags,                         // tags
  "CGS Build",                  // version
  urls,                         // URLS
  false,                        // Is it featured?
  true,                         // Is there a Booth in the forums?
  true,                         // Is it playable?
)