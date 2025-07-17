import React from 'react';

const HeroSection = () => {
  return (
    <section className="px-6 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8 py-10">
      <div className="flex-1 space-y-6">
        <h1 className="text-4xl md:text-5xl font-extrabold text-green-900 leading-tight">
          Maximize skill, minimize budget
        </h1>
        <p className="text-green-800 text-lg">
          Our modern courses across in-demand skills will give you the knowledge to shape your future.
        </p>
        <button className="bg-gradient-to-r from-green-600 to-green-400 text-white px-8 py-3 rounded-3xl font-semibold">
          Start Learning
        </button>
      </div>
      <div className="flex-1 hidden md:block">
        <img src="/images/hero-image.jpeg" alt="Hero" className="max-w-md rounded-xl shadow-lg" />
      </div>
    </section>
  );
};

export default HeroSection;