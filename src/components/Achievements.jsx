import { achievements } from "../data/content.js";
import { FadeIn, SectionHeading } from "./ui.jsx";
import { TrophyIcon } from "./icons.jsx";

export default function Achievements() {
  return (
    <section id="achievements" className="section-screen flex flex-col justify-center border-t border-line/50 bg-base">
      <div className="mx-auto max-w-[88rem] px-8 py-16 sm:py-24 xl:py-28">
        <SectionHeading num="04" title="Achievements" sub="Recognition from competitions and programs." />

        <div className="mt-10 flex flex-col gap-5 xl:mt-14 xl:gap-6">
          {achievements.map((a, i) => (
            <FadeIn key={a.title} delay={i * 0.08}>
              <article className="relative overflow-hidden rounded-2xl border border-accent/25 bg-card p-10 transition-colors duration-200 hover:border-accent/50 sm:p-12 xl:p-14 2xl:p-16">
                {/* soft accent glow */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-accent/10 blur-3xl"
                />
                <div className="relative flex flex-col gap-6 sm:flex-row sm:items-start xl:gap-8">
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl border border-accent/30 bg-accent/10 text-accent xl:h-20 xl:w-20">
                    <TrophyIcon size={30} className="xl:h-10 xl:w-10" />
                  </div>
                  <div>
                    <p className="font-mono text-sm uppercase tracking-wider text-fg-muted">{a.org}</p>
                    <h3 className="mt-1.5 text-3xl font-bold tracking-tight sm:text-4xl xl:text-5xl">{a.title}</h3>
                    <p className="mt-3 max-w-[65ch] text-lg leading-relaxed text-fg-muted sm:text-xl xl:mt-4 xl:text-2xl">
                      {a.desc}
                    </p>
                  </div>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
