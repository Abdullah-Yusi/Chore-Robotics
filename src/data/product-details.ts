const publicAsset = (filename: string) =>
  `/${encodeURIComponent(filename)}`;

const frontBannerAsset = (filename: string) =>
  `/front-banner/${encodeURIComponent(filename)}`;

const snowAsset = (filename: string) =>
  `/snow/${encodeURIComponent(filename)}`;

const snowblowerAsset = snowAsset;

const leafAsset = (filename: string) =>
  `/leaf/${encodeURIComponent(filename)}`;

const chorecollectorAsset = (filename: string) =>
  `/chorecollector/${encodeURIComponent(filename)}`;

const COLLECTOR_GALLERY_IMAGES = [
  chorecollectorAsset("Leaf Collector - Isometric View - White Background 01.jpg.jpeg"),
  chorecollectorAsset("Leaf Collector - Side View- White Background - 01.jpg.jpeg"),
  chorecollectorAsset("Leaf Collector - Top View - White Background - 01.jpg.jpeg"),
  chorecollectorAsset(
    "MR + Leaf Collector - Showcase - White Background - Isometric View - 01.jpg.jpeg",
  ),
] as const;

const choreblowerAsset = (filename: string) =>
  `/choreblower/${encodeURIComponent(filename)}`;

const chorirrigatorAsset = (filename: string) =>
  `/chorirrigator/${encodeURIComponent(filename)}`;

const snowplowerAsset = (filename: string) =>
  `/Snowplower/${encodeURIComponent(filename)}`;

const floorAsset = (filename: string) =>
  `/floor/${encodeURIComponent(filename)}`;

export interface Feature {
  title: string;
  description: string;
}

export interface ProductDetailData {
  id: string;
  name: string;
  tagline: string;
  category: string;
  price: number;
  originalPrice?: number;
  monthlyPayment: number;
  rating: number;
  reviewsCount: number;
  description: string;
  features: Feature[];
  images: string[];
  whatsIncluded: string[];
  specs: Record<string, string>;
}

export const PRODUCT_SLUGS: Record<string, string> = {
  p10: "choremower",
  p2: "choremopper",
  p4: "choreplow",
  p5: "choreblower",
  p6: "chorecollector",
  p9: "choreirrigator",
};

export const ACTIVE_PRODUCT_IDS = [
  "p10",
  "p2",
  "p4",
  "p5",
  "p6",
  "p9",
] as const;

const lawnmowerAsset = (filename: string) =>
  `/lawnmover-new/${encodeURIComponent(filename)}`;

const lawnmowerImagesAsset = (filename: string) =>
  `/Lawnmower Images/${encodeURIComponent(filename)}`;

export const MOWER_FEATURED_IMAGE = lawnmowerImagesAsset(
  "Lawn Mower - White Background - Isometric_View_01.jpg.jpeg",
);

