import React from "react";
import Reveal from "./Reveal";

const Hero = () => {
  return (
    <section className="oly-container">
      <Reveal>
        <div className="oly-card oly-card--green px-6 py-16 text-center md:px-16 md:py-20">
          <h1 className="oly-heading text-white drop-shadow-sm">
            <span className="block">Votre Prochaine Étape Commence</span>
            <span className="block">Ici avec OlyLife</span>
          </h1>
          <p className="oly-sub mx-auto mt-6 max-w-3xl text-white/90">
            Ce n'est pas juste une opportunité de plus - c'est un chemin vers le
            sens, le bien-être et la croissance. Chez OlyLife, nous croyons qu'il
            faut aider les gens à créer un changement significatif dans leur vie
            et dans celle des autres. Que vous soyez ici pour soutenir votre
            santé, partager quelque chose auquel vous croyez, ou évoluer vers un
            nouveau rôle, c'est ici que tout commence.
          </p>
          <p className="oly-sub mx-auto mt-6 max-w-3xl text-white/90">
            Commencez là où vous êtes. Progressez à votre rythme. Faites la
            différence en chemin.
          </p>
        </div>
      </Reveal>
    </section>
  );
};

export default Hero;
