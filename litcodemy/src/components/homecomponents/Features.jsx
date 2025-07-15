function Features() {
  const features = [
    {
      title: "Less Theory, More Practice",
      desc: "Build projects while learning. Apply concepts in real-time.",
    },
    {
      title: "Fast-Paced Learning",
      desc: "Structured in bite-sized, progressive modules.",
    },
    {
      title: "Peer Collaboration",
      desc: "Learn together, grow together. Connect with peers and mentors.",
    },
  ];

  return (
    <section className="py-20 px-6 md:px-24 bg-gradient-to-br from-blue-950 to-emerald-900 text-white text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-12">What Makes LitCodemy Different?</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((item, index) => (
          <div
            key={index}
            className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10 hover:shadow-lg hover:scale-[1.03] transition"
          >
            <h3 className="text-xl font-semibold text-emerald-300">{item.title}</h3>
            <p className="text-gray-300 mt-2">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

  
  export default Features;