/* ============================================================
   All page content lives here — edit copy, links, tags, and
   timeline entries in one place.
   ============================================================ */

export const profile = {
  name: "Vansh Agarwal",
  firstName: "Vansh",
  subheadline:
    "High school sophomore passionate about building high-impact software, exploring computer science, and making an impact on AI.",
  email: "agrwlvansh@gmail.com",
  github: "https://github.com/imVansh2010",
  linkedin: "https://www.linkedin.com/in/vansh-agarwal-8baa38431",
};

export const about = {
  /* The About Me paragraph is rendered (with keyword highlights) in
     src/components/AboutMe.jsx — edit it there. */
  stats: [
    { value: "3", label: "Club leadership & team roles" },
    { value: "4", label: "AP STEM courses in progress" },
    { value: "Python", label: "Primary competition language" },
  ],
};

export const codebases = [
  {
    title: "TSA Video Game Design Entry",
    file: "tsa-game.cpp",
    dot: "#4EC9B0",
    desc: "Competitive game development entry for TSA — building core game logic and system design alongside my team, with clean, testable architecture.",
    tags: ["Game Logic", "System Design", "Git"],
    linkLabel: "GitHub Repo",
    // TODO: replace with the real TSA GitHub repo URL
    href: "https://github.com/",
  },
  {
    title: "Algorithmic Problem Solving (USACO)",
    file: "usaco-solutions.cpp",
    dot: "#569CD6",
    desc: "Active collection of USACO problem sets and solutions in C++ and Python, with notes on data structures and reusable algorithmic patterns.",
    tags: ["C++", "Python", "Data Structures", "Algorithms"],
    linkLabel: "GitHub Profile",
    // TODO: replace with the real GitHub profile/repo URL
    href: "https://github.com/",
  },
];

export const leadership = [
  {
    role: "Team Member",
    org: "TSA Video Game Design",
    period: "2026 – Present",
    bullets: [
      "Collaborating with teammates on game logic and software builds for competition.",
    ],
  },
  {
    role: "Vice President",
    org: "USACO Club",
    period: "2026 – Present",
    bullets: [
      "Curating algorithmic practice sets and preparing members for USACO contest windows.",
    ],
  },
  {
    role: "Vice President",
    org: "Online Tutoring Club",
    period: "2026 – Present",
    bullets: [
      "Teaching students and helping them build confidence through one-on-one online sessions.",
    ],
  },
];

export const achievements = [
  {
    title: "TSA State Competitor — Video Game Design",
    org: "Technology Student Association (TSA)",
    desc: "State-level competitive placement for custom system design, gameplay mechanics, and technical documentation.",
  },
];

export const interests = [
  {
    icon: "code",
    title: "Coding",
    desc: "Algorithmic problem solving in C++ and building full-stack web applications.",
  },
  {
    icon: "cube",
    title: "Cubing",
    desc: "I enjoy cubing in my free time — I currently average just under 20 seconds on the 3x3.",
  },
  {
    icon: "basketball",
    title: "Basketball",
    desc: "I play basketball recreationally — pickup games with friends, staying active, and having fun.",
  },
  {
    icon: "mountain",
    title: "Hiking",
    desc: "Exploring trails across Washington State.",
  },
];

export const skills = [
  {
    title: "Languages",
    items: ["C++", "Python", "JavaScript", "Java (AP CSA)", "HTML/CSS"],
  },
  {
    title: "Tools & Frameworks",
    items: ["React", "Tailwind CSS", "Node.js", "Git", "VS Code", "Vercel"],
  },
  {
    title: "Coursework & Rigor",
    items: [
      "AP Computer Science Principles",
      "AP Computer Science A",
      "AP Physics 1",
      "AP Physics 2",
    ],
  },
  {
    title: "Competitions & Focus",
    items: ["USACO (Active)", "TSA Competitor", "DECA", "Data Structures & Algorithms"],
  },
];
