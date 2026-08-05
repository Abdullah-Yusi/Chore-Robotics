export const aboutPage = {
  intro: {
    eyebrow: "About Us",
    headline: "About Chore Robotics",
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
      id: "why-we-started",
      chapter: "01",
      title: "Why We Started",
      video: "Main Robot Exploded View.57.mp4" as string | null,
      paragraphs: [
        "Outdoor maintenance is broken.",
        "Property owners rely on multiple expensive machines for different jobs. Most are used only a few times a year, require skilled operators, and depend on a workforce that is becoming harder and more expensive to find.",
        "We started Chore Robotics to replace that outdated model with one intelligent robotic platform that works autonomously, adapts to different tasks, and delivers reliable results every day.",
      ],
    },
    {
      id: "problem",
      chapter: "02",
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
      id: "different",
      chapter: "03",
      title: "What Makes Us Different",
      bullets: [
        "We did not build another single purpose robot.",
        "We built a modular robotic platform that can perform multiple maintenance tasks by changing attachments.",
        "Industrial grade hardware built for demanding environments.",
        "Intelligent autonomous navigation designed for real world reliability.",
        "One platform that replaces multiple expensive machines.",
        "Continuous software improvements that make every robot smarter over time.",
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
        "Today, we are expanding our modular ecosystem so one robot can handle more jobs across more industries.",
        "Our platform is built for residential communities, commercial properties, municipalities, schools, airports, warehouses, factories, hospitals, and many other environments.",
        "Every new attachment extends the robot's capabilities, giving customers more value without investing in another machine.",
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
