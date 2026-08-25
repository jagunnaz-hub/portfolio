export default function Expertise() {
  return (
    <section className="px-6 py-13 bg-gray-300">
      <div className="flex gap-10">
        {/* description */}
        <div className="flex-1">
          <span className="border-3 text-slate-400 inline-block mb-6 rounded-full px-3 py-1 text-lg border-slate-400 uppercase">
            Expertise
          </span>
          <h2 className="text-5xl font-semibold mb-5">
            Discover our commitment to excellence
          </h2>
          <p className="text-xl mb-5">
            With over a decade of experience, we bring unparalleled expertise to
            every project we undertake. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Illo itaque voluptatem voluptatibus, temporibus
            quae a.
          </p>
          {/* CTA */}
          <button className="text-white px-5 py-2 rounded-full font-semibold text-xl flex items-center mt-10 bg-blue-500">
            Join Us
          </button>
        </div>

        {/* image */}
        <div className="flex-1 w-full h-100 rounded-3xl overflow-hidden">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyMOGPs9dzVRI9uTzcCoNLLAyZRJtdxYTd0Pwohl_ArA&s=10"
            alt=""
          />
        </div>
      </div>
    </section>
  );
}
