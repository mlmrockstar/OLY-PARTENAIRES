import React from "react";
import RegistrationForm from "./RegistrationForm";

const CTAForm = () => {
  return (
    <section className="oly-container">
      <div className="oly-card oly-card--dark px-6 py-14 md:px-14 md:py-16">
        <h2 className="oly-heading text-center text-white">Prêt à Passer à l'Action ?</h2>
        <p className="oly-sub mx-auto mt-5 max-w-2xl text-center text-white/70">
          Vous avez vu la vision, la technologie et l'opportunité. Maintenant,
          c'est à vous de jouer. Que vous soyez ici pour améliorer votre santé,
          grandir personnellement ou faire partie de quelque chose de
          significatif, votre prochaine étape commence aujourd'hui. Passez à
          l'action. Impliquez-vous. Construisons ensemble quelque chose
          d'extraordinaire.
        </p>
        <div className="mx-auto mt-10 max-w-3xl rounded-3xl bg-black/20 p-6 md:p-10 ring-1 ring-white/10">
          <RegistrationForm />
        </div>
      </div>
    </section>
  );
};

export default CTAForm;
