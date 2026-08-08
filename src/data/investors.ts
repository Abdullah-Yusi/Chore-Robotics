export const investorsPage = {
  eyebrow: "Investors",
  headline: "INVESTOR RELATIONS",
  description:
    "Chore Robotics is building 100% American-made modular autonomy for property maintenance Stay informed on company news, events, and opportunities to connect with our team",
  pressReleases: {
    title: "Press Releases",
    description:
      "Official announcements, product milestones, and company updates from Chore Robotics",
    items: [
      {
        id: "pr-001",
        date: "2026-03-12",
        title: "Chore Robotics Unveils Modular Autonomous Platform for Year-Round Property Maintenance",
        summary:
          "The company introduced its single-base robotic architecture with swappable attachments for lawn care, snow removal, leaf collection, and more — all engineered and manufactured in the United States",
      },
      {
        id: "pr-002",
        date: "2026-01-08",
        title: "Chore Robotics Advances GPS-Agnostic Navigation with Ground Penetrating Radar Technology",
        summary:
          "Patented GPR mapping enables reliable autonomous operation in environments where satellite positioning fails, delivering continuous awareness across complex outdoor terrain",
      },
      {
        id: "pr-003",
        date: "2025-11-18",
        title: "Chore Robotics Opens Irvine Headquarters and Manufacturing Operations",
        summary:
          "The company established its US headquarters at 15 Hubble, Suite 200, Irvine, CA, consolidating engineering, production, and field operations under one roof",
      },
      {
        id: "pr-004",
        date: "2025-06-04",
        title: "Chore Robotics Launches Investor Relations Program",
        summary:
          "A dedicated investor relations channel is now available for institutional partners, strategic investors, and analysts seeking updates on company progress and market expansion",
      },
    ],
  },
  events: {
    title: "Events",
    description:
      "A record of conferences, trade shows, and industry events where Chore Robotics demonstrates its platform and meets partners",
    items: [
      {
        id: "ev-001",
        date: "2026-09-14",
        endDate: "2026-09-17",
        name: "Automate Show",
        location: "Detroit, MI",
        type: "Trade Show",
        status: "Upcoming",
      },
      {
        id: "ev-002",
        date: "2026-05-18",
        endDate: "2026-05-21",
        name: "ICRA 2026",
        location: "Vienna, Austria",
        type: "Conference",
        status: "Upcoming",
      },
      {
        id: "ev-003",
        date: "2026-03-17",
        endDate: "2026-03-20",
        name: "ProMat",
        location: "Chicago, IL",
        type: "Trade Show",
        status: "Completed",
      },
      {
        id: "ev-004",
        date: "2026-01-07",
        endDate: "2026-01-10",
        name: "CES",
        location: "Las Vegas, NV",
        type: "Trade Show",
        status: "Completed",
      },
      {
        id: "ev-005",
        date: "2025-10-22",
        endDate: "2025-10-24",
        name: "Green Industry & Equipment Expo",
        location: "Louisville, KY",
        type: "Industry Expo",
        status: "Completed",
      },
    ],
  },
  requestForm: {
    title: "Request More Information",
    description:
      "Share your details and our investor relations team will follow up with materials tailored to your interest in Chore Robotics",
    submitLabel: "Submit Request",
    successTitle: "Request Received",
    successDescription:
      "Thank you for your interest A member of our investor relations team will contact you shortly with the information you requested",
  },
  social: {
    title: "Follow Chore Robotics",
    description:
      "Connect with us on social media for product updates, field demonstrations, and company news",
  },
  emailAlerts: {
    title: "Subscribe to Email Alerts",
    description:
      "Receive press releases, event announcements, and investor updates directly in your inbox",
    placeholder: "Email address",
    buttonLabel: "Subscribe",
    disclaimer:
      "By subscribing, you agree to receive investor-related communications from Chore Robotics You may unsubscribe at any time",
    successMessage: "You're subscribed Watch your inbox for the latest from Chore Robotics",
  },
} as const;

export const INVESTOR_TYPES = [
  { value: "institutional", label: "Institutional Investor" },
  { value: "venture-capital", label: "Venture Capital" },
  { value: "angel", label: "Angel Investor" },
  { value: "strategic", label: "Strategic Partner" },
  { value: "analyst", label: "Financial Analyst" },
  { value: "other", label: "Other" },
] as const;

export type InvestorFormData = {
  fullName: string;
  email: string;
  company: string;
  investorType: string;
  phone: string;
  message: string;
};
