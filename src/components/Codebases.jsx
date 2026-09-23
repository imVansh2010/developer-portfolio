import { codebases } from "../data/content.js";
import { FadeIn, SectionHeading, Chip, FileTag } from "./ui.jsx";
import { ExternalLinkIcon } from "./icons.jsx";

export default function Codebases() {
  return (
    <section id="codebases" className="section-screen flex flex-col justify-center border-t border-line/50 bg-base">
      <div className="mx-auto max-w-[88rem] px-8 py-16 sm:py-24 xl:py-28">
        <SectionHeading num="02" title="Active Codebases" sub="Where I'm actively building and shipping right now." />

        <div className="mt-12 xl:mt-16">
          {codebases.map((repo, i) => (
            <FadeIn key={repo.title} delay={i * 0.1}>
              <article className="flex h-full flex-col gap-4 rounded-2xl border border-line-dim bg-card p-10 transition-all duration-200 hover:-translate-y-1 hover:border-line hover:shadow-[0_16px_40px_rgba(0,0,0,0.4)] sm:p-12 xl:gap-5 xl:p-14 2xl:p-16">
                <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                  <h3 className="text-2xl font-bold sm:text-3xl xl:text-4xl">{repo.title}</h3>
                  <FileTag dot={repo.dot}>{repo.file}</FileTag>
                </div>
                <p className="max-w-[80ch] flex-1 text-lg leading-relaxed text-fg-muted sm:text-xl xl:text-2xl">{repo.desc}</p>
                <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-4">
                  <div className="flex flex-wrap gap-2.5 xl:gap-3">
                    {repo.tags.map((tag) => (
                      <Chip key={tag} size="text-[15px] xl:text-lg" className="xl:px-5 xl:py-2.5">
                        {tag}
                      </Chip>
                    ))}
                  </div>
                  <a
                    href={repo.href}
                    target="_blank"
                    rel="noopener"
                    className="inline-flex items-center gap-2 cursor-pointer text-[16px] font-semibold text-prop transition-colors duration-150 hover:text-accent sm:text-lg xl:text-xl"
                  >
                    {repo.linkLabel}
                    <ExternalLinkIcon />
                  </a>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
