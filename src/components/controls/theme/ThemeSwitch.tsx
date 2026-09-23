"use client";

import { useThemeControls, type ThemeName } from "@/hooks/useThemeControls";
import { cn } from "@/utils/cn";

type ThemeLabels = { light: string; dark: string };

export function ThemeSwitch({ legend, labels }: { legend: string; labels: ThemeLabels }) {
  const { current, select } = useThemeControls();

  return (
    <div className="border-border bg-bg flex items-center justify-between rounded-lg border px-3 py-2">
      <span className="text-secondary font-mono text-[10px]">{legend}</span>
      <div className="flex gap-1">
        {(["light", "dark"] as const).map((theme) => (
          <ThemePill
            key={theme}
            theme={theme}
            label={labels[theme]}
            active={current === theme}
            onSelect={select}
          />
        ))}
      </div>
    </div>
  );
}

function ThemePill({
  theme,
  label,
  active,
  onSelect,
}: {
  theme: ThemeName;
  label: string;
  active: boolean;
  onSelect: (theme: ThemeName) => void;
}) {
  return (
    <button
      type="button"
      aria-pressed={active}
      onClick={() => onSelect(theme)}
      className={cn(
        "cursor-pointer rounded px-2 py-1.5 font-mono text-[9px] font-medium",
        active ? "bg-accent-soft text-accent-soft-text" : "text-secondary",
      )}
    >
      {label}
    </button>
  );
}
