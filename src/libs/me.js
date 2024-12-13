
export const MY_NAME = "William Calda";
export const ASPIRE_TOBE = "Junior Software Developer";
export const MY_INTRO = [
  "I am your All-Around-IT Guy with a bit of experience in everything IT-related. I am a Problem Solver, Optimist, Minimalist and Software Developer with a passion for creating intuitive and user-friendly digital experiences.",
  "I have a diverse knowledge on software development, troubleshooting, and network systems, which allows me to adapt quickly to different challenges and environments. Whether it's designing a sleek interface or finding efficient solutions to technical issues, I thrive on making things work better and more efficiently.",
  "I have a keen eye for detail and a passion for finding the most optimal and efficient solutions to your IT needs.",
];

export const TIMEZONEDB = "YWSF2JHXVM48";

export const WORK_EXPERIENCE = [
  {
    id: 0,
    title: "IT Staff II",
    company: "RYS Property Holdings, Inc.",
    location: "Cubao, Quezon City",
    date: "December 2022 - January 2025",
    special_note: "",
    experiences: [
      { 0: "Designed and developed user-friendly applications to streamline workflows." },
      { 1: "Managed system updates and performed routine maintenance for organizational IT infrastructure." },
      { 2: "Collaborated with team members to ensure system reliability and data security." }
    ]
  },
  {
    id: 1,
    title: "IT Technical Support Engineer Trainee",
    company: "Tech Mahindra",
    location: "Libis, Quezon City",
    date: "April 2022 - July 2024",
    special_note: "",
    experiences: [
      { 0: "Provided technical assistance to users to resolve hardware and software issues." },
      { 1: "Maintained and updated system documentation for troubleshooting processes." },
      { 2: "Assisted in deploying and configuring new IT systems and applications." }
    ]
  }
];

export const TECHNOLOGIES_USED = [
  {
    id: 0,
    name: "Microsoft Power Application",
    icon: "faPowerOff"
  },
  {
    id: 1,
    name: "Microsoft Power Automate",
    icon: "faRobot"
  },
  {
    id: 2,
    name: "SQL",
    icon: "faDatabase"
  },
  {
    id: 3,
    name: "React JS",
    icon: "faReact",
    children: [
      { id: 6, name: "react-router-dom", icon: "faRoute" },
      { id: 12, name: "react-toastify", icon: "faBell" },
      { id: 13, name: "lucide-react", icon: "faFeather" },
      { id: 14, name: "react-hook-form", icon: "faClipboardList" }
    ]
  },
  {
    id: 4,
    name: "GitHub",
    icon: "faGithub"
  },
  {
    id: 5,
    name: "Tailwind CSS",
    icon: "faWind"
  },
  {
    id: 7,
    name: "Material-UI",
    icon: "faPaintBrush"
  },
  {
    id: 8,
    name: "Python",
    icon: "faPython"
  },
  {
    id: 11,
    name: "JavaScript",
    icon: "faJsSquare",
    children: [
      { id: 9, name: "Day.js", icon: "faCalendarAlt" },
      { id: 15, name: "JS-Cookie", icon: "faCookie" }
    ]
  }
];

export const SKILLS = [
  {
    id: 0,
    category: "Network Management",
    items: [
      { id: 0, name: "Fortinet", icon: "faShieldAlt" },
      { id: 1, name: "Cisco Catalyst 1000 Series", icon: "faNetworkWired" },
      { id: 2, name: "Synology Drive", icon: "faHdd" }
    ]
  },
  {
    id: 1,
    category: "Server Management",
    items: [
      { id: 0, name: "Active Directory (AD) Server", icon: "faServer" },
      { id: 1, name: "File Server", icon: "faFolderOpen" }
    ]
  },
  {
    id: 2,
    category: "IT Infrastructure",
    items: [
      { id: 0, name: "Hardware Setup & Maintenance", icon: "faCogs" },
      { id: 1, name: "Network Troubleshooting", icon: "faTools" }
    ]
  },
  {
    id: 3,
    category: "Software Skills",
    items: [
      { id: 0, name: "Microsoft Power Automate", icon: "faRobot" },
      { id: 1, name: "Microsoft Power Apps", icon: "faTh" },
      { id: 2, name: "SQL", icon: "faDatabase" },
      { id: 3, name: "React JS", icon: "faReact" },
      { id: 4, name: "Tailwind CSS", icon: "faWind" },
      { id: 5, name: "GitHub", icon: "faGithub" },
      { id: 6, name: "Python", icon: "faPython" },
      { id: 7, name: "JavaScript", icon: "faJsSquare" }
    ]
  },
  {
    id: 4,
    category: "Troubleshooting",
    description:
      "Extensive experience in diagnosing and resolving hardware, software, and network-related issues. Tasks include repairing computer hardware, configuring network settings, and resolving printer malfunctions to minimize downtime and ensure smooth operations.",
    items: [
      { id: 0, name: "Computer Hardware", icon: "faDesktop" },
      { id: 1, name: "Network Configuration & Issues", icon: "faNetworkWired" },
      { id: 2, name: "Printer Troubleshooting", icon: "faPrint" }
    ]
  }
];

