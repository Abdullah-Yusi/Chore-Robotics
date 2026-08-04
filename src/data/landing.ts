const frontBanner = (filename: string) =>
  `/front-banner/${encodeURIComponent(filename)}`;

const slideshowNew = (filename: string) =>
  `/slideshow-new/${encodeURIComponent(filename)}`;

export type HeroSlideHeadlineLine = {
  text: string;
  accent?: boolean;
};

export type HeroSlideHeadline = {
  lines: HeroSlideHeadlineLine[];
  position: "top" | "center";
};

export const landingHeroSlides = [
  {
    id: "one-robot-every-chore",
    image: slideshowNew("ONE ROBOT. EVERY CHORE. ALL YEAR_20260803_003459_0000.png"),
    alt: "ONE ROBOT. EVERY CHORE. ALL YEAR — CHORE modular robots for every season",
    imageClassName:
      "object-cover object-[50%_38%] sm:object-[50%_center] lg:object-center",
    headline: {
      position: "center",
      lines: [
        { text: "ONE ROBOT." },
        { text: "EVERY CHORE.", accent: true },
        { text: "ALL YEAR" },
      ],
    },
  },
  {
    id: "irrigation",
    image: slideshowNew("Irrigation Web Banner_20260803_003329_0000.png"),
    alt: "CHORE smart irrigation robot spraying crops in a farm field at sunrise",
    imageClassName:
      "object-cover object-[58%_55%] sm:object-[55%_center] lg:object-center",
    headline: {
      position: "center",
      lines: [
        { text: "SMARTER WATER.", accent: true },
        { text: "STRONGER YIELDS." },
      ],
    },
  },
  {
    id: "snow-clearing",
    image: slideshowNew("SB=SP Web Banner_20260803_003410_0000.png"),
    alt: "CHORE snow plow and snowblower clearing snow from driveways in winter",
    imageClassName:
      "object-cover object-[50%_62%] sm:object-[50%_58%] lg:object-center",
    headline: {
      position: "center",
      lines: [
        { text: "CLEAR THE SNOW.", accent: true },
        { text: "OWN THE WINTER." },
      ],
    },
  },
  {
    id: "forklift-module",
    image: slideshowNew("FM Web Banner_20260803_003354_0000.png"),
    alt: "CHORE autonomous material-handling robot in a warehouse",
    imageClassName:
      "object-cover object-[65%_58%] sm:object-[62%_center] lg:object-center",
    headline: {
      position: "center",
      lines: [
        { text: "HEAVY LOADS.", accent: true },
        { text: "ZERO LIFT." },
      ],
    },
  },
] as const satisfies ReadonlyArray<{
  id: string;
  image: string;
  alt: string;
  imageClassName: string;
  headline: HeroSlideHeadline;
}>;

export const reserveSection = {
  eyebrow: "Early access",
  title: "Reserve your CHORE",
  description:
    "Hold your spot with a refundable deposit. We’ll reach out when it’s time to choose your series and modules.",
  cta: { label: "Reservation", href: "/reservation" },
};

export const productShowcase = [
  {
    id: "choremower",
    title: "CHORE MOWER",
    tagline: "Lawn Care",
    description:
      "Autonomous lawn mowing with precise coverage and intelligent navigation.",
    image: "/lawnmover-new/Lawnmower%20Isometric%20view%2007.png",
    imagePosition: "object-center",
    cta: "Explore CHORE MOWER",
    href: "/product/choremower",
  },
  {
    id: "choremopper",
    title: "CHORE MOPPER",
    tagline: "Floor Care",
    description:
      "Autonomous floor cleaning for warehouses and commercial facilities.",
    image: "/Lawnmower%20Images/Lawn%20Mower%20-%20White%20Background%20-%20Isometric_View_01.jpg.jpeg",
    imagePosition: "object-center",
    cta: "Explore CHORE MOPPER",
    href: "/product/choremopper",
  },
] as const;

const publicImage = (filename: string) =>
  `/${encodeURIComponent(filename)}`;

const lawnmowerImagesAsset = (filename: string) =>
  `/Lawnmower Images/${encodeURIComponent(filename)}`;

const chorecollectorAsset = (filename: string) =>
  `/chorecollector/${encodeURIComponent(filename)}`;

const choreblowerAsset = (filename: string) =>
  `/choreblower/${encodeURIComponent(filename)}`;

export const productTabShowcase = [
  {
    id: "floor-care",
    tabLabel: "FLOOR CARE",
    image: lawnmowerImagesAsset("Lawn Mower - White Background - Isometric_View_01.jpg.jpeg"),
    alt: "Chore Mower autonomous lawn mower for commercial and residential properties",
    titleBrand: "Chore",
    titleName: "Mower",
    subtitle: "LET CHORE HANDLE ALL THE HEAVY LIFTING",
    subtitleAccent: "CHORE",
    href: "/product/choremopper",
  },
  {
    id: "heavy-snow",
    tabLabel: "HEAVY SNOW",
    image: choreblowerAsset("Snow blower - Isometric View - White Background 01.jpg.jpeg"),
    alt: "Chore Blower autonomous snow blower clearing walkways and parking lots",
    titleBrand: "Chore",
    titleName: "Blower",
    subtitle: "WINTER HAS BEEN HANDLED",
    subtitleAccent: "WINTER",
    href: "/product/choreblower",
  },
  {
    id: "leaf-care",
    tabLabel: "LEAF CARE",
    image: chorecollectorAsset("Leaf Collector - Isometric View - White Background 01.jpg.jpeg"),
    alt: "Chore Collector autonomous leaf collector for parks and commercial properties",
    titleBrand: "Chore",
    titleName: "Collector",
    subtitle: "AUTUMN HAS BEEN HANDLED",
    subtitleAccent: "AUTUMN",
    href: "/product/chorecollector",
  },
] as const;

