// import React from "react";
// import { useState } from "react";
import FeaturedShowcase from "../components/FeaturedSection";
import HeroVideo from "../components/HeroVideo";

const Home = () => {
  // const [count, setCount] = useState(0);

  return (
    <>
      {/* Hero */}
      <section className="relative flex justify-center items-center h-[calc(100vh-7rem)] overflow-hidden">
        <HeroVideo />
        <div className="text-center bg-charcoal rounded-3xl p-[3vh] drop-shadow-none custom-shadow m-4">
          <p className="text-3xl text-light font-bold font-spacegrotesk max-w-xl mx-auto my-[1vh]">
            We’re a community of indie and amateur game developers.
          </p>
          <p className="text-2xl text-light font-spacegrotesk max-w-xl mx-auto my-[1vh]">
            We’ve hosted virtual expos for indie games and hobbyist fan games
            each year since 2021.
          </p>
        </div>
      </section>
      {/* brief descriiption of what hti is */}
      <section className="flex flex-col items-center text-light bg-charcoal py-12 px-4 text-center">
        <div className="max-w-5xl">
          <h2 className="text-3xl font-bold font-spacegrotesk mb-4">What is HTI?</h2>
          <p className="text-2xl mb-8">
            A welcoming space for developers of all skill levels to collaborate,
            share ideas, and celebrate game creation. Join year-round events
            like game jams, showcases, game nights, and dev talks.
          </p>
          {/* Stats grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 w-full text-light font-spacegrotesk">
            <div className="border-t border-light pt-4">
              <p className="text-2xl font-bold">100+</p>
              <p className="text-sm uppercase tracking-wide mt-1">Members</p>
            </div>
            <div className="border-t border-light pt-4">
              <p className="text-2xl font-bold">Game Expos</p>
              <p className="text-sm uppercase tracking-wide mt-1">Indie & Fan Projects</p>
            </div>
            <div className="border-t border-light pt-4">
              <p className="text-2xl font-bold">Annual Jam</p>
              <p className="text-sm uppercase tracking-wide mt-1">Community Game Jam</p>
            </div>
            <div className="border-t border-light pt-4">
              <p className="text-2xl font-bold">INDIE</p>
              <p className="text-sm uppercase tracking-wide mt-1">Dev Support</p>
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
          Chao Games Showcase celebrates game franchises through creative fangames.
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
      <section>
      </section>
      {/* More misc stats */}
      <section></section>
      {/* Buttons to socials */}
      {/* <section></section> */}
    </>
  );
};

export default Home;
