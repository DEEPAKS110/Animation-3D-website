export interface Product {
  id: string;
  name: string;
  tagline: string;
  price: string;
  description: string;
  folderPath: string;
  themeColor: string;
  gradient: string;
  features: string[];
  stats: { label: string; value: string }[];
  storySections: {
    kicker: string;
    title: string;
    copy: string;
  }[];
  detailsSection: {
    eyebrow: string;
    title: string;
    copy: string;
  };
  freshnessSection: {
    eyebrow: string;
    title: string;
    copy: string;
  };
  buyNowSection: {
    eyebrow: string;
    title: string;
    copy: string;
    delivery: string;
    returns: string;
  };
}

export const products: Product[] = [
  {
    id: "strawberry",
    name: "Primo Strawberry",
    tagline: "Smooth. Bold. Explosive.",
    price: "₹130",
    description:
      "A velvet-smooth strawberry escape, made for the moments that deserve a little more.",
    folderPath: "/images/prime",
    themeColor: "#C62828",
    gradient: "linear-gradient(135deg, #8B0000 0%, #C62828 100%)",
    features: ["Real strawberry taste", "Silky-smooth finish", "Best served chilled"],
    stats: [
      { label: "The flavour", value: "Strawberry" },
      { label: "The feeling", value: "Pure joy" },
      { label: "The serve", value: "Ice cold" },
    ],
    storySections: [
      {
        kicker: "01 / Meet your moment",
        title: "A little\nmore alive.",
        copy: "The first pour. The first taste. That unmistakable rush of strawberry, turned all the way up.",
      },
      {
        kicker: "02 / Made to be noticed",
        title: "Velvet, with\nan edge.",
        copy: "A luscious, creamy texture meets a bright berry hit. Familiar comfort, with a Primo-sized twist.",
      },
      {
        kicker: "03 / The good stuff",
        title: "Strawberry\nin full bloom.",
        copy: "Every sip is a celebration of the flavour you love: fragrant, playful and beautifully indulgent.",
      },
      {
        kicker: "04 / Make it a ritual",
        title: "Pour into\nthe feeling.",
        copy: "Chill it. Share it. Keep it all to yourself. However the moment unfolds, make it unmistakably yours.",
      },
    ],
    detailsSection: {
      eyebrow: "A flavour worth slowing down for",
      title: "Not just a sip.\nA strawberry state of mind.",
      copy: "Primo brings together a silky-smooth feel and a bright strawberry character for a deliciously indulgent little escape. Open, pour, and let the everyday become anything but.",
    },
    freshnessSection: {
      eyebrow: "The art of the chill",
      title: "Best enjoyed\nbeautifully cold.",
      copy: "Keep it chilled, pour it generously, and let that creamy strawberry goodness do its thing. A small ritual. A very good mood.",
    },
    buyNowSection: {
      eyebrow: "Your next favourite, found",
      title: "Make room\nfor Primo.",
      copy: "A little bottle of big strawberry energy. Yours for ₹130.",
      delivery: "Delivery updates at checkout",
      returns: "Easy support, whenever you need it",
    },
  },
];
