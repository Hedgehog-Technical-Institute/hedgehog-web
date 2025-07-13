import { useEffect, useState } from "react";

{
  /* 
            So, for Projects, I was thinking:
            - Veredilia C
            - Sonic Legends C
            - Bubba's Big Blowout C
            - Prototype N C
            - Tails Picross C
            - buknight
            - That one megaman one
          */
}
// Make those Learn Page string the actual game page (when it's ready ofc)

type FeaturedGame = {
  title: string;
  author: string;
  event: string;
  screenshot: string;
  description: string;
  learn_more: string;
  event_page: string;
};

const featuredData: FeaturedGame[] = [
  {
    title: "Sonic Legends",
    author: "Ultra Ring Team",
    event: "Chao Games Showcase 2023",
    screenshot:
      "https://media.discordapp.net/attachments/543045834904829952/1392998656113905674/802775c413409420dfd20c10df2e9977_fit.png?ex=68719298&is=68704118&hm=9a2aa925334ad947ef27001484e2838644760b8c86ac50e8bcad82b541c9808e&=&format=webp&quality=lossless&width=937&height=528",
    description:
      "Sonic Legends is an unofficial, non-profit fan project inspired by the 2D Sonic the Hedgehog series of games. Its main goal is to update and re-invent over 20 year of history within the Sonic fangaming scene.",
    learn_more:
      "https://www.hedgehogtechnicalinstitute.com/forum/viewtopic.php?t=41",
    event_page: "",
  },
  {
    title: "Bubs Big Blowout",
    author: "Miles Games",
    event: "Chao Games Showcase 2023",
    screenshot:
      "https://i.kinja-img.com/image/upload/c_fit,q_60,w_1600/5a99b507b7ce0c5cf9c39a0d6111ad92.jpg",
    description:
      "Bub and his friends seem to have found themselves lost in a strange new world! Everything is so familiar, yet so different! Will you be able to help Bub and his friends find their way home?",
    learn_more:
      "https://www.hedgehogtechnicalinstitute.com/forum/viewtopic.php?t=67",
    event_page: "",
  },
  {
    title: "Prototype N",
    author: "Arrietty",
    event: "ArcIndie 2024",
    screenshot:
      "https://i.kinja-img.com/image/upload/c_fit,q_60,w_1600/941c554901131235cc80a49084ee8469.jpg",
    description:
      "Prototype N is a side-scrolling shooting platformer. Nadine's main actions are shooting and sliding through action-packed stages.",
    learn_more:
      "https://www.hedgehogtechnicalinstitute.com/forum/viewtopic.php?t=144",
    event_page: "",
  },
  {
    title: "Tails Picross",
    author: "Louplayer",
    event: "Chao Games Showcase 2023",
    screenshot:
      "https://www.hedgehogtechnicalinstitute.com/forum/download/file.php?id=294",
    description:
      "Tails' Picross is a fangame inspired by the Picross game series and other Mega Drive puzzle games. In this game, you will need to clear puzzles using the clues on each row and each collumn of the grid.",
    learn_more:
      "https://www.hedgehogtechnicalinstitute.com/forum/viewtopic.php?t=72",
    event_page: "",
  },
  {
    title: "Veredilia: The Sacred Forest",
    author: "Giga6152",
    event: "ArcIndie 2024",
    screenshot:
      "https://www.hedgehogtechnicalinstitute.com/forum/download/file.php?id=715",
    description:
      "Veredilia: The Sacred Forest is a 2D platforming game that takes inspiration from classic platformers such as Sonic, and fighting games like Mortal Kombat.",
    learn_more:
      "https://www.hedgehogtechnicalinstitute.com/forum/viewtopic.php?t=137",
    event_page: "",
  },
];

const FeaturedShowcase = () => {
  const [game, setGame] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setGame((i: number) => (i + 1) % featuredData.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);
  const current = featuredData[game];

  return (
    <>
    <div className="bg-arc p-15">
      <h2>SHOWCASE</h2>
      <p>Take a look at some games that have been previously shown off.</p>
      <div className="flex flex-col md:flex-row items-around md:items-start gap-6 mx-auto">
        {/* left */}
        <div className="md:w-1/2">
          <img className="w-7xl h-[30rem] object-cover" src={current.screenshot} alt={`${current.title} screenshot.`} />
          <h3 className="font-bold text-xl">{current.title}</h3>
          <p>{current.author}</p>
          <p>{current.event}</p>
        </div>
        {/* right */}
        <div className="md:w-1/2">
          <p>{current.description}</p>
          <div className=""/ >
          <a href={current.learn_more} className="px-4 py-2  bg-blu text-charcoal rounded-3xl hover:bg-light transition ">
            Learn More
          </a>
        </div>

      </div>
    </div>
      
    </>
  );
};

export default FeaturedShowcase;
