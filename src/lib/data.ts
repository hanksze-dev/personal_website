// ─────────────────────────────────────────────
// Site-wide content — edit here to update the page
// ─────────────────────────────────────────────

export const siteConfig = {
  name: "Hank Sze",
  tagline: "AI PM who built training infrastructure at Scale AI and shipped AI products at Meta. Now at Stanford GSB.",
  email: "hanksze@stanford.edu",
  phone: "415-370-1475",
  // TODO: update LinkedIn URL if you want the full path
  linkedIn: "https://linkedin.com/in/hanksze/",
  // TODO: replace with your hosted resume PDF URL (e.g. Google Drive direct link or Vercel-hosted /public/resume.pdf)
  resumeUrl: "/resume.pdf",
  ogTitle: "Hank Sze — AI Product Manager",
  ogDescription:
    "AI PM who built training infrastructure at Scale AI and shipped AI products at Meta. Stanford GSB MBA candidate 2027.",
};

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location?: string;
  bullets: string[];
}

export const experience: ExperienceItem[] = [
  {
    company: "Scale AI",
    role: "Technical Program Manager & PM",
    period: "Oct 2023 – Oct 2025",
    bullets: [
      "Led pilots validating Process Supervision training method → 8% model reasoning gains, 2 global EdTech enterprise wins.",
      "Built Process Supervision Data Platform (0→1), adopted company-wide; cut launch from 9 to 4 weeks; enabled products driving 40% of Scale's monthly revenue.",
      "Managed Google red-teaming engagement P&L, drove 40% contract expansion with safety evals for 10+ product launches; reduced jailbreak by 70%.",
      "Launched automated training data QC systems → 40% increase in expert engagement, $XMM annual cost savings.",
    ],
  },
  {
    company: "Meta, Generative AI",
    role: "Product Operations Manager",
    period: "Apr 2021 – Oct 2023",
    bullets: [
      "Reduced AI Agent bug reports 20% by identifying hallucination-prone topics; launched search plugins before public release.",
      "Created dogfooding program across FB, IG, WhatsApp → 10,000+ user adoption, 250 launch-blocking bugs fixed.",
      "Proved PMF for FB Groups content recommendation, secured 50% staffing increase + 3% Newsfeed distribution budget.",
      "Boosted DAU in emerging markets by 2M+ through FB Lite feature parity initiative.",
    ],
  },
  {
    company: "Motic Digital Pathology",
    role: "Associate PM",
    period: "Jun 2020 – Jan 2021",
    bullets: [
      "Globalized APAC telemedicine SaaS → deployed in 14+ hospitals across North America, Africa, Southeast Asia.",
      "Built pathologist user community (~160 members) → 30% increase in onboarding efficiency.",
    ],
  },
  {
    company: "Bear Tech",
    role: "Co-Founder & PM",
    period: "Aug 2017 – May 2020",
    location: "UC Berkeley-incubated",
    bullets: [
      "Built career development platform 0→1 to 7-figure revenue, 50%+ YoY growth, 110+ SMB employer partners, 95% placement success.",
      "Automated education planning app using 1000+ proprietary alumni data points.",
      "Expanded dataset access 70% via 15+ community college and NGO partnerships.",
    ],
  },
];

export interface ProjectItem {
  title: string;
  badge: string;
  description: string;
}

export const projects: ProjectItem[] = [
  {
    title: "Surfonboard.ai",
    badge: "Founder",
    description:
      "AI workflow automation for sales onboarding. Reducing rep ramp time using AI-native playbooks.",
  },
  {
    title: "Enterprise AI Adoption Research",
    badge: "GSB 390 — Independent Study",
    description:
      "Qualitative interviews with enterprise decision-makers on AI workflow prioritization and build-vs-buy decisions. GTM lens.",
  },
  {
    title: "Pear VC Fellow",
    badge: "Early-Stage Investing",
    description:
      "Early-stage venture investing through Stanford GSB. Focus on AI-native infrastructure and B2B SaaS.",
  },
  {
    title: "GSB Class Fund",
    badge: "Student-Managed Fund",
    description:
      "Investing exposure through Stanford GSB's student-managed investment fund.",
  },
];

export interface SkillGroup {
  category: string;
  skills: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    category: "AI / ML",
    skills: [
      "RLHF & Process Supervision",
      "LLM Safety & Red-Teaming",
      "Training Data Quality",
      "AI Agents & RAG",
      "Model Evaluation",
    ],
  },
  {
    category: "Product",
    skills: [
      "0→1 Product Development",
      "Roadmapping & Prioritization",
      "Data-Driven Decision Making",
      "User Research & Dogfooding",
      "P&L Ownership",
    ],
  },
  {
    category: "GTM / Strategy",
    skills: [
      "Enterprise Sales & Pilots",
      "PMF Validation",
      "Market Sizing",
      "Venture & Early-Stage Investing",
      "Cross-functional Leadership",
    ],
  },
];

export interface EducationItem {
  school: string;
  degree: string;
  period: string;
  notes?: string;
}

export const education: EducationItem[] = [
  {
    school: "Stanford Graduate School of Business",
    degree: "MBA",
    period: "2025 – 2027",
    notes: "Pear VC Fellow · GSB Class Fund",
  },
  {
    school: "UC Berkeley, Haas School of Business",
    degree: "BS, Business Administration",
    period: "2013 – 2017",
    notes: "Bear Tech Co-Founder · Venture-backed incubator",
  },
];
