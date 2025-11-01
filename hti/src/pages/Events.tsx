import { Link } from "react-router-dom";
// import { eventDataMap } from "../data/event-data";
// import HeroVideo from "../components/HeroVideo";

export default function Events() {
  // only have CGS 2025 right now
  const eventId = "cgs2025";
  // const event = eventDataMap[eventId];

  return (
    <section className="relative h-[calc(100vh-7rem)] bg-cgs text-light flex items-center justify-center px-4 py-16">
      
      {/* Video should sit in the background
      <div className="absolute inset-0 z-0">
        <HeroVideo />
      </div> */}

      <div className="max-w-3xl w-full text-center">

        <Link
          to={`/events/${eventId}`}
        >
          <img src="/assets/cgs/CGS_LOGO.png" alt="Chao Games Showcase logo" className="mb-6"/>
        </Link>

        <h1 className="text-5xl font-bold font-happiness mb-6">CGS 2025 is here!</h1>
        <Link
          to={`/events/${eventId}`}
          className="inline-block text-xl font-semibold px-6 py-3 bg-charcoal rounded-full custom-shadow hover:bg-light hover:text-charcoal transition duration-300"
        >
          Check out 2025's showcase Now!
        </Link>

      </div>
    </section>
  );
}