"use client";

import { useThemeControls } from "@/hooks/useThemeControls";

export function ThemeToggleButton({ label }: { label: string }) {
  const { current, toggle } = useThemeControls();

  return (
    <button
      type="button"
      aria-label={label}
      onClick={toggle}
      className="border-border bg-bg text-primary flex size-8 cursor-pointer items-center justify-center rounded-md border"
    >
      {current === "dark" ? <MoonIcon /> : <SunIcon />}
    </button>
  );
}

function SunIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className="size-4" fill="none" stroke="currentColor">
      <circle cx="12" cy="12" r="4.5" strokeWidth="1.8" />
      <path
        strokeWidth="1.8"
        strokeLinecap="round"
        d="M12 2.5v2M12 19.5v2M2.5 12h2M19.5 12h2M5.2 5.2l1.4 1.4M17.4 17.4l1.4 1.4M18.8 5.2l-1.4 1.4M6.6 17.4l-1.4 1.4"
      />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className="size-4" fill="none" stroke="currentColor">
      <path
        strokeWidth="1.8"
        strokeLinejoin="round"
        d="M20 14.2A8.2 8.2 0 0 1 9.8 4a8.2 8.2 0 1 0 10.2 10.2Z"
      />
    </svg>
  );
}
