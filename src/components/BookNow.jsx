import React from "react";

const BookNow = () => {
  return (
    <section className=" bg-slate-500">
      <div className="max-w-6xl mx-auto px-20 py-20 flex lg:flex-row flex-col items-center justify-between gap-20">
        <p className="text-white">
          Ready to take the Electric Ivy or Ace for a spin? Electric test rides
          are now available in Amsterdam, Amstelveen, Abcoude, Bussum, Den Haag,
          Nijmegen, Weesp, Wormerveer, Berlin, Hamburg and Munich. Schedule your
          test ride now and we will see you there.
        </p>

        <div className="btn btn-lg rounded-full px-20 bg-white text-black hover:text-white border-none">
          Book Now
        </div>
      </div>
    </section>
  );
};

export default BookNow;
