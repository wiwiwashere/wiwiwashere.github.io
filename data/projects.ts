export type ProjectStatus = "Completed" | "In Progress" | "Prototype";

export type ProjectMediaItem = {
  type: "image" | "video" | "youtube" | "drive";
  src: string;
  title?: string;
  caption?: string;
  poster?: string;
};

export type Project = {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  cardSummary?: string;
  description: string;
  problem?: string;
  solution?: string;
  role?: string;
  techStack: string[];
  tags: string[];
  features?: string[];
  challenges?: string[];
  insights?: string[];
  startDate?: string;
  endDate?: string;
  status?: ProjectStatus;
  githubUrl?: string;
  demoUrl?: string;
  imageUrl?: string;
  media?: ProjectMediaItem[];
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
  "Team Project",
];

export const projects: Project[] = [
  {
    id: "iot",
    slug: "iot-network-intrusion-detection",
    title: "IoT Network Intrusion Detection [in:progress]",
    subtitle: "ML-Based Traffic Classification Using TON_IoT",
    cardSummary:
      "Building and evaluating machine learning models for classifying IoT network traffic as benign or malicious.",
    description:
      "A machine learning project for classifying IoT network traffic and exploring cybersecurity patterns in structured data.",
    problem:
      "IoT environments can generate complex traffic patterns, making it difficult to identify potentially malicious behavior at scale.",
    // solution:
    //   "The project uses preprocessing, feature exploration, and classification models to distinguish traffic categories in the TON_IoT dataset.",
    role:
      "Cleaned and explored the TON_IoT dataset.",
    techStack: ["Python", "Pandas", "Scikit-learn", "ML Classification"],
    tags: ["AI / ML", "Data", "Cybersecurity", "Team Project",],
    features: [
      "TON_IoT dataset analysis",
      "Preprocessing and feature selection",
      // "Train/test modeling workflow",
      // "Classification model comparison",
      // "Cybersecurity-focused interpretation",
    ],
    challenges: [
      "Class imbalance in the dataset",
      "Understanding feature meaning in a security dataset",
      // "Evaluating models beyond surface-level accuracy",
      // "Interpreting false positives and false negatives in a security context",
    ],
    insights: [
      // "Data cleaning shapes model quality early",
      // "Security projects require careful interpretation of false positives and false negatives",
    ],
    startDate: "June 2026",
    status: "In Progress",
    // Replace with your real repo when ready.
    // githubUrl: "https://github.com/wiwiwashere/TON_loT_network",
    featured: true,
  },
  {
    id: "recod-ai",
    slug: "recod-ai-image-forgery-detection",
    title: "Recod.ai - Scientific Image Forgery Detection",
    subtitle: "Scientific Image Forgery Detection Framework",
    description:
      "A computer vision project for detecting manipulated biomedical and scientific images, built for the LUC Scientific Image Forgery Detection Competition.",
    problem:
      "Scientific and biomedical images can be manipulated in subtle ways, making it difficult to identify forged or tampered regions through manual inspection alone. These challenges become harder when images vary in scale, structure, and manipulation type.",
    solution:
      "developed a computer vision pipeline that identify potential image forgeries. The system incorporates DINOv2, YOLO, and SAM, along with attention-based localization and routing strategies for more robust detection.",
    role:
      "Contributed to the design of the forgery-detection framework and worked on improving robustness through instance-based augmentation and Mixture-of-Experts routing.",
    techStack: [
      "Python",
      // "DINOv2",
      // "YOLO",
      // "SAM",
      // "Computer Vision",
      // "Deep Learning"
    ],
    tags: ["AI / ML", "Data", "Team Project"],
    features: [
      "Detects potential manipulation in scientific and biomedical images",
      "Uses DINOv2 for visual representation learning",
      "Incorporates YOLO for object detection support",
      "Uses SAM for segmentation-based analysis",
      "Applies attention-based localization to identify suspicious regions",
      "Uses instance-based augmentation to improve training diversity",
      "Explores Mixture-of-Experts routing for class imbalance and multi-scale image challenges",
    ],
    challenges: [
      "Handling class imbalance across different forgery categories",
      "Detecting small or subtle tampered regions in complex scientific images",
      "Combining multiple computer vision models into a coherent detection framework",
      // "Improving robustness across images with different scales and visual patterns",
    ],
    insights: [
      "Learned how modern computer vision models can be combined for specialized detection tasks",
      // "Gained experience thinking about image forensics, localization, and segmentation",
      "Practiced designing model strategies for imbalanced and multi-scale datasets",
      // "Developed a stronger understanding of how AI can support scientific integrity and research trust",
    ],
    githubUrl: "",
    demoUrl: "",
    imageUrl: "",
    featured: false,
    media: [
      {
        type: "image",
        src: "/project/DINOv2_+_Adapter.png",
        title: "DINOv2 + Adapter",
        caption: "self-supervised"
      },
      {
        type: "image",
        src: "/project/DOA_Head.png",
        title: "DOA Head",
        caption: "From https://ieeexplore.ieee.org/document/9157762"
      },
      {
        type: "image",
        src: "/project/yolo+sam.png",
        title: "Yolo + Sam",
        caption: "Yolo get bounding box + sam get instance mask"
      },
      {
        type: "image",
        src: "/project/multi_grid_image.png",
        title: "Multi grid image",
        caption: "From https://ya.ru/?source=tabbar"
      },
      {
        type: "image",
        src: "/project/multi_yolo.png",
        title: "yolo with multi grid image",
        caption: "train yolo with manual labeled multi grid image"
      },
      // {
      //   type: "youtube",
      //   src: "https://www.youtube.com/embed/YOUTUBE_ID",
      //   title: "demo video"
      // },
      // {
      //   type: "drive",
      //   src: "https://drive.google.com/file/d/FILE_ID/preview",
      //   title: "walkthrough"
      // }
    ]
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
    // role:
      // "Built the FastAPI backend workflow, connected model inference to prediction endpoints, stored detection history with SQLite, integrated Twilio WhatsApp alerts, and prepared the app for Railway deployment.",
    techStack: [
      "FastAPI",
      "TensorFlow",
      "SQLite",
      "Twilio",
      "Railway",
      "Hugging Face",
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
      "Data leakage",
      "Balancing model response speed with usable detection confidence",
      "Connecting backend states",
    ],
    insights: [
      "Always validdate model performance on unseen data",
    ],
    startDate: "2026",
    status: "Completed",
    // Replace with your real repo when ready.
    // githubUrl: "https://github.com/wiwiwashere/meow-cat-detector",
    featured: true,
    media: [
      {
        type: "youtube",
        src: "https://youtube.com/embed/kaF1jJNUAdU",
        title: "demo video"
      }
    ]
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
    // problem:
    //   "Programming languages require multiple coordinated stages to transform source code into executable behavior while catching syntax and type errors.",
    // solution:
    //   "The project builds a lexer, recursive descent parser, analyzer, and evaluator using AST structures and visitor-style logic.",
    // role:
    //   "Implemented and debugged language features across parsing, type analysis, scope handling, expression evaluation, and validation tests.",
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
    // lessons: [
    //   "Language tools require careful coordination between syntax, semantics, and runtime behavior",
    //   "Small grammar decisions can create large downstream effects",
    // ],
    status: "Completed",
    featured: false,
  },
  {
    id: "cifar-dataset-analysis",
    slug: "cifar-dataset-analysis",
    title: "CIFAR-10 Image Classification & Visualization",
    subtitle: "Computer Vision Dataset Exploration and Image Classification",
    description:
      "A machine learning project focused on exploring the CIFAR-10 image dataset.",
    // problem:
    //   "Image classification models can perform poorly when datasets are not well understood, especially when there are class imbalance issues, noisy samples, or preprocessing decisions that affect model performance.",
    // solution:
    //   "This project explores the CIFAR dataset through data visualization, preprocessing, and model evaluation. It examines how image data is structured and how different modeling choices impact classification results.",
    // role:
    //   "Performed dataset exploration, analyzed image classes and distributions, prepared data for modeling, trained classification models, and evaluated performance using metrics such as accuracy and class-level results.",
    techStack: ["Python", "TensorFlow", "NumPy", "Pandas", "Matplotlib"],
    tags: ["AI / ML", "Data"],
    // features: [
    //   "Explores CIFAR image classes and dataset structure",
    //   "Visualizes sample images and class distributions",
    //   "Preprocesses image data for machine learning models",
    //   "Trains and evaluates image classification models",
    //   "Compares model performance using evaluation metrics",
    // ],
    // challenges: [
    //   "Understanding how image data is represented numerically",
    //   "Improving model performance beyond basic accuracy",
    //   "Interpreting classification results across multiple image categories",
    // ],
    // lessons: [
    //   "Learned the importance of dataset exploration before modeling",
    //   "Practiced computer vision preprocessing workflows",
    //   "Gained experience evaluating model performance beyond a single accuracy score",
    // ],
    githubUrl: "",
    demoUrl: "",
    imageUrl: "",
    featured: false,
    media: [
      {
        type: "image",
        src: "/project/tsne_eu.png",
        title: "CIFAR-10 tSNE Visualization",
        caption: "CIFAR-10 dataset visualization in tSNE space generated by Euclidean distance"
      },
      {
        type: "image",
        src: "/project/tsne_eu_label.png",
        title: "CIFAR-10 tSNE Visualization",
        caption: "CIFAR-10 dataset visualization in tSNE space generated by Euclidean distance with class labels"
      },
      {
        type: "image",
        src: "/project/cifar-orig.png",
        title: "CIFAR-10 Original Images",
        caption: "CIFAR-10 dataset visualization in tSNE space generated by CNN"
      },
      {
        type: "image",
        src: "/project/cifar-point.png",
        title: "CIFAR-10 Original Images",
        caption: "CIFAR-10 dataset visualization in tSNE space generated by CNN with class labels"
      }
    ]
  },
  {
    id: "system-call-file-manager",
    slug: "system-call-file-manager",
    title: "System Call File Manager",
    subtitle: "Low-Level File Management Using UNIX System Calls",
    description:
      "A systems programming project that uses low-level UNIX system calls to perform file operations and explore how operating systems handle files beneath higher-level abstractions.",
    // problem:
    //   "Most file management tools hide the lower-level operating system behavior behind simple interfaces, making it harder to understand how files are actually opened, read, written, copied, and managed at the system level.",
    // solution:
    //   "This project implements file management functionality using UNIX system calls, allowing direct interaction with file descriptors and OS-level operations. It demonstrates how common file actions work closer to the operating system layer.",
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
    insights: [
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
      "Many students have only a few choices when it comes to their furniture when move out time rolls around. They either have to donate it, trash it, or lug it back home, which can be an issue for many students, especially those who live farther away.Many students will try to resell items, especially electronics, on social media platforms, but there are many scams and fake sellers on these apps, which leads to distrust amongst the students. ",
    solution:
      "Nook provided a platform for college students to connect with each other to trade items/services. We chose to focus specifically on dorm furniture as this is an issue that we have noticed many students at UF facing.",
    role:
      "Helped shape the product flow, implemented full-stack features, and organized user-centered listing data for a student audience.",
    techStack: ["MongoDB", "Express", "React", "Node.js"],
    tags: ["Full-Stack", "Team Project"],
    features: [
      "Rating and review system",
      "Chat system",
      "Search and filter functionality",
      "User authentication and profile management",
    ],
    challenges: [
      "Designing a marketplace that feels simple instead of overloaded",
      "Keeping listing data consistent between frontend and backend",
    ],
    insights: [
      "Building for a specific student audience made the product easier to scope and design",
      "Clear data models help full-stack teams move faster",
    ],
    status: "Completed",
    // Replace with your real repo when ready.
    // githubUrl: "https://github.com/wiwiwashere/nook",
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
    tags: ["Full-Stack", "Team project"],
    features: [
      "Organizes ride information around user preferences"
    ],
    challenges: [
      "Defining what makes a ride ideal from a user perspective",
      "Balancing useful information with a simple interface",
      "Designing features that feel practical instead of overly complex",
    ],
    // insights: [
    //   // "Learned how to translate a real-world transportation problem into a product idea",
    //   // "Practiced designing around user preferences and decision-making",
    //   "Gained experience building a more user-centered application flow",
    // ],
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
      "Designed UI/UX for the mobile flow.",
    techStack: ["React Native", "Google Vision", "Gemini API"],
    tags: ["Mobile", "AI / ML", "Team project"],
    features: [
      "Mobile-first scan experience",
      "OCR-powered label extraction",
      "AI-assisted ingredient explanation",
      "Readable summary output",
    ],
    challenges: [
      // "Handling inconsistent label layouts",
      // "Making AI responses concise enough for mobile contexts",
      "Integrating scanning, OCR, and AI features into a smooth mobile flow",
    ],
    insights: [
      // "AI features need careful UX framing",
      "Mobile workflows should minimize user effort at each step",
    ],
    status: "Completed",
    featured: false,
    media: [
      {
        type: "youtube",
        src: "https://www.youtube.com/embed/kZ3wQcI4Kp0",
        title: "LUNA Demo",
      }
    ]
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
    // problem:
    //   "Classic games are a useful way to practice precise state management, input handling, and visual feedback.",
    // solution:
    //   "The project implements board generation, tile reveal behavior, win/loss states, and rendering through SFML.",
    // role:
    //   "Built gameplay logic, coordinated rendering updates, and tested edge cases in board interactions.",
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
    // insights: [
    //   "Small games reward careful modeling",
    //   "C++ projects make ownership and state transitions visible",
    // ],
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
