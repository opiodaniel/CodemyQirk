import React from 'react';
import heroImg from '../../assets/images/hero-image.jpeg';

function Hero() {
  return (

    <section className="gradient-hero text-gray-900 py-12 relative overflow-hidden">
      {/* Subtle overlay */}
      <div className="absolute inset-0 bg-black opacity-10 z-10"></div>

      {/* Hero content */}
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-6 items-center z-20 relative">
        <div>
          <div className="text-2xl font-bold">
            <span className="text-5xl font-extrabold leading-tight tracking-tight bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">Welcome</span> to Codemy
            <span className="text-red-400 px-1 rounded">Qirk</span>
          </div>
          <p  className="text-sm mb-4">
            A modern e-learning platform built to accelerate your growth. Explore curated content, learn by doing, and master real-world skills.
          </p>
          <a
            href="#courses"
            className="inline-block bg-white text-green-700 px-4 py-1.5 text-sm rounded font-semibold hover:bg-gray-100"
          >
            Browse Courses
          </a>
        </div>
        <div className="hidden md:block">
          <img
            src={heroImg}
            alt="Learning Illustration"
            className="w-full h-44 object-cover rounded"
          />
        </div>
      </div>

      {/* Wave Curve at the bottom */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden z-30">
        <svg viewBox="0 0 1440 100" xmlns="http://www.w3.org/2000/svg" className="w-full h-24">
          <path
            fill="#f0fdf4" // Tailwind's green-50
            fillOpacity="1"
            d="M0,264 C360,0 1080,128 1440,64 L1440,100 L0,100 Z"
          />
        </svg>
      </div>
    </section>
  );
}

export default Hero;
