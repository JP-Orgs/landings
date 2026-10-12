// prefija rutas de assets con el base path del sitio (necesario en GitHub Pages: /landings)
const base = import.meta.env.BASE_URL.replace(/\/$/, "");
const asset = (path: string) => `${base}${path}`;

export const business = {
  name: "KraftoHome",
  waNumber: "5491132340725",
  accent: "#c2661f",
  // Si consiguen dominio propio: cambiar a ese dominio (y sacar `base` de astro.config.mjs)
  domain: "https://jp-orgs.github.io/landings",
  locality: "Hurlingham",
  region: "Buenos Aires",
  instagram: "https://www.instagram.com/kraftohome",
  tiktok: "https://tiktok.com/@kraftohome",
};

export const waLink = `https://wa.me/${business.waNumber}`;

export type Feature = {
  title: string;
  icon: "manufacturing" | "customFit" | "delivery" | "hardware";
};

export const features: Feature[] = [
  { title: "Fabricación propia", icon: "manufacturing" },
  { title: "Centrados en el detalle", icon: "customFit" },
  { title: "Envío e instalación en el domicilio", icon: "delivery" },
  { title: "Herrajes de calidad", icon: "hardware" },
];

export type WorkItem = {
  photo: string;
  alt: string;
};

export const work: WorkItem[] = [
  {
    photo: asset("/images/closet-finished.jpg"),
    alt: "Vestidor de melamina fabricado a medida",
  },
  {
    photo: asset("/images/tv-unit-finished.jpg"),
    alt: "Placar con mueble de TV fabricado a medida",
  },
  {
    photo: asset("/images/kitchen-finished.jpg"),
    alt: "Cocina de melamina fabricada a medida",
  },
  {
    photo: asset("/images/wardrobe-after.jpg"),
    alt: "Placar fabricado a medida",
  },
];

export type BeforeAfterItem = {
  before: string;
  after: string;
  alt: string;
};

export const beforeAfter: BeforeAfterItem[] = [
  {
    before: asset("/images/closet-before.jpg"),
    after: asset("/images/closet-finished.jpg"),
    alt: "Vestidor de melamina a medida",
  },
  {
    before: asset("/images/wardrobe-before.jpg"),
    after: asset("/images/wardrobe-after.jpg"),
    alt: "Placar con estantes y cajones a medida",
  },
  {
    before: asset("/images/tv-unit-before.jpg"),
    after: asset("/images/tv-unit-finished.jpg"),
    alt: "Mueble de TV con biblioteca a medida",
  },
];

export type Faq = {
  question: string;
  answer: string;
};

// TODO: confirmar/reescribir con datos reales del negocio antes de publicar
export const faqs: Faq[] = [
  {
    question: "¿Cuánto tardan en fabricar un mueble a medida?",
    answer:
      "Depende del proyecto, pero en general entre 2 y 4 semanas desde que confirmamos las medidas y el diseño.",
  },
  {
    question: "¿Hacen envío e instalación a domicilio?",
    answer:
      "Sí, entregamos e instalamos en el domicilio del cliente, dentro y fuera de Hurlingham.",
  },
  {
    question: "¿Qué formas de pago aceptan?",
    answer:
      "Aceptamos transferencia y efectivo. Consultanos por WhatsApp para coordinar según tu proyecto.",
  },
  {
    question: "¿Los muebles tienen garantía?",
    answer:
      "Sí, todos nuestros muebles tienen garantía de fabricación sobre herrajes y terminaciones.",
  },
];