export const productDetails: Record<string, ProductDetailData> = {
  p10: {
    id: "p10",
    name: "CHORE MOWER",
    tagline: "Autonomous lawn mowing for residential and commercial properties.",
    category: "Lawn Care",
    price: 4299,
    originalPrice: 4599,
    monthlyPayment: 358.25,
    rating: 4.9,
    reviewsCount: 24,
    description:
      "Keep lawns pristine with the Chore Lawn Mower. Built for residential yards, campuses, and commercial landscapes, it delivers precise autonomous mowing with consistent cut quality. Intelligent navigation maps your property for efficient coverage while advanced obstacle detection keeps operation safe around people, pets, and landscape features. Reduce manual labor and maintain a professional finish week after week.",
    features: [
      {
        title: "Intelligent Navigation",
        description:
          "Maps your property for efficient mowing paths with consistent coverage and minimal missed strips.",
      },
      {
        title: "Advanced Obstacle Detection",
        description:
          "Safely navigates around people, pets, trees, and landscape features without interrupting the job.",
      },
      {
        title: "Precision Cutting",
        description:
          "Delivers a clean, even cut across varied terrain for a professional finish on every pass.",
      },
    ],
    images: [
      lawnmowerAsset("Lawnmower Isometric view 07.png"),
      lawnmowerAsset("Lawnmover - Isometric 02.png"),
      lawnmowerAsset("Lawnmover - Side view.png"),
      lawnmowerAsset("Lawnmover - Top view.png"),
    ],
    whatsIncluded: [
      "CHORE MOWER Lawn Mowing Module",
      "Quick-Release Mounting Hardware Pack",
      "Blade & Deck Maintenance Kit",
      "Comprehensive Installation & Operation Manual",
    ],
    specs: {
      Dimensions: "34 in x 36 in x 12 in",
      Weight: "45 kg",
      "Cutting Width": "22 Inches",
      Navigation: "Intelligent systematic coverage mapping",
      "Obstacle Detection": "Advanced sensor array",
      Terrain: "Grass",
      "Noise Level": "58 dB",
    },
  },
  p2: {
    id: "p2",
    name: "CHORE MOPPER",
    tagline: "Autonomous floor cleaning for warehouses and commercial facilities.",
    category: "Floor Care",
    price: 5499,
    originalPrice: 5999,
    monthlyPayment: 458.25,
    rating: 4.9,
    reviewsCount: 15,
    description:
      "Maintain cleaner, safer indoor environments with the Chore Floor Mopper. Designed for warehouses, factories, logistics centers, and commercial facilities, it delivers efficient autonomous floor cleaning with consistent results. Intelligent navigation ensures systematic coverage while minimizing missed areas. Advanced obstacle detection enables safe operation around equipment, pallets, and workspaces. Reduce manual labor, improve operational efficiency, and maintain high cleanliness standards. Built for reliable, continuous performance with minimal human intervention. Keep your facilities clean, productive, and ready for daily operations with smart autonomous cleaning.",
    features: [
      {
        title: "Intelligent Navigation",
        description:
          "Ensures systematic coverage across large floor plans while minimizing missed areas and redundant passes.",
      },
      {
        title: "Advanced Obstacle Detection",
        description:
          "Enables safe operation around equipment, pallets, and active workspaces without interrupting daily operations.",
      },
      {
        title: "Autonomous Floor Cleaning",
        description:
          "Delivers efficient, consistent cleaning results with minimal human intervention across commercial facilities.",
      },
    ],
    images: [...COLLECTOR_GALLERY_IMAGES],
    whatsIncluded: [
      "CHORE MOPPER Floor Mopping Module",
      "Quick-Release Mounting Hardware Pack",
      "Mop Pad & Fluid Reservoir Kit",
      "Comprehensive Installation & Operation Manual",
    ],
    specs: {
      Dimensions: "34 in x 36 in x 12 in",
      Weight: "40kg",
      "Modular Coupling": "—",
      "Cleaning Width": "32 Inches",
      Navigation: "Intelligent systematic coverage mapping",
      "Obstacle Detection": "Advanced sensor array",
      "Noise Level": "60 dB",
    },
  },
  p4: {
    id: "p4",
    name: "CHORE PLOW",
    tagline: "Autonomous snow plowing for roads, driveways, and parking lots.",
    category: "Snow Removal",
    price: 1499,
    monthlyPayment: 124.90,
    rating: 4.8,
    reviewsCount: 11,
    description:
      "Restore safe access after every snowfall with the Chore Snow Plower. Designed for roads, driveways, parking lots, and other paved surfaces, it delivers fast and efficient snow removal with minimal human intervention. Intelligent autonomous navigation ensures precise, consistent coverage across every route. Its advanced obstacle detection system enables safe operation in dynamic winter environments. Powerful plowing performance clears both fresh and compacted snow with ease. Reduce labor costs, improve operational efficiency, and keep critical pathways accessible. Built for dependable performance, the Chore Snow Plower helps maintain safe, clear surfaces throughout the winter season.",
    features: [
      {
        title: "Intelligent Autonomous Navigation",
        description:
          "Ensures precise, consistent coverage across every route with minimal human intervention.",
      },
      {
        title: "Advanced Obstacle Detection",
        description:
          "Enables safe operation in dynamic winter environments with pedestrians, vehicles, and fixed obstacles.",
      },
      {
        title: "Powerful Plowing Performance",
        description:
          "Clears both fresh and compacted snow with ease for dependable access throughout the winter season.",
      },
    ],
    images: [
      snowplowerAsset("Snow Plow - White Background - Isometric_View_01.jpg.jpeg"),
      snowplowerAsset("Snow Plow - White Background -Side_View_01.jpg.jpeg"),
      snowplowerAsset("Snow Plow - White Background - Top_View_01.jpg.jpeg"),
      snowplowerAsset("MR + Snow Plow - White Background -Showcase_01.jpg.jpeg"),
    ],
    whatsIncluded: [
      "CHORE PLOW Snow Plow Module",
      "Replacement Polyurethane Scraper Bar",
      "Quick-Release Mounting Hardware Pack",
      "Cold-Weather Wiring Harness",
      "Comprehensive Installation & Operation Manual",
    ],
    specs: {
      Dimensions: "Pending",
      Weight: "50 kg",
      "Modular Coupling": "—",
      "Lifting Mechanism": "Automated Actuators",
      "Trip Edge Quantity": "1",
      "Replaceable Cutting Edge": "Pending",
      "Moldboard Radius": "Pending",
      "Blade Material": "Pending",
      "Moldboard Thickness": "Pending",
      Terrain: "Grass, Asphalt, Concrete",
      "Winter-Ready Sensor Stack": "Radar, Ultrasonic Sensors",
      "Operating Conditions": "Winter",
      Connectivity: "4G, 5G, Bluetooth",
      "Ingress Protection": "IP65",
      "Noise Level": "Pending",
      "App Control": "Yes",
      Power: "Pending",
      "Max. Climbing Ability": "80% (38.6°)",
      Runtime: "Pending",
    },
  },
  p5: {
    id: "p5",
    name: "CHORE BLOWER",
    tagline: "Autonomous snow removal for sidewalks, walkways, and commercial properties.",
    category: "Snow Removal",
    price: 2499,
    originalPrice: 2699,
    monthlyPayment: 208.25,
    rating: 4.9,
    reviewsCount: 19,
    description:
      "Keep pathways safe and accessible all winter with the Chore Snow Blower. Built for sidewalks, pedestrian walkways, parking lots, and commercial properties, it delivers reliable autonomous snow removal. Intelligent navigation ensures efficient coverage with minimal supervision. Advanced obstacle detection enhances safe operation in busy environments. Powerful performance clears snow quickly and consistently. Designed to reduce labor costs while maximizing productivity. Operate confidently in demanding winter conditions with dependable, professional results.",
    features: [
      {
        title: "Intelligent Navigation",
        description:
          "Ensures efficient coverage across walkways and parking lots with minimal supervision.",
      },
      {
        title: "Advanced Obstacle Detection",
        description:
          "Enhances safe operation in busy environments with pedestrians, vehicles, and fixed obstacles.",
      },
      {
        title: "Powerful Snow Removal",
        description:
          "Clears snow quickly and consistently for dependable, professional results in demanding winter conditions.",
      },
    ],
    images: [
      choreblowerAsset("Snow blower - Isometric View - White Background 01.jpg.jpeg"),
      choreblowerAsset("Snow blower - Side View - White Background 01.jpg.jpeg"),
      choreblowerAsset("Snow blower - Top View - White Background 01.jpg.jpeg"),
      choreblowerAsset("Snow blower - Showcase - Isometric View - White Background 01.jpg.jpeg"),
    ],
    whatsIncluded: [
      "CHORE BLOWER Snow Blower Module",
      "High-Performance Discharge Chute Assembly",
      "Quick-Release Mounting Hardware Pack",
      "Cold-Weather Wiring Harness",
      "Comprehensive Installation & Operation Manual",
    ],
    specs: {
      Dimensions: "Pending",
      Weight: "50 kg",
      "Modular Coupling": "—",
      "Lifting Mechanism": "Automated Actuators",
      "Trip Edge Quantity": "1",
      "Replaceable Cutting Edge": "Pending",
      "Moldboard Radius": "Pending",
      "Blade Material": "Pending",
      "Moldboard Thickness": "Pending",
      Terrain: "Grass, Asphalt, Concrete",
      "Winter-Ready Sensor Stack": "Radar, Ultrasonic Sensors",
      "Operating Conditions": "Winter",
      Connectivity: "4G, 5G, Bluetooth",
      "Ingress Protection": "IP65",
      "Noise Level": "Pending",
      "App Control": "Yes",
      Power: "Pending",
      "Max. Climbing Ability": "80% (38.6°)",
      Runtime: "Pending",
    },
  },
  p6: {
    id: "p6",
    name: "CHORE COLLECTOR",
    tagline: "Autonomous leaf collection for parks, campuses, and commercial properties.",
    category: "Lawn Care",
    price: 1899,
    monthlyPayment: 158.25,
    rating: 4.6,
    reviewsCount: 9,
    description:
      "Transform seasonal cleanup into effortless landscape maintenance with the Chore Leaf Collector. Engineered for parks, campuses, residential communities, and commercial properties, it autonomously collects and stores fallen leaves with precision. Intelligent navigation ensures efficient coverage while minimizing missed areas. Its reliable obstacle avoidance enables safe operation around trees, pathways, and landscape features. Reduce manual labor, improve operational efficiency, and keep outdoor spaces clean year-round. Designed for consistent, dependable performance in large-scale environments. Maintain a neat, professional landscape with less effort and greater productivity.",
    features: [
      {
        title: "Intelligent Navigation",
        description:
          "Ensures efficient coverage across large outdoor spaces while minimizing missed areas and redundant passes.",
      },
      {
        title: "Reliable Obstacle Avoidance",
        description:
          "Enables safe operation around trees, pathways, and landscape features without interrupting daily maintenance.",
      },
      {
        title: "Autonomous Leaf Collection",
        description:
          "Collects and stores fallen leaves with precision for consistent, dependable performance in large-scale environments.",
      },
    ],
    images: [...COLLECTOR_GALLERY_IMAGES],
    whatsIncluded: [
      "CHORE COLLECTOR Leaf Collector Module",
      "Compact High-Capacity Collection Bag",
      "Quick-Release Mounting Hardware Pack",
      "Roller & Vacuum Brush Assembly",
      "Comprehensive Installation & Operation Manual",
    ],
    specs: {
      Dimensions: "28 in x 32 in x 20 in",
      Weight: "70 kg",
      "Modular Coupling": "—",
      "Clearing Width": "36-inch",
      "Bagging Mechanism": "—",
      "Rolling Scrub": "—",
      Terrain: "Grass",
      "Sensor Stack": "Ultrasonic Sensors, Fisheye Camera",
      "Operating Conditions": "Winter",
      Connectivity: "4G, 5G, Bluetooth",
      "Ingress Protection": "IP65",
      "Noise Level": "55 dB",
      "App Control": "Yes",
      Power: "1kW",
      "Max. Climbing Ability": "80% (38.6°)",
      Runtime: "Pending",
    },
  },
  p9: {
    id: "p9",
    name: "CHORE IRRIGATOR",
    tagline: "Precise, uniform irrigation for lawns, parks, and commercial landscapes.",
    category: "Lawn Care",
    price: 2199,
    monthlyPayment: 183.25,
    rating: 4.8,
    reviewsCount: 11,
    description:
      "Deliver water exactly where it's needed with the Chore Irrigation System. Engineered for lawns, parks, campuses, sports fields, and commercial landscapes, it provides precise, uniform irrigation with minimal water waste. Intelligent navigation ensures efficient coverage across every section of the landscape. Its advanced spray control delivers consistent watering for healthier, greener vegetation. Reduce water consumption while improving irrigation efficiency and plant health. Designed for reliable autonomous operation with minimal human intervention. Maintain vibrant, healthy landscapes with smart, sustainable irrigation technology.",
    features: [
      {
        title: "Intelligent Navigation",
        description:
          "Ensures efficient coverage across every section of the landscape with minimal missed areas.",
      },
      {
        title: "Advanced Spray Control",
        description:
          "Delivers consistent watering for healthier, greener vegetation with minimal water waste.",
      },
      {
        title: "Autonomous Irrigation",
        description:
          "Provides precise, uniform irrigation with reliable performance and minimal human intervention.",
      },
    ],
    images: [
      chorirrigatorAsset("Irrigation Module - Isometric View + White Background.jpg.jpeg"),
      chorirrigatorAsset("Irrigation Module - Side View + White Background.jpg.jpeg"),
      chorirrigatorAsset("Irrigation Module - Top View + White Background 03.jpg.jpeg"),
      chorirrigatorAsset("Irrigation Module - Show case - Isometric View + White Background.jpg.jpeg"),
    ],
    whatsIncluded: [
      "CHORE IRRIGATOR Irrigation Module",
      "Dual Boom Spray Assembly",
      "Quick-Release Mounting Hardware Pack",
      "Fluid Line & Nozzle Calibration Kit",
      "Comprehensive Installation & Operation Manual",
    ],
    specs: {
      Dimensions: "28 in x 32 in x 30 in",
      Weight: "70 kg",
      "Modular Coupling": "—",
      "Water Capacity": "36-inch",
      "Spray Beam Span": "3 ft",
      "Retractable Spray Beams": "—",
      "3-Way Switching": "—",
      "Flow Rate": "10 ft",
      Coverage: "—",
      Terrain: "Grass, Asphalt, Concrete",
      "Sensor Stack": "Stereo Vision, Radar, Ultrasonic Sensors",
      "Operating Conditions": "Winter",
      Connectivity: "4G, 5G, Bluetooth",
      "Ingress Protection": "IP65",
      "Noise Level": "60 dB",
      "App Control": "Yes",
      Power: "1.5kW",
      "Max. Climbing Ability": "80% (38.6°)",
      Runtime: "Pending",
    },
  },
};

