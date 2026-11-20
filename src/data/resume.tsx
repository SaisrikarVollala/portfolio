import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon, Star } from "lucide-react";
import {
  SiPython,
  SiJavascript,
  SiTypescript,
  SiCplusplus,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiFastapi,
  SiPostgresql,
  SiMongodb,
  SiRedis,
  SiMysql,
  SiDocker,
  SiGithubactions,
  SiPostman,
  SiGit,
  SiLinux,
  SiTailwindcss,
  SiSocketdotio,
  SiRabbitmq,
  SiNginx,
  SiNumpy,
  SiPandas,
} from "react-icons/si";
import { FaDatabase, FaC } from "react-icons/fa6";

export const DATA = {
  name: "Saisrikar Vollala",
  initials: "SV",
  url: "https://saisrikarvollala.vercel.app",
  location: "Gwalior, India",
  locationLink: "https://www.google.com/maps/place/Gwalior",
  description:
    "Software Developer & Problem Solver. I love building scalable backend systems and full-stack applications.",
  summary:
    "I am a Software Developer with a strong focus on [backend engineering, real-time systems, and full-stack development](#skills). Currently [pursuing a B.Tech in Information Technology](#education) at the Indian Institute of Information Technology, Gwalior. I have a passion for building [distributed messaging systems](#projects), [AI-powered platforms](#projects), and scalable web applications. Whether it's engineering [WhatsApp-style chat backends with guaranteed message delivery](#projects) or developing [hybrid RAG platforms for clinical NLP](#projects), I thrive on solving complex technical challenges. I've solved [500+ algorithmic problems](https://leetcode.com/u/saisrikarvollala/) on LeetCode and Codeforces.",
  avatarUrl: "https://avatars.githubusercontent.com/u/139237335?v=4",
  skills: [
    {
      title: "Languages",
      skills: [
        { name: "C", icon: FaC, color: "#A8B9CC" },
        { name: "C++", icon: SiCplusplus, color: "#00599C" },
        { name: "Python", icon: SiPython, color: "#3776AB" },
        { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
        { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      ],
    },
    {
      title: "Frameworks & Libraries",
      skills: [
        { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
        { name: "Express.js", icon: SiExpress },
        { name: "Socket.IO", icon: SiSocketdotio, color: "#010101" },
        { name: "FastAPI", icon: SiFastapi, color: "#009688" },
        { name: "React", icon: SiReact, color: "#61DAFB" },
        { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
        { name: "Zustand", icon: SiReact, color: "#61DAFB" },
        { name: "RabbitMQ", icon: SiRabbitmq, color: "#FF6600" },
        { name: "NumPy", icon: SiNumpy, color: "#013243" },
        { name: "Pandas", icon: SiPandas, color: "#150458" },
      ],
    },
    {
      title: "Databases & Caching",
      skills: [
        { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
        { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
        { name: "MySQL", icon: SiMysql, color: "#4479A1" },
        { name: "Redis", icon: SiRedis, color: "#DC382D" },
        { name: "IndexedDB", icon: FaDatabase, color: "#336791" },
      ],
    },
    {
      title: "Developer Tools",
      skills: [
        { name: "Git", icon: SiGit, color: "#F05032" },
        { name: "GitHub", icon: Icons.github },
        { name: "Postman", icon: SiPostman, color: "#FF6C37" },
        { name: "Linux CLI", icon: SiLinux, color: "#FCC624" },
        { name: "Docker", icon: SiDocker, color: "#2496ED" },
        { name: "nginx", icon: SiNginx, color: "#009639" },
      ],
    },
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    {
      href: "/resume.pdf",
      icon: Icons.resume,
      label: "Resume",
      external: true,
    },
  ],
  contact: {
    email: "vollalasaisrikar@gmail.com",
    tel: "+91-9032272841",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/saisrikarvollala",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://linkedin.com/in/saisrikarvollala",
        icon: Icons.linkedin,
        navbar: true,
      },
      Leetcode: {
        name: "Leetcode",
        url: "https://leetcode.com/u/saisrikarvollala/",
        icon: Icons.leetcode,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:vollalasaisrikar@gmail.com",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Neural Network Labs",
      href: "",
      badges: [],
      location: "Remote, India",
      title: "Software Developer Intern",
      logoUrl: "/neural_network_labs.png",
      start: "Jan 2025",
      end: "Mar 2025",
      description: (
        <ul className="list-outside list-disc ml-4 space-y-2 mt-2">
          <li>
            Engineered a high-performance FastAPI backend to integrate an
            infographic ML model with the React frontend, significantly reducing
            model inference latency and optimizing overall client page response
            times.
          </li>
          <li>
            Developed core application logic and dashboards for &quot;Prashna
            AI&quot; with secure auth and a credit-based billing tier (Free, Pro,
            Team), using Dodo Payments, enabling teachers to track students and
            automate assessment grading.
          </li>
          <li>
            Built a multi-format extraction pipeline processing 8 input types
            including PDFs, raw text, and parsed YouTube transcripts to
            automatically generate context-aware practice quizzes, study notes,
            and assessments.
          </li>
        </ul>
      ),
    },
  ],
  education: [
    {
      school: "Indian Institute of Information Technology and Management",
      href: "https://www.iiitm.ac.in/",
      degree: "B.Tech in Information Technology — CGPA: 8.05",
      logoUrl: "/iiitm_logo.jpeg",
      start: "2023",
      end: "2027",
      location: "Gwalior, Madhya Pradesh",
      description:
        "Coursework: Data Structures & Algorithms, Operating Systems, Object-Oriented Programming, DBMS, Cloud Computing, Information Retrieval",
    },
  ],
  projects: [
    {
      title: "PingChat",
      href: "https://github.com/saisrikarvollala/pingchat",
      dates: "2025",
      active: true,
      tagline: "WhatsApp-Style Real-Time Chat System",
      description:
        "Built a WhatsApp-style 1:1 and group chat backend as separate Node.js gateway, outbox-relay and delivery-worker services, routing messages across 3 Socket.IO gateways via a Redis device directory with TTL leases at 5,000 concurrent connections and p99 under 200 ms. Guaranteed zero message loss using Transactional Outbox in PostgreSQL feeding RabbitMQ.",
      technologies: [
        "Express.js",
        "Socket.IO",
        "PostgreSQL",
        "RabbitMQ",
        "Redis",
        "Docker",
        "React",
        "Tailwind CSS",
        "Zustand",
        "Cloudinary",
        "IndexedDB",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/saisrikarvollala/pingchat",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "MindMend",
      href: "https://github.com/saisrikarvollala/mindmend",
      dates: "2025",
      active: true,
      tagline: "Hybrid RAG Platform for Clinical NLP",
      description:
        "Constructed a domain psychology knowledge graph extracting 500+ clinical concepts from peer-reviewed medical literature. Integrated multi-hop graph traversal with FAISS vector similarity search across a 10,000+ thread corpus using dense SBERT embeddings, boosting contextual retrieval precision by 30%.",
      technologies: [
        "Python",
        "FastAPI",
        "FAISS",
        "SBERT",
        "NetworkX",
        "Ollama",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/saisrikarvollala/mindmend",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
  ],
  achievements: [
    {
      title: "500+ Problems Solved on LeetCode & Codeforces",
      dates: "2024-2025",
      location: "LeetCode / Codeforces",
      description:
        "Solved 500+ algorithmic problems across LeetCode and Codeforces, strengthening expertise in data structures, algorithms, and competitive programming.",
      icon: "star",
      logo: "",
      links: [
        {
          title: "LeetCode Profile",
          icon: <Star className="h-4 w-4" />,
          href: "https://leetcode.com/u/saisrikarvollala/",
        },
      ],
    },
    {
      title: "Top 100 Nationally — Airtel Sync Hackathon",
      dates: "2025",
      location: "Airtel",
      description:
        "Selected among the Top 100 teams nationally in the Airtel Sync Hackathon.",
      icon: "trophy",
      logo: "",
      links: [],
    },
    {
      title: "5th Rank — Coding Heroes Contest",
      dates: "2025",
      location: "ABV-IIITM Gwalior",
      description:
        "Secured 5th rank in the Coding Heroes competitive programming contest at ABV-IIITM Gwalior.",
      icon: "trophy",
      logo: "",
      links: [],
    },
    {
      title: "Top 10 Finalist — Hackatron",
      dates: "2025",
      location: "IIITDM Jabalpur",
      description:
        "Finished among the Top 10 finalist teams in Hackatron at IIITDM Jabalpur.",
      icon: "trophy",
      logo: "",
      links: [],
    },
    {
      title: "Hacktoberfest — Open Source Contributor",
      dates: "2025",
      location: "Global",
      description:
        "Merged 3 open-source pull requests into Linkid during Hacktoberfest, refactoring backend database queries for lower latency and improving responsive frontend UI components.",
      icon: "star",
      logo: "/hacktober.svg",
      links: [],
    },
  ],
} as const;
