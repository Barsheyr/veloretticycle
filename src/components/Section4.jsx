import React from "react";
import SectionFour from "../assets/Secction4.png";

const Section4 = () => {
  return (
    <section className="max-w-7xl mx-auto py-20 mt-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center px-10">
        <div className="flex flex-col gap-10 md:px-20 order-2 lg:order-none lg:px-0">
          <h1 className="text-4xl tracking-tight sm:text-6xl">How it works</h1>
          <div className="flex flex-col gap-5">
            <div>
              <h1 className="text-3xl"> Register your company </h1>
              <p className="text-slate-500 font-light">
                Fill in our registration form with your company details. After
                your registration, our leasing partner will do a credit check.
                You will hear whether your application has been approved within
                24 hours.
              </p>
            </div>
            <div>
              <h1 className="text-3xl"> Determine the requirements</h1>
              <p className="text-slate-500 font-light">
                You get acces to the digital platform. Set the requirements for
                your employees and share the registration link.
              </p>
            </div>
            <div>
              <h1 className="text-3xl"> Ride your bike! </h1>
              <p className="text-slate-500 font-light">
                Lets go! Your employees can choose their bikes and they ll be
                delivered straight to their homes.
              </p>
            </div>
            <div>
              <h1 className="text-3xl"> Administration </h1>
              <p className="text-slate-500 font-light">
                Everything in one place. The digital platform gives you an easy
                overview of all the information for your payroll.
              </p>
            </div>
          </div>
        </div>

        <img src={SectionFour} alt="Section1" className="w-full" />
      </div>
    </section>
  );
};

export default Section4;