export const PROJECTS = [
  {
    id: 0,
    name: "RYS Leave Application",
    description:
      "A mobile application enabling employees to easily submit and track leave requests. The system integrates with company processes for efficient approvals.",
    technologies: [
      "Microsoft Power Apps",
      "Power Automate",
      "SQL Server"
    ],
    contributions: [
      "Developed a mobile-first interface for submitting and managing leave requests.",
      "Automated notifications and status updates using Power Automate."
    ]
  },
  {
    id: 1,
    name: "Request For Payment",
    description:
      "A multi-platform application for submitting and approving payment requests with detailed tracking and notifications.",
    technologies: [
      "Microsoft Power Apps",
      "Power Automate",
      "SQL Server"
    ],
    contributions: [
      "Created both mobile and desktop interfaces for seamless user experience.",
      "Streamlined payment workflows with automation for approval tracking."
    ]
  },
  {
    id: 2,
    name: "Ticketing System",
    description:
      "A responsive ticketing system for handling and tracking IT or customer support tickets efficiently.",
    technologies: [
      "React JS",
      "Power Automate",
      "Tailwind CSS"
    ],
    contributions: [
      "Built mobile and desktop-friendly interfaces for users to raise and monitor tickets.",
      "Integrated automation for ticket notifications and resolution tracking."
    ]
  },
  {
    id: 3,
    name: "Client Information Sheet",
    description:
      "A desktop application for managing and updating client information securely.",
    technologies: [
      "Microsoft Power Apps",
      "SharePoint",
      "SQL Server"
    ],
    contributions: [
      "Designed a secure system for storing and editing client data.",
      "Implemented a robust backend using SharePoint and SQL Server."
    ]
  },
  {
    id: 4,
    name: "Docket System",
    description:
      "A mobile application for organizing and tracking dockets across teams.",
    technologies: [
      "Microsoft Power Apps",
      "Power Automate",
      "SQL Server"
    ],
    contributions: [
      "Developed an intuitive mobile interface for docket creation and tracking.",
      "Automated docket management workflows with Power Automate."
    ]
  },
  {
    id: 5,
    name: "Official Business Trip Application",
    description:
      "A mobile application to streamline the approval and tracking of official business trips.",
    technologies: [
      "Microsoft Power Apps",
      "Power Automate",
      "SQL Server"
    ],
    contributions: [
      "Developed a mobile interface for submitting trip requests.",
      "Automated approval workflows and trip expense tracking."
    ]
  },
  {
    id: 6,
    name: "RYS Approval Hub",
    description:
      "A centralized hub for managing approvals across multiple processes, available on both mobile and desktop.",
    technologies: [
      "Microsoft Power Apps",
      "Power Automate",
      "SQL Server"
    ],
    contributions: [
      "Created responsive designs for mobile and desktop users.",
      "Centralized approval workflows for greater efficiency."
    ]
  },
  {
    id: 7,
    name: "RYS Auditors Hub",
    description:
      "A desktop application for auditors to manage and review financial or operational audits.",
    technologies: [
      "React JS",
      "SQL Server",
      "Tailwind CSS"
    ],
    contributions: [
      "Developed a streamlined interface for auditors to track and manage tasks.",
      "Integrated with backend databases for secure data handling."
    ]
  },
  {
    id: 8,
    name: "RYS Audit Hub",
    description:
      "A desktop application providing a centralized location for all audit-related activities and documentation.",
    technologies: [
      "React JS",
      "SQL Server",
      "Tailwind CSS"
    ],
    contributions: [
      "Designed an intuitive dashboard for managing audits and reports.",
      "Integrated SQL Server for secure and efficient data storage."
    ]
  },
  {
    id: 9,
    name: "Process Automations",
    description:
      "Automated various processes to improve efficiency and reduce manual workload.",
    technologies: [
      "Power Automate",
      "Microsoft Outlook",
      "SQL Server"
    ],
    contributions: [
      "Implemented email automation for notifications and task reminders.",
      "Developed attendance extraction and payroll integration workflows.",
      "Streamlined data synchronization and reporting processes."
    ]
  }
];
