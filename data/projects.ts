export type ProjectStatus = "Completed" | "In Progress" | "Prototype";

export type Project = {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  cardSummary?: string;
  description: string;
  problem: string;
  solution: string;
  role: string;
  techStack: string[];
  tags: string[];
  features: string[];
  challenges: string[];
  lessons: string[];
  startDate?: string;
  endDate?: string;
  status?: ProjectStatus;
  githubUrl?: string;
  demoUrl?: string;
  imageUrl?: string;
  featured: boolean;
};

export const projectTags = [
  "All",
  "Full-Stack",
  "AI / ML",
  "Data",
  "C++",
  "Backend",
  "Systems",
  "Mobile",
  "Cybersecurity",
];

export const projects: Project[] = [
  {
    id: "iot",
    slug: "iot-network-intrusion-detection",
    title: "IoT Network Intrusion Detection",
    subtitle: "ML-Based Traffic Classification Using TON_IoT",
    cardSummary:
      "Built and evaluated machine learning models for classifying IoT network traffic as benign or malicious.",
    description:
      "A machine learning project for classifying IoT network traffic and exploring cybersecurity patterns in structured data.",
    problem:
      "IoT environments can generate complex traffic patterns, making it difficult to identify potentially malicious behavior at scale.",
    solution:
      "The project uses preprocessing, feature exploration, and classification models to distinguish traffic categories in the TON_IoT dataset.",
    role:
      "Cleaned and explored the TON_IoT dataset, prepared modeling splits, built baseline classification models, and evaluated results using accuracy, precision, and recall.",
    techStack: ["Python", "Pandas", "Scikit-learn", "ML Classification"],
    tags: ["AI / ML", "Data", "Cybersecurity"],
    features: [
      "TON_IoT dataset analysis",
      "Preprocessing and feature selection",
      "Train/test modeling workflow",
      "Classification model comparison",
      "Cybersecurity-focused interpretation",
    ],
    challenges: [
      "Understanding feature meaning in a security dataset",
      "Evaluating models beyond surface-level accuracy",
      "Interpreting false positives and false negatives in a security context",
    ],
    lessons: [
      "Data cleaning shapes model quality early",
      "Security projects require careful interpretation of false positives and false negatives",
    ],
    startDate: "June 2026",
    status: "In Progress",
    // Replace with your real repo when ready.
    // githubUrl: "https://github.com/wiwiwashere/iot-network-intrusion-detection",
    featured: true,
  },
  {
    id: "meow",
    slug: "meow-cat-detector",
    title: "Meow",
    subtitle: "AI Cat Detection and WhatsApp Alert System",
    cardSummary:
      "Built a FastAPI-based cat detection system with model inference, detection history, and WhatsApp alerts.",
    description:
      "A full-stack AI system that detects cats from camera input and sends WhatsApp alerts through Twilio.",
    problem:
      "Pet owners and caretakers often need quick alerts when a cat appears in a camera feed, but manual monitoring is tedious and easy to miss.",
    solution:
      "Meow combines a trained detection model, a FastAPI backend, SQLite storage, Hugging Face model hosting, and Twilio notifications so alerts can be sent automatically.",
    role:
      "Built the FastAPI backend workflow, connected model inference to prediction endpoints, stored detection history with SQLite, integrated Twilio WhatsApp alerts, and prepared the app for Railway deployment.",
    techStack: [
      "FastAPI",
      "TensorFlow",
      "Hugging Face",
      "SQLite",
      "Twilio",
      "Railway",
    ],
    tags: ["AI / ML", "Full-Stack", "Backend"],
    features: [
      "Camera-based cat detection pipeline",
      "Prediction endpoints for model inference",
      "SQLite detection history storage",
      "WhatsApp subscriber and alert workflow",
      "Twilio-powered notification delivery",
      "Railway-ready backend deployment setup",
    ],
    challenges: [
      "Balancing model response speed with usable detection confidence",
      "Connecting backend state, prediction results, and external alert APIs",
      "Managing environment variables and deployment settings for a hosted workflow",
    ],
    lessons: [
      "AI projects become more useful when wrapped in a clear product flow",
      "Deployment, persistence, and alerting details matter as much as model accuracy",
    ],
    startDate: "2026",
    status: "Completed",
    // Replace with your real repo when ready.
    // githubUrl: "https://github.com/wiwiwashere/meow-cat-detector",
    featured: true,
  },
  {
    id: "plc",
    slug: "plc-language-interpreter",
    title: "PLC Interpreter",
    subtitle: "Lexer, Parser, Analyzer, and Evaluator for a Custom Language",
    cardSummary:
      "Built core stages of a custom programming language pipeline, including parsing, analysis, and evaluation.",
    description:
      "A programming languages project that implements core parts of a custom language pipeline, including lexical analysis, parsing, static analysis, and dynamic evaluation.",
    problem:
      "Programming languages require multiple coordinated stages to transform source code into executable behavior while catching syntax and type errors.",
    solution:
      "The project builds a lexer, recursive descent parser, analyzer, and evaluator using AST structures and visitor-style logic.",
    role:
      "Implemented and debugged language features across parsing, type analysis, scope handling, expression evaluation, and validation tests.",
    techStack: ["Java", "Recursive Descent Parsing", "AST", "Static Analysis"],
    tags: ["Backend"],
    features: [
      "Lexer for tokenizing source input",
      "Recursive descent parser for expressions and statements",
      "Static analyzer with scope and type validation",
      "Evaluator for executing language behavior",
    ],
    challenges: [
      "Handling precedence across nested expressions",
      "Tracking variable scope and initialization state",
      "Debugging edge cases in parser and evaluator tests",
    ],
    lessons: [
      "Language tools require careful coordination between syntax, semantics, and runtime behavior",
      "Small grammar decisions can create large downstream effects",
    ],
    status: "Completed",
    featured: false,
  },
  {
    id: "cifar-dataset-analysis",
    slug: "cifar-dataset-analysis",
    title: "CIFAR Dataset Analysis",
    subtitle: "Computer Vision Dataset Exploration and Image Classification",
    description:
      "A machine learning project focused on exploring the CIFAR image dataset, analyzing class distributions, preprocessing image data, and evaluating classification model performance.",
    problem:
      "Image classification models can perform poorly when datasets are not well understood, especially when there are class imbalance issues, noisy samples, or preprocessing decisions that affect model performance.",
    solution:
      "This project explores the CIFAR dataset through data visualization, preprocessing, and model evaluation. It examines how image data is structured and how different modeling choices impact classification results.",
    role:
      "Performed dataset exploration, analyzed image classes and distributions, prepared data for modeling, trained classification models, and evaluated performance using metrics such as accuracy and class-level results.",
    techStack: ["Python", "TensorFlow", "NumPy", "Pandas", "Matplotlib"],
    tags: ["AI / ML", "Data"],
    features: [
      "Explores CIFAR image classes and dataset structure",
      "Visualizes sample images and class distributions",
      "Preprocesses image data for machine learning models",
      "Trains and evaluates image classification models",
      "Compares model performance using evaluation metrics",
    ],
    challenges: [
      "Understanding how image data is represented numerically",
      "Improving model performance beyond basic accuracy",
      "Interpreting classification results across multiple image categories",
    ],
    lessons: [
      "Learned the importance of dataset exploration before modeling",
      "Practiced computer vision preprocessing workflows",
      "Gained experience evaluating model performance beyond a single accuracy score",
    ],
    githubUrl: "",
    demoUrl: "",
    imageUrl: "",
    featured: false,
  },
  {
    id: "system-call-file-manager",
    slug: "system-call-file-manager",
    title: "System Call File Manager",
    subtitle: "Low-Level File Management Using UNIX System Calls",
    description:
      "A systems programming project that uses low-level UNIX system calls to perform file operations and explore how operating systems handle files beneath higher-level abstractions.",
    problem:
      "Most file management tools hide the lower-level operating system behavior behind simple interfaces, making it harder to understand how files are actually opened, read, written, copied, and managed at the system level.",
    solution:
      "This project implements file management functionality using UNIX system calls, allowing direct interaction with file descriptors and OS-level operations. It demonstrates how common file actions work closer to the operating system layer.",
    role:
      "Designed and implemented the core file operation logic, worked with system calls for file access and manipulation, and tested edge cases involving file input, output, and error handling.",
    techStack: ["C", "UNIX System Calls", "Linux", "File I/O"],
    tags: ["C++", "Systems", "Backend"],
    features: [
      "Uses low-level system calls for file operations",
      "Supports core file management actions such as reading, writing, and copying files",
      "Handles file descriptors directly instead of relying only on high-level libraries",
      "Includes error handling for invalid files, permissions, and failed operations",
    ],
    challenges: [
      "Understanding how file descriptors work at the operating system level",
      "Managing edge cases around missing files, invalid paths, and permissions",
      "Debugging lower-level behavior without the convenience of higher-level abstractions",
    ],
    lessons: [
      "Gained a stronger understanding of how operating systems manage files",
      "Learned how system calls connect user programs to kernel-level functionality",
      "Practiced writing more careful error handling for low-level programs",
    ],
    githubUrl: "",
    demoUrl: "",
    imageUrl: "",
    featured: false,
  },
  {
    id: "nook",
    slug: "nook-furniture-trading",
    title: "Nook",
    subtitle: "Furniture Trading Platform for UF Students",
    cardSummary:
      "Built a student-focused marketplace for buying and selling furniture around the UF community.",
    description:
      "A student-centered marketplace for buying, selling, and discovering furniture around the University of Florida community.",
    problem:
      "UF students moving in and out of apartments often need affordable furniture quickly, but general marketplaces can feel cluttered, unsafe, or too broad.",
    solution:
      "Nook creates a focused furniture marketplace with listings, search-friendly information, and a familiar full-stack product structure.",
    role:
      "Helped shape the product flow, implemented full-stack features, and organized user-centered listing data for a student audience.",
    techStack: ["MongoDB", "Express", "React", "Node.js"],
    tags: ["Full-Stack"],
    features: [
      "Furniture listing cards",
      "Student-oriented product details",
      "MERN-style frontend and backend separation",
      "Marketplace flow for browsing items",
    ],
    challenges: [
      "Designing a marketplace that feels simple instead of overloaded",
      "Keeping listing data consistent between frontend and backend",
    ],
    lessons: [
      "Building for a specific student audience made the product easier to scope and design",
      "Clear data models help full-stack teams move faster",
    ],
    status: "Completed",
    // Replace with your real repo when ready.
    githubUrl: "https://github.com/wiwiwashere/nook",
    featured: true,
  },
  {
    id: "ideal-ride",
    slug: "ideal-ride",
    title: "Ideal Ride",
    subtitle: "Personalized Ride Planning and Recommendation Application",
    description:
      "A user-centered application concept that helps users find a more suitable ride experience based on preferences, convenience, and trip-related factors.",
    problem:
      "Choosing a ride can involve more than simply finding the fastest or cheapest option. Users may care about comfort, timing, convenience, safety, accessibility, or personal preferences, but these factors are often not presented in a personalized way.",
    solution:
      "Ideal Ride focuses on helping users make better ride decisions by organizing ride-related information around user preferences and presenting options in a clearer, more personalized format.",
    role:
      "Contributed to the project concept, user flow, feature planning, and implementation of application functionality. Focused on making the experience intuitive and aligned with real user needs.",
    techStack: ["React", "JavaScript", "HTML", "CSS"],
    tags: ["Full-Stack"],
    features: [
      "Allows users to view or compare ride-related options",
      "Organizes ride information around user preferences",
      "Provides a clean interface for planning or selecting rides",
      "Focuses on usability and decision-making support",
    ],
    challenges: [
      "Defining what makes a ride ideal from a user perspective",
      "Balancing useful information with a simple interface",
      "Designing features that feel practical instead of overly complex",
    ],
    lessons: [
      "Learned how to translate a real-world transportation problem into a product idea",
      "Practiced designing around user preferences and decision-making",
      "Gained experience building a more user-centered application flow",
    ],
    githubUrl: "",
    demoUrl: "",
    imageUrl: "",
    featured: false,
  },
  {
    id: "luna",
    slug: "luna-ingredient-scanner",
    title: "LUNA",
    subtitle: "Mobile AI Ingredient Label Scanner",
    cardSummary:
      "Designed a mobile AI concept that scans ingredient labels and turns dense text into readable summaries.",
    description:
      "An AI-powered mobile app concept that scans ingredient labels and uses AI assistance to make product information easier to understand.",
    problem:
      "Ingredient labels can be difficult to parse quickly, especially when users are making health, allergy, or lifestyle decisions.",
    solution:
      "LUNA uses mobile scanning, OCR, and AI interpretation to turn dense label text into clearer summaries.",
    role:
      "Explored the product concept, planned the mobile flow, and connected the AI feature set to a practical user need.",
    techStack: ["React Native", "Google Vision", "Gemini API"],
    tags: ["AI / ML", "Mobile"],
    features: [
      "Mobile-first scan experience",
      "OCR-powered label extraction",
      "AI-assisted ingredient explanation",
      "Readable summary output",
    ],
    challenges: [
      "Handling inconsistent label layouts",
      "Making AI responses concise enough for mobile contexts",
    ],
    lessons: [
      "AI features need careful UX framing",
      "Mobile workflows should minimize user effort at each step",
    ],
    status: "Prototype",
    featured: false,
  },
  {
    id: "minesweeper",
    slug: "minesweeper-sfml",
    title: "Minesweeper",
    subtitle: "C++ / SFML Game Project",
    cardSummary:
      "Implemented a desktop Minesweeper game using C++ logic, state management, and SFML rendering.",
    description:
      "A desktop Minesweeper implementation that practices C++ logic, state management, and SFML rendering.",
    problem:
      "Classic games are a useful way to practice precise state management, input handling, and visual feedback.",
    solution:
      "The project implements board generation, tile reveal behavior, win/loss states, and rendering through SFML.",
    role:
      "Built gameplay logic, coordinated rendering updates, and tested edge cases in board interactions.",
    techStack: ["C++", "SFML"],
    tags: ["C++"],
    features: [
      "Tile reveal and flag interactions",
      "Mine placement and number calculation",
      "Game state transitions",
      "SFML-based visual rendering",
    ],
    challenges: [
      "Keeping recursive reveal behavior predictable",
      "Separating board state from display state",
    ],
    lessons: [
      "Small games reward careful modeling",
      "C++ projects make ownership and state transitions visible",
    ],
    status: "Completed",
    // Replace with your real repo when ready.
    // githubUrl: "https://github.com/wiwiwashere/minesweeper-sfml",
    featured: false,
  }
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export const featuredProjects = projects.filter((project) => project.featured);
