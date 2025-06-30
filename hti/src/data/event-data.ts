// ChaoGamesExpo 2021
import CGS21Layout from "./events/cgs2021/Layout";
import cgs21Data from './events/cgs2021/data.json'
// ChaoJam 2023
// ChaoGamesExpo 2023
// Indie'd 2023
// ChaoJam 2024
// ChaoGamesExpo 2024
// ArcIndie 2024

export const eventDataMap = {
  cgs2021: {
    id: 0,
    name: cgs21Data.name,
    layout: CGS21Layout,
    data: cgs21Data
  }, 
  // and so on and so forth-
} satisfies Record<string, {
  id: number
  name:string
  layout: React.ComponentType<{ data: any} > | null
  data:any
}>

