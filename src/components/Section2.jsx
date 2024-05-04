import React from "react";
import SectionTwo from "../assets/Section2.png";
const Section2 = () => {
  return (
    <main className="h-[100vh] relative flex">
      <div className="text-white mt-10 z-20 flex flex-col item-center justify-center space-y-5 lg:px-20 lg:pr-[40%] px-5">
        <h1 className="lg:text-6xl text-4xl tracking-wide leading-tight">
          Service, <br /> maintenance and insurance
        </h1>
        <p className="lg:text-xl font-thin text-xl lg:pr-[50%]">
          The lease includes an all-in service package. Throughout the entire 36
          months, you are fully insured against damage, theft and maintenance.
          In addition, you always have access to roadside assistance.
        </p>
      </div>

      <div className="absolute top-0 w-full h-full">
        <img
          src={SectionTwo}
          alt="AboutHero"
          className="object-cover h-[100vh] w-full"
        />
      </div>
    </main>
  );
};

export default Section2;
