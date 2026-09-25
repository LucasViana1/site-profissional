const CAREER_START_YEAR = 2019;
const MAGALU_START_YEAR = 2022;

export function yearsSince(startYear: number): number {
  return new Date().getFullYear() - startYear;
}

export const YEARS_IN_FIELD = yearsSince(CAREER_START_YEAR);
export const YEARS_AT_MAGALU = yearsSince(MAGALU_START_YEAR);
