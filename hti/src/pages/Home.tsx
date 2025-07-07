// import React from "react";
import { useState } from "react";

const Home = () => {

  const [count, setCount] = useState(0);

  return (
    <>
      {/* <h1 className="font-kimberly text-2xl">Hedgehog Technical Institute</h1>
      <button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button> */}
      <section className="flex justify-center items-center h-[75vh]"> {/* HERO*/}
        <div className="text-center bg-[#222222] rounded-3xl m-[2vh] p-[3vh] drop-shadow-none custom-shadow" >
          <p className="text-3xl text-[#fdfdfd] font-bold font-spacegrotesk max-w-xl mx-auto my-[1vh]">We’re a community of indie and amateur game developers.</p>
          <p className="text-2xl text-[#fdfdfd] font-spacegrotesk max-w-xl mx-auto my-[1vh]">We’ve hosted virtual expos for indie games and hobbyist fan games each year since 2021.</p>
        </div>
        <div>
          <button></button>
          <button></button>
        </div>
      </section> 
      <section className="flex justify-center items-center h-[30vh] bg-[#222222]"> {/* TE */}
        <div>

        </div>
      </section>

    </>
  )
}

export default Home;