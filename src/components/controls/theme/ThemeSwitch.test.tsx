import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { ThemeSwitch } from "./ThemeSwitch";

const labels = { light: "light", dark: "dark" };

describe("ThemeSwitch", () => {
  it("should press the option matching the active theme", async () => {
    render(
      <ThemeProvider>
        <ThemeSwitch legend="tema" labels={labels} />
      </ThemeProvider>,
    );

    await userEvent.click(screen.getByRole("button", { name: "dark" }));

    expect(screen.getByRole("button", { name: "dark" })).toHaveAttribute("aria-pressed", "true");
    expect(screen.getByRole("button", { name: "light" })).toHaveAttribute("aria-pressed", "false");
  });

  it("should apply the selected theme to the document", async () => {
    render(
      <ThemeProvider>
        <ThemeSwitch legend="tema" labels={labels} />
      </ThemeProvider>,
    );

    await userEvent.click(screen.getByRole("button", { name: "dark" }));

    expect(document.documentElement).toHaveAttribute("data-theme", "dark");
  });
});
