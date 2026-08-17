// Mock data for the OlyNation landing page clone (French)
// NOTE: All data here is MOCKED for the frontend-only clone.

export const CDN = "https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/NJsSTAo21OFuPdSx619E/media";

// Fixed dark forest / green-energy background used across the page
export const BG_IMAGE =
  "https://images.unsplash.com/photo-1637934992017-0df2bac8310d?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NjZ8MHwxfHNlYXJjaHwzfHxkYXJrJTIwanVuZ2xlJTIwbmlnaHR8ZW58MHx8fHwxNzg2OTU0NjQ4fDA&ixlib=rb-4.1.0&q=85";

// Green aurora / energy ribbon scene used inside media (video) sections
export const THUMB_IMAGE =
  "https://images.unsplash.com/photo-1643303188472-fc618af69f5b?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzB8MHwxfHNlYXJjaHwxfHxuaWdodCUyMGZvcmVzdCUyMGF1cm9yYXxlbnwwfHx8fDE3ODY5NTQ2Mzh8MA&ixlib=rb-4.1.0&q=85";

// Media sections (each opens an in-app YouTube viewer).
// NOTE: video IDs are PLACEHOLDERS until French videos are provided.
export const mediaSections = [
  {
    id: "pemf",
    title: ["Découvrez la PEMF : L'Innovation", "Derrière Nos Produits"],
    description:
      "Notre innovation phare en matière de bien-être, la technologie PEMF (Champ Électromagnétique Pulsé), transforme la façon dont les gens prennent soin de leur santé. Découvrez comment elle fonctionne et pourquoi elle est au cœur de notre vision d'un bien-être durable.",
    thumb: THUMB_IMAGE,
    videoUrl: "/videos/pemf.mp4",
    dark: true,
  },
  {
    id: "wellness",
    title: ["Bien-Être Total.", "Toujours à Portée de Main."],
    description:
      "Découvrez comment les appareils de bien-être de pointe d'OlyLife s'intègrent parfaitement à votre mode de vie, vous aidant à vous sentir mieux, à récupérer plus vite et à vivre plus librement.",
    thumb: THUMB_IMAGE,
    videoUrl: "/videos/wellness.mp4",
    dark: true,
  },
  {
    id: "earn",
    title: ["Un Seul Abonnement.", "Six Façons de Gagner."],
    description:
      "Bonus rapides, récompenses d'équipe, pools mondiaux, et bien plus. OlyLife est conçu pour s'adapter à votre mode de vie, que vous vous investissiez à plein temps ou que vous construisiez un revenu complémentaire.",
    thumb: THUMB_IMAGE,
    videoId: "R6MlUcmOul8",
    dark: true,
  },
];

export const products = [
  {
    id: "tera-p90",
    name: "OlyLife Tera-P90",
    price: "$1,000.00",
    image: `${CDN}/683ebbaeec03836f0d9abde5.png`,
    description:
      "L'OlyLife THz Tera-P90 stimule la santé cellulaire en combinant l'énergie bioélectromagnétique et térahertz.",
  },
  {
    id: "galaxy-g-one",
    name: "OlyLife Galaxy G-One",
    price: "$500.00",
    image: `${CDN}/683ebddaeca2401ec9eac896.png`,
    description:
      "Le GALAXY G-One est un masseur oculaire intelligent et pliable doté de la technologie PEMF, offrant 7 modes de soin des yeux, 4 technologies et une commande simple à un bouton pour un confort nomade.",
  },
  {
    id: "a9-bamaair",
    name: "OlyLife A9 Smart Anion BamaAir",
    price: "$500.00",
    image: `${CDN}/683ec00cec038378149d59cf.png`,
    description:
      "Le A9 Smart Anion BamaAir est un purificateur d'air avancé qui reproduit l'air riche en ions négatifs de Bama, Guangxi, pour offrir un air plus pur et revitalisant, au service de votre bien-être.",
  },
  {
    id: "vitality-wand",
    name: "OlyLife Vitality Wand",
    price: "$600.00",
    image: `${CDN}/683ec0a5ec0383000f9d92df.png`,
    description:
      "Le Vitality Wand utilise des ondes énergétiques ultra-longues et biologiques avec chaleur et flux d'air réglables pour une expérience mains libres qui soulage la fatigue.",
  },
  {
    id: "thz-tera-p90-plus",
    name: "OlyLife THZ Tera-P90+",
    price: "$1,500.00",
    image: `${CDN}/683ec0b0eca240ed37ed6219.png`,
    description:
      "L'OlyLife THz Tera-P90+ est un appareil de bien-être tout-en-un combinant la technologie PEMF à des outils de beauté et de massage pour une relaxation et un rajeunissement complets.",
  },
  {
    id: "skyline-sl-6",
    name: "OlyLife Skyline SL-6",
    price: "$500.00",
    image: `${CDN}/68f0ddf7535ff89e5bfaa27f.png`,
    description:
      "Skyline utilise des matériaux intelligents « cloud-sense » et une innovation magnéto-infrarouge pour améliorer la circulation, le confort et la confiance à chaque cycle.",
  },
  {
    id: "shaken-massager",
    name: "OlyLife Shaken Massager",
    price: "$1,000.00",
    image: `${CDN}/6916b898ac7fadb2f3295909.png`,
    description:
      "Le Shaken Massager cible la graisse abdominale tenace grâce à une technologie 7-en-1 incluant la PEMF, les ultrasons et la thermothérapie pour affiner la taille et soutenir la santé du tronc.",
  },
];

// Product quantity fields shown inside the registration form
export const productFields = [
  "OlyLife Tera P90",
  "OlyLife Vitality Wand",
  "OlyLife A9 Smart Anion BamaAir",
  "Frost Age Gel",
  "OlyLife THZ Tera-P90+",
  "OlyLife Galaxy G-One",
  "OlyLife Skyline SL-6",
  "OlyLife Shaken Massager",
];

export const countries = [
  "France", "Belgique", "Suisse", "Canada", "Luxembourg", "Monaco",
  "Maroc", "Algérie", "Tunisie", "Sénégal", "Côte d'Ivoire", "Cameroun",
  "États-Unis", "Royaume-Uni", "Allemagne", "Espagne", "Italie",
  "Pays-Bas", "Hong Kong", "Singapour", "Autre",
];

export const dialCodes = [
  { c: "FR", d: "+33", flag: "\uD83C\uDDEB\uD83C\uDDF7" },
  { c: "BE", d: "+32", flag: "\uD83C\uDDE7\uD83C\uDDEA" },
  { c: "CH", d: "+41", flag: "\uD83C\uDDE8\uD83C\uDDED" },
  { c: "CA", d: "+1", flag: "\uD83C\uDDE8\uD83C\uDDE6" },
  { c: "LU", d: "+352", flag: "\uD83C\uDDF1\uD83C\uDDFA" },
  { c: "MA", d: "+212", flag: "\uD83C\uDDF2\uD83C\uDDE6" },
  { c: "DZ", d: "+213", flag: "\uD83C\uDDE9\uD83C\uDDFF" },
  { c: "US", d: "+1", flag: "\uD83C\uDDFA\uD83C\uDDF8" },
  { c: "GB", d: "+44", flag: "\uD83C\uDDEC\uD83C\uDDE7" },
  { c: "SN", d: "+221", flag: "\uD83C\uDDF8\uD83C\uDDF3" },
];
