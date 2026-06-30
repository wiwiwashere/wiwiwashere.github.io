export type ExperienceType = "technical" | "leadership" | "program";
export type Experience = { id: string; title: string; organization: string; type: ExperienceType; startDate: string; endDate?: string; location?: string; description: string[]; skills: string[]; link?: string; };

export const experienceItems: Experience[] = [
  { id: "rec", 
    title: "Software Engineering Intern", 
    organization: "REC",
    type: "technical", 
    startDate: "Jun 2026", 
    location: "Remote", 
    description: ["Explored applied machine learning workflows through a project-based fellowship.", "Worked with data analysis, model evaluation, and technical communication."], 
    skills: ["App Development"]
  },
  { id: "ai4all", 
    title: "Ignite Fellow", 
    organization: "AI4ALL",
    type: "technical", 
    startDate: "May 2026", 
    location: "Remote", 
    description: ["Explored applied machine learning workflows through a project-based fellowship.", "Worked with data analysis, model evaluation, and technical communication."], 
    skills: ["Machine Learning", "Python", "Data Analysis"]
  },
  { id: "bny",
    title: "Engineering Sophomore Summit Participant", 
    organization: "BNY", 
    type: "program", 
    startDate: "May 2025", 
    location: "Remote",
    description: ["Participated in engineering-focused programming with exposure to technical career paths"], 
    skills: ["Career Development", "Communication"] 
  },
  { id: "amex", 
    title: "Software Engineer Apprentice", 
    organization: "American Express",
    type: "technical", 
    startDate: "Jan 2026 - Apr 2026", 
    location: "Remote", 
    description: ["Explored applied machine learning workflows through a project-based fellowship.", "Worked with data analysis, model evaluation, and technical communication."], 
    skills: ["Machine Learning", "Python", "Full stack Development"]
  },
  { id: "sasehacks", 
    title: "Awards & Judging Committee", 
    organization: "SASEHacks", 
    type: "leadership", 
    startDate: "Oct 2025 - Mar 2026",
    description: ["Helped support judging workflows and award coordination for a hackathon setting.", "Worked with peers to keep evaluation processes organized and clear."],
    skills: ["Event Management", "Collboration"] 
  },
  { id: "wicse", 
    title: "Public Relations Coordinator", 
    organization: "WiCSE", 
    type: "leadership", 
    startDate: "Apr 2025 - Apr 2026", 
    // location: "Gainesville, FL", 
    description: ["Supported outreach and communication for an inclusive computer science community.", "Created messaging that helped students discover events, resources, and opportunities."],
    skills: ["Leadership", "Marketing", "Community"] 
  },
  { id: "gso", 
    title: "Volunteer Coordinator", 
    organization: "Gator Science Olympiad", 
    type: "leadership", 
    startDate: "Oct 2024", 
    // location: "Gainesville, FL", 
    description: ["Coordinated volunteers for science outreach programming.", "Helped organize logistics and communication for a student-run event."], 
    skills: ["Operations", "Team Coordination", "STEM Outreach"] 
  }
];

export const experienceTypes: { label: string; value: ExperienceType }[] = [
  { label: "Technical", value: "technical" },
  { label: "Leadership", value: "leadership" },
  { label: "Programs", value: "program" }
];
