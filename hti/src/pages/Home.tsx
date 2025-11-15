// import React from "react";
// import { useState } from "react";
import FeaturedShowcase from "../components/FeaturedSection";
import HeroVideo from "../components/HeroVideo";
import { Link } from "react-router-dom";

const Home = () => {
  // const [count, setCount] = useState(0);

  return (
    <>
      {/* Hero */}
      <section className="relative h-[calc(100vh-7rem)] overflow-hidden">
        {/* Video should sit in the background */}
        <div className="absolute inset-0 z-0">
          <HeroVideo />
        </div>

        {/* Foreground content */}
        <div className="relative z-10 flex justify-center items-center h-full px-4">
          <div className="text-center bg-charcoal rounded-3xl p-[3vh] custom-shadow m-4 max-w-3xl w-full">
            <p className="text-3xl text-light font-bold font-spacegrotesk my-[1vh]">
              We’re a community of indie and amateur game developers.
            </p>
            <p className="text-2xl text-light font-spacegrotesk my-[1vh]">
              We’ve hosted virtual expos for indie games and hobbyist fan games
              each year since 2021.
            </p>

            {/* Event Announcement Buttons */}
            {/* <div className="mt-6 bg-light p-3 custom-shadow rounded-3xl">
              <p className="text-3xl font-bold text-charcoal mb-2">
                Applications for arcINDIE & CGS 2025 are now open!
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a
                  href="https://docs.google.com/forms/d/1WWscmOoRiX-ShOFWKhTczj1atlOdEM7FMFqvNpN-G24"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-cgs text-charcoal text-md font-bold font-spacegrotesk px-6 py-3 rounded-full hover:bg-ylw transition duration-300"
                >
                  Submit Trailer
                </a>
                <a
                  href="https://www.hedgehogtechnicalinstitute.com/forum/viewforum.php?f=8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-cgs text-charcoal text-md font-bold font-spacegrotesk px-6 py-3 rounded-full hover:bg-ylw transition duration-300"
                >
                  Submit Booth
                </a>
              </div>
            </div> */}

            {/* Event Release Buttons */}
            <div className="mt-6 bg-light p-3 custom-shadow rounded-3xl">
              <p className="text-3xl font-bold text-charcoal mb-2">
                arcINDIE 2025 & CGS 2025 are here!
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
               <Link
                  to={`/events/arcindie2025`}
                  className="inline-block bg-arc text-light text-lg font-black font-spacegrotesk px-6 py-3 rounded-full hover:bg-ylw hover:text-charcoal transition duration-300"
                >
                  Check out arcINDIE 2025!
                </Link>
                <Link
                  to={`/events/cgs2025`}
                  className="inline-block bg-cgs text-light text-lg font-black font-spacegrotesk px-6 py-3 rounded-full hover:bg-ylw hover:text-charcoal transition duration-300"
                >
                  Check out Chao Games Showcase 2025!
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* brief descriiption of what hti is */}
      <section className="flex flex-col items-center text-light bg-charcoal py-12 px-4 text-center">
        <div className="max-w-5xl">
          <h2 className="text-3xl font-bold font-spacegrotesk mb-4">
            What is HTI?
          </h2>
          <p className="text-2xl mb-8">
            A welcoming space for developers of all skill levels to collaborate,
            share ideas, and celebrate game creation. Join year-round events
            like game jams, showcases, game nights, and dev talks.
          </p>
          {/* Stats grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 w-full text-light font-spacegrotesk">
            <div className="border-t border-light pt-4">
              <p className="text-2xl font-bold">300+</p>
              <p className="text-sm uppercase tracking-wide mt-1">Members</p>
            </div>
            <div className="border-t border-light pt-4">
              <p className="text-2xl font-bold">Game Expos</p>
              <p className="text-sm uppercase tracking-wide mt-1">
                Indie & Fan Projects
              </p>
            </div>
            <div className="border-t border-light pt-4">
              <p className="text-2xl font-bold">Annual Jam</p>
              <p className="text-sm uppercase tracking-wide mt-1">
                Community Game Jam
              </p>
            </div>
            <div className="border-t border-light pt-4">
              <p className="text-2xl font-bold">INDIE</p>
              <p className="text-sm uppercase tracking-wide mt-1">
                Dev Support
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Grid describing cgs, arcindie. and grapejam */}
      <section className="grid grid-cols-1 md:grid-cols-3 text-light font-black font-spacegrotesk">
        {/* CGS */}
        <div className="bg-cgs flex justify-center items-center text-center p-6 flex-col">
          <div className="w-flex justify content m-7">
            <img
              className="max-w-[15rem]"
              src="/assets/cgs/cgs_min.svg"
              alt="Chao Game Showcase logo"
            />
          </div>
          <p className="text-3xl">
            Chao Games Showcase celebrates game franchises through creative
            fangames.
          </p>
        </div>

        {/* arcINDIE */}
        <div className="bg-arc flex justify-center items-center text-center p-6 flex-col">
          <div className="flex justify content m-7">
            <img
              className="max-w-[15rem]"
              src="/assets/arcindie/arc_min.svg"
              alt="ArcIndie Logo"
            />
          </div>
          <p className="text-3xl">
            arcINDIE is an expo dedicated to upcoming indie games.
          </p>
        </div>
        {/* GRAPE JAM */}
        <div className="bg-jam flex justify-center items-center text-center p-6 flex-col">
          <div className="flex justify content m-7">
            <img
              className="max-w-[15rem]"
              src="/assets/gj/gj_min.svg"
              alt="Grape Jam Logo"
            />
          </div>
          <p className="text-3xl">
            Grape Jam are annual Gamejams hosted on itch.io.
          </p>
        </div>
      </section>
      {/* featured projects previously showcased */}
      <FeaturedShowcase />
      <section></section>
      {/* More misc stats */}
      <section></section>
      {/* Buttons to socials */}
      {/* <section></section> */}
    </>
  );
};

export default Home;
