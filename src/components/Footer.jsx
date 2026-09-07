import { GitBranchIcon } from "./icons.jsx";

export default function Footer() {
  return (
    <footer className="flex flex-wrap items-center justify-between gap-3 border-t border-line-dim bg-secondary px-8 py-5 font-mono text-[15px] text-fg-muted">
      <span className="inline-flex items-center gap-1.5">
        <GitBranchIcon />
        main <span className="text-[#4ADE80]">✓ 0 errors</span>
      </span>
      <span>
        © {new Date().getFullYear()} Vansh Agarwal · built with <span className="text-prop">react + tailwind</span>
      </span>
    </footer>
  );
}
