// import React from "react";
import { useState } from "react";

const Home = () => {

  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Hedgehog Technical Institute</h1>
      <button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button>
    </>
  )
}

export default Home;