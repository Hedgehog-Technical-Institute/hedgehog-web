// index.ts
import { Event } from "../../../../lib/models"

import { Sonic2Gearshift } from "./Sonic2Gearshift";
import { SonicErazor } from "./SonicErazor";
import { SuperMarioBuysBread } from "./SuperMarioBuysBreadLmao";
import { SATAMCh5 } from "./SATAMCh5";
import { MegaManStarBurst } from "./MegaManStarburst";
import { FreedomPlanetPlus } from "./FreedomPlanetPlus";
import { StarFoxGameWatch } from "./StarFoxGameWatch";
import { AlexKidd } from "./AlexKidd";
import { ProjectForestation } from "./ProjectForestation";
import { WariosConquest } from "./WariosConquest";
import { SonicJ } from "./SonicJ";

export const CGS2025 = new Event(
  "cgs2025",
  "Chao Games Showcase 2025",
  "2025's showcase is here!",
  2025,
  [
    "Welcome! This event is dedicated to fan games and their developers and features a fantastic collection of games for you to download and play right now!",
    // "Check back throughout the event 8th - 15th for updates and streams."
  ],
  [
    "/assets/cgs/CGS_LOGO.png"    
  ],
  "https://www.youtube.com/watch?v=gNOi_qecg_M",
  [
    "TREEHOUSELIVESTREAMURL"
  ],
  [
    Sonic2Gearshift,
    SonicErazor,
    SuperMarioBuysBread,
    SATAMCh5,
    MegaManStarBurst,
    FreedomPlanetPlus,
    StarFoxGameWatch,
    AlexKidd,
    ProjectForestation,
    WariosConquest,
    SonicJ,
  ]
)