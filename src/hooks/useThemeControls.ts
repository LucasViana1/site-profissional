"use client";

import { useSyncExternalStore } from "react";
import { useTheme } from "next-themes";

export type ThemeName = "light" | "dark";

const subscribe = () => () => {};

export function useThemeControls() {
  const { resolvedTheme, setTheme } = useTheme();
  const mounted = useSyncExternalStore(
    subscribe,
    () => true,
    () => false,
  );

  const current: ThemeName | null = !mounted ? null : resolvedTheme === "dark" ? "dark" : "light";

  return {
    current,
    select: (theme: ThemeName) => setTheme(theme),
    toggle: () => setTheme(current === "dark" ? "light" : "dark"),
  };
}
