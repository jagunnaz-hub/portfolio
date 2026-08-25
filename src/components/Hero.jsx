export default function Hero() {
  return (
    <section className="flex gap-5 px-6 py-13 border h-screen">
      {/* hero description */}
      <div className="w-full">
        {/* label */}
        <span className="border border-purple-700 px-4 py-0.5 rounded-full bg-purple-200 text-purple-800 font-medium mb-5 block w-fit">
          Get premium
        </span>
        {/* heading */}
        <h1 className="text-5xl font-bold mb-5">
          Welcome to Zaneerah Holy Father Playing Ground
        </h1>
        {/* intro */}
        <p className="text-lg text-gray-600 mb-5">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus
          sed eaque fugiat tempore, cupiditate aliquid.
        </p>
        {/* cta */}
        <div>
          <button className="px-4 py-1 rounded-4xl bg-black text-white mr-5 font-medium">
            Join now
          </button>
          <button className="px-4 py-1 rounded-4xl border font-medium">
            Get started
          </button>
        </div>
      </div>
      {/* hero illustration */}
      <div className="w-full border h-auto overflow-hidden">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcx9jPW4FxFH_4OARrNOPq1Nv8q_0u1vcijiZregO08w&s=10"
          alt="headshot portrait"
          className="object-contain"
        />
      </div>
    </section>
  );
}
