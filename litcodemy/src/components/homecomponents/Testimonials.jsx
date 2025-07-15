function Testimonials() {
  const testimonials = [
    {
      name: "Comboni D.",
      comment: "Best structured content I’ve used online. Hands-on and fun.",
    },
    {
      name: "Opio D.",
      comment: "Best structured content I’ve used online. Hands-on and fun.",
    },
    {
      name: "Grace M.",
      comment: "This platform transformed my career path!",
    },
    {
      name: "Joseph K.",
      comment: "Best structured content I’ve used online. Hands-on and fun.",
    },
  ];

  return (
    <section className="bg-slate-900 py-16 px-6 md:px-24 text-white text-center">
      <h2 className="text-3xl font-bold mb-10">What Our Learners Say</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {testimonials.map((t, i) => (
          <div key={i} className="bg-white/10 backdrop-blur-sm p-6 rounded-xl shadow-md">
            <p className="italic">“{t.comment}”</p>
            <p className="mt-4 font-bold text-emerald-300">{t.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

  
  export default Testimonials;