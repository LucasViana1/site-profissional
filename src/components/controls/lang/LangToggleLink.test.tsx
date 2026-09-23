import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { LangToggleLink } from "./LangToggleLink";

describe("LangToggleLink", () => {
  it("should point to the other locale", () => {
    render(<LangToggleLink current="pt" label="idioma" />);

    const link = screen.getByRole("link", { name: /EN/ });
    expect(link).toHaveAttribute("href", "/en");
    expect(link).toHaveTextContent("EN");
  });

  it("should point back to portuguese from the english page", () => {
    render(<LangToggleLink current="en" label="language" />);

    expect(screen.getByRole("link", { name: /PT/ })).toHaveAttribute("href", "/");
  });
});
