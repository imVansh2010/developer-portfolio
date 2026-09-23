import { leadership } from "../data/content.js";
import { FadeIn, SectionHeading } from "./ui.jsx";

export default function Leadership() {
  return (
    <section id="leadership" className="section-screen flex flex-col justify-center border-t border-line/50 bg-base">
      <div className="mx-auto max-w-[88rem] px-8 py-16 sm:py-24 xl:py-28">
        <SectionHeading num="03" title="Leadership &amp; Impact" sub="Clubs and teams where I lead, teach, and build." />

        <ol className="mt-12 flex max-w-4xl flex-col gap-10 border-l-2 border-line-dim pl-8 xl:mt-14 xl:gap-10 xl:pl-10">
          {leadership.map((entry, i) => (
            <FadeIn key={entry.org} delay={i * 0.08}>
              <li className="relative">
                {/* timeline dot — border matches the section background */}
                <span
                  aria-hidden="true"
                  className="absolute -left-[39px] top-1.5 h-3.5 w-3.5 rounded-full border-[3px] border-base bg-accent shadow-[0_0_0_2px_var(--color-accent)] xl:-left-[47px] xl:h-4 xl:w-4"
                />
                <div className="mb-3">
                  <h3 className="mr-3 inline text-2xl font-bold sm:text-3xl xl:text-4xl">{entry.role}</h3>
                  <span className="text-lg font-medium text-prop sm:text-xl xl:text-2xl">{entry.org}</span>
                  <div className="mt-2">
                    <span className="inline-block rounded-md border border-line-dim bg-panel px-3.5 py-1.5 font-mono text-sm text-fg xl:px-4 xl:py-2">
                      {entry.period}
                    </span>
                  </div>
                </div>
                <ul className="flex flex-col gap-2 xl:gap-2.5">
                  {entry.bullets.map((bullet) => (
                    <li key={bullet} className="relative pl-[22px] text-lg leading-relaxed text-fg-muted sm:text-xl xl:pl-6 xl:text-2xl">
                      <span aria-hidden="true" className="absolute left-0 font-mono text-[15px] text-accent xl:text-lg">
                        &gt;
                      </span>
                      {bullet}
                    </li>
                  ))}
                </ul>
              </li>
            </FadeIn>
          ))}
        </ol>
      </div>
    </section>
  );
}
