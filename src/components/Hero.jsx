import { motion } from "framer-motion";
import { profile } from "../data/content.js";
import { Chip } from "./ui.jsx";
import { GitHubIcon, LinkedInIcon, ArrowRightIcon } from "./icons.jsx";

/* Staggered entrance for hero elements. */
const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

/* Terminal lines, revealed one by one. */
const TERM_LINES = [
  { prompt: true, text: "whoami" },
  { text: "Vansh Agarwal", cls: "text-prop" },
  { prompt: true, text: "cat ./stack.txt" },
  { text: "# c++ · python · react · node.js · git", cls: "text-com" },
  { prompt: true, text: "echo $FOCUS" },
  { text: '"projects · algorithms · AI"', cls: "text-prop" },
];

const termContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.14, delayChildren: 0.4 } },
};
const termItem = {
  hidden: { opacity: 0, y: 6 },
  show: { opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeOut" } },
};

/* High-visibility social badge pill. */
function SocialBadge({ href, label, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener"
      className="inline-flex cursor-pointer items-center gap-3 rounded-xl border border-line bg-card px-7 py-4 text-xl font-semibold text-fg transition-all duration-200 hover:-translate-y-0.5 hover:border-accent hover:text-accent hover:shadow-[0_4px_18px_rgba(34,197,94,0.25)] xl:gap-4 xl:px-9 xl:py-5 xl:text-2xl"
    >
      {children}
      {label}
    </a>
  );
}

export default function Hero() {
  return (
    <section id="home" className="section-screen flex flex-col justify-center bg-base">
      <div className="mx-auto grid max-w-[88rem] items-center gap-16 px-8 py-16 sm:py-24 lg:grid-cols-[1.15fr_0.85fr] xl:gap-20 2xl:gap-24">
        {/* ---- Left: copy + CTAs ---- */}
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.h1
            variants={item}
            className="mb-7 text-6xl font-extrabold leading-[1.05] tracking-tight sm:text-7xl lg:text-8xl xl:text-9xl"
          >
            Hey, I'm <span className="text-accent">Vansh</span>
          </motion.h1>

          <motion.p variants={item} className="mb-8 max-w-[56ch] text-xl leading-relaxed text-fg-muted sm:text-2xl xl:text-3xl">
            {profile.subheadline}
          </motion.p>

          {/* High-visibility social badges */}
          <motion.div variants={item} className="mb-6 flex flex-wrap gap-3">
            <SocialBadge href={profile.github} label="GitHub">
              <GitHubIcon size={24} />
            </SocialBadge>
            <SocialBadge href={profile.linkedin} label="LinkedIn">
              <LinkedInIcon size={24} />
            </SocialBadge>
          </motion.div>

          <motion.div variants={item} className="mb-6 flex flex-wrap gap-3">
            <a
              href="#codebases"
              className="inline-flex cursor-pointer items-center gap-3 rounded-xl bg-accent px-8 py-4 text-xl font-semibold text-on-accent transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_4px_18px_rgba(34,197,94,0.35)] xl:px-10 xl:py-5 xl:text-2xl"
            >
              View Projects
              <ArrowRightIcon size={26} />
            </a>
            <a
              href="#contact"
              className="inline-flex cursor-pointer items-center gap-2 rounded-xl border border-line px-8 py-4 text-xl font-semibold text-fg transition-all duration-200 hover:-translate-y-0.5 hover:border-accent hover:bg-card hover:text-accent xl:px-10 xl:py-5 xl:text-2xl"
            >
              Get in Touch
            </a>
          </motion.div>

          <motion.div variants={item} className="flex flex-wrap gap-3 xl:gap-4">
            <Chip size="text-lg xl:text-xl" className="px-5 py-2.5 xl:px-6 xl:py-3">
              <span className="mr-2.5 h-2.5 w-2.5 rounded-full bg-accent shadow-[0_0_8px_var(--color-accent)]" />
              Washington State, USA
            </Chip>
            <Chip accent size="text-lg xl:text-xl" className="px-5 py-2.5 xl:px-6 xl:py-3">
              Open to research &amp; collaborations
            </Chip>
          </motion.div>
        </motion.div>

        {/* ---- Right: terminal card ---- */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.25 }}
          className="overflow-hidden rounded-2xl border border-line bg-card shadow-[0_24px_64px_rgba(0,0,0,0.45),0_0_0_1px_rgba(255,255,255,0.03)]"
        >
          <div className="flex items-center gap-2 border-b border-line-dim bg-panel px-5 py-4 xl:px-6 xl:py-5">
            <span className="h-3.5 w-3.5 rounded-full bg-[#FF5F57] xl:h-4 xl:w-4" />
            <span className="h-3.5 w-3.5 rounded-full bg-[#FEBC2E] xl:h-4 xl:w-4" />
            <span className="h-3.5 w-3.5 rounded-full bg-[#28C840] xl:h-4 xl:w-4" />
            <span className="ml-2 font-mono text-[16px] text-fg-muted xl:text-lg">vansh@portfolio: ~</span>
          </div>
          <motion.div
            variants={termContainer}
            initial="hidden"
            animate="show"
            aria-label="Terminal output"
            className="p-8 font-mono text-[16px] leading-loose sm:text-lg xl:p-10 xl:text-xl"
          >
            {TERM_LINES.map((line, i) => (
              <motion.p key={i} variants={termItem}>
                {line.prompt ? (
                  <>
                    <span className="mr-1.5 text-accent">$</span>
                    {line.text}
                  </>
                ) : (
                  <span className={line.cls}>{line.text}</span>
                )}
              </motion.p>
            ))}
            <motion.p variants={termItem} className="caret" aria-hidden="true">
              <span className="mr-1.5 text-accent">$</span>
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
