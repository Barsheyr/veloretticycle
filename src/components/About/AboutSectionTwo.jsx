import React from "react";
import SectionThree from "../../assets/section3.png";

const AboutSectionTwo = () => {
  return (
    <section className="max-w-7xl mx-auto py-20 ">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center px-10">
        <div className="flex flex-col gap-10 md:px-5 lg:px-0">
          <h1 className="text-4xl tracking-tight sm:text-6xl">
            Part Of Pon.bike
          </h1>
          <p className="font-light">
            Veloretti was founded in Amsterdam in 2012 with a mission to make
            clean, timeless bikes that are great quality and delivered to your
            door at a fair price. We are proud to now be part of Pon.Bike, the
            world-leading family of bike brands. With this support, we can
            continue to evolve our designs, take care of our riders, and help
            keep their bikes on the road.
          </p>
        </div>

        <img src={SectionThree} alt="Section1" className="w-full" />
      </div>
    </section>
  );
};

export default AboutSectionTwo;
