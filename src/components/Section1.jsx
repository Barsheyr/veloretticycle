import React from "react";
import Wrapper from "../assets/Wrapper.png";

const Section1 = () => {
  return (
    <section className="max-w-7xl mx-auto py-20 mt-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center px-10">
        <img src={Wrapper} alt="section1" className="w-full" />

        <div className="flex flex-col gap-10 md:px-52 lg:px-0">
          <h1 className="text-4xl tracking-tight sm:text-6xl">
            Bike plans for employees.
          </h1>
          <p className="font-light">
            Veloretti Electrics benefit both the environment and the health of
            your employees. Oh, and they look good too. Cost-free for the
            employer and outside of the WKR.
          </p>

          <div>Discover More</div>
        </div>
      </div>
    </section>
  );
};

export default Section1;
