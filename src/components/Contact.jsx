import { profile } from "../data/content.js";
import { FadeIn, SectionHeading } from "./ui.jsx";
import { GitHubIcon, LinkedInIcon, MailIcon } from "./icons.jsx";

export default function Contact() {
  return (
    <section id="contact" className="hero-bg section-screen flex flex-col justify-center border-t border-line/50">
      <div className="mx-auto flex max-w-[88rem] flex-col items-center px-8 py-16 text-center sm:py-24 xl:py-28">
        <SectionHeading num="07" title="Contact" />

        <FadeIn className="mt-6 xl:mt-8">
          <p className="text-lg leading-relaxed text-fg-muted sm:text-xl xl:text-2xl">
            Open to research opportunities, software projects, and STEM collaborations.
          </p>
        </FadeIn>

        {/* Direct email action */}
        <FadeIn delay={0.1} className="my-8">
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex max-w-full cursor-pointer items-center gap-3 rounded-xl bg-accent px-9 py-5 text-lg font-semibold text-on-accent transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_4px_18px_rgba(34,197,94,0.35)] sm:text-xl xl:px-10 xl:py-6 xl:text-2xl"
          >
            <MailIcon className="shrink-0 xl:h-7 xl:w-7" />
            <span className="break-all">{profile.email}</span>
          </a>
        </FadeIn>

        {/* GitHub / LinkedIn */}
        <FadeIn delay={0.15} className="mb-8">
          <div className="flex gap-3.5 xl:gap-4">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener"
              aria-label="GitHub"
              title="GitHub"
              className="inline-flex h-14 w-14 cursor-pointer items-center justify-center rounded-xl border border-line text-fg-muted transition-all duration-200 hover:-translate-y-0.5 hover:border-accent hover:text-accent xl:h-16 xl:w-16"
            >
              <GitHubIcon size={28} className="xl:h-8 xl:w-8" />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener"
              aria-label="LinkedIn"
              title="LinkedIn"
              className="inline-flex h-14 w-14 cursor-pointer items-center justify-center rounded-xl border border-line text-fg-muted transition-all duration-200 hover:-translate-y-0.5 hover:border-accent hover:text-accent xl:h-16 xl:w-16"
            >
              <LinkedInIcon size={28} className="xl:h-8 xl:w-8" />
            </a>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p className="font-mono text-[16px] text-fg-muted">
            <span className="text-accent">$</span> echo "let's build something"
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
