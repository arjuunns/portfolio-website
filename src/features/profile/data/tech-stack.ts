import type { TechStack } from "../types/tech-stack";

export const TECH_STACK: TechStack[] = [
  {
    key: "c",
    title: "C",
    href: "https://en.wikipedia.org/wiki/C_(programming_language)",
    categories: ["Language"],
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
  },
  {
    key: "cpp",
    title: "C++",
    href: "https://isocpp.org/",
    categories: ["Language"],
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
  },
  {
    key: "python",
    title: "Python",
    href: "https://www.python.org/",
    categories: ["Language"],
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },
  {
    key: "js",
    title: "JavaScript",
    href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    categories: ["Language"],
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    key: "typescript",
    title: "TypeScript",
    href: "https://www.typescriptlang.org/",
    categories: ["Language"],
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
  {
    key: "html5",
    title: "HTML5",
    href: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    categories: ["Language"],
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  {
    key: "css3",
    title: "CSS3",
    href: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    categories: ["Language"],
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  {
    key: "nodejs",
    title: "Node.js",
    href: "https://nodejs.org",
    categories: ["Runtime Environment"],
    iconUrl: "/images/icons/nodejs.svg",
  },
  {
    key: "react",
    title: "React",
    href: "https://react.dev/",
    categories: ["Framework", "Library"],
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    key: "nextjs",
    title: "Next.js",
    href: "https://nextjs.org/",
    categories: ["Framework", "Library"],
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    theme: true,
  },
  {
    key: "expressjs",
    title: "Express.js",
    href: "https://expressjs.com/",
    categories: ["Framework", "Library"],
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    theme: true,
  },
  {
    key: "fastapi",
    title: "FastAPI",
    href: "https://fastapi.tiangolo.com/",
    categories: ["Framework"],
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg",
  },
  {
    key: "tailwindcss",
    title: "Tailwind CSS",
    href: "https://tailwindcss.com/",
    categories: ["Framework"],
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
  },
  {
    key: "langchain",
    title: "LangChain",
    href: "https://www.langchain.com/",
    categories: ["Library", "AI"],
    iconUrl: "https://cdn.simpleicons.org/langchain",
  },
  {
    key: "websockets",
    title: "WebSockets",
    href: "https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API",
    categories: ["Library"],
    iconUrl: "https://cdn.simpleicons.org/socketdotio",
  },
  {
    key: "postgres",
    title: "PostgreSQL",
    href: "https://www.postgresql.org/",
    categories: ["Database"],
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  },
  {
    key: "mongodb",
    title: "MongoDB",
    href: "https://www.mongodb.com/",
    categories: ["Database"],
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  },
  {
    key: "mysql",
    title: "MySQL",
    href: "https://www.mysql.com/",
    categories: ["Database"],
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  },
  {
    key: "redis",
    title: "Redis",
    href: "https://redis.io/",
    categories: ["Database"],
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg",
  },
  {
    key: "neo4j",
    title: "Neo4j",
    href: "https://neo4j.com/",
    categories: ["Database"],
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/neo4j/neo4j-original.svg",
  },
  {
    key: "prisma",
    title: "Prisma",
    href: "https://www.prisma.io/",
    categories: ["Database"],
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prisma/prisma-original.svg",
    theme: true,
  },
  {
    key: "docker",
    title: "Docker",
    href: "https://www.docker.com/",
    categories: ["Containerization"],
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  },
  {
    key: "aws",
    title: "AWS",
    href: "https://aws.amazon.com/",
    categories: ["Tools"],
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
    theme: true,
  },
  {
    key: "vercel",
    title: "Vercel",
    href: "https://vercel.com/",
    categories: ["Tools"],
    iconUrl: "https://cdn.simpleicons.org/vercel",
    theme: true,
  },
  {
    key: "githubactions",
    title: "GitHub Actions",
    href: "https://github.com/features/actions",
    categories: ["Tools"],
    iconUrl: "https://cdn.simpleicons.org/githubactions",
  },
  {
    key: "nginx",
    title: "Nginx",
    href: "https://nginx.org/",
    categories: ["Tools"],
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg",
  },
  {
    key: "traefik",
    title: "Traefik",
    href: "https://traefik.io/",
    categories: ["Tools"],
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/traefikproxy/traefikproxy-original.svg",
  },
  {
    key: "linux",
    title: "Linux",
    href: "https://www.kernel.org/",
    categories: ["Tools"],
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
  },
  {
    key: "git",
    title: "Git",
    href: "https://git-scm.com/",
    categories: ["Version Control"],
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  {
    key: "gemini",
    title: "Gemini API",
    href: "https://ai.google.dev/",
    categories: ["Tools", "AI"],
    iconUrl: "https://cdn.simpleicons.org/googlegemini",
  },
  {
    key: "ollama",
    title: "Ollama",
    href: "https://ollama.com/",
    categories: ["Tools", "AI"],
    iconUrl: "https://cdn.simpleicons.org/ollama",
    theme: true,
  },
  {
    key: "postman",
    title: "Postman",
    href: "https://www.postman.com/",
    categories: ["Tools"],
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg",
  },
  {
    key: "pm2",
    title: "PM2",
    href: "https://pm2.keymetrics.io/",
    categories: ["Others"],
    iconUrl: "https://cdn.simpleicons.org/pm2",
  },
  {
    key: "chrome-extensions",
    title: "Chrome Extensions",
    href: "https://developer.chrome.com/docs/extensions",
    categories: ["Others"],
    iconUrl: "https://cdn.simpleicons.org/googlechrome",
  },
];
