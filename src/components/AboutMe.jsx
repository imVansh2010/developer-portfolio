import { FadeIn, SectionHeading, FileTag } from "./ui.jsx";

export default function AboutMe() {
  return (
    <section id="about" className="section-screen flex flex-col justify-center border-t border-line/50 bg-base">
      <div className="mx-auto max-w-[88rem] px-8 py-16 sm:py-24 xl:py-28">
        <SectionHeading num="01" title="About Me" sub="Who I am, what drives me, and where I'm headed." />

        {/* Content card */}
        <FadeIn className="mt-12 xl:mt-16">
          <div className="rounded-2xl border border-line-dim bg-card p-10 shadow-[0_16px_40px_rgba(0,0,0,0.35)] sm:p-12 xl:p-14 2xl:p-16">
            <div className="mb-6 xl:mb-8">
              <FileTag>about-me.md</FileTag>
            </div>
            <p className="text-2xl leading-relaxed text-fg-muted sm:text-3xl xl:text-4xl xl:leading-[1.6]">
              For me, computer science is all about the{" "}
              <span className="font-medium text-fg">thrill of breaking down hard problems</span> into clean, efficient
              logic. As a high school developer, I focus heavily on{" "}
              <span className="font-medium text-accent">algorithmic problem solving in Python</span> and building
              responsive web applications using <span className="font-medium text-prop">React and Node.js</span>.
              Outside of coding, I enjoy hanging out with my friends and helping others through{" "}
              <span className="font-medium text-prop">tutoring</span>. Above all, I enjoy{" "}
              <span className="font-medium text-fg">building things that genuinely matter</span>.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
