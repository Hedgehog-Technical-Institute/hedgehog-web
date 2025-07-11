// import React from "react";
// import { useState } from "react";
import FeaturedShowcase from "../components/FeaturedSection";


const HeroVideo = () => {
  return (
    <video
      autoPlay
      loop
      muted
      playsInline
      className="absolute top-0 bottom-0 left-0 object-cover w-full h-full pointer-events-none z-0"
    >
      <source src="/assets/hero.webm" type="video/webm" />
      Your browser does not support the video tag.
    </video>
  )
}

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
              src="https://media.discordapp.net/attachments/1388251583539843102/1392903508298174634/arcindie_logo.png?ex=687139fb&is=686fe87b&hm=1431c26a617d81495b4b1d012bd5e869f4642623db3b17ff5ef819a854a51520&=&format=webp&quality=lossless&width=1872&height=780"
              alt="ArcIndie Logo"
            />
          </div>
          <p>ArcIndie</p>
        </div>
        <div className="bg-red flex justify-center items-center text-center">
          <div className="">
            <img
              className="max-w-[20rem]"
              src="https://media.discordapp.net/attachments/1388251583539843102/1392897732431057047/CGS_Logo.png?ex=6871349a&is=686fe31a&hm=ba6001e490c02642317859dcd777752f7edf19bd37e109a936d80a604191083f&=&format=webp&quality=lossless&width=1726&height=998"
              alt="Chao Game Showcase logo"
            />
          </div>
          <p>Chao Games Expo</p>
        </div>
        <div className="bg-urpl flex justify-center items-center text-center">
          <div className="w-xl h-xl">
            <img
              className="max-w-[20rem]"
              src="https://media.discordapp.net/attachments/1388251583539843102/1392897975746953317/CHAO_JAM_LOGO.png?ex=687134d4&is=686fe354&hm=f44a80e1bb039173e39a359df09696a4e10468533d533063662946f3ea68c238&=&format=webp&quality=lossless"
              alt="Grape Jam Logo"
            />
          </div>
          <p>Grape Jam</p>
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
