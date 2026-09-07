import { about } from "../data/content.js";
import { FadeIn, SectionHeading, FileTag } from "./ui.jsx";

export default function AboutMe() {
  return (
    <section id="about" className="scroll-mt-24 flex min-h-svh flex-col justify-center border-t border-line/50 bg-base">
      <div className="mx-auto max-w-[88rem] px-8 py-16 sm:py-24 xl:py-28">
        <SectionHeading num="01" title="About Me" sub="Who I am, what drives me, and where I'm headed." />

        {/* Content card */}
        <FadeIn className="mt-12 xl:mt-16">
          <div className="rounded-2xl border border-line-dim bg-card p-10 shadow-[0_16px_40px_rgba(0,0,0,0.35)] sm:p-12 xl:p-14 2xl:p-16">
            <div className="mb-6">
              <FileTag>about-me.md</FileTag>
            </div>
            <p className="text-xl leading-relaxed text-fg-muted sm:text-2xl xl:text-3xl">
              For me, computer science is all about the{" "}
              <span className="font-medium text-fg">thrill of breaking down hard problems</span> into
              clean, efficient logic. As a high school developer, I focus heavily on{" "}
              <span className="font-medium text-accent">algorithmic problem solving in Python</span> and
              building responsive web applications using{" "}
              <span className="font-medium text-prop">React and Node.js</span>. Outside of coding, I
              believe in helping others build confidence—whether that's teaching students through our
              online tutoring club or collaborating with my teammates on TSA software builds. Above
              all, I'm focused on <span className="font-medium text-fg">building things that matter</span>.
            </p>
          </div>
        </FadeIn>

        {/* Quick facts */}
        <div className="mt-10 grid gap-8 sm:grid-cols-3 xl:mt-14 xl:gap-10">
          {about.stats.map((stat, i) => (
            <FadeIn key={stat.label} delay={0.1 + i * 0.08}>
              <div className="rounded-xl border border-line-dim bg-panel p-8 text-center sm:p-10 xl:p-12">
                <p className="font-mono text-4xl font-bold text-accent sm:text-5xl xl:text-6xl">{stat.value}</p>
                <p className="mt-3 text-lg text-fg-muted xl:mt-4 xl:text-xl">{stat.label}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}