export const technologySection = {
  eyebrow: "Our Technologies",
  headline: "GPS Agnostic. Zero Dead Zones.",
  description:
    "Say goodbye to satellite dropout and GPS signal loss. Our patented Ground Penetrating Radar (GPR) technology maps the terrain in real-time for unbreakable, underground autonomy.",
  image: "/gpr-new.jpeg",
  imageAlt:
    "CHORE robot using Ground Penetrating Radar to map subsurface terrain on a snowy forest road",
  tag: "Ground Penetrating Radar",
};

export const technologyPageHero = {
  eyebrow: "The Platform",
  headline: "MAPPING BEYOND THE SURFACE.",
  video: "GPR Video-new.mp4",
};

export const spatialAwarenessSection = {
  eyebrow: "Sensor Architecture",
  headline: "360° SPATIAL AWARENESS.",
  description:
    "Equipped with overlapping sensor fields, the platform continuously monitors its environment in every direction. This comprehensive architecture ensures reliable obstacle detection and safe navigation through complex outdoor spaces.",
  image: "/Sensor Stack.png",
  imageAlt:
    "CHORE robot with overlapping sensor fields scanning its outdoor environment",
};

export const obstacleNavigationSection = {
  eyebrow: "Dynamic Navigation",
  headline: "UNMATCHED AGILITY. COLLISION-FREE PERFORMANCE.",
  description:
    "Seamlessly navigating the unexpected, real-time sensor mapping and instant path correction keep every mission moving forward.",
  video: "ChoreRobot_Dynamic_Obstacles_Navigation (1).mp4",
};

export const fleetManagementSection = {
  eyebrow: "Connected Operations",
  headline: "Your Fleet. One App.",
  description: "Monitor, update, and deploy — from anywhere.",
  image: "/fleet-pic.png",
  imageAlt:
    "Hands holding a smartphone displaying the CHORE Fleet Management App with live mower status",
  highlights: [
    "4G / 5G cloud connectivity",
    "Role-based operator access",
  ],
};

export const landingTechnologyPreview = {
  eyebrow: "Our Technologies",
  title: "Beyond GPS. The End of Dead Zones.",
  titleLine2: "CHORE's Innovative Solution",
  cta: {
    label: "Explore Our Technologies",
    href: "/technology",
  },
};

export const storiesSection = {
  title: "CHORE Stories",
  viewAllHref: "#stories",
  stories: [
    {
      id: "story-1",
      date: "June 11, 2026",
      title: "Inside the Modular Platform",
      image:
        "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&q=80",
    },
    {
      id: "story-2",
      date: "June 8, 2026",
      title: "Year-Round Yard Intelligence",
      image:
        "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80",
    },
    {
      id: "story-3",
      date: "June 5, 2026",
      title: "Designed in America",
      image:
        "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&q=80",
    },
  ],
};

export const newsletterSection = {
  title: "Stay up to speed on the latest at CHORE.",
  placeholder: "Email",
  buttonLabel: "Get updates",
};

export const footerAddress = "15 Hubble, Suite 200, Irvine, CA-92618";

export const footerLinks = {
  products: [
    { label: "CHORE MOWER", href: "/product/choremower" },
    { label: "CHORE BLOWER", href: "/product/choreblower" },
    { label: "CHORE IRRIGATOR", href: "/product/choreirrigator" },
    { label: "CHORE COLLECTOR", href: "/product/chorecollector" },
    { label: "CHORE PLOW", href: "/product/choreplow" },
    { label: "CHORE MOPPER", href: "/product/choremopper" },
    { label: "CHORE LOADER", href: "/products" },
    { label: "CHORE PATROL", href: "/products" },
  ],
  company: [
    { label: "About", href: "/about" },
    { label: "Technology", href: "/technology" },
    { label: "Careers", href: "#careers" },
    { label: "Stories", href: "#stories" },
  ],
  support: [
    { label: "Support", href: "#support" },
    { label: "Contact", href: "#contact" },
    { label: "Press", href: "#press" },
    { label: "Investors", href: "#investors" },
  ],
  legal: [
    { label: "Terms of Use", href: "#terms" },
    { label: "Privacy", href: "#privacy" },
  ],
  social: [
    { label: "LinkedIn", href: "https://linkedin.com" },
    { label: "YouTube", href: "https://youtube.com" },
    { label: "Instagram", href: "https://instagram.com" },
    { label: "X", href: "https://x.com" },
  ],
};

export const navLinks = [
  { label: "Technology", href: "/technology" },
  { label: "About", href: "/about" },
];
