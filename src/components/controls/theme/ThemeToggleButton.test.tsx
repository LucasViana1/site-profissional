import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { ThemeToggleButton } from "./ThemeToggleButton";

describe("ThemeToggleButton", () => {
  it("should switch between light and dark on each click", async () => {
    render(
      <ThemeProvider>
        <ThemeToggleButton label="tema" />
      </ThemeProvider>,
    );
    const button = screen.getByRole("button", { name: "tema" });

    await userEvent.click(button);
    expect(document.documentElement).toHaveAttribute("data-theme", "dark");

    await userEvent.click(button);
    expect(document.documentElement).toHaveAttribute("data-theme", "light");
  });
});
