// src/data/event-data.ts
import type { Event as EventModel } from "../lib/models";
import CGS25Layout from "./events/2025/cgs/Layout"; // bare layout below
import { CGS2025 } from "./events/2025/cgs/index";

export const eventDataMap = {
  cgs2025: {
    id: 6,
    name: CGS2025.name,
    layout: CGS25Layout,
    data: CGS2025 as EventModel,
  },
} satisfies Record<string, {
  id: number
  name: string
  layout: React.ComponentType<{ data: EventModel }>
  data: EventModel
}>;
