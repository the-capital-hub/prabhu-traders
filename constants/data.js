import {
  Anchor,
  Globe,
  Handshake,
  Package,
  ShieldCheck,
  Store,
  Target,
  TrendingUp,
  Truck,
} from "lucide-react";

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Our Products", href: "#products" },
  { label: "Contact Us", href: "#contact" },
];

export const HERO_SLIDES = [
  {
    title: "Trusted Commodity Trading Partner For 30+ Years",
    image: "/images/herobg.png",
  },
  {
    title:
      "A Seasoned Trading Company With Over Three Decades Of Excellence In Sourcing, Supplying, And Exporting Premium Agri And Non-Agri Commodities",
    image: "/images/herobg1.jpg",
  },
  {
    title: "Powerful Network Across The Globe",
    image: "/images/herobg2.jpg",
  },
];

export const HERO_CONTENT = {
  stats: [
    "30+ Years Of Industry Experience",
    "Verified Quality Sourcing",
    "Global Supply Network",
    "Reliable & Timely Deliveries",
    "Competitive Pricing",
  ],
};

export const ABOUT_CONTENT = {
  title: "ABOUT PRABHU TRADERS",
  paragraphs: [
    "Founded over 30 years ago, Prabhu Traders has grown into a trusted name in agri and non-agri commodity trading. Built on the pillars of quality, integrity, and long-term relationships, we serve wholesalers, distributors, processors, exporters, and institutional buyers across India and international markets.",
    "Our expertise lies in carefully sourcing high-quality produce directly from farmers, processors, and certified suppliers, ensuring strict quality checks at every stage of procurement and dispatch.",
    "We believe in building partnerships, not just transactions.",
  ],
  images: [
    "/images/rice-field.jpg",
    "/images/spices.jpg",
    "/images/frozen-food.jpg",
  ],
};

export const PRODUCTS_CONTENT = [
  {
    id: "rice",
    category: "Agri Commodities – Rice",
    description:
      "We supply high-quality rice varieties that are widely demanded in both domestic and international markets. Each batch is carefully sourced from verified mills, processed using modern milling techniques, and tested under strict quality control measures to ensure uniform grain size, purity, and consistent taste. Our rice is packed hygienically and supplied in bulk quantities, making it suitable for wholesalers, distributors, and large-scale buyers.",
    highlights: [
      "Premium milling standards",
      "Uniform grain size",
      "Hygienic packaging",
      "Bulk & container-level supply",
    ],
    image: "/images/product1.png",
    tags: [],
  },
  {
    id: "pulses",
    category: "Agri Commodities – Pulses",
    description:
      "Our wide range of pulses is sourced from trusted growers and certified processors to meet consistent quality, nutrition, and safety standards. We focus on delivering clean, well-graded, and carefully processed pulses that retain their natural taste and nutritional value. With reliable sourcing and bulk supply capabilities, our pulses are ideal for both domestic distribution and export markets.",
    productRangeTitle: "Product Range Includes:",
    tags: [
      "Toor Dal",
      "Chana Dal",
      "Moong Dal",
      "Urad Dal",
      "Other regional pulse varieties",
    ],
    image: "/images/product2.png",
    highlights: [],
  },
   {
    id: "sugar",
    category: "Agri Commodities – Refined Cane Sugar",
    description:"We supply premium-quality refined cane sugar that meets both domestic and international standards. Sourced from trusted sugar mills and processed using advanced refining techniques, our sugar ensures high purity, uniform crystal size, and consistent sweetness. Each batch undergoes strict quality checks for moisture, color, and purity, making it ideal for food processing, beverages, pharmaceuticals, and industrial applications. Our refined sugar is hygienically packed and available in bulk quantities to cater to wholesalers, distributors, and large-scale buyers.",
    productRangeTitle: "Product Range Includes:",
    // tags: [
    //   // "Toor Dal",
    //   // "Chana Dal",
    //   // "Moong Dal",
    //   // "Urad Dal",
    //   // "Other regional pulse varieties",
    // ],
    image: "/images/Refined-sugar.png",
    highlights: [
      "High purity and consistent quality",
      "Uniform crystal size",
      "Low moisture content",
      "Hygienic and export-grade packaging",
    ],
  },
 {
  id: "frozen",
  category: "Food Products – Frozen Foods",
  description:
    "We supply a wide range of frozen food products handled through advanced cold-chain systems to preserve freshness, taste, and nutritional value. Our products are processed and packed in hygienic facilities, ensuring consistent quality and long shelf life. With a strong focus on food safety and export-grade standards, our frozen foods are suitable for bulk buyers, distributors, and international markets.",
  productRangeTitle: "Product Categories:",
  tags: [
    "Frozen Vegetables",
    "Frozen Ready Foods",
    "Processed Frozen Products",
  ],
  images: [
    "/images/drumstick.jpg",
    "/images/carrot.jpg",
    "/images/pea.jpg",
    "/images/jackfruit.jpeg",
    "/images/mixveg.jpg",
    "/images/okra.jpg",
    "/images/beetroot.jpg",
  ],

  highlights: [],
},
  {
    id: "seafood",
    category: "Seafood – Fish & Prawns",
    description:
      "Prabhu Traders supplies export-quality frozen fish and prawns sourced from certified fisheries and processed in modern, hygienic facilities. Our seafood products are handled under strict quality and temperature controls to maintain freshness, texture, and taste. Available in IQF and block frozen formats, our seafood range is ideal for international buyers, importers, and large-scale food distributors.",
    productRangeTitle: "Specialities Include:",
    tags: [
      "White Prawns",
      "Tiger Prawns",
      "Freshwater & Seawater Fish",
      "IQF & Block Frozen Formats",
    ],
    image: "/images/product4.png",
    highlights: [],
  },
  {
    id: "granite",
    category: "Granite – Premium Natural Stone Blocks",
    description:
      "Prabhu Traders specializes in the export of premium granite blocks from India to China, catering to the growing demand for high-quality natural stone used in construction, infrastructure, and luxury projects. Our granite is sourced from reputed quarries, carefully selected for color, strength, and finish, and supplied in bulk quantities to meet international project requirements.",
    highlights: [
      "Black Galaxy Granite",
      "Tan Brown Granite",
      "Kashmir White Granite",
    ],
    productRangeTitle: "Sourced From:",
    tags: ["Rajasthan", "Andhra Pradesh", "Karnataka"],
    image: "/images/product5.png",
  },
];

