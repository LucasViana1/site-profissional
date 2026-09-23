"use client";

import { useThemeControls } from "@/hooks/useThemeControls";
import { MoonIcon } from "@/components/ui/icons/MoonIcon";
import { SunIcon } from "@/components/ui/icons/SunIcon";

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
