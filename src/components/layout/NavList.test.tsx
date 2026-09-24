import { describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { getContent } from "@/content";
import { VISIBLE_SECTION_IDS } from "@/utils/sections";
import { NavList } from "./NavList";

const labels = getContent("pt").sections;

describe("NavList", () => {
  it("should render one anchor per section, in order", () => {
    render(<NavList labels={labels} activeId={null} variant="rail" />);

    const links = screen.getAllByRole("link");
    expect(links.map((link) => link.getAttribute("href"))).toEqual(
      VISIBLE_SECTION_IDS.map((id) => `#${id}`),
    );
  });

  it("should mark only the active section as current", () => {
    render(<NavList labels={labels} activeId="stack" variant="rail" />);

    expect(screen.getByRole("link", { name: labels.stack })).toHaveAttribute(
      "aria-current",
      "true",
    );
    expect(screen.getByRole("link", { name: labels.about })).not.toHaveAttribute("aria-current");
  });

  it("should notify the caller when an item is selected", async () => {
    const onNavigate = vi.fn();
    render(<NavList labels={labels} activeId={null} variant="drawer" onNavigate={onNavigate} />);

    await userEvent.click(screen.getByRole("link", { name: labels.contact }));

    expect(onNavigate).toHaveBeenCalledOnce();
  });
});
