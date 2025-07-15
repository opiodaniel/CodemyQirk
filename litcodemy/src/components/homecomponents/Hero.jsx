function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-950 text-white py-28 px-6 md:px-24">
      {/* Glowing Background Blobs */}
      <div className="absolute top-[-50px] left-[-100px] w-[400px] h-[400px] bg-emerald-500 rounded-full blur-3xl opacity-20 animate-pulse" />
      <div className="absolute bottom-[-80px] right-[-100px] w-[300px] h-[300px] bg-blue-500 rounded-full blur-3xl opacity-20 animate-pulse-slow" />

      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
        {/* LEFT TEXT BLOCK */}
        <div className="max-w-xl space-y-6">
          <p className="uppercase text-sm tracking-widest text-emerald-400">LitCodemy Presents</p>
          <h1 className="text-5xl font-extrabold leading-tight">
            The Future of <span className="text-emerald-400">Learning</span> is Here.
          </h1>
          <p className="text-gray-300 text-lg">
            Learn in-demand tech skills. Build real projects. Connect with mentors. All in one place.
          </p>
          <div className="flex gap-4 pt-4">
            <a
              href="/register"
              className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold px-6 py-3 rounded-lg shadow"
            >
              Get Started
            </a>
            <a
              href="/login"
              className="bg-white text-slate-900 font-bold px-6 py-3 rounded-lg shadow hover:bg-gray-200"
            >
              Login
            </a>
          </div>
        </div>

        {/* RIGHT VISUAL */}
        <div className="w-full md:w-[500px]">
          <div className="bg-white/5 backdrop-blur-lg p-6 rounded-xl shadow-2xl border border-white/10">
            <pre className="text-green-300 text-sm font-mono">
{`$ npm install litcodemy
$ npm run learn

> Launching next-gen skills platform...
> Course: Fullstack Web Development
> Status: 🔥 Active`}
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}


export default Hero;