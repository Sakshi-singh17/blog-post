// components/HeroSection.js
"use client";
import React from 'react';
import { Vortex } from "./ui/vortex";

const HeroSection = () => {
  return (
    <section className="w-full text-gray-600 body-font flex px-5 h-40% pt-0 shadow-black-xl/30">
      <Vortex
        backgroundColor="black"
        className="flex flex-col justify-end items-center w-full min-h-[25vh] h-full"
      >
        <div className="w-full flex flex-col items-center justify-end flex-auto mt-40 mb-10 pb-1">
          <div className="title-font sm:text-5xl text-3xl mb-4 font-bold text-gray-100 text-center">
            <h1>Code. Learn. Conquer</h1>
          </div>
          <h3 className="text-lg mb-4 leading-relaxed text-white text-center">
            My Journey from Hello World to Real-World.
          </h3>
          <p className="mb-8 max-w-2xl text-white text-center">
            Hey there! I’m Sakshi — a curious coder, tech explorer, and DSA warrior. This blog is where I turn bugs into breakthroughs and learning into legacies. Dive into real projects, coding concepts, tools, technologies, and my unfiltered journey through the world of software development.
          </p>
          <div className="flex flex-auto flex-col sm:flex-row w-full max-w-xl gap-4 items-center justify-center sm:items-stretch">
            <button onClick={() => {
              const topBlogs = document.getElementById("top-blogs");
              if (topBlogs) {
                topBlogs.scrollIntoView({ behavior: "smooth" });
              }
            }} className="p-[3px] relative">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
              <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
                Start Exploring
              </div>
            </button>
          </div>
        </div>
      </Vortex>
    </section>
  );
};

export default HeroSection;
