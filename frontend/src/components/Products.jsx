import React from "react";
import { OlyMark } from "./OlyLogo";
import { products } from "../mock";

const Products = () => {
  return (
    <section className="oly-container">
      <div className="oly-card oly-card--green px-6 py-16 text-center md:py-20">
        <h2 className="oly-heading text-white">Nos Produits</h2>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2">
        {products.map((p) => (
          <article
            key={p.id}
            className="group flex flex-col rounded-3xl bg-white p-6 shadow-xl transition-transform duration-300 hover:-translate-y-1 md:p-8"
          >
            <div className="mb-4 flex items-center gap-1.5 rounded-full border border-[#3a9d3a]/40 px-2 py-1 w-fit">
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
          </article>
        ))}
      </div>
    </section>
  );
};

export default Products;
