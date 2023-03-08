export type Technology = {
  name: string;
  type: string;
};

export type Project = {
  title: string;
  description: string;
  technologies: Technology[];
  githubLink: string;
  liveLink?: string;
};

// ToDo: make technology type enum and refactor technologybadge component

const projects: Project[] = [
  {
    title: "terminal",
    description:
      "Fully interactive, terminal-styled website.",
    technologies: [
      { name: "TypeScript", type: "language" },
      { name: "React", type: "framework" },
      { name: "Next.js", type: "framework" },
    ],
    githubLink: "https://github.com/heliaczk/terminal",
  },
  {
    title: "gamma",
    description: "Advanced Ethereum wallet \
    fork of AlphaWallet for Android",
    technologies: [
      { name: "Java", type: "language" },
      { name: "Android", type: "framework" },
      { name: "Ethereum", type: "framework" },
    ],
    githubLink: "https://github.com/heliaczk/gamma",
    liveLink: "",
  },
  {
    title: "heliac.dev",
    description: "Fully static html-rendered website featuring Astros Island concepts \
    using React Typescript JSX",
    technologies: [
      { name: "TypeScript", type: "language" },
      { name: "Astro", type: "framework" },
      { name: "React", type: "framework" },
      { name: "Tailwind CSS", type: "framework" },
      { name: "Vercel", type: "tool" },
    ],
    githubLink: "https://github.com/heliaczk/heliac.xyz",
    liveLink: "https://heliac.dev",
  },
  {
    title: "[REDACTED]",
    description: "???",
    technologies: [
      { name: "Solidity", type: "language" },
      { name: "Ethereum", type: "framework" },
    ],
    githubLink: "",
    liveLink: "",
  },
  
];

export { projects };
