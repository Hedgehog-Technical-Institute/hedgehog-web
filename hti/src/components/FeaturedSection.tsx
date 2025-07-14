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
      "https://media.discordapp.net/attachments/543045834904829952/1394095866343854141/GW5qCmHXIAAtgB9.png?ex=68759073&is=68743ef3&hm=557765b9709b0aabffb6b26c1021ac77b6575c0ab4e6790e3d1001da6456cc1d&=&format=webp&quality=lossless&width=1027&height=581",
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
      "https://media.discordapp.net/attachments/543045834904829952/1394096098402111598/image.png?ex=687590aa&is=68743f2a&hm=a87b0ffd837a5769d91aa3bd989c2a213ecf96f0706cb467fade67112bec03ba&=&format=webp&quality=lossless&width=1027&height=578",
    description:
      "Bub and his friends seem to have found themselves lost in a strange new world! Everything is so familiar, yet so different! Will you be able to help Bub and his friends find their way home?",
    learn_more:
      "https://www.hedgehogtechnicalinstitute.com/forum/viewtopic.php?t=67",
    event_page: "",
  },
  {
    title: "Prototype N",
    author: "Arrietty",
    event: "arcINDIE 2024",
    screenshot:
      "https://media.discordapp.net/attachments/543045834904829952/1394096300777144391/image.png?ex=687590db&is=68743f5b&hm=9d607e0a606fc706c19000d751fbd7ec522beb9ec080396b3f1332362530df41&=&format=webp&quality=lossless&width=1027&height=578",
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
      "https://media.discordapp.net/attachments/543045834904829952/1394096403026022490/F_t22_TXEAA9JKZ.png?ex=687590f3&is=68743f73&hm=601ce06ad4e5108cf7f3dd54ee727eb5ef5a3a7560015a5517cf94c85fa7049f&=&format=webp&quality=lossless&width=704&height=528",
    description:
      "Tails' Picross is a fangame inspired by the Picross game series and other Mega Drive puzzle games. In this game, you will need to clear puzzles using the clues on each row and each collumn of the grid.",
    learn_more:
      "https://www.hedgehogtechnicalinstitute.com/forum/viewtopic.php?t=72",
    event_page: "",
  },
  {
    title: "Veredilia: The Sacred Forest",
    author: "Giga6152",
    event: "arcINDIE 2024",
    screenshot:
      "https://media.discordapp.net/attachments/543045834904829952/1394095701369290824/ss_1b115ad258989f023dbd636a859b83b41388ede2.png?ex=6875904c&is=68743ecc&hm=752d40c1a4012ead74df0ed7d2e41161183fa04efe34b4f886a690ce847bbd89&=&format=webp&quality=lossless&width=1027&height=578",
    description:
      "Veredilia: The Sacred Forest is a 2D platforming game that takes inspiration from classic platformers such as Sonic, and fighting games like Mortal Kombat.",
    learn_more:
      "https://www.hedgehogtechnicalinstitute.com/forum/viewtopic.php?t=137",
    event_page: "",
  },
];

const FADE_DURATION = 500; // ms

const FeaturedShowcase = () => {
  const [game, setGame] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setGame((i: number) => (i + 1) % featuredData.length);
        setFade(true);
      }, FADE_DURATION);
    }, 5000);

    return () => clearInterval(interval);
  }, []);
  const current = featuredData[game];





  return (
    <section className="bg-ylw px-8 py-16">
      <div className="max-w-[400rem] mx-auto px-5 text-charcoal">
        <h2 className="text-5xl font-spacegrotesk mb-4">FEATURED</h2>
        <p className="text-lg mb-12">Take a look at some games that have been previously shown off.</p>

        <div className="flex flex-col md:flex-row gap-10 items-stretch transition-opacity duration-500" style={{ opacity: fade ? 1 : 0 }}>
          {/* Left - Image and basic info */}
          <div className="md:w-1/2 space-y-4">
            <div className="overflow-hidden rounded-xl shadow-lg">
              <img
                src={current.screenshot}
                alt={`${current.title} screenshot.`}
                className="w-full h-[24rem] object-cover transition-transform duration-500 ease-in-out hover:scale-105"
              />
            </div>
          </div>

          {/* Right - Description and button */}
          <div className="md:w-1/2 flex flex-col justify-between">
            <div className="my-4">
              <h3 className="font-black text-3xl font-spacegrotesk text-center md:text-right">{current.title}</h3>
              <p className=" text-xl text-center md:text-right">{current.author}</p>
              <p className=" text-xl italic text-center md:text-right">{current.event}</p>
            </div>
            <p className="text-2xl  leading-relaxed text-center md:text-right">{current.description}</p>
            <div className="mt-6 text-center md:text-right">
              <a
                href={current.learn_more}
                className="inline-block text-xl font-semibold px-6 py-3 bg-cgs  rounded-full custom-shadow-2 hover:bg-light transition duration-300"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
  
};

export default FeaturedShowcase;
