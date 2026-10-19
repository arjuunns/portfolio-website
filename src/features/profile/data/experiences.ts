import type { Experience } from "../types/experiences";

export const EXPERIENCES: Experience[] = [
  {
    id: "thapar-institute",
    companyName: "Thapar Institute of Engineering and Technology",
    companyLogo: "/images/experience/thapar.png",
    companyUrl: "https://www.thapar.edu/",
    positions: [
      {
        id: "thapar-btech-cse",
        title: "B.Tech, Computer Science & Engineering",
        employmentPeriod: {
          start: "08.2023",
          end: "07.2027",
        },
        icon: "education",
        description: `Patiala, Punjab, India

- **CGPA: 8.79 / 10**
- Coursework: Data Structures & Algorithms, OOPS, DBMS, Computer Networks, Operating Systems, and System Design.
- Awarded the **TIET Merit Scholarship** for academic excellence (2023–24).`,
        skills: [
          "Data Structures & Algorithms",
          "OOPS",
          "DBMS",
          "Computer Networks",
          "Operating Systems",
          "System Design",
        ],
        isExpanded: true,
      },
      {
        id: "jeevansetu-capstone",
        title:
          "Capstone Project — AI-Assisted Clinical Triage, Routing & Referral System",
        employmentPeriod: {
          start: "03.2026",
        },
        icon: "idea",
        description: `A 5-person capstone under the guidance of a CSED department professor.

- Architected a full-stack GenAI platform (**Next.js + Node.js**) with a **multi-agent LangChain** pipeline (**Gemini** in the cloud, **Ollama** locally) for automated clinical triage, reaching an **85%+ acceptance rate** through RAG-grounded decision-making over medical documents.
- Built a **Web Speech API** voice intake system with backend LLM parsing, cutting onboarding time by **70% (3 min → 45 s)**.
- Deployed Dockerized microservices on **AWS ECS**, with **Neo4j** powering hospital routing to reduce patient transfer time.
- Coordinated architecture decisions and sprint milestones across the team; every AI recommendation requires doctor verification before a referral is made.`,
        skills: [
          "Next.js",
          "Node.js",
          "Neo4j",
          "AWS ECS",
          "Docker",
          "LangChain",
          "Gemini",
          "RAG",
          "WebSockets",
        ],
      },
    ],
    isCurrentEmployer: true,
    theme: false,
  },
  {
    id: "gdsc-tiet",
    companyName: "Google Developer Student Club (GDSC), TIET",
    companyLogo: "/images/experience/gdsc.png",
    companyUrl: "https://gdsctiet.in",
    positions: [
      {
        id: "gdsc-core-member",
        title: "Core Member",
        employmentPeriod: {
          start: "07.2024",
        },
        employmentType: "Part-time",
        icon: "business",
        description: `- Conducted hands-on workshops on **backend development and DSA** for 50+ students.
- Organized a campus-wide **hackathon** attracting 150+ participants.
- Contributed to the official **GDSC TIET website** serving 1000+ visitors.`,
        skills: [
          "Backend Development",
          "DSA",
          "Community Building",
          "Event Management",
          "Web Development",
        ],
      },
    ],
  },
  {
    id: "blue-birds-international-school",
    companyName: "Blue Birds International School",
    positions: [
      {
        id: "blue-birds-schooling",
        title: "Class 10 & Class 12 (PCM)",
        employmentPeriod: {
          start: "2020",
          end: "2022",
        },
        icon: "education",
        description: `Dhanaura, Uttar Pradesh, India

- **Class 12: 96%**
- **Class 10: 95%**`,
      },
    ],
  },
];
