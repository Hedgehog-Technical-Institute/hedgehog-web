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
  "TAGLINE GOES HERE",
  2025,
  [
    "DESCRIPTION GOES HERE"
  ],
  [
    "MEDIAURL"    
  ],
  "DIRECTURL",
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