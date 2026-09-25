import { afterEach, describe, expect, it, vi } from "vitest";
import { YEARS_AT_MAGALU, YEARS_IN_FIELD, yearsSince } from "./career";

afterEach(() => vi.useRealTimers());

function on(year: number, month: number, day: number) {
  vi.useFakeTimers();
  vi.setSystemTime(new Date(year, month - 1, day));
}

describe("yearsSince", () => {
  it("should count the whole years between the start and today", () => {
    on(2026, 6, 1);

    expect(yearsSince(2019)).toBe(7);
    expect(yearsSince(2022)).toBe(4);
  });

  it("should grow by one when the year turns", () => {
    on(2026, 12, 31);
    const before = yearsSince(2019);

    on(2027, 1, 1);

    expect(yearsSince(2019)).toBe(before + 1);
  });
});

describe("career milestones", () => {
  it("should keep the career longer than the current role", () => {
    expect(YEARS_IN_FIELD).toBeGreaterThan(YEARS_AT_MAGALU);
  });

  it("should report a plausible amount of experience", () => {
    expect(YEARS_AT_MAGALU).toBeGreaterThan(0);
    expect(YEARS_IN_FIELD).toBeLessThan(60);
  });
});
