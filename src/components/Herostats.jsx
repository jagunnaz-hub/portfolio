import React from "react";

export default function Herostats() {
  return (
    <section className=" px-6 py-10 flex gap-5 justify-between text-center">
      {/* single div */}
      <div>
        <h3 className="text-[40px] font-semibold">95%</h3>
        <p className="text-xl text-slate-400">Lorem, ipsum dolor.</p>
      </div>
      <div>
        <h3 className="text-[40px] font-semibold">10+</h3>
        <p className="text-xl text-slate-400">Lorem, ipsum dolor.</p>
      </div>
      <div>
        <h3 className="text-[40px] font-semibold">$10m</h3>
        <p className="text-xl text-slate-400">Lorem, ipsum dolor.</p>
      </div>
      <div>
        <h3 className="text-[40px] font-semibold">50m</h3>
        <p className="text-xl text-slate-400">Lorem, ipsum dolor.</p>
      </div>
    </section>
  );
}
