import {
	Leaf,
	Target,
	Handshake,
	Globe,
	Clock,
	ShieldCheck,
	Truck,
	Award,
	Users,
	Store,
	Factory,
	CheckCircle,
	TrendingUp,
	Package,
	Ship,
	Anchor,
	Droplet,
} from "lucide-react";

export const NAV_LINKS = [
	{ label: "Home", href: "#home" },
	{ label: "About Us", href: "#about" },
	{ label: "Our Products", href: "#products" },
	{ label: "Contact Us", href: "#contact" },
];

export const HERO_CONTENT = {
	title: "Trusted Commodity Trading Partner For 30+ Years",
	subtitle:
		"Prabhu Traders Is A Seasoned Trading Company With Over Three Decades Of Excellence In Sourcing, Supplying, And Exporting Premium Agri And Non-Agri Commodities. We Specialize In Rice, Pulses, Frozen Food Products, Fish, And Prawns, Delivering Consistent Quality To Domestic And Global Markets.",
	ctaText: "Request Product Catalogue",
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
			"We supply high-quality rice varieties widely demanded in domestic and export markets. Each batch is sourced from verified mills and processed under strict quality controls.",
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
			"Our wide range of pulses is sourced from trusted growers and processors to meet consistent quality and nutrition standards.",
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
		id: "frozen",
		category: "Food Products – Frozen Foods",
		description:
			"We supply frozen food products with advanced cold-chain handling, ensuring freshness and export-grade quality.",
		productRangeTitle: "Product Categories:",
		tags: [
			"Frozen Vegetables",
			"Frozen Ready Foods",
			"Processed Frozen Products",
		],
		image: "/images/product3.png",
		highlights: [],
	},
	{
		id: "seafood",
		category: "Seafood – Fish & Prawns",
		description:
			"Prabhu Traders supplies export-quality frozen fish and prawns sourced from certified fisheries and processed in hygienic facilities.",
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
			"Prabhu Traders specializes in the export of premium granite blocks from India to China, meeting the growing demand for high-quality natural stone used in construction, infrastructure, and luxury projects.",
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
			"Lorem ipsum is simply free available. Aenean leo quam. Pellentesque semornare vestibulum.",
		icon: "/images/industriesicon1.png",
		image: "/images/industriesimg1.png",
	},
	{
		title: "Wholesalers & Distributors",
		description:
			"Lorem ipsum is simply free available. Aenean leo quam. Pellentesque semornare vestibulum.",
		icon: "/images/industriesicon2.png",
		image: "/images/industriesimg2.png",
	},
	{
		title: "Retail Chains",
		description:
			"Lorem ipsum is simply free available. Aenean leo quam. Pellentesque semornare vestibulum.",
		icon: "/images/industriesicon3.png",
		image: "/images/industriesimg3.png",
	},
];

export const QUALITY_CONTENT = {
	title: "QUALITY ASSURANCE",
	description:
		"At Prabhu Traders, quality is not negotiable. Every consignment undergoes:",
	points: [
		"Batch traceability",
		"Moisture & purity checks",
		"Multi-stage quality inspection",
		"Export-grade packaging standards",
		"Cold-chain compliance for frozen products",
	],
	footer: "Our reputation is built on consistent quality and reliable supply.",
	image: "/images/qualityimg.png",
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
		name: "David Amunga",
		handle: "@davidamunga_",
		text: "This is a neat Canny alternative",
		highlight: "neat Canny alternative",
		platform: "twitter",
		image: "/images/avatar1.png",
	},
	{
		name: "Anant Dubey",
		handle: "@anant",
		text: "This can be useful for small projects and businesses as well, to get proof of happy consumers and what they actually feel about the businesses.",
		highlight: "useful for small projects",
		platform: "twitter",
		image: "/images/avatar2.png",
	},
	{
		name: "Clive Walkden",
		handle: "@clivewalkden",
		text: "Love this, current tools seem bloated and you pay for features you don't want, looking forward to seeing this progress",
		highlight: "Love this, current tools seem bloated",
		platform: "twitter",
		image: "/images/avatar3.png",
	},
	{
		name: "Emanuel Perez",
		handle: "@emanuelperez",
		text: "I dig this concept - Supahub helped us out a ton with prioritizing customer feedback!",
		highlight: "prioritizing customer feedback",
		platform: "linkedin",
		image: "/images/avatar4.png",
	},
	{
		name: "Gereltuya Ba",
		handle: "@gereltuyaba",
		text: "Sharing a lovely little no-code tool for PMs I found today: Supahub! Better user retention when your users know what to expect in the future. An easy way to collect and manage user feedback.",
		highlight: "Better user retention",
		platform: "linkedin",
		image: "/images/avatar5.png",
	},
	{
		name: "Jaesung Park",
		handle: "@jace_park98",
		text: "Pricing plan seems to be promising. Frill and Canny was too expensive for collecting feedbacks for small products",
		highlight: "promising",
		platform: "twitter",
		image: "/images/avatar6.png",
	},
	{
		name: "Anastasiya Sidorovich",
		handle: "@sidorere",
		text: "Oh please do it! It's been pain in the a** to keep all feedback from different sources consolidated and updated. Especially when you manage a portfolio of products.",
		highlight: "keep all feedback from different sources consolidated",
		platform: "twitter",
		image: "/images/avatar7.png",
	},
	{
		name: "Carmen López",
		handle: "@carmenlopez",
		text: "When I worked as CSM, managing feedback was always challenging excited to see how Supahub simplifies the task.",
		highlight: "Supahub simplifies the task",
		platform: "linkedin",
		image: "/images/avatar8.png",
	},
];

export const CTA_CONTENT = {
	title: "Looking for a Reliable Commodity Trading Partner?",
	description:
		"Get in touch with Prabhu Traders today for bulk supply, export orders, or long-term sourcing partnerships.",
	buttonText: "Contact Us",
	image: "/images/contactimg.png",
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
