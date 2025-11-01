import { useParams } from "react-router-dom"
import { eventDataMap } from "../data/event-data"
import PageNotFound from "./404"

export default function Event() {
  const { eventId } = useParams();
  const event = eventDataMap[eventId as keyof typeof eventDataMap]; // cast eventId to the map's key union

  if (!event) return (<PageNotFound/>);

  const Layout = event.layout;
  return (<Layout data={event.data}/>);
}
