export const business = {
  name: "KraftoHome",
  waNumber: "5491132340725",
  accent: "#c2661f",
  // TODO: reemplazar por el dominio real antes de publicar
  domain: "https://REEMPLAZAR-DOMINIO",
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
    photo: "/images/closet-finished.jpg",
    alt: "Vestidor de melamina fabricado a medida",
  },
  {
    photo: "/images/tv-unit-finished.jpg",
    alt: "Placar con mueble de TV fabricado a medida",
  },
  {
    photo: "/images/kitchen-finished.jpg",
    alt: "Cocina de melamina fabricada a medida",
  },
  {
    photo: "/images/entryway-finished.jpg",
    alt: "Recibidor con estante flotante fabricado a medida",
  },
];

export type BeforeAfterItem = {
  before: string;
  after: string;
  alt: string;
};

export const beforeAfter: BeforeAfterItem[] = [
  {
    before: "/images/closet-before.jpg",
    after: "/images/closet-finished.jpg",
    alt: "Vestidor de melamina a medida",
  },
  {
    before: "/images/wardrobe-before.jpg",
    after: "/images/wardrobe-after.jpg",
    alt: "Placar con estantes y cajones a medida",
  },
  {
    before: "/images/tv-unit-before.jpg",
    after: "/images/tv-unit-finished.jpg",
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
