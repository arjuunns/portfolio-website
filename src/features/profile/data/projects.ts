import type { Project } from "../types/projects";

export const PROJECTS: Project[] = [
  {
    id: "jeevansetu",
    title: "JeevanSetu — AI Clinical Triage & Hospital Routing",
    link: "https://jeevansetu.arjuns.app/",
    liveUrl: "https://jeevansetu.arjuns.app/",
    githubUrl: "https://github.com/arjuunns/JeevanSetu",
    cover: "/images/projects/jeevansetu/cover.png",
    coverLight: "/images/projects/jeevansetu/cover-light.png",
    banner: "/images/projects/jeevansetu/cover.png",
    bannerLight: "/images/projects/jeevansetu/cover-light.png",
    skills: [
      "Next.js",
      "Node.js",
      "PostgreSQL",
      "Neo4j",
      "Redis",
      "Pinecone",
      "LangChain",
      "Gemini",
      "Ollama",
      "RAG",
      "Docker",
      "AWS ECS",
    ],
    isExpanded: true,
    description: `AI-assisted clinical triage, referral, and hospital routing with human-in-the-loop validation.
- Architected a full-stack GenAI platform (**Next.js + Node.js**) with a **multi-agent LangChain** pipeline for automated clinical triage, reaching an **85%+ acceptance rate** through **RAG-grounded** decision-making over medical documents.
- Built a **Web Speech API** voice intake flow with backend LLM parsing, cutting onboarding time by **70% (3 min → 45 s)**.
- Deployed Dockerized microservices on **AWS ECS**, with **Neo4j** resource-graph hospital routing to reduce patient transfer time.
- Grounded retrieval over clinical guidelines using **Pinecone** vector search, with **PostgreSQL** for transactional records and **Redis** for caching and event streaming.`,
    overview: `JeevanSetu is a unified patient-flow network for emergency care. Frontline workers capture vitals and symptoms, run a safety screening check, retrieve clinical guidelines with **retrieval-augmented generation**, and route patients to nearby hospitals based on live department capacity and specialized infrastructure.

The system is built on **human-in-the-loop validation**: it acts as a co-pilot for clinicians and never makes a final medical assessment or referral on its own. Every AI recommendation is verified, adjusted, or overridden by a certified doctor before a patient is transferred.

**Highlights**
- **Grounded decisions:** RAG over 1,400+ pages of medical documents and guidelines, filtered by department and severity.
- **Voice-first intake:** hands-free symptom capture so triage nurses can work without leaving the patient.
- **Resource-aware routing:** Neo4j models hospital departments, specialties, and availability to pick the right facility.
- **Human-in-the-loop by design:** no autonomous referrals, with an explicit review step in the workflow.`,
    architecture: `### Overview
A **Next.js 15 (App Router)** frontend paired with a **Node.js/Express** API, deployed as Dockerized services on **AWS ECS**.

### Data & retrieval
- **PostgreSQL** — primary transactional records (patients, encounters, referrals).
- **Neo4j** — graph model of hospitals, departments, and specialties for resource-based routing.
- **Pinecone** — vector store for semantic retrieval over clinical guidelines.
- **Redis** — caching and event streaming between services.

### GenAI pipeline
- **Multi-agent LangChain** orchestration with distinct agents for intake parsing, safety screening, guideline retrieval, and routing.
- **RAG grounding** keeps responses tied to retrieved medical documents instead of model memory.
- **Hybrid model routing** across cloud **Gemini** and local **Ollama** models behind one interface.

### Human-in-the-loop
- Every recommendation is surfaced as a draft, not a decision; a clinician reviews and confirms before any referral is created.`,
  },
  {
    id: "cloud-workspace-platform",
    title: "Cloud Workspace Platform",
    link: "https://github.com/arjuunns/kumo",
    githubUrl: "https://github.com/arjuunns/kumo",
    cover: "/images/projects/cloud-workspace-platform/cover.png",
    coverLight: "/images/projects/cloud-workspace-platform/cover-light.png",
    banner: "/images/projects/cloud-workspace-platform/cover.png",
    bannerLight: "/images/projects/cloud-workspace-platform/cover-light.png",
    skills: [
      "React",
      "TypeScript",
      "Express",
      "Prisma",
      "PostgreSQL",
      "Redis",
      "BullMQ",
      "Docker",
      "Traefik",
      "AWS S3",
    ],
    isExpanded: true,
    description: `A cloud IDE platform that provisions isolated, containerized coding workspaces on demand.
- Architected a multi-service platform where users create, start, stop, and resume coding workspaces backed by **Docker containers** (code-server), persistent volumes, and idle-timeout auto-stop driven by **BullMQ** job queues.
- Built workspace archive sync to **AWS S3** so environments survive container lifecycles, and configured **Traefik** as a reverse proxy for cross-service routing with user-level isolation.
- Stored workspace metadata and lifecycle state in **PostgreSQL** via **Prisma**, with **Redis** backing the job queue.`,
    overview: `A self-hosted alternative to cloud development environments: a control plane that hands each user their own containerized workspace with a real editor, and manages the full lifecycle — provisioning, idling, stopping, archiving, and restoring.

**Highlights**
- **Per-user isolation** enforced at the container boundary and routed by **Traefik**.
- **Idle-timeout auto-stop** via background workers reclaims compute without losing work.
- **S3-backed persistence** restores a workspace exactly where it left off, even after its container is gone.
- **One API surface** for create / list / start / stop / delete, with queue-driven orchestration behind it.`,
    architecture: `### Services
- **Frontend** — React + TypeScript + Tailwind.
- **API** — Express + TypeScript + Prisma, exposing the workspace control-plane endpoints.
- **Worker** — BullMQ + Redis processing asynchronous jobs (provision, stop, archive, restore).
- **Proxy** — Traefik routing subdomain-style URLs to the correct workspace container.
- **Storage** — PostgreSQL for metadata, Docker volumes for live sessions, AWS S3 for archives.

### Lifecycle
1. A create request writes workspace metadata and enqueues a provisioning job.
2. The worker starts a \`code-server\` container with a per-workspace volume and registers routing.
3. An idle monitor enqueues a stop job; the container is torn down and its archive synced to S3.
4. On the next request, the archive is pulled back and the container is recreated around it.`,
  },
  {
    id: "recruitsage-copilot",
    title: "RecruitSage Copilot — Chrome Extension",
    link: "https://github.com/arjuunns/Recruitsage-copilot",
    githubUrl: "https://github.com/arjuunns/Recruitsage-copilot",
    cover: "/images/projects/recruitsage-copilot/cover.png",
    coverLight: "/images/projects/recruitsage-copilot/cover-light.png",
    banner: "/images/projects/recruitsage-copilot/cover.png",
    bannerLight: "/images/projects/recruitsage-copilot/cover-light.png",
    skills: [
      "Python",
      "FastAPI",
      "JavaScript",
      "Chrome Extensions",
      "Gemini API",
      "Ollama",
      "RAG",
      "Multi-Agent Systems",
      "LLMs",
    ],
    description: `A campus placement intelligence copilot that runs as a Chrome extension side panel.
- Built a Chrome extension that scrapes placement-portal postings and runs a **multi-agent pipeline** (Campus Intel, Web Search, and Alumni agents in parallel) to generate a prep guide covering eligibility, skills, and interview questions.
- Used **RAG over 1,400+ real campus interview questions**, filtered by company and round, to reduce hallucinations.
- Added last-year placement analytics per company (students selected, CGPA cutoff, roles, branches allowed) from structured campus data.
- Built a **hybrid LLM router** supporting **Gemini** (cloud) and **Ollama/Qwen** (local, offline) with streamed responses behind one API interface.
- Aggregated Glassdoor, AmbitionBox, and LinkedIn alumni insights through a DuckDuckGo search agent, plus an in-extension AI chat panel with portal context injected into the system prompt.`,
    overview: `RecruitSage Copilot answers the question students actually ask before a campus drive: *is this worth applying to, and what will they ask me?*

It lives inside the placement portal as a side panel. Open a company drive page and the extension extracts the role, CTC, eligibility, and skills, then runs a multi-agent research pipeline over campus history, public sources, and alumni networks.

**Highlights**
- **17-point red-flag audit** — bonding clauses, offer revocation history, CTC inflation, stagnant tech stacks.
- **Compensation breakdown** — headline CTC versus realistic monthly in-hand take-home.
- **Campus intel** — previous visits, shortlist numbers, CGPA cutoffs, and the exact questions asked in past drives.
- **Alumni links** — one-click LinkedIn search for seniors who worked at the company.
- **Local-first option** — the same pipeline runs fully offline against a local Qwen model.`,
    architecture: `### Overview
A **Python/FastAPI** backend behind a **JavaScript Chrome extension**, with all research agents running in parallel and streaming results back into the side panel.

### Agents
- **Campus Intel** — queries structured campus data for past drives, cutoffs, and question banks.
- **Web Search** — aggregates Glassdoor, AmbitionBox, Reddit, and news via a DuckDuckGo search agent.
- **Alumni** — resolves company → Thapar senior links for direct outreach.

### Grounding
- **RAG over 1,400+ campus interview questions**, filtered by company and round, so generated prep material stays attached to real questions.
- **Portal context injection** into the system prompt for follow-up chat, reducing hallucination on role-specific details.

### Model routing
- A **hybrid router** exposes one interface over **Gemini API** (cloud) and **Ollama/Qwen** (local, offline), streaming tokens in both cases.`,
  },
  {
    id: "smart-hostel",
    title: "Smart Hostel — Leave, Attendance & Records Management",
    link: "https://hostel-permissions.arjuns.app/",
    liveUrl: "https://hostel-permissions.arjuns.app/",
    githubUrl: "https://github.com/arjuunns/Smart-hostel",
    cover: "/images/projects/smart-hostel/cover.png",
    coverLight: "/images/projects/smart-hostel/cover-light.png",
    banner: "/images/projects/smart-hostel/cover.png",
    bannerLight: "/images/projects/smart-hostel/cover-light.png",
    skills: [
      "Node.js",
      "Express",
      "Prisma",
      "PostgreSQL",
      "JWT",
      "AWS EC2",
      "GitHub Actions",
      "PM2",
      "Nginx",
      "Certbot",
    ],
    description: `A hostel leave, attendance, and records system replacing paper registers.
- Built a REST API with **Node.js, Express, Prisma, and PostgreSQL** to manage student accounts, leave approvals, attendance logging, and CSV data exports.
- Designed the database schema with relational keys and atomic query updates, and configured **JWT authentication** for role-based access.
- Built an automated **CI/CD pipeline with GitHub Actions** deploying the backend to **AWS EC2** and the frontend to **Vercel**, running production services with **PM2, Nginx, and TLS via Certbot**.`,
    overview: `A full-stack replacement for the hostel leave register, with digital gate passes and an automated approval path.

**Highlights**
- **QR gate passes** — security verifies student movement by scanning instead of matching paper slips.
- **Rule-based risk scoring** — leave applications are scored against attendance history, return reliability, and the academic calendar, so routine requests auto-approve and outliers are flagged for the warden.
- **Multi-role dashboards** — students, wardens, security guards, and admins each get a scoped view.
- **Exports** — attendance and movement records come out as CSV for institutional reporting.`,
    architecture: `### Application
- **API** — Node.js + Express with **Prisma** over **PostgreSQL**, organized around student accounts, leave requests, attendance, and exports.
- **Auth** — **JWT** sessions with role-based authorization per endpoint.
- **Correctness** — relational schema with atomic updates so concurrent approvals cannot double-apply.

### Deployment
- **GitHub Actions** pipeline: build, test, and deploy the backend to **AWS EC2** and the frontend to **Vercel**.
- Production services supervised by **PM2** and served behind **Nginx**, with TLS certificates issued and renewed by **Certbot**.`,
  },
  {
    id: "ecosphere-waste-analytics",
    title: "EcoSphere — Smart Waste Analytics Dashboard",
    link: "https://github.com/arjuunns/EcoSphere-HackTU_6.0",
    liveUrl: "https://hack-tu-6-0.vercel.app",
    githubUrl: "https://github.com/arjuunns/EcoSphere-HackTU_6.0",
    cover: "/images/projects/ecosphere-waste-analytics/cover.png",
    coverLight: "/images/projects/ecosphere-waste-analytics/cover-light.png",
    banner: "/images/projects/ecosphere-waste-analytics/cover.png",
    bannerLight: "/images/projects/ecosphere-waste-analytics/cover-light.png",
    skills: ["JavaScript", "React", "Data Visualization", "IoT"],
    description: `An IoT-based waste management dashboard built at HackTU 6.0.
- Built real-time waste analytics — dynamic bin fill levels, recyclable vs. non-recyclable split, and waste contribution by area.
- Added a **heatmap** of high-waste regions to prioritize collection routes and predict optimal collection times.
- Shipped a **Green Heroes** feature to encourage recycling and public participation.`,
    overview: `A dashboard for the operational side of urban waste: knowing which bins are full, which areas generate the most waste, and when to send trucks. Taken from problem statement to working demo over the **HackTU 6.0** hackathon.

**Highlights**
- **Real-time fill tracking** with per-area breakdowns.
- **Heatmap** of high-waste zones for route planning.
- **Recycling split** and a gamified participation feature.`,
  },
];

/** Resolve a project's URL slug (falls back to its `id`). */
export function getProjectSlug(project: Project): string {
  return project.slug ?? project.id;
}

/** Look up a project by its slug (or id). */
export function getProjectBySlug(slug: string): Project | undefined {
  return PROJECTS.find((project) => getProjectSlug(project) === slug);
}
