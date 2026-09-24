import { motion } from "framer-motion";

/* Scroll-reveal wrapper — fades/slides children in once, on first view. */
export function FadeIn({ children, delay = 0, y = 18, className = "" }) {
  return (
    <motion.div
      className={`min-w-0 ${className}`}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, ease: "easeOut", delay }}
    >
      {children}
    </motion.div>
  );
}

/* "// 01. Title" section heading with optional subtitle. */
export function SectionHeading({ num, title, sub, center = false, className = "" }) {
  return (
    <FadeIn className={`${center ? "text-center" : ""} ${className}`}>
      <h2 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl">
        <span className="mr-2.5 font-mono text-[0.62em] font-semibold text-accent">
          {"// "}
          {num}.
        </span>{" "}
        {title}
      </h2>
      {sub ? <p className="mt-3 text-lg leading-relaxed text-fg-muted sm:text-xl xl:mt-4 xl:text-2xl">{sub}</p> : null}
    </FadeIn>
  );
}

/* Monospace pill chip used for tags, skills, and meta info.
   Pass a text-size class via `size` (e.g. size="text-lg"). */
export function Chip({ children, accent = false, className = "", size = "text-[15px]" }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-4 py-2 text-center font-mono ${size} ${className} ${
        accent ? "border-accent/40 bg-accent/10 text-accent" : "border-line-dim bg-panel text-fg-muted"
      }`}
    >
      {children}
    </span>
  );
}

/* Editor-style filename tag, e.g. "usaco-solutions.cpp".
   max-w-full + truncate keeps long filenames from forcing cards wider
   than the viewport on narrow screens. */
export function FileTag({ dot, children }) {
  return (
    <span className="inline-flex max-w-full min-w-0 items-center gap-1.5 whitespace-nowrap rounded-md border border-line-dim bg-panel px-3.5 py-1.5 font-mono text-sm text-fg xl:px-4 xl:py-2">
      {dot ? <span className="h-2 w-2 shrink-0 rounded-sm" style={{ background: dot }} /> : null}
      <span className="truncate">{children}</span>
    </span>
  );
}
