// src/data/event-data.ts
import type { Event as EventModel } from "../lib/models";
import CGS25Layout from "./events/2025/cgs/Layout"; // bare layout below
import { CGS2025 } from "./events/2025/cgs/index";
import ARC25Layout from "./events/2025/arc/Layout"; // bare layout below
import { ARCINDIE2025 } from "./events/2025/arc/index";

export const eventDataMap = {
  cgs2025: {
    id: 6,
    name: CGS2025.name,
    layout: CGS25Layout,
    data: CGS2025 as EventModel,
  },
  arcindie2025: {
    id: 7,
    name: ARCINDIE2025.name,
    layout: ARC25Layout,
    data: ARCINDIE2025 as EventModel,
  },
} satisfies Record<string, {
  id: number
  name: string
  layout: React.ComponentType<{ data: EventModel }>
  data: EventModel
}>;
