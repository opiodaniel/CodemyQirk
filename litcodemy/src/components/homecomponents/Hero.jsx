import React from 'react';
//import heroImg from '../../assets/images/hero-image.jpeg';

function Hero() {
  return (
    <section className="gradient-hero text-gray-900 py-10 relative overflow-hidden">
      {/* Subtle overlay */}
      <div className="absolute inset-0 bg-black opacity-10 z-10"></div>

      {/* Hero content */}
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-6 items-center z-20 relative">
        {/* Left Content */}
        <div>
          <h1 className="text-2xl font-bold mb-2">
            <span className="text-5xl font-extrabold leading-tight tracking-tight bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
              Welcome
            </span>{" "}
            to Codemy
            <span className="text-red-400 px-1">Qirk</span>
          </h1>
          <p className="text-sm mb-4 text-gray-700">
            Learn by doing. Master real-world skills with curated, hands-on content.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-3">
            <a
              href="/login"
              className="bg-white text-green-700 px-4 py-2 text-sm rounded font-semibold hover:bg-gray-100 transition"
            >
              Login
            </a>
            <a
              href="/register"
              className="bg-green-700 text-white px-4 py-2 text-sm rounded font-semibold hover:bg-green-800 transition"
            >
              Get Started
            </a>
            <a
              href="#courses"
              className="text-sm underline text-green-700 hover:text-green-800 mt-1"
            >
              Browse Courses 
            </a>
          </div>
        </div>

        {/* Right Illustration */}
        {/* <div className="hidden md:block">
          <img
            src={heroImg}
            alt="Learning Illustration"
            className="w-full h-44 object-cover rounded"
          />
        </div> */}


        {/* 🖥️ Terminal Preview */}
        <div className="hidden md:block mt-16 w-full max-w-xl bg-black/5 backdrop-blur-md p-6 rounded-xl shadow-xl border border-black/10 text-left">
          <pre className="text-black-300 text-sm font-mono leading-relaxed">
          {`$ npm install litcodemy
          $ npm run learn
          > Launching your learning journey...
          > Course: Advanced Fullstack Web Dev
          > Modules: 12 | Time: 8 weeks | Status:🔥 Active`}
          </pre>
        </div>

      </div>
    

      {/* SVG Wave */}
      <svg
        className="absolute bottom-0 left-0 w-full h-16 text-white z-20"
        viewBox="0 0 1440 100"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <path
          d="M0,50 C360,20 1080,80 1440,50 L1440,100 L0,100 Z"
          fill="white"
        />
      </svg>
    </section>
  );
}

export default Hero;

