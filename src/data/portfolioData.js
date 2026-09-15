export const personalInfo = {
  name: "Maryam Tarek",
  title: "Front-end Developer (ReactJS)",
  badge: "Available for Opportunities",
  phone: "01013825782",
  email: "Maryamtarek784@gmail.com",
  location: "Mansoura, Egypt",
  linkedin: "https://www.linkedin.com/in/maryam-tarek-12683128a/",
  linkedinHandle: "maryam-tarek-12683128a",
  github: "https://github.com/MaryamTarekk/",
  githubHandle: "MaryamTarekk",
  cvPath: "/Maryam_Tarek_CV.pdf",
  avatar: "/photo2.jpeg",
  summary:
    "Front-End Developer (React) and recent Information Technology graduate from Mansoura University with solid knowledge of HTML, CSS, JavaScript, and React.js. Passionate about building responsive, accessible, and user-friendly web applications with clean code architecture and modern design practices.",
};

export const stats = [
  { label: "Completed Projects", value: "5+", icon: "FolderCheck" },
  {
    label: "Mansoura University Grade",
    value: "83%",
    sub: "Very Good",
    icon: "GraduationCap",
  },
  { label: "ITI Intensive Trainee", value: "2025", icon: "Award" },
  {
    label: "Tech Stack Mastery",
    value: "10+",
    sub: "Technologies",
    icon: "Code",
  },
];

export const education = [
  {
    institution: "Mansoura University",
    faculty: "Faculty of Computer and Information Sciences",
    department: "Information Technology (IT) Department",
    period: "2022 – 2026",
    grade: "Very Good (83%)",
    degree: "Bachelor's Degree in Computer & Information Sciences",
    highlights: [
      "Specialized in Information Technology and Software Development",
      "Comprehensive study of Web Development, Data Structures, Networking, and Database Systems",
      "Graduated with Very Good (83%) overall honor grade",
    ],
  },
];

export const experiences = [
  {
    role: "Freelance Front-End Developer",
    company: "Smart Pharmacy",
    period: "2025 – Present",
    type: "Freelance",
    description:
      "Built and enhanced responsive web interfaces for pharmacy operations and client browsing.",
    responsibilities: [
      "Developed responsive and user-friendly web interfaces using React.js, HTML, CSS, JavaScript, and Bootstrap.",
      "Integrated front-end components seamlessly with backend services using RESTful APIs and Axios.",
      "Implemented dynamic state management and client-side data validation for pharmacy workflows.",
      "Improved overall site performance, responsiveness, and cross-browser accessibility.",
    ],
    techStack: [
      "React.js",
      "JavaScript (ES6)",
      "Bootstrap",
      "REST APIs",
      "HTML5/CSS3",
    ],
  },
  {
    role: "Front-End Trainee",
    company: "Information Technology Institute (ITI)",
    period: "Aug 10, 2025 – Sep 15, 2025",
    type: "Intensive Training",
    description:
      "Completed an intensive full-stack program focused on modern front-end technologies and web standards.",
    responsibilities: [
      "Enrolled in an intensive Full Stack PHP training program with strong specialization in Front-End Development.",
      "Applied industry-standard responsive design principles, UI component structuring, and clean code practices.",
      "Built a complete Library Management System as the final capstone project using React.js and REST APIs.",
      "Collaborated with peers under expert mentorship to solve complex frontend challenges.",
    ],
    techStack: [
      "React.js",
      "JavaScript",
      "REST APIs",
      "PHP",
      "Responsive Design",
      "Git",
    ],
  },
];