export const PROCESS_STEPS = [
  {
    title: "Requirement Understanding",
    description:
      "We evaluate buyer specifications for quality, volume, packaging, and delivery timelines.",
    icon: Target,
    color: "bg-red-50",
  },
  {
    title: "Sourcing & Quality Check",
    description:
      "Products are sourced directly from trusted farmers, mills, processors, and certification-verified vendors.",
    icon: ShieldCheck,
    color: "bg-yellow-50",
  },
  {
    title: "Processing & Packing",
    description:
      "Products are cleaned, processed, packed, and stored as per industry and export standards",
    icon: Package,
    color: "bg-green-50",
  },
  {
    title: "Logistics & Dispatch",
    description:
      "We ensure timely dispatch with full documentation and tracking support.",
    icon: Truck,
    color: "bg-blue-50",
  },
  {
    title: "After-Sales Support",
    description: "We believe in long-term partnerships and continuous support.",
    icon: Handshake,
    color: "bg-lime-50",
  },
];

export const INDUSTRIES_SERVED = [
  {
    title: "Importers & Exporters",
    description:
      "Bulk procurement with export documentation, pre-shipment QC, and CNF/FOB dispatch from major Indian ports.",
    icon: "/images/industriesicon1.png",
    image: "/images/industries1.png",
  },
  {
    title: "Wholesalers & Distributors",
    description:
      "Reliable, price‑competitive supply with consistent grades and flexible pack sizes for regional distribution.",
    icon: "/images/industriesicon2.png",
    image: "/images/industries2.png",
  },
  {
    title: "Retail Chains",
    description:
      "Retail‑ready, food‑safe SKUs with barcoding and batch traceability, delivered via streamlined logistics.",
    icon: "/images/industriesicon3.png",
    image: "/images/industries3.png",
  },
];

export const QUALITY_CONTENT = {
  title: "QUALITY ASSURANCE",
  description:
    "At Prabhu Traders, quality is not negotiable. Every consignment undergoes:",
  points: [
    "Batch traceability",
    // "Moisture & purity checks",
    "Multi-stage quality inspection",
    "Export-grade packaging standards",
    "Cold-chain compliance for frozen products",
  ],
  footer: "Our reputation is built on consistent quality and reliable supply.",
  image: "/images/image2.png",
};

