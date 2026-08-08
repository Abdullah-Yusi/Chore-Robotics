import { CHOREMOWER_NEW_IMAGES } from "./choremower-images";

const slideshowNew = (filename: string) => `/slideshow-new/${filename}`;
const productTabAsset = (filename: string) =>
  `/product-tabs/${encodeURIComponent(filename)}`;

export type HeroSlideHeadlineLine = {
  text: string;
  accent?: boolean;
};

export type HeroSlideHeadline = {
  lines: HeroSlideHeadlineLine[];
  position: "top" | "center" | "left";
};

export const landingHeroSlides = [
  {
    id: "one-robot-every-chore",
    image: slideshowNew("hero-one-robot-every-chore-all-year.png"),
    alt: "100% AMERICAN-MADE ROBOTICS — ONE ROBOT EVERY CHORE ALL YEAR",
    imageClassName:
      "object-cover object-[50%_38%] sm:object-[50%_center] lg:object-center",
    headline: {
      position: "center",
      lines: [
        { text: "100% AMERICAN-MADE ROBOTICS" },
        { text: "ONE ROBOT EVERY CHORE ALL YEAR" },
      ],
    },
  },
  {
    id: "irrigation",
    image: slideshowNew("hero-irrigation.png"),
    alt: "CHORE smart irrigation robot spraying crops in a farm field at sunrise",
    imageClassName:
      "object-cover object-[58%_55%] sm:object-[55%_center] lg:object-center",
    headline: {
      position: "top",
      lines: [{ text: "AUTONOMOUS PRECISION IRRIGATION" }],
    },
  },
  {
    id: "snow-clearing",
    image: slideshowNew("hero-snow-clearing.png"),
    alt: "CHORE snow plow and snowblower clearing snow from driveways in winter",
    imageClassName:
      "object-cover object-[50%_62%] sm:object-[50%_58%] lg:object-center",
    headline: {
      position: "center",
      lines: [
        { text: "CLEAR THE SNOW", accent: true },
        { text: "OWN THE WINTER" },
      ],
    },
  },
  {
    id: "forklift-module",
    image: slideshowNew("hero-forklift-module.png"),
    alt: "CHORE autonomous material-handling robot in a warehouse",
    imageClassName:
      "object-cover object-[75%_55%] sm:object-[82%_center] lg:object-[88%_center]",
    headline: {
      position: "left",
      lines: [
        { text: "COMMERCIAL FLOOR CARE" },
        { text: "ON AUTOPILOT" },
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
    "Hold your spot with a refundable deposit We’ll reach out when it’s time to choose your series and modules",
  cta: { label: "Reservation", href: "/reservation" },
};

export const productShowcase = [
  {
    id: "choremower",
    title: "Chore Mower",
    tagline: "Lawn Care",
    description:
      "Autonomous lawn mowing with precise coverage and intelligent navigation",
    image: CHOREMOWER_NEW_IMAGES[0],
    imagePosition: "object-center",
    cta: "Explore Chore Mower",
    href: "/product/choremower",
  },
  {
    id: "choremopper",
    title: "Chore Mopper",
    tagline: "Floor Care",
    description:
      "Autonomous floor cleaning for warehouses and commercial facilities",
    image: "/Lawnmower%20Images/Lawn%20Mower%20-%20White%20Background%20-%20Isometric_View_01.jpg.jpeg",
    imagePosition: "object-center",
    cta: "Explore Chore Mopper",
    href: "/product/choremopper",
  },
] as const;

export const productTabShowcase = [
  {
    id: "lawn-care",
    tabLabel: "LAWN CARE",
    image: productTabAsset("Lawn Mower.jpeg"),
    alt: "Chore Mower autonomous lawn mower for commercial and residential properties",
    imageClassName: "object-cover object-center",
    titleBrand: "Chore",
    titleName: "Mopper",
    subtitle: "Perfect the cut",
    subtitleAccent: "PERFECT",
    href: "/product/choremopper",
  },
  {
    id: "heavy-snow",
    tabLabel: "HEAVY SNOW",
    image: productTabAsset("Snow Blower.jpeg"),
    alt: "Chore Blower autonomous snow blower clearing walkways and parking lots",
    imageClassName: "object-cover object-center",
    titleBrand: "Chore",
    titleName: "Blower",
    subtitle: "WINTER MADE EASY",
    subtitleAccent: "WINTER",
    href: "/product/choreblower",
  },
  {
    id: "leaf-care",
    tabLabel: "LEAF CARE",
    image: productTabAsset("Leaf Collector.jpeg"),
    alt: "Chore Collector autonomous leaf collector for parks and commercial properties",
    imageClassName: "object-cover object-center",
    titleBrand: "Chore",
    titleName: "Collector",
    subtitle: "CLEAR THE FALL",
    subtitleAccent: "CLEAR",
    href: "/product/chorecollector",
  },
] as const satisfies ReadonlyArray<{
  id: string;
  tabLabel: string;
  image: string;
  alt: string;
  imageClassName: string;
  titleBrand: string;
  titleName: string;
  subtitle: string;
  subtitleLine2?: string;
  subtitleAccent: string;
  href: string;
}>;

export const technologySection = {
  eyebrow: "Our Technologies",
  headline: "GPS Agnostic Zero Dead Zones",
  description:
    "Say goodbye to satellite dropout and GPS signal loss Our patented Ground Penetrating Radar (GPR) technology maps the terrain in real-time for unbreakable, underground autonomy",
  image: "/gpr-new.jpeg",
  imageAlt:
    "CHORE robot using Ground Penetrating Radar to map subsurface terrain on a snowy forest road",
  tag: "Ground Penetrating Radar",
};

export const technologyPageHero = {
  eyebrow: "The Platform",
  headline: "MAPPING BEYOND THE SURFACE",
  description:
    "True autonomy requires more than just surface-level vision Our Ground Penetrating Radar (GPR) continuously scans the subterranean landscape, reading unique soil layers to create a reliable, three-dimensional navigational map",
  video: "GPR Video Updated.mp4",
};

export const spatialAwarenessSection = {
  eyebrow: "Sensor Architecture",
  headline: "360° SPATIAL AWARENESS",
  description:
    "Overlapping sensor fields continuously monitor every direction, ensuring reliable collision avoidance and safe navigation in complex outdoor environments",
  image: `/${encodeURIComponent("Sensor Stack Image New latest.png")}`,
  imageAlt:
    "CHORE robot with overlapping sensor fields scanning its outdoor environment",
};

export const obstacleNavigationSection = {
  eyebrow: "Dynamic Navigation",
  headline: "UNMATCHED AGILITY COLLISION-FREE PERFORMANCE",
  description:
    "Seamlessly navigating the unexpected, real-time sensor mapping and instant path correction keep every mission moving forward",
  video: "ChoreRobot_Dynamic_Obstacles_Navigation (1).mp4",
};

export const patentedSecureLockSection = {
  eyebrow: "Modular Design",
  headline: "PATENTED SECURE LOCK",
  description:
    "Our proprietary, in-house design allows you to swap modules instantly No tools required",
  video: "Video Project 7.mp4",
};

export const dynamicStabilitySection = {
  eyebrow: "Suspension System",
  headline: "PATENTED SUSPENSION ARCHITECTURE",
  description:
    "A custom-engineered shock-absorbing architecture built around a heavy-duty brushless DC motor This proprietary assembly maximizes ground contact and torque delivery, ensuring the platform powers through rough terrain without ever losing grip",
  video: "Main Robot Exploded View.43.mp4",
};

export const fleetManagementSection = {
  eyebrow: "Connected Operations",
  headline: "Your Fleet One App",
  description: "Monitor, update, and deploy — from anywhere",
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
  title: "Beyond GPS The End of Dead Zones",
  titleLine2: "Chore's Innovative Solution",
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
  title: "Stay up to speed on the latest at CHORE",
  placeholder: "Email",
  buttonLabel: "Get updates",
};

export const footerLinks = {
  products: [
    { label: "Chore Mower", href: "/product/choremower" },
    { label: "Chore Blower", href: "/product/choreblower" },
    { label: "Chore Irrigator", href: "/product/choreirrigator" },
    { label: "Chore Collector", href: "/product/chorecollector" },
    { label: "Chore Plow", href: "/product/choreplow" },
    { label: "Chore Mopper", href: "/product/choremopper" },
    { label: "Chore Loader", href: "/products" },
    { label: "Chore Patrol", href: "/products" },
  ],
  company: [
    { label: "About", href: "/about" },
    { label: "Technology", href: "/technology" },
    { label: "Careers", href: "/careers" },
    { label: "Investors", href: "/investors" },
  ],
  legal: [
    { label: "Terms of Use", href: "#terms" },
    { label: "Privacy Policy", href: "#privacy" },
  ],
  social: [
    { label: "LinkedIn", href: "https://www.linkedin.com/company/chore-robotics/?viewAsMember=true" },
    { label: "YouTube", href: "https://youtube.com/@chorerobotics?si=3qsphW9ZEHq5Y1Vr" },
    { label: "Instagram", href: "https://www.instagram.com/chorerobotics" },
    { label: "TikTok", href: "https://www.tiktok.com/@chorerobotics?_r=1&_t=ZT-98evE83l1kj" },
    { label: "X", href: "https://x.com/chorerobotics/status/2084009247994691725?s=20" },
  ],
};

export const navLinks = [
  { label: "Technology", href: "/technology" },
  { label: "About", href: "/about" },
  { label: "Investors", href: "/investors" },
];
