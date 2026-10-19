import type { User } from "@/features/profile/types/user";

export const USER: User = {
  firstName: "Arjun",
  lastName: "Singh",
  displayName: "Arjun Singh",
  username: "arjuunns",
  gender: "male",
  pronouns: "he/him",
  bio: "Full Stack Developer • Backend & DevOps • GenAI Engineer",
  timeZone: "Asia/Kolkata",
  flipSentences: [
    "Full Stack Developer",
    "Backend Engineer",
    "DevOps Engineer",
    "GenAI Engineer",
    "Systems & Cloud Builder",
  ],
  address: "Patiala, Punjab, India",
  phoneNumber: "KzkxODI2NjA2OTM2Mg==", // E.164 format, base64 encoded
  secondPhoneNumber: "",
  email: "YXJqdW4udGVjaDk4M0BnbWFpbC5jb20=", // base64 encoded
  website: "https://arjuns.app",
  jobTitle: "Full Stack & AI Engineer",
  jobs: [
    {
      title: "B.Tech CSE at",
      company: "Thapar Institute of Engineering and Technology",
      website: "https://www.thapar.edu/",
    },
    {
      title: "Core Member at",
      company: "Google Developer Student Club (GDSC), TIET",
      website: "https://gdsctiet.in",
    },
  ],
  about: `
- **Computer Science undergraduate at Thapar Institute of Engineering and Technology** (B.Tech CSE, 2023–2027, CGPA 8.79) working across backend engineering, DevOps, and applied GenAI.
- I like owning a system end to end — from the API and the database schema to the container it runs in and the pipeline that deploys it. Recent work includes [JeevanSetu](https://jeevansetu.arjuns.app/), an AI-assisted clinical triage and hospital routing platform, and a **Docker-based cloud workspace platform** with container isolation, S3 persistence, and queue-driven lifecycle management.
- **Backend:** REST APIs with **Node.js, Express, Prisma, and PostgreSQL**; atomic query design, JWT auth, background workers with **BullMQ and Redis**, and CSV/reporting exports.
- **DevOps:** automated **CI/CD from GitHub Actions to AWS EC2**, containerized services with **Docker and Traefik**, and production operations with **PM2, Nginx, and TLS via Certbot**.
- **GenAI:** grounded LLM systems — **RAG** over private corpora, **multi-agent pipelines**, hybrid **cloud (Gemini) and local (Ollama/Qwen)** routing behind one API, and tool-calling agents.
- **Beyond the keyboard:** Core Member at **GDSC TIET** (backend and DSA workshops for 50+ students, a campus hackathon with 150+ participants), Knight on **LeetCode**, Pupil on **Codeforces**, 2★ on **CodeChef**, and a **TIET Merit Scholarship** recipient.
`,
  avatar: "/images/me.jpg",
  ogImage: "/images/og.png",
  namePronunciationUrl: "",
  keywords: [
    "arjun singh",
    "arjuunns",
    "full stack developer",
    "backend engineer",
    "backend developer",
    "devops engineer",
    "genai engineer",
    "ai engineer",
    "software engineer",
    "node.js developer",
    "typescript developer",
    "react developer",
    "next.js developer",
    "docker",
    "aws",
    "rag",
    "langchain",
    "thapar institute of engineering and technology",
    "gdsc tiet",
  ],
  dateCreated: "2026-10-19", // YYYY-MM-DD
};
