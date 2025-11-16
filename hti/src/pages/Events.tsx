import { Link } from "react-router-dom";
// import { eventDataMap } from "../data/event-data";
// import HeroVideo from "../components/HeroVideo";

export default function Events() {
  // only have CGS 2025 right now
  const eventId1 = "cgs2025";
  const eventId2 = "arcindie2025";
  // const event = eventDataMap[eventId];

  return (
    <section className="">
      
      {/* Video should sit in the background
      <div className="absolute inset-0 z-0">
        <HeroVideo />
      </div> */}

      <div className="min-w-100% min-h-full text-center">
        {/* CGS */}
        <div className="bg-arc text-light flex items-center flex-col justify-center px-4 py-16"> 
          <Link
            to={`/events/${eventId2}`}
          >
            <img src="/assets/arcindie/arcindie_logo.png" alt="ArcIndie logo" className="w-150 h-auto"/>
          </Link>

          <h2 className="text-5xl font-current my-6">arcIndie 2025 is here!</h2>
          <Link
            to={`/events/${eventId2}`}
            className="inline-block text-xl font-semibold px-6 py-3 bg-charcoal rounded-full custom-shadow hover:bg-light hover:text-charcoal transition duration-300"
          >
            Check out 2025's Indie Showcase!
          </Link>
        </div>       
        {/* CGS */}
        <div className="bg-cgs text-light flex items-center flex-col justify-center px-4 py-16"> 
          <Link
            to={`/events/${eventId1}`}
          >
            <img src="/assets/cgs/CGS_LOGO.png" alt="Chao Games Showcase logo" className="w-150 h-auto"/>
          </Link>

          <h2 className="text-5xl font-bold font-happiness my-6">CGS 2025 is here!</h2>
          <Link
            to={`/events/${eventId1}`}
            className="inline-block text-xl font-semibold px-6 py-3 bg-charcoal rounded-full custom-shadow hover:bg-light hover:text-charcoal transition duration-300"
          >
            Check out 2025's Fangame Showcase!
          </Link>
        </div>
      </div>
    </section>
  );
}