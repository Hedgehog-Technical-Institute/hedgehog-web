import { Link } from "react-router-dom";
import { eventDataMap } from "../data/event-data";

const Events = () => {
  return (
    <>
      <div className="p-6">
        <div>
          {/* Add Upcoming Events here!! */}
        </div>

        <h1 className="text-3xl font-bold mb-4">All Events</h1>
        <div className="grid gap-4 grid-cols-1 md:grid-cols-3">
          {Object.entries(eventDataMap).map(([id, event]) => (
            <Link to={`/events/${id}`} key={id} className="border p-4 rounded shadow hover:shadow-lg transition">
              <h2 className="text-xl font-semibold">{event.name}</h2>
              <p>{event.data?.games?.length ?? 0} games</p>
            </Link>
          ))}
        </div>
      </div>
    </>
  )
}

export default Events;