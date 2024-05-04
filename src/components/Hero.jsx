import React from "react";
import Herosection from "../assets/HeroSection.png";

const Hero = () => {
  return (
    <main className="h-[100vh] relative flex">
      <div className="text-white mt-10 z-20 flex flex-col item-center justify-center space-y-5 lg:px-20 px-5">
        <p className="lg:text-xl text-xl tracking-widest leading-tight">
          Veloretti Business
        </p>
        <h1 className="lg:text-8xl text-4xl tracking-wide leading-tight">
          Bike Lease Plan For Employees.
        </h1>
      </div>

      <div className=" absolute top-0 w-full h-full">
        <img className="object-cover h-full w-full" src={Herosection} alt="" />
      </div>
    </main>
  );
};

export default Hero;
