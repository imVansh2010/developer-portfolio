import { useEffect, useRef, useState } from "react";
import { motion, useAnimationControls } from "framer-motion";
import { Chip } from "./ui.jsx";
import { LockIcon, ArrowRightIcon } from "./icons.jsx";

/* TEMPORARY: preview gate while the portfolio is still being built.
   Set GATE_ENABLED to false in App.jsx (or delete this file + its use) to launch publicly. */
const PASSCODE = "passvansh";

/* Hostname shown in the fake terminal title bar, matching the hero card. */
const HOST = "vansh@portfolio: ~";

export default function PasscodeGate({ onUnlock }) {
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);
  const inputRef = useRef(null);
  const shake = useAnimationControls();

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  function handleSubmit(event) {
    event.preventDefault();
    if (value.trim() === PASSCODE) {
      onUnlock();
      return;
    }
    setError(true);
    setValue("");
    inputRef.current?.focus();
    shake.start({ x: [0, -9, 9, -6, 6, 0], transition: { duration: 0.4 } });
  }

  return (
    <div className="hero-bg flex min-h-svh items-center justify-center px-8 py-16">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full max-w-xl"
      >
        {/* Nested so the entrance animation and the error shake don't fight over the same axis */}
        <motion.div
          animate={shake}
          className="overflow-hidden rounded-2xl border border-line bg-card shadow-[0_24px_64px_rgba(0,0,0,0.45),0_0_0_1px_rgba(255,255,255,0.03)]"
        >
          <div className="flex items-center gap-2 border-b border-line-dim bg-panel px-5 py-4 xl:px-6 xl:py-5">
            <span className="h-3.5 w-3.5 rounded-full bg-[#FF5F57] xl:h-4 xl:w-4" />
            <span className="h-3.5 w-3.5 rounded-full bg-[#FEBC2E] xl:h-4 xl:w-4" />
            <span className="h-3.5 w-3.5 rounded-full bg-[#28C840] xl:h-4 xl:w-4" />
            <span className="ml-2 font-mono text-[16px] text-fg-muted xl:text-lg">{HOST}</span>
          </div>

          <div className="p-8 xl:p-10">
            <p className="font-mono text-[15px] text-fg xl:text-base">
              <span className="mr-1.5 text-accent">$</span>./open-portfolio --preview
            </p>

            <LockIcon size={40} className="mt-6 text-accent" />

            <h1 className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl">This site is under construction</h1>

            <p className="mt-4 text-lg leading-relaxed text-fg-muted">
              A quick heads-up: the portfolio isn&apos;t finished yet, so for now it stays behind a passcode while I
              finish the remaining sections.
            </p>

            <Chip accent className="mt-5">
              <span className="h-2 w-2 rounded-full bg-accent" />
              Temporary passcode &mdash; removed before launch
            </Chip>

            <form onSubmit={handleSubmit} className="mt-8">
              <label htmlFor="passcode" className="block font-mono text-[15px] text-fg-muted">
                passcode
              </label>
              <div className="mt-2.5 flex flex-col gap-3 sm:flex-row">
                <input
                  id="passcode"
                  ref={inputRef}
                  type="password"
                  value={value}
                  onChange={(event) => {
                    setValue(event.target.value);
                    if (error) setError(false);
                  }}
                  autoComplete="off"
                  spellCheck="false"
                  aria-invalid={error}
                  aria-describedby={error ? "passcode-error" : undefined}
                  placeholder="••••••••"
                  className={`min-w-0 flex-1 rounded-xl border bg-base px-5 py-3.5 font-mono text-lg text-fg placeholder:text-fg-muted/50 ${
                    error ? "border-[#FF5F57]" : "border-line focus:border-accent"
                  }`}
                />
                <button
                  type="submit"
                  className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-xl bg-accent px-7 py-3.5 text-lg font-semibold text-on-accent transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_4px_18px_rgba(34,197,94,0.35)]"
                >
                  Unlock
                  <ArrowRightIcon size={20} />
                </button>
              </div>

              <p
                id="passcode-error"
                role="alert"
                className={`mt-3 font-mono text-[15px] text-[#FF5F57] ${error ? "" : "invisible"}`}
              >
                access denied: incorrect passcode
              </p>
            </form>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