const productMenuImages: Record<string, string> = {
  p10: lawnmowerAsset("Lawnmower Isometric view 07.png"),
  p2: COLLECTOR_GALLERY_IMAGES[0],
  p4: snowplowerAsset("Snow Plow - White Background - Isometric_View_01.jpg.jpeg"),
  p5: choreblowerAsset("Snow blower - Isometric View - White Background 01.jpg.jpeg"),
  p6: chorecollectorAsset("Leaf Collector - Isometric View - White Background 01.jpg.jpeg"),
  p9: chorirrigatorAsset("Irrigation Module - Isometric View + White Background.jpg.jpeg"),
};

export function getProductMenuImage(id: string): string {
  return productMenuImages[id] ?? productMenuImages.p10;
}

const SLUG_TO_ID = Object.fromEntries(
  Object.entries(PRODUCT_SLUGS).map(([productId, slug]) => [slug, productId]),
) as Record<string, string>;

const PRODUCT_ALIASES: Record<string, string> = {
  lawnmower: "p10",
  choremow: "p10",
  choremower: "p10",
  p10: "p10",
  choremop: "p2",
  choremopper: "p2",
  "floor-mopper": "p2",
  p2: "p2",
  choreplow: "p4",
  plow: "p4",
  p4: "p4",
  choreclear: "p5",
  blower: "p5",
  snowblower: "p5",
  choreblower: "p5",
  p5: "p5",
  chorevac: "p6",
  chorecollector: "p6",
  vacuum: "p6",
  "leaf-collector": "p6",
  leafcollector: "p6",
  p6: "p6",
  chorespray: "p9",
  choreirrigator: "p9",
  irrigation: "p9",
  p9: "p9",
};

export function resolveProductId(id: string): string | undefined {
  const key = id.toLowerCase();
  if (PRODUCT_ALIASES[key]) return PRODUCT_ALIASES[key];
  if (SLUG_TO_ID[key]) return SLUG_TO_ID[key];
  if (key in productDetails) return key;
  return undefined;
}
