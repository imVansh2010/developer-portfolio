import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MenuIcon, XIcon, GitHubIcon, LinkedInIcon } from "./icons.jsx";
import { profile } from "../data/content.js";

const LINKS = [
  { label: "About", id: "about" },
  { label: "Codebases", id: "codebases" },
  { label: "Leadership", id: "leadership" },
  { label: "Achievements", id: "achievements" },
  { label: "Interests", id: "interests" },
  { label: "Skills", id: "skills" },
  { label: "Contact", id: "contact" },
];

/* Brand mark — avatar image + name.
   To change the logo, replace public/logo.png with your own image
   (keep the filename, or update the src below). */
function Brand() {
  return (
    <a href="#home" className="flex items-center gap-3">
      <img
        src="/logo.png"
        alt="Vansh Agarwal"
        className="h-12 w-12 shrink-0 rounded-full object-cover"
      />
      <p className="font-mono text-lg font-bold leading-tight tracking-tight text-fg 2xl:text-2xl">vansh_agarwal</p>
    </a>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  /* While true, scroll-spy updates are ignored — used right after a nav
     click so smooth scrolling doesn't flash intermediate links. */
  const suppressSpy = useRef(false);
  const suppressTimer = useRef(null);
  /* Section id queued by a mobile-drawer link tap. The drawer is absolutely
     positioned, so while it's open it extends the page height; tapping a link
     collapses it, and scrolling during that collapse cancels the browser's
     smooth scroll (the target moves mid-scroll). So we defer the actual
     navigation until the drawer's exit animation has fully finished. */
  const pendingNav = useRef(null);

  /* Scroll-spy: highlight the last section whose top is above the read band. */
  useEffect(() => {
    let ticking = false;
    const update = () => {
      ticking = false;
      if (suppressSpy.current) return;
      /* At the very bottom of the page, force the last section so Contact
         (not the section above it) stays highlighted. */
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4) {
        setActive(LINKS[LINKS.length - 1].id);
        return;
      }
      const band = window.innerHeight * 0.35;
      let current = "";
      for (const l of LINKS) {
        const el = document.getElementById(l.id);
        if (el && el.getBoundingClientRect().top <= band) current = l.id;
      }
      setActive(current);
    };
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(update);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    update();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Set the active link immediately and pause the scroll-spy while the
     browser smooth-scrolls to the target section. */
  function goTo(id) {
    setActive(id);
    suppressSpy.current = true;
    clearTimeout(suppressTimer.current);
    suppressTimer.current = setTimeout(() => {
      suppressSpy.current = false;
    }, 1000);
    document.addEventListener(
      "scrollend",
      () => {
        suppressSpy.current = false;
      },
      { once: true }
    );
  }

  /* Keep the browser tab title in sync with the section on screen,
     e.g. "Vansh Agarwal | About". No active section (hero) → just the name. */
  useEffect(() => {
    const section = LINKS.find((l) => l.id === active);
    document.title = section ? `${profile.name} | ${section.label}` : profile.name;
  }, [active]);

  /* Close the mobile drawer with Escape. */
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-line-dim/70 bg-base/85 backdrop-blur-md">
      {/* Full-width bar: brand flush left, nav absolutely centered, socials flush right.
          Flexbox (not grid) so the hidden mobile nav can't shift the hamburger. */}
      <div className="relative flex w-full items-center justify-between px-6 py-4 sm:px-10 lg:py-5">
        <Brand />

        {/* Desktop: centered nav links (shown at xl+ so they never collide with the brand name) */}
        <nav
          aria-label="Primary"
          className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-1 xl:flex"
        >
          {LINKS.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              onClick={() => goTo(l.id)}
              className={`rounded-lg px-4 py-2.5 text-lg font-medium transition-colors duration-150 hover:bg-panel hover:text-fg ${
                active === l.id ? "bg-accent/20 text-accent" : "text-fg-muted"
              }`}
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* Desktop: socials + mobile hamburger — always right-aligned */}
        <div className="flex items-center gap-2.5">
          <div className="hidden items-center gap-2.5 xl:flex">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener"
              aria-label="GitHub"
              title="GitHub"
              className="inline-flex h-12 w-12 cursor-pointer items-center justify-center rounded-lg border border-line-dim text-fg-muted transition-colors duration-150 hover:border-accent hover:text-accent"
            >
              <GitHubIcon size={22} />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener"
              aria-label="LinkedIn"
              title="LinkedIn"
              className="inline-flex h-12 w-12 cursor-pointer items-center justify-center rounded-lg border border-line-dim text-fg-muted transition-colors duration-150 hover:border-accent hover:text-accent"
            >
              <LinkedInIcon size={22} />
            </a>
          </div>

          {/* Mobile: hamburger toggle */}
          <button
            type="button"
            className="inline-flex h-12 w-12 cursor-pointer items-center justify-center rounded-lg text-fg transition-colors duration-150 hover:bg-panel xl:hidden"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
            aria-expanded={open}
            aria-controls="mobile-nav"
          >
            {open ? <XIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {/* Mobile: collapsible drawer anchored under the header */}
      <AnimatePresence
        initial={false}
        onExitComplete={() => {
          /* Drawer is fully closed and unmounted — safe to scroll now. */
          const id = pendingNav.current;
          if (!id) return;
          pendingNav.current = null;
          const el = document.getElementById(id);
          if (el) {
            const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
            el.scrollIntoView({ behavior: reduced ? "auto" : "smooth", block: "start" });
            history.replaceState(null, "", `#${id}`);
          }
        }}
      >
        {open && (
          <motion.nav
            id="mobile-nav"
            aria-label="Mobile"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute inset-x-0 top-full overflow-hidden border-b border-line-dim/70 bg-base xl:hidden"
          >
            <div className="flex flex-col px-6 pb-6 pt-2 sm:px-10">
              {LINKS.map((l) => (
                <a
                  key={l.id}
                  href={`#${l.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    pendingNav.current = l.id;
                    goTo(l.id);
                    setOpen(false);
                  }}
                  className={`rounded-lg px-3 py-3 text-lg transition-colors duration-150 hover:bg-panel hover:text-fg ${
                    active === l.id ? "bg-accent/20 text-accent" : "text-fg-muted"
                  }`}
                >
                  {l.label}
                </a>
              ))}
              <div className="mt-2 flex items-center gap-3 border-t border-line-dim/70 px-3 pt-4">
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener"
                  aria-label="GitHub"
                  className="cursor-pointer text-fg-muted transition-colors duration-150 hover:text-accent"
                >
                  <GitHubIcon size={24} />
                </a>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener"
                  aria-label="LinkedIn"
                  className="cursor-pointer text-fg-muted transition-colors duration-150 hover:text-accent"
                >
                  <LinkedInIcon size={24} />
                </a>
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}