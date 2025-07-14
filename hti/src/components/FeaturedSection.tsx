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
    author: "Ultra Ring",
    event: "Chao Games Showcase 2023",
    screenshot:
      "/assets/featured/sonic-legends.png",
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
      "/assets/featured/bubs-big-blow.png",
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
      "/assets/featured/prototype-n.png",
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
      "/assets/featured/tails-picross.png",
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
      "/assets/featured/verdilla.png",
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
        <p className="text-lg mb-12">
          Take a look at some games that have been previously shown off.
        </p>

        <div className="flex flex-col md:flex-row gap-10 items-stretch">
          {/* Left - Image and basic info */}
          <div className="md:w-1/2 space-y-4">
            <div
              className={`overflow-hidden rounded-xl shadow-lg transition-opacity duration-500 ${
                fade ? "opacity-100" : "opacity-0"
              }`}
            >
              <img
                src={current.screenshot}
                alt={`${current.title} screenshot.`}
                className="w-full h-[24rem] object-cover transition-transform duration-500 ease-in-out hover:scale-105"
              />
            </div>
          </div>

          {/* Right - Text content */}
          <div className="md:w-1/2 flex flex-col justify-between">
            <div
              className={`transition-opacity duration-500 ${
                fade ? "opacity-100" : "opacity-0"
              }`}
            >
              <div className="my-4">
                <h3 className="font-black text-3xl font-spacegrotesk text-center md:text-right">
                  {current.title}
                </h3>
                <p className="text-xl text-center md:text-right">
                  {current.author}
                </p>
                <p className="text-xl italic text-center md:text-right">
                  {current.event}
                </p>
              </div>
              <p className="text-2xl leading-relaxed text-center md:text-right">
                {current.description}
              </p>
            </div>

            {/* Learn More button (NOT fading) */}
            <div className="mt-6 text-center md:text-right">
              <a
                href={current.learn_more}
                className="inline-block text-xl font-semibold px-6 py-3 bg-cgs rounded-full custom-shadow-2 hover:bg-light transition duration-300"
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
