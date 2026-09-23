import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { LangSwitch } from "./LangSwitch";

describe("LangSwitch", () => {
  it("should mark the current locale as the current page", () => {
    render(<LangSwitch legend="idioma" current="pt" />);

    expect(screen.getByRole("link", { name: "PT" })).toHaveAttribute("aria-current", "page");
    expect(screen.getByRole("link", { name: "EN" })).not.toHaveAttribute("aria-current");
  });

  it("should link each locale to its own route", () => {
    render(<LangSwitch legend="idioma" current="en" />);

    expect(screen.getByRole("link", { name: "PT" })).toHaveAttribute("href", "/");
    expect(screen.getByRole("link", { name: "EN" })).toHaveAttribute("href", "/en");
  });
});
