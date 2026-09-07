import { skills } from "../data/content.js";
import { FadeIn, SectionHeading } from "./ui.jsx";

/* Wrap-safe skill badge — long labels like "AP Computer Science Principles"
   break cleanly inside the badge instead of overflowing the card. */
function SkillBadge({ children }) {
  return (
    <span className="inline-block max-w-full break-words rounded-md border border-line-dim bg-panel px-4 py-2.5 font-mono text-[15px] text-fg xl:px-5 xl:py-3 xl:text-lg">
      {children}
    </span>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 flex min-h-svh flex-col justify-center border-t border-line/50 bg-base">
      <div className="mx-auto max-w-[88rem] px-8 py-16 sm:py-24 xl:py-28">
        <SectionHeading num="06" title="Skills" sub="Languages, tools, coursework, and competition focus." />

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 xl:mt-16 xl:gap-10">
          {skills.map((group, i) => (
            <FadeIn key={group.title} delay={i * 0.08}>
              <div className="h-full overflow-hidden rounded-2xl border border-line-dim bg-card p-8 sm:p-10 xl:p-12">
                <h3 className="mb-6 text-lg font-semibold uppercase tracking-wider text-fg-muted xl:mb-8 xl:text-xl">
                  {group.title}
                </h3>
                <div className="flex flex-wrap gap-3 xl:gap-3.5">
                  {group.items.map((skill) => (
                    <SkillBadge key={skill}>{skill}</SkillBadge>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}