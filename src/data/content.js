/* ============================================================
   All page content lives here — edit copy, links, tags, and
   timeline entries in one place.
   ============================================================ */

export const profile = {
  name: "Vansh Agarwal",
  firstName: "Vansh",
  subheadline:
    "High school sophomore passionate about computer science, building software, and working with AI.",
  email: "agrwlvansh@gmail.com",
  github: "https://github.com/imVansh2010",
  linkedin: "https://www.linkedin.com/in/vansh-agarwal-8baa38431",
};

/* The About Me paragraph is rendered (with keyword highlights) in
   src/components/AboutMe.jsx — edit it there. */

export const codebases = [
  {
    title: "VuePoint - StudentVue Grade Calculator",
    /* `file` is rendered as the editor-style tag in the card header. */
    file: "vuepoint.vercel.app",
    dot: "#4EC9B0",
    desc: "A bookmarklet that turns StudentVUE class gradebooks into a fully local, hypothetical grade calculator directly in your browser.",
    tags: ["Javascript", "DOM Parsing"],
    linkLabel: "GitHub Repo",
    href: "https://github.com/imVansh2010/vuepoint",
  },
];

export const leadership = [
  {
    role: "Team Member",
    org: "TSA Video Game Design",
    period: "2026 – Present",
    bullets: [
      "Collaborating with teammates on game logic to produce captivating games.",
    ],
  },
  {
    role: "Vice President",
    org: "USACO Club",
    period: "2026 – Present",
    bullets: ["Building a community of students who want to compete in USACO contests."],
  },
  {
    role: "Vice President",
    org: "National Tutoring Honor Society",
    period: "2026 – Present",
    bullets: [
      "Finding students to help tutor underprivileged kids in a variety of subjects completely online.",
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
    desc: "I enjoy cubing in my free time — I can solve the 3x3 in under 12 seconds.",
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
