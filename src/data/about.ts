export const aboutPage = {
  intro: {
    eyebrow: "About",
    address: "15 Hubble, Suite 200, Irvine, CA-92618",
  },
  missionVision: {
    mission: {
      eyebrow: "Mission",
      title: "Our Mission",
      text: "To automate indoor and outdoor maintenance with intelligent modular robots that reduce costs, save time, and eliminate repetitive manual work.",
    },
    vision: {
      eyebrow: "Vision",
      title: "Our Vision",
      text: "A future where every property is maintained by autonomous robots that work safely, intelligently, and around the clock with minimal human involvement.",
    },
  },
  sections: [
    {
      id: "problem",
      chapter: "01",
      title: "The Problem We Solve",
      video: "chore_warehouse_perception_video-new.mp4" as string | null,
      paragraphs: [
        "Today's robots are not truly autonomous.",
        "They struggle around trees and buildings, require complicated setup, and still need frequent human intervention.",
        "We built Chore Robotics to change that.",
        "Our robots are designed to think, adapt, and work reliably in real world environments, not just controlled demonstrations.",
      ],
    },
    {
      id: "why-we-started",
      chapter: "02",
      title: "Why We Started",
      video: "Main Robot Exploded View.57.mp4" as string | null,
      paragraphs: [
        "Outdoor maintenance is broken.",
        "Property owners rely on multiple expensive machines for different jobs. Most are used only a few times a year, require skilled operators, and depend on a workforce that is becoming harder and more expensive to find.",
        "We started Chore Robotics to replace that outdated model with a single, modular platform. One autonomous base that seamlessly swaps between heavy-duty seasonal attachments to deliver reliable results all year long.",
      ],
    },
    {
      id: "different",
      chapter: "03",
      title: "What Makes Us Different",
      bullets: [
        "100% American Made: Engineered, designed, and built entirely in the USA for uncompromising quality.",
        "Modular Architecture: Swap modules instantly to adapt a single platform to any seasonal task.",
        "Fleet Consolidation: One intelligent system replaces an entire fleet of expensive, single-use machines.",
        "Direct-Drive Power: A brushless, gearless chassis delivers unyielding torque for heavy-duty work.",
        "True Autonomy: Advanced navigation provides reliable, continuous awareness in unpredictable real-world conditions.",
        "Over-the-Air Updates: Continuous software enhancements ensure every robot gets smarter over time.",
      ],
    },
    {
      id: "journey-foundation",
      chapter: "04",
      title: "Building the Foundation",
      sectionLabel: "Our Journey",
      paragraphs: [
        "We started by engineering a durable robotic platform from the ground up.",
        "Instead of relying on fragile consumer electronics, we developed an industrial grade autonomous system powered by efficient gearless BLDC motors and a robust mechatronic architecture built for long term performance.",
      ],
    },
    {
      id: "journey-expanding",
      chapter: "05",
      title: "Expanding the Platform",
      paragraphs: [
        "We are expanding our modular ecosystem so a single robotic core can conquer multiple industries.",
        "From sprawling corporate campuses and commercial airports to heavy-duty warehouses, every new attachment instantly multiplies your operational capabilities—without the capital expense of buying an entirely new machine.",
      ],
    },
    {
      id: "journey-future",
      chapter: "06",
      title: "The Future",
      paragraphs: [
        "Our goal is simple.",
        "One intelligent robotic platform that handles every routine maintenance task, indoors and outdoors, so businesses can reduce labor costs, increase efficiency, and focus on what matters most.",
      ],
    },
  ],
  cta: {
    eyebrow: "Explore further",
    headline: "See the technology behind CHORE",
    description:
      "Dynamic navigation, modular engineering, and fleet command — dive into the systems that power every module.",
    label: "Our Technology",
    href: "/technology",
  },
} as const;

export type AboutSection = (typeof aboutPage.sections)[number];

export type AboutSectionWithVideo = Extract<
  AboutSection,
  { video: string | null }
>;
