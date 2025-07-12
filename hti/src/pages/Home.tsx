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
        
        <HeroVideo/> 
        <div className="text-center bg-charcoal rounded-3xl p-[3vh] drop-shadow-none custom-shadow">
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
      <section className="flex justify-center items-center p-4 text-light bg-charcoal text-center py-4">
        {" "}
        {/* TE */}
        <div className="my-8">
          <h2 className="text-3xl text-bold font-spacegrotesk m-2.5">
            What is HTI?
          </h2>
          <p className="text-2xl m-2xl max-w-5xl">
            A welcoming space for developers of all skill levels to collaborate,
            share ideas, and celebrate game creation. Join year-round events
            like game jams, showcases, game nights, and dev talks.
          </p>
        </div>
      </section>
      {/* Grid describing cgs, arcindie. and grapejam */}
      <section className="grid grid-cols-1 md:grid-cols-3">
        <div className="bg-grn flex justify-center items-center text-center">
          <div className="w-xl h-xl flex justify content">
            <img
              className="max-w-[20rem]"
              src="/assets/arcindie_logo.png"
              alt="ArcIndie Logo"
            />
          </div>
          <p>The macintosh was introduced in 1978, revolutionizing the world of computing and putting steve jobs ontop of the world. God his turtle neck was immaculate, I think I should get one myself. With that an an iPod, it'd look so epic!</p>
        </div>
        <div className="bg-red flex justify-center items-center text-center">
          <div className="">
            <img
              className="max-w-[20rem]"
              src="/assets/arcindie_logo.png"
              alt="Chao Game Showcase logo"
            />
          </div>
          <p>The macintosh was introduced in 1978, revolutionizing the world of computing and putting steve jobs ontop of the world. God his turtle neck was immaculate, I think I should get one myself. With that an an iPod, it'd look so epic!</p>
        </div>
        <div className="bg-urpl flex justify-center items-center text-center">
          <div className="w-xl h-xl">
            <img
              className="max-w-[20rem]"
              src="/assets/arcindie_logo.png"
              alt="Grape Jam Logo"
            />
          </div>
          <p>The macintosh was introduced in 1978, revolutionizing the world of computing and putting steve jobs ontop of the world. God his turtle neck was immaculate, I think I should get one myself. With that an an iPod, it'd look so epic!</p>
        </div>
      </section>
      {/* featured projects previously showcased */}
      <section>
        <FeaturedShowcase />
      </section>
      {/* More misc stats */}
      <section></section>
      {/* Buttons to socials */}
      <section></section>
    </>
  );
};

export default Home;