export const GLOBAL_REACH = [
  { name: "India", icon: Store, color: "bg-red-50" },
  { name: "Middle East", icon: Globe, color: "bg-yellow-50" },
  { name: "South-East Asia", icon: TrendingUp, color: "bg-teal-50" },
  { name: "Africa", icon: Anchor, color: "bg-blue-50" },
  { name: "Key Global Trade Markets", icon: Globe, color: "bg-lime-100" },
];

export const TESTIMONIALS = [
  {
    name: "Rohan Sharma",
    handle: "@rohan_sharma",
    text: "Prabhu Traders delivered consistent quality and on-time shipments across multiple orders.",
    highlight: "consistent quality and on-time shipments",
    platform: "twitter",
    image: "/images/testimg1.jpg",
  },
  {
    name: "Ananya Iyer",
    handle: "@ananya_iyer",
    text: "Great team — transparent pricing and quick responses. Makes procurement straightforward.",
    highlight: "transparent pricing and quick responses",
    platform: "twitter",
    image: "/images/testimgg1.jpg",
  },
  {
    name: "Mukesh Patel",
    handle: "@mukesh_patel",
    text: "Reliable sourcing for rice and pulses; documentation was spot on.",
    highlight: "Reliable sourcing for rice and pulses",
    platform: "linkedin",
    image: "/images/testimg2.jpg",
  },
  {
    name: "Priya Nair",
    handle: "@priya_nair",
    text: "We scaled orders confidently thanks to their QC and logistics support.",
    highlight: "QC and logistics support",
    platform: "twitter",
    image: "/images/testimgg2.jpg",
  },
  {
    name: "Arjun Mehta",
    handle: "@arjun_mehta",
    text: "Value pricing without compromising quality — our repeat orders say it all.",
    highlight: "Value pricing without compromising quality",
    platform: "linkedin",
    image: "/images/testimg3.jpg",
  },
  {
    name: "Kavya Rao",
    handle: "@kavya_rao",
    text: "Communication is clear, timelines realistic, and execution dependable.",
    highlight: "Communication is clear",
    platform: "twitter",
    image: "/images/testimgg3.jpg",
  },
  {
    name: "Suresh Reddy",
    handle: "@suresh_reddy",
    text: "From sampling to final dispatch, the process was professional end to end.",
    highlight: "professional end to end",
    platform: "twitter",
    image: "/images/testimg4.jpg",
  },
  {
    name: "Neha Gupta",
    handle: "@neha_gupta",
    text: "Our export buyers appreciated the packaging and certifications.",
    highlight: "packaging and certifications",
    platform: "linkedin",
    image: "/images/testimgg4.jpg",
  },
];

export const CTA_CONTENT = {
  title: "Looking for a Reliable Commodity Trading Partner?",
  description:
    "Get in touch with Prabhu Traders today for bulk supply, export orders, or long-term sourcing partnerships.",
  buttonText: "Contact Us",
  image: "/images/contactimg.png",
  contacts: [
    { label: "Phone", value: "+919949911232, +919100939323", type: "phone" },
    { label: "Email", value: "gv@prabhutraders.in, kiran@prabhutraders.in", type: "email" },
    { label: "WhatsApp", value: "+91 98765 43210", type: "whatsapp" },
    {
      label: "Address",
      value: "PRABHU TRADERS PRIVATE LIMITED, H.NO 2-22-298/16/SSVI-S/VF, BHAGYA NAGAR COLONY, KPHB, KUKATPALLY HYDERABAD, TELANGANA, 500072",
      type: "address",
    },
  ],
};

export const FOOTER_LINKS = [
  {
    title: "Company",
    links: [
      { label: "About Us", href: "#about" },
      { label: "Contact", href: "#contact" },
      { label: "Testimonials", href: "#testimonials" },
      { label: "Market Reach", href: "#market-reach" },
    ],
  },
  {
    title: "Explore",
    links: [
      { label: "Products", href: "#products" },
      { label: "Quality Assurance", href: "#quality-assurance" },
      { label: "Industries We Serve", href: "#industries-we-serve" },
      { label: "Our Trading Process", href: "#our-trading-process" },
    ],
  },
];
