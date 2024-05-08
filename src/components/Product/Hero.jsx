import React from "react";
import ProductHero from "../../assets/ProductHero.png";

const Hero = () => {
  return (
    <main className="h-[100vh] relative flex">
      <div className="text-white mt-10 z-20 flex flex-col item-center justify-center space-y-5 lg:px-20 px-5">
        <p className=" text-lg tracking-wide leading-tight">
          VELERETTI ELECTRIC
        </p>
        <h1 className="text-7xl  tracking-wide leading-tight">This Is Two.</h1>
        <p className="lg:text-xl text-xl">
          Introducing The All-New Ivy And Ice
        </p>
      </div>

      <div className="absolute top-0 w-full h-full">
        <img
          src={ProductHero}
          alt="ProductHero"
          className="object-cover h-[100vh] w-full"
        />
      </div>
    </main>
  );
};

export default Hero;