export const projects = [
  {
    id: "library-system",
    title: "Library Management System",
    category: "React App",
    shortDesc:
      "Comprehensive library application with REST API integration for dynamic book borrowing, search, and category management.",
    fullDesc:
      "A complete responsive Library Management System built as the ITI capstone project. Allows users and librarians to search books by title or author, filter by genres, manage available inventory, and track borrowing statuses in real-time.",
    technologies: ["React.js", "REST APIs", "Axios", "Context API", "CSS3"],
    featured: true,
    github: "https://github.com/MaryamTarekk/",
    demoType: "library",
    demoData: {
      initialBooks: [
        {
          id: 1,
          title: "Clean Code",
          author: "Robert C. Martin",
          category: "Programming",
          status: "Available",
        },
        {
          id: 2,
          title: "React Design Patterns",
          author: "Addy Osmani",
          category: "Web Dev",
          status: "Borrowed",
        },
        {
          id: 3,
          title: "You Don't Know JS",
          author: "Kyle Simpson",
          category: "JavaScript",
          status: "Available",
        },
        {
          id: 4,
          title: "The Pragmatic Programmer",
          author: "Andrew Hunt",
          category: "Software Engineering",
          status: "Available",
        },
      ],
    },
  },
  {
    id: "e-commerce",
    title: "E-Commerce Platform",
    category: "React App",
    shortDesc:
      "Responsive online store featuring product catalog, live interactive shopping cart, checkout, and category filters.",
    fullDesc:
      "A feature-rich e-commerce web application with smooth user experience. Includes instant search, price range filtering, interactive cart badge update, total price calculation, and modal checkout sequence.",
    technologies: [
      "React.js",
      "Context API",
      "React Router",
      "Bootstrap",
      "REST APIs",
    ],
    featured: true,
    github: "https://github.com/MaryamTarekk/",
    demoType: "ecommerce",
    demoData: {
      products: [
        {
          id: 1,
          name: "Wireless Noise-Canceling Headphones",
          price: 120,
          category: "Electronics",
          rating: 4.8,
        },
        {
          id: 2,
          name: "Minimalist Mechanical Keyboard",
          price: 95,
          category: "Accessories",
          rating: 4.9,
        },
        {
          id: 3,
          name: "Smart Fitness Watch",
          price: 150,
          category: "Electronics",
          rating: 4.7,
        },
        {
          id: 4,
          name: "Ergonomic Desk Mat",
          price: 30,
          category: "Accessories",
          rating: 4.6,
        },
      ],
    },
  },
  {
    id: "shoes-store",
    title: "Shoes Store Website",
    category: "React / UI",
    shortDesc:
      "Modern interactive footwear showcase with dynamic product views, size selector, and responsive layout.",
    fullDesc:
      "An aesthetically pleasing web store for shoes designed with clean UI/UX standards. Features interactive color/size selection, animated hover cards, and seamless responsive layout across mobile and desktop devices.",
    technologies: ["React.js", "JavaScript ES6", "HTML5", "CSS3", "Vite"],
    featured: true,
    github: "https://github.com/MaryamTarekk/",
    demoType: "shoes",
    demoData: {
      shoes: [
        {
          id: 1,
          name: "Air Nitro Running Shoes",
          color: "Cyan / Black",
          price: 140,
          sizes: [40, 41, 42, 43, 44],
        },
        {
          id: 2,
          name: "Urban Street Sneaker",
          color: "Pure White",
          price: 110,
          sizes: [39, 40, 41, 42],
        },
        {
          id: 3,
          name: "FlexFit Gym Trainer",
          color: "Neon Violet",
          price: 130,
          sizes: [41, 42, 43, 44, 45],
        },
      ],
    },
  },
  {
    id: "photo-editor",
    title: "Web Photo Editing Application",
    category: "JavaScript Tool",
    shortDesc:
      "Web-based image manipulation app built with JavaScript offering live filters, crop/rotate, and instant image export.",
    fullDesc:
      "An interactive photo editing web tool built using pure JavaScript and Canvas API. Users can upload images, adjust brightness, contrast, saturation, blur, rotate, invert colors, and download their edited masterpiece.",
    technologies: ["JavaScript (ES6)", "HTML5 Canvas", "CSS3", "Vite"],
    featured: false,
    github: "https://github.com/MaryamTarekk/",
    demoType: "photoEditor",
  },
  {
    id: "network-checker",
    title: "Real-time Network Connectivity Monitor",
    category: "JavaScript Tool",
    shortDesc:
      "Real-time web utility monitoring online/offline internet connectivity, ping speed, and network event listeners.",
    fullDesc:
      "A sleek utility web application that monitors browser network status in real time. Features automated online/offline detection notifications, simulated latency ping tests, and network status history logs.",
    technologies: ["JavaScript (ES6)", "HTML5", "CSS3", "Navigator API"],
    featured: false,
    github: "https://github.com/MaryamTarekk/",
    demoType: "networkChecker",
  },
];

export const skillCategories = [
  {
    name: "Core Frontend",
    description:
      "Fundamental languages and standards for building modern web applications",
    skills: [
      { name: "HTML5", level: "Advanced", icon: "FileCode" },
      { name: "CSS3", level: "Advanced", icon: "Palette" },
      { name: "JavaScript (ES6+)", level: "Advanced", icon: "Zap" },
      { name: "Responsive Design", level: "Expert", icon: "Layout" },
    ],
  },
  {
    name: "React Framework & Ecosystem",
    description: "Building scalable, component-based user interfaces",
    skills: [
      { name: "React.js", level: "Advanced", icon: "Atom" },
      { name: "React Router", level: "Proficient", icon: "Navigation" },
      { name: "Context API", level: "Advanced", icon: "Layers" },
      { name: "Bootstrap", level: "Advanced", icon: "Grid" },
      { name: "Vite", level: "Proficient", icon: "Rocket" },
    ],
  },
  {
    name: "Data & API Integration",
    description: "Connecting front-end interfaces to backend REST services",
    skills: [
      { name: "REST APIs", level: "Advanced", icon: "Globe" },
      { name: "Axios", level: "Advanced", icon: "RefreshCw" },
      { name: "Fetch API", level: "Advanced", icon: "ArrowRightLeft" },
      { name: "JSON Data Flow", level: "Advanced", icon: "Database" },
    ],
  },
  {
    name: "Development Tools & Practices",
    description:
      "Version control, workflow efficiency, and browser performance",
    skills: [
      { name: "Git & GitHub", level: "Advanced", icon: "GitBranch" },
      {
        name: "Cross-Browser Compatibility",
        level: "Advanced",
        icon: "Monitor",
      },
      { name: "Component Architecture", level: "Advanced", icon: "Box" },
      { name: "UI/UX Optimization", level: "Advanced", icon: "Sparkles" },
    ],
  },
];
