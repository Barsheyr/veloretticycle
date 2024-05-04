import React from "react";
import AboutUsNew from "../../assets/AboutUsNew.png";

const Hero = () => {
  return (
    <main className="h-[100vh] relative flex">
      <div className="text-white mt-10 z-20 flex flex-col item-center justify-center space-y-5 lg:px-20 px-5">
        <p className=" text-lg tracking-wide leading-tight">
          VELERETTI ELECTRIC
        </p>
        <h1 className="text-7xl  tracking-wide leading-tight">About Us</h1>
        <p className="lg:text-xl text-xl">Forever Forward</p>
      </div>

      <div className="absolute top-0 w-full h-full">
        <img
          src={AboutUsNew}
          alt="AboutUsHero"
          className="object-cover h-[100vh] w-full"
        />
      </div>
    </main>
  );
};

export default Hero;
