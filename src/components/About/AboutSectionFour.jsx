import React from "react";
import AboutSectionThree from "../../assets/AboutsectionThree.png";

const AboutSectionFour = () => {
  return (
    <main className="h-[100vh] relative flex">
      <div
        className="text-white mt-10 z-20 flex flex-col lg:items-end justify-center space-y-5 lg:pl-[50%] px-5
       "
      >
        <h1 className="lg:text-8xl text-4xl tracking-wide leading-tight">
          Made for you
        </h1>

        <p className="lg:text-xl md:pr-52 lg:pr-0 font-thin text-base tracking-widest leading-tight">
          Elevate your ride with a bicycle that mirrors your unique style and
          personality. From an Ace Two electric bike with the latest technology
          packed into a minimalist design, or a bright yellow Berlin for those
          who like to ride light and have a craving for nostalgia. Our diverse
          range of models and colours cater to riders of all kinds.
        </p>
      </div>

      <div className="absolute top-0 w-full h-full">
        <img
          src={AboutSectionThree}
          alt="AboutHero"
          className="object-cover h-[100vh] w-full"
        />
      </div>
    </main>
  );
};

export default AboutSectionFour;
