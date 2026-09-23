import { beforeEach } from "vitest";
import "@testing-library/jest-dom/vitest";

// jsdom não implementa IntersectionObserver, usado pelo scroll-spy.
class IntersectionObserverStub implements IntersectionObserver {
  readonly root = null;
  readonly rootMargin = "";
  readonly thresholds: ReadonlyArray<number> = [];
  observe() {}
  unobserve() {}
  disconnect() {}
  takeRecords(): IntersectionObserverEntry[] {
    return [];
  }
}

globalThis.IntersectionObserver = IntersectionObserverStub;

// jsdom também não implementa matchMedia, usado pelo next-themes.
globalThis.matchMedia ??= ((query: string) => ({
  matches: false,
  media: query,
  onchange: null,
  addEventListener: () => {},
  removeEventListener: () => {},
  addListener: () => {},
  removeListener: () => {},
  dispatchEvent: () => false,
})) as typeof globalThis.matchMedia;

// O next-themes persiste a escolha em localStorage e marca o <html>; sem limpar,
// um teste herdaria o tema escolhido pelo anterior.
beforeEach(() => {
  localStorage.clear();
  document.documentElement.removeAttribute("data-theme");
  document.documentElement.style.colorScheme = "";
});
