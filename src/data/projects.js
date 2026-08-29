export const projectsData = [
  {
    id: "edunovaa",
    name: "Edunovaa",
    type: "mobile",
    shortDescription: "A comprehensive education management platform for students, teachers, and administration.",
    description: "Edunovaa is an all-in-one educational utility designed to handle academic logs, announcements, digital timetables, teacher-parent threads, and payment status checks in real-time.",
    problem: "Educational institutions struggle with distributed systems for logs, attendance sheets, and parent messaging, leading to communication gaps.",
    solution: "We built a unified mobile portal where parents and students receive instant notifications on attendance, test scores, homework, and fee payments.",
    features: [
      "Student profile tracking with grade histories.",
      "Instant push alerts for homework and school events.",
      "Timetable schedules with calendar integration.",
      "Digital fee payment portal tracker."
    ],
    techStack: ["React Native", "TypeScript", "Node.js", "MySQL", "REST API"],
    role: "Mobile App Developer - Built responsive interfaces, integrated API endpoints, and handled state management.",
    challenges: "Synchronizing student dashboards offline and caching calendar schedules local to the device.",
    githubUrl: "https://github.com/MustakimMunna/edunovaa-app",
    liveUrl: "",
    imageColor: "from-blue-600 to-indigo-700"
  },
  {
    id: "school-management",
    name: "School Management System",
    type: "web",
    shortDescription: "A full-scale enterprise Web + Mobile management system for school administrations.",
    description: "A centralized platform to manage students, attendance, grades, and school fees with role-based access control and secure logins for admins, teachers, and students.",
    problem: "Traditional schools rely on paper files or isolated spreadsheets, leading to scheduling overlaps and difficulty tracking student records.",
    solution: "A web and mobile integrated panel that maps attendance, fee collections, grading metrics, and class schedules dynamically.",
    features: [
      "Role-based access controls for Admin, Teacher, and Student.",
      "Real-time attendance logs and grading spreadsheets.",
      "Class timetables and exam scheduling boards.",
      "Automated fee receipt generation."
    ],
    techStack: ["React.js", "React Native", "Node.js", "MySQL", "REST APIs"],
    role: "Full-Stack Developer - Developed the Node.js API layer, set up role-based middleware, and built web management layouts.",
    challenges: "Building a complex database query mapping to output student reports across semesters without page load latency.",
    githubUrl: "https://github.com/MustakimMunna/workdesk-platform",
    liveUrl: "",
    imageColor: "from-sky-600 to-blue-700"
  },
  {
    id: "gupta-sandwich",
    name: "Gupta Sandwich",
    type: "mobile",
    shortDescription: "A custom mobile food ordering application featuring kitchen terminal integrations.",
    description: "A fast, responsive mobile sandwich ordering app for a local food chain, connected with a dispatcher panel and a shop kitchen terminal.",
    problem: "Third-party delivery platforms take high commissions and do not support customizable ingredient assembly builders.",
    solution: "Created an in-house delivery client with a sandwich ingredient customizer wizard, saving overhead fees and speeding up kitchen orders.",
    features: [
      "Sandwich customization picker (breads, toppings, sauces).",
      "Live order status tracker (preparing, dispatched, delivered).",
      "Secure Razorpay checkouts.",
      "Kitchen terminal dashboard."
    ],
    techStack: ["React Native", "Expo", "TypeScript", "Node.js", "REST API"],
    role: "Lead Mobile Developer - Built the custom assembly wizard, integrated Razorpay, and set up state notifications.",
    challenges: "Integrating reliable webhook triggers to update order progress in real-time when the mobile app goes into background mode.",
    githubUrl: "https://github.com/MustakimMunna/gupta-sandwich-app",
    liveUrl: "",
    imageColor: "from-orange-500 to-red-600"
  },
  {
    id: "workdesk",
    name: "WorkDesk",
    type: "web",
    shortDescription: "Employee and workspace management panel for organizational workloads.",
    description: "WorkDesk is an organizational platform to assign tasks, map logs, and track workspace schedules for staff and managers.",
    problem: "Organizations lack clear channels for job assignment, attendance logging, and work progress reporting in remote setups.",
    solution: "Consolidated real-time task manager tables, shift cards, and progress metrics reports into one centralized board.",
    features: [
      "Shift planner board with drag-and-drop actions.",
      "Task assigner with real-time status trackers.",
      "Employee check-in logging panel.",
      "PDF reporting for timesheets and tasks."
    ],
    techStack: ["React.js", "Node.js", "MongoDB", "REST APIs", "Tailwind CSS"],
    role: "Full-Stack Developer - Managed the MongoDB schemas, coded task management components, and styled layouts with Tailwind CSS.",
    challenges: "Structuring MongoDB lookup aggregations to fetch task histories across large employee directories efficiently.",
    githubUrl: "https://github.com/MustakimMunna/workdesk-platform",
    liveUrl: "",
    imageColor: "from-teal-600 to-emerald-700"
  },
  {
    id: "mentora-ai",
    name: "Mentora AI",
    type: "fullstack",
    shortDescription: "AI executive intelligence system to monitor business operations.",
    description: "An AI-powered operational system to parse business logs, forecast operations, provide insights, and assist decisions.",
    problem: "Company directors struggle to extract trends and recommendations from unstructured daily log files.",
    solution: "An AI integration panel that feeds logs to predictive APIs, rendering clear performance boards and interactive assistant widgets.",
    features: [
      "AI recommendations widget for inventory planning.",
      "Unstructured logs parser with auto-tagging.",
      "Real-time operational dashboard.",
      "Alert logs for production bottle-necks."
    ],
    techStack: ["React.js", "Node.js", "Python", "MongoDB", "AWS"],
    role: "Lead Developer - Coded the frontend panels, connected Python API endpoints, and set up deployments on AWS EC2.",
    challenges: "Parsing stream responses from python models and displaying chunked text data in React smoothly.",
    githubUrl: "https://github.com/MustakimMunna",
    liveUrl: "",
    imageColor: "from-violet-600 to-indigo-700"
  },
  {
    id: "wizro-ai",
    name: "Wizro AI",
    type: "web",
    shortDescription: "Business intelligence platform monitoring digital sales and campaigns.",
    description: "An analytics web store monitoring transaction volumes, campaign conversions, and user logs with smart alert logs.",
    problem: "Sales data is scattered across multiple analytics interfaces, delaying critical responses to drop-offs.",
    solution: "A unified analytics panel displaying transaction counts, performance charts, and webhook integrations.",
    features: [
      "Dynamic data charts with zoom parameters.",
      "Automated reports dispatcher.",
      "Integration with marketing webhooks.",
      "Client analytics profile grids."
    ],
    techStack: ["React.js", "Node.js", "MongoDB", "AWS", "REST APIs"],
    role: "Frontend Engineer - Developed interactive chart panels, responsive data grids, and optimized client bundles.",
    challenges: "Rendering thousands of datapoints in charts dynamically on low-spec mobile phone screens.",
    githubUrl: "https://github.com/MustakimMunna",
    liveUrl: "",
    imageColor: "from-cyan-600 to-sky-700"
  }
];
