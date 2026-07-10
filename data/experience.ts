export type ExperienceType = "technical" | "leadership" | "program";
export type Experience = {
  id: string;
  title: string;
  organization: string;
  type: ExperienceType;
  startDate: string;
  endDate?: string;
  location?: string;
  // highlight?: string;
  description: string[];
  skills: string[];
  link?: string;
};

export const experienceTypes: { label: string; value: ExperienceType }[] = [
  { label: "Technical", value: "technical" },
  { label: "Leadership", value: "leadership" },
  { label: "Programs", value: "program" }
];

export const experienceItems: Experience[] = [
  {
    id: "rec",
    title: "Software Engineering Intern",
    organization: "REC",
    type: "technical",
    startDate: "Jun 2026",
    endDate: "Present",
    location: "Remote",
    // highlight: "Supporting app development and technical setup for a startup software project.",
    description: [
      "Contributed to a startup software project by supporting app development and technical exploration."
    ],
    skills: ["App Development", "Backend"],
  },
  {
    id: "esports-sub-instructor",
    title: "Substitute Instructor",
    organization: "Whizara",
    type: "leadership",
    startDate: "Jun 2026",
    endDate: "Present",
    location: "Miami, FL",
    // highlight: "Supported classroom instruction and student engagement for an esports-focused program.",
    description: [
      "Guided students through activities while maintaining an engaging and organized learning environment.",
    ],
    skills: ["Teaching", "Communication", "Student Support"],
  },
  {
    id: "ai4all",
    title: "AI4ALL Ignite Fellow",
    organization: "AI4ALL",
    type: "technical",
    startDate: "May 2026",
    endDate: "Present",
    location: "Remote",
    // highlight: "Building ML models for IoT network intrusion detection.",
    description: [
      "Working on a machine learning project focused on classifying IoT network traffic as benign or malicious.",
      "Explored the TON_IoT dataset through feature analysis.",
    ],
    skills: ["Data Analysis", "Model Evaluation", "Machine Learning", "Python"],
  },
  {
    id: "bny",
    title: "Engineering Sophomore Summit Participant",
    organization: "BNY",
    type: "program",
    startDate: "May 2026",
    endDate: "June 2026",
    location: "Remote",
    // highlight: "Participated in an engineering-focused early career development program.",
    description: [
      "Selected for a six-week pre-internship program, engaging directly with senior executives and industry leaders to gain insights into BNY's operations and competing in a coding business case challenge.",
    ],
    skills: ["Career Development", "Technical Communication", "Networking"],
  },
  {
    id: "amex",
    title: "Software Engineer Apprentice",
    organization: "American Express",
    type: "technical",
    startDate: "Jan 2026",
    endDate: "Apr 2026",
    location: "Remote",
    // highlight: "Developed technical skills through software engineering apprenticeship programming.",
    description: [
      "Participated in software engineering apprenticeship focused on technical growth and project-based learning.",
      // "Strengthened full-stack development foundations while practicing communication, problem-solving, and software development workflows.",
    ],
    skills: ["Software Engineering", "Collaboration", "Machine Learning"],
  },
  {
    id: "sasehacks",
    title: "Awards & Judging Committee Member",
    organization: "SASEHacks",
    type: "leadership",
    startDate: "Oct 2025",
    endDate: "Mar 2026",
    location: "Gainesville, FL",
    // highlight: "Supported judging and awards coordination for a student-led hackathon.",
    description: [
      "Supported judging and awards coordination for a student-led hackathon."
    ],
    skills: ["Event Management", "Judging Operations", "Collaboration"],
  },
  {
    id: "wicse",
    title: "Public Relations Coordinator",
    organization: "WiCSE",
    type: "leadership",
    startDate: "Apr 2025",
    endDate: "Apr 2026",
    location: "Gainesville, FL",
    // highlight: "Created outreach content for UF's Women in Computer Science & Engineering community.",
    description: [
      "Collaborate with co-director to publish 120+ posts, expanding reach and driving awareness for WiCSE events and initiatives",
    ],
    skills: ["Public Relations", "Content Strategy", "Community Outreach"],
  },
  {
    id: "gso",
    title: "Volunteer Coordinator",
    organization: "Gator Science Olympiad",
    type: "leadership",
    startDate: "Oct 2024",
    endDate: "Present",
    location: "Gainesville, FL",
    // highlight: "Coordinating volunteer communication and logistics for STEM outreach events.",
    description: [
      "Coordinated volunteer communication, role assignments, and event-day logistics for a student-run Science Olympiad tournament.",
      "Helped organize resources and processes to support volunteers, event supervisors, and competitors.",
    ],
    skills: ["Volunteer Coordination", "Operations", "STEM Outreach"],
  }
];