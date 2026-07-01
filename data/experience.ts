export type ExperienceType = "technical" | "leadership" | "program";
export type Experience = {
  id: string;
  title: string;
  organization: string;
  type: ExperienceType;
  startDate: string;
  endDate?: string;
  location?: string;
  highlight?: string;
  description: string[];
  skills: string[];
  link?: string;
};

// export const experienceItems: Experience[] = [
//   { id: "rec", 
//     title: "Software Engineering Intern", 
//     organization: "REC",
//     type: "technical", 
//     startDate: "Jun 2026", 
//     location: "Remote", 
//     description: ["Explored applied machine learning workflows through a project-based fellowship.", "Worked with data analysis, model evaluation, and technical communication."], 
//     skills: ["App Development"]
//   },
//   { id: "ai4all", 
//     title: "Ignite Fellow", 
//     organization: "AI4ALL",
//     type: "technical", 
//     startDate: "May 2026", 
//     location: "Remote", 
//     description: ["Explored applied machine learning workflows through a project-based fellowship.", "Worked with data analysis, model evaluation, and technical communication."], 
//     skills: ["Machine Learning", "Python", "Data Analysis"]
//   },
//   { id: "bny",
//     title: "Engineering Sophomore Summit Participant", 
//     organization: "BNY", 
//     type: "program", 
//     startDate: "May 2025", 
//     location: "Remote",
//     description: ["Participated in engineering-focused programming with exposure to technical career paths"], 
//     skills: ["Career Development", "Communication"] 
//   },
//   { id: "amex", 
//     title: "Software Engineer Apprentice", 
//     organization: "American Express",
//     type: "technical", 
//     startDate: "Jan 2026 - Apr 2026", 
//     location: "Remote", 
//     description: ["Explored applied machine learning workflows through a project-based fellowship.", "Worked with data analysis, model evaluation, and technical communication."], 
//     skills: ["Machine Learning", "Python", "Full stack Development"]
//   },
//   { id: "sasehacks", 
//     title: "Awards & Judging Committee", 
//     organization: "SASEHacks", 
//     type: "leadership", 
//     startDate: "Oct 2025 - Mar 2026",
//     description: ["Helped support judging workflows and award coordination for a hackathon setting.", "Worked with peers to keep evaluation processes organized and clear."],
//     skills: ["Event Management", "Collboration"] 
//   },
//   { id: "wicse", 
//     title: "Public Relations Coordinator", 
//     organization: "WiCSE", 
//     type: "leadership", 
//     startDate: "Apr 2025 - Apr 2026", 
//     // location: "Gainesville, FL", 
//     description: ["Supported outreach and communication for an inclusive computer science community.", "Created messaging that helped students discover events, resources, and opportunities."],
//     skills: ["Leadership", "Marketing", "Community"] 
//   },
//   { id: "gso", 
//     title: "Volunteer Coordinator", 
//     organization: "Gator Science Olympiad", 
//     type: "leadership", 
//     startDate: "Oct 2024", 
//     // location: "Gainesville, FL", 
//     description: ["Coordinated volunteers for science outreach programming.", "Helped organize logistics and communication for a student-run event."], 
//     skills: ["Operations", "Team Coordination", "STEM Outreach"] 
//   }
// ];

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
    highlight: "Supporting app development and technical setup for a startup software project.",
    description: [
      "Contributed to a startup software project by supporting app development, local setup, and technical exploration.",
      "Collaborated with teammates to understand frontend, backend, Firebase, and environment configuration workflows.",
    ],
    skills: ["App Development", "Frontend", "Firebase", "Collaboration"],
  },
  {
    id: "ai4all",
    title: "AI4ALL Ignite Fellow",
    organization: "AI4ALL",
    type: "technical",
    startDate: "May 2026",
    endDate: "Present",
    location: "Remote",
    highlight: "Building ML models for IoT network intrusion detection.",
    description: [
      "Worked on a machine learning project focused on classifying IoT network traffic as benign or malicious.",
      "Explored the TON_IoT dataset through data cleaning, feature analysis, model evaluation, and technical communication.",
    ],
    skills: ["Machine Learning", "Python", "Data Analysis", "Model Evaluation"],
  },
  {
    id: "bny",
    title: "Engineering Sophomore Summit Participant",
    organization: "BNY",
    type: "program",
    startDate: "May 2026",
    location: "Remote",
    highlight: "Participated in an engineering-focused early career development program.",
    description: [
      "Participated in engineering-focused programming with exposure to technical career paths, professional development, and early career opportunities.",
      "Engaged with industry professionals to better understand engineering roles in financial technology and large-scale systems.",
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
    highlight: "Developed technical skills through software engineering apprenticeship programming.",
    description: [
      "Participated in software engineering apprenticeship programming focused on technical growth, collaboration, and project-based learning.",
      "Strengthened full-stack development foundations while practicing communication, problem-solving, and software development workflows.",
    ],
    skills: ["Software Engineering", "Full-Stack Development", "Collaboration"],
  },
  {
    id: "sasehacks",
    title: "Awards & Judging Committee Member",
    organization: "SASEHacks",
    type: "leadership",
    startDate: "Oct 2025",
    endDate: "Mar 2026",
    highlight: "Supported judging and awards coordination for a student-led hackathon.",
    description: [
      "Supported judging and awards coordination for a student-led hackathon.",
      "Helped organize evaluation workflows to keep project judging clear, fair, and efficient.",
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
    highlight: "Created outreach content for UF's Women in Computer Science & Engineering community.",
    description: [
      "Created outreach content and event messaging for UF's Women in Computer Science & Engineering community.",
      "Helped promote events, resources, and opportunities that support women and underrepresented students in computing.",
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
    highlight: "Coordinating volunteer communication and logistics for STEM outreach events.",
    description: [
      "Coordinated volunteer communication, role assignments, and event-day logistics for a student-run Science Olympiad tournament.",
      "Helped organize resources and processes to support volunteers, event supervisors, and competitors.",
    ],
    skills: ["Volunteer Coordination", "Operations", "STEM Outreach"],
  },
  {
    id: "esports-sub-instructor",
    title: "Substitute Instructor",
    organization: "Esports Class",
    type: "leadership",
    startDate: "May 2026",
    location: "Gainesville, FL",
    highlight: "Supported classroom instruction and student engagement for an esports-focused program.",
    description: [
      "Supported classroom instruction for an esports-focused program.",
      "Helped guide students through activities while maintaining an engaging and organized learning environment.",
    ],
    skills: ["Teaching", "Communication", "Student Support"],
  },
];