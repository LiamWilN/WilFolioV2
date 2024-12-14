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
      {
        0: "Designed and developed user-friendly applications to streamline workflows.",
      },
      {
        1: "Managed system updates and performed routine maintenance for organizational IT infrastructure.",
      },
      {
        2: "Collaborated with team members to ensure system reliability and data security.",
      },
    ],
  },
  {
    id: 1,
    title: "IT Technical Support Engineer Trainee",
    company: "Tech Mahindra",
    location: "Libis, Quezon City",
    date: "April 2022 - July 2022",
    special_note: "",
    experiences: [
      {
        0: "Provided technical assistance to users to resolve hardware and software issues.",
      },
      {
        1: "Maintained and updated system documentation for troubleshooting processes.",
      },
      {
        2: "Assisted in deploying and configuring new IT systems and applications.",
      },
    ],
  },
];

import powerappsIcon from "../assets/svg/powerapps.svg";
import powerautomateIcon from "../assets/svg/powerautomate.svg";
import sqlServerIcon from "../assets/svg/sql-server.svg";
import reactIcon from "../assets/svg/react.svg";
import tailwindIcon from "../assets/svg/tailwindcss.svg";
import materialuiIcon from "../assets/svg/materialui.svg";
import pythonIcon from "../assets/svg/python.svg";
import javascriptIcon from "../assets/svg/javascript.svg";
import htmlIcon from "../assets/svg/html5.svg";
import cssIcon from "../assets/svg/css3.svg";

export const TECHNOLOGIES_USED = [
  { id: 1, icon: powerappsIcon, name: "PowerApps" },
  { id: 2, icon: powerautomateIcon, name: "Power Automate" },
  { id: 3, icon: javascriptIcon, name: "Javascript" },
  { id: 4, icon: reactIcon, name: "React" },
  { id: 5, icon: htmlIcon, name: "HTML5" },
  { id: 6, icon: cssIcon, name: "CSS3" },
  { id: 7, icon: tailwindIcon, name: "Tailwind CSS" },
  { id: 8, icon: materialuiIcon, name: "Material UI" },
  { id: 9, icon: pythonIcon, name: "Python" },
  { id: 10, icon: sqlServerIcon, name: "SQL" },
];

export const SKILLS = [
  {
    id: 0,
    category: "Network Management",
    items: [
      { id: 0, name: "Fortinet" },
      { id: 1, name: "Cisco Catalyst 1000 Series" },
      { id: 2, name: "Synology Drive" },
    ],
  },
  {
    id: 1,
    category: "Server Management",
    items: [
      { id: 0, name: "Active Directory (AD) Server" },
      { id: 1, name: "File Server" },
    ],
  },
  {
    id: 2,
    category: "IT Infrastructure",
    items: [
      { id: 0, name: "Hardware Setup & Maintenance" },
      { id: 1, name: "Network Troubleshooting" },
    ],
  },
  {
    id: 3,
    category: "Software Skills",
    items: [
      { id: 0, name: "Microsoft Power Automate" },
      { id: 1, name: "Microsoft Power Apps" },
      { id: 2, name: "SQL" },
      { id: 3, name: "React JS" },
      { id: 4, name: "Tailwind CSS" },
      { id: 5, name: "GitHub" },
      { id: 6, name: "Python" },
      { id: 7, name: "JavaScript" },
    ],
  },
  {
    id: 4,
    category: "Troubleshooting",
    description:
      "Extensive experience in diagnosing and resolving hardware, software, and network-related issues. Tasks include repairing computer hardware, configuring network settings, and resolving printer malfunctions to minimize downtime and ensure smooth operations.",
    items: [
      { id: 0, name: "Computer Hardware" },
      { id: 1, name: "Network Configuration & Issues" },
      { id: 2, name: "Printer Troubleshooting" },
    ],
  },
];

export const PROJECTS = [
  {
    id: 0,
    name: "RYS Leave Application",
    description:
      "A mobile application enabling employees to easily submit and track leave requests. The system integrates with company processes for efficient approvals.",
    technologies: ["Microsoft Power Apps", "Power Automate", "SQL Server"],
    contributions: [
      "Developed a mobile-first interface for submitting and managing leave requests.",
      "Automated notifications and status updates using Power Automate.",
    ],
  },
  {
    id: 1,
    name: "Request For Payment",
    description:
      "A multi-platform application for submitting and approving payment requests with detailed tracking and notifications.",
    technologies: ["Microsoft Power Apps", "Power Automate", "SQL Server"],
    contributions: [
      "Created both mobile and desktop interfaces for seamless user experience.",
      "Streamlined payment workflows with automation for approval tracking.",
    ],
  },
  {
    id: 2,
    name: "Ticketing System",
    description:
      "A responsive ticketing system for handling and tracking IT or customer support tickets efficiently.",
    technologies: ["React JS", "Power Automate", "Tailwind CSS"],
    contributions: [
      "Built mobile and desktop-friendly interfaces for users to raise and monitor tickets.",
      "Integrated automation for ticket notifications and resolution tracking.",
    ],
  },
  {
    id: 3,
    name: "Client Information Sheet",
    description:
      "A desktop application for managing and updating client information securely.",
    technologies: ["Microsoft Power Apps", "SharePoint", "SQL Server"],
    contributions: [
      "Designed a secure system for storing and editing client data.",
      "Implemented a robust backend using SharePoint and SQL Server.",
    ],
  },
  {
    id: 4,
    name: "Docket System",
    description:
      "A mobile application for organizing and tracking dockets across teams.",
    technologies: ["Microsoft Power Apps", "Power Automate", "SQL Server"],
    contributions: [
      "Developed an intuitive mobile interface for docket creation and tracking.",
      "Automated docket management workflows with Power Automate.",
    ],
  },
  {
    id: 5,
    name: "Official Business Trip Application",
    description:
      "A mobile application to streamline the approval and tracking of official business trips.",
    technologies: ["Microsoft Power Apps", "Power Automate", "SQL Server"],
    contributions: [
      "Developed a mobile interface for submitting trip requests.",
      "Automated approval workflows and trip expense tracking.",
    ],
  },
  {
    id: 6,
    name: "RYS Approval Hub",
    description:
      "A centralized hub for managing approvals across multiple processes, available on both mobile and desktop.",
    technologies: ["Microsoft Power Apps", "Power Automate", "SQL Server"],
    contributions: [
      "Created responsive designs for mobile and desktop users.",
      "Centralized approval workflows for greater efficiency.",
    ],
  },
  {
    id: 7,
    name: "RYS Auditors Hub",
    description:
      "A desktop application for auditors to manage and review financial or operational audits.",
    technologies: ["React JS", "SQL Server", "Tailwind CSS"],
    contributions: [
      "Developed a streamlined interface for auditors to track and manage tasks.",
      "Integrated with backend databases for secure data handling.",
    ],
  },
  {
    id: 8,
    name: "RYS Audit Hub",
    description:
      "A desktop application providing a centralized location for all audit-related activities and documentation.",
    technologies: ["React JS", "SQL Server", "Tailwind CSS"],
    contributions: [
      "Designed an intuitive dashboard for managing audits and reports.",
      "Integrated SQL Server for secure and efficient data storage.",
    ],
  },
  {
    id: 9,
    name: "Process Automations",
    description:
      "Automated various processes to improve efficiency and reduce manual workload.",
    technologies: ["Power Automate", "Microsoft Outlook", "SQL Server"],
    contributions: [
      "Implemented email automation for notifications and task reminders.",
      "Developed attendance extraction and payroll integration workflows.",
      "Streamlined data synchronization and reporting processes.",
    ],
  },
];
