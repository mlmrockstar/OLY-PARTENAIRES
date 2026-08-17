import React, { useState } from "react";
import { OlyMark } from "./OlyLogo";
import { products } from "../mock";
import Reveal from "./Reveal";
import { Dialog, DialogContent } from "@/components/ui/dialog";

const Products = () => {
  const [active, setActive] = useState(null);

  return (
    <section className="oly-container">
      <Reveal>
        <div className="oly-card oly-card--green px-6 py-16 text-center md:py-20">
          <h2 className="oly-heading text-white">Nos Produits</h2>
        </div>
      </Reveal>

      <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2">
        {products.map((p, i) => (
          <Reveal key={p.id} delay={(i % 2) * 100}>
            <button
              type="button"
              onClick={() => setActive(p)}
              className="group flex h-full w-full flex-col rounded-3xl bg-white p-6 text-left shadow-xl transition-transform duration-300 hover:-translate-y-1.5 md:p-8"
            >
              <div className="mb-4 flex w-fit items-center gap-1.5 rounded-full border border-[#3a9d3a]/40 px-2 py-1">
                <OlyMark size={16} />
                <span className="text-xs font-semibold text-[#3a9d3a]">OlyLife</span>
              </div>
              <div className="flex h-56 items-center justify-center md:h-64">
                <img
                  src={p.image}
                  alt={p.name}
                  loading="lazy"
                  className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <h3 className="mt-6 font-heading text-2xl font-semibold text-neutral-900">
                {p.name}
              </h3>
              <p className="mt-1 text-lg font-semibold text-[#3a9d3a]">{p.price}</p>
              <p className="mt-3 text-sm leading-relaxed text-neutral-500">
                {p.description}
              </p>
              <span className="mt-5 inline-flex items-center text-sm font-semibold text-[#3a9d3a] opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                Voir les détails →
              </span>
            </button>
          </Reveal>
        ))}
      </div>

      <Dialog open={!!active} onOpenChange={(o) => !o && setActive(null)}>
        <DialogContent className="max-w-3xl w-[92vw] overflow-hidden rounded-3xl border-0 bg-white p-0">
          {active && (
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="flex items-center justify-center bg-neutral-50 p-8">
                <img
                  src={active.image}
                  alt={active.name}
                  className="max-h-72 max-w-full object-contain"
                />
              </div>
              <div className="p-8">
                <div className="mb-4 flex w-fit items-center gap-1.5 rounded-full border border-[#3a9d3a]/40 px-2 py-1">
                  <OlyMark size={16} />
                  <span className="text-xs font-semibold text-[#3a9d3a]">OlyLife</span>
                </div>
                <h3 className="font-heading text-3xl font-semibold text-neutral-900">
                  {active.name}
                </h3>
                <p className="mt-2 text-2xl font-bold text-[#3a9d3a]">{active.price}</p>
                <p className="mt-5 leading-relaxed text-neutral-600">
                  {active.description}
                </p>
                <a
                  href="#inscription"
                  onClick={() => setActive(null)}
                  className="oly-submit mt-8 inline-block !px-8 !py-3 text-center text-base"
                >
                  Commencer l'inscription
                </a>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Products;
