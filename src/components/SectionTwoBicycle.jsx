import React from "react";
import Bikerapper from "../assets/BikeWrapper.png";

const SectionTwoBicycle = () => {
  return (
    <div className="flex lg:flex-row flex-col max-w-7xl mx-auto py-20 items-center justify-between gap-20 px-5 lg:px-0">
      <div class="carousel w-full">
        <div
          id="slide1"
          class="carousel-item relative w-full grid bg-slate-100"
        >
          <div className="flex flex-row items-center justify-between px-20 mt-10">
            <h1 className="text-3xl text-black"> Electric Ace </h1>
            <p> $560 /MONTH </p>
          </div>
          <img src={Bikerapper} class="w-full" />
          <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" class="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" class="btn btn-circle">
              ❯
            </a>
          </div>
          <p className="bg-blue-500 rounded-full max-6xl mx-auto px-5 py-1 mb-10">
            Blue
          </p>
        </div>
        {/* 2 */}
        <div
          id="slide2"
          class="carousel-item relative w-full grid bg-slate-100"
        >
          <div className="flex flex-row items-center justify-between px-20 mt-10">
            <h1 className="text-3xl text-black"> Electric Ace </h1>
            <p> $4990 /MONTH </p>
          </div>
          <img src={Bikerapper} class="w-full" />
          <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" class="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" class="btn btn-circle">
              ❯
            </a>
          </div>
          <p className="bg-green-500 rounded-full max-6xl mx-auto px-5 py-1 mb-10">
            Green
          </p>
        </div>
        {/* 3 */}
        <div
          id="slide3"
          class="carousel-item relative w-full grid bg-slate-100"
        >
          <div className="flex flex-row items-center justify-between px-20 mt-10">
            <h1 className="text-3xl text-black"> Electric Ace </h1>
            <p> $699 /MONTH </p>
          </div>
          <img src={Bikerapper} class="w-full" />
          <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" class="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" class="btn btn-circle">
              ❯
            </a>
          </div>
          <p className="bg-yellow-500 rounded-full max-6xl mx-auto px-5 py-1 mb-10">
            Yellow
          </p>
        </div>
        {/* 4 */}
        <div
          id="slide4"
          class="carousel-item relative w-full grid bg-slate-100"
        >
          <div className="flex flex-row items-center justify-between px-20 mt-10">
            <h1 className="text-3xl text-black"> Electric Ace </h1>
            <p className="font-bold"> $699 /MONTH </p>
          </div>
          <div className="text-center">
            <p> GPS and AI Assistance </p>
          </div>
          <img src={Bikerapper} class="w-full" />
          <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" class="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" class="btn btn-circle">
              ❯
            </a>
          </div>
          <p className="bg-black text-white rounded-full max-6xl mx-auto px-5 py-1 mb-10">
            Black
          </p>
        </div>
      </div>

      {/* second */}
      <div class="carousel w-full">
        <div
          id="slide1"
          class="carousel-item relative w-full grid bg-slate-100"
        >
          <div className="flex flex-row items-center justify-between px-20 mt-10">
            <h1 className="text-3xl"> Electric Ivy </h1>
            <p> $295 /MONTH </p>
          </div>
          <img src={Bikerapper} class="w-full" />
          <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" class="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" class="btn btn-circle">
              ❯
            </a>
          </div>
          <p className="bg-black text-white rounded-full max-6xl mx-auto px-5 py-1 mb-10">
            Black
          </p>
        </div>
        {/* 2 */}
        <div
          id="slide2"
          class="carousel-item relative w-full grid bg-slate-100"
        >
          <div className="flex flex-row items-center justify-between px-20 mt-10">
            <h1 className="text-3xl"> Electric Ivy </h1>
            <p> $399 /MONTH </p>
          </div>
          <img src={Bikerapper} class="w-full" />
          <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" class="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" class="btn btn-circle">
              ❯
            </a>
          </div>
          <p className="bg-yellow-500 rounded-full max-6xl mx-auto px-5 py-1 mb-10">
            Yellow
          </p>
        </div>
        {/* 3 */}
        <div
          id="slide3"
          class="carousel-item relative w-full grid bg-slate-100"
        >
          <div className="flex flex-row items-center justify-between px-20 mt-10">
            <h1 className="text-3xl"> Electric Ivy </h1>
            <p> $499 /MONTH </p>
          </div>
          <img src={Bikerapper} class="w-full" />
          <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" class="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" class="btn btn-circle">
              ❯
            </a>
          </div>
          <p className="bg-green-500 rounded-full max-6xl mx-auto px-5 py-1 mb-10">
            Green
          </p>
        </div>
        {/* 4 */}
        <div
          id="slide4"
          class="carousel-item relative w-full grid bg-slate-100"
        >
          <div className="flex flex-row items-center justify-between px-20 mt-10">
            <h1 className="text-3xl"> Electric Ivy </h1>
            <p> $599 /MONTH </p>
          </div>
          <img src={Bikerapper} class="w-full" />
          <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" class="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" class="btn btn-circle">
              ❯
            </a>
          </div>
          <p className="bg-red-500 rounded-full max-6xl mx-auto px-5 py-1 mb-10">
            Red
          </p>
        </div>
      </div>
    </div>
  );
};

export default SectionTwoBicycle;
