import React from "react";
import OlyLogo from "./OlyLogo";

const Footer = () => {
  return (
    <footer className="relative mt-16 py-16">
      <div className="flex justify-center">
        <OlyLogo size={44} />
      </div>
      <p className="mt-6 text-center text-xs text-white/40">
        OlyNation.team est uniquement une page de soutien d'équipe et ne collecte ni ne traite aucun paiement.
      </p>
    </footer>
  );
};

export default Footer;
