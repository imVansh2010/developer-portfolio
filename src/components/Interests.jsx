import { interests } from "../data/content.js";
import { FadeIn, SectionHeading } from "./ui.jsx";
import { CodeIcon, BasketballIcon, GridIcon, MountainIcon } from "./icons.jsx";

const ICONS = {
  code: CodeIcon,
  cube: GridIcon,
  basketball: BasketballIcon,
  mountain: MountainIcon,
};

export default function Interests() {
  return (
    <section id="interests" className="section-screen flex flex-col justify-center border-t border-line/50 bg-base">
      <div className="mx-auto max-w-[88rem] px-8 py-16 sm:py-24 xl:py-28">
        <SectionHeading num="05" title="Interests" sub="Other hobbies I enjoy beyond programming." />

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 xl:mt-16 xl:gap-10">
          {interests.map((item, i) => {
            const Icon = ICONS[item.icon];
            return (
              <FadeIn key={item.title} delay={i * 0.08}>
                <div className="h-full rounded-2xl border border-line-dim bg-card p-10 transition-all duration-200 hover:-translate-y-1 hover:border-line sm:p-12 xl:p-14">
                  <div className="flex h-16 w-16 items-center justify-center rounded-xl border border-line-dim bg-panel text-prop xl:h-20 xl:w-20">
                    <Icon size={36} className="xl:h-10 xl:w-10" />
                  </div>
                  <h3 className="mt-6 text-2xl font-semibold xl:mt-8 xl:text-3xl">{item.title}</h3>
                  <p className="mt-3 text-lg leading-relaxed text-fg-muted sm:text-xl xl:mt-4 xl:text-2xl">{item.desc}</p>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}