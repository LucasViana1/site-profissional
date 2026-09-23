# lucasvianacunha.com.br

Portfólio one-page de Lucas Viana, frontend engineer focado em checkout & e-commerce.
Site estático, bilíngue (PT em `/`, EN em `/en`), com tema light/dark.

## Stack

- Next.js (App Router) com `output: 'export'` — gera HTML estático em `out/`
- TypeScript, Tailwind v4 com design tokens em `src/app/globals.css`
- Inter + JetBrains Mono via `next/font`
- `next-themes` para o tema, Vercel Web Analytics + Speed Insights
- Vitest + Testing Library nos unitários, Playwright nos end-to-end
- GitHub Actions para CI, deploy na Vercel

## Rodando

Requer Node 24.12.0 (`nvm use` lê o `.nvmrc`) e pnpm (`corepack enable pnpm`).

```bash
pnpm install
pnpm dev          # http://localhost:3000
```

## Qualidade

```bash
pnpm lint
pnpm typecheck
pnpm format       # ou format:check
pnpm test:unit    # Vitest (componentes e conteúdo)
pnpm build        # gera out/
pnpm test:e2e     # testa o build estático (precisa do build antes)
```

Na primeira vez, instale o navegador do Playwright: `pnpm exec playwright install chromium`.

## Estrutura

```
src/app/(pt)/     rota PT em /        (root layout próprio)
src/app/(en)/en/  rota EN em /en      (root layout próprio)
src/app/globals.css  design tokens
src/components/   layout (rail, topbar, drawer), controles, seções, ui
src/content/      textos e dados por idioma (sem CMS)
src/hooks/        hooks customizados (scroll-spy, controles de tema)
src/utils/        helpers sem estado (i18n)
e2e/              testes Playwright
docs/PLANO.md     planejamento, tokens e fases
```
