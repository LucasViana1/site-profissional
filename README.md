# lucasvianacunha.com.br

Portfólio one-page de Lucas Viana, frontend engineer focado em checkout & e-commerce.
Site estático, bilíngue (PT em `/`, EN em `/en`), com tema light/dark.

## Stack

- Next.js (App Router) com `output: 'export'` — gera HTML estático em `out/`
- TypeScript, Tailwind v4 com design tokens em `src/app/globals.css`
- Inter + JetBrains Mono via `next/font`
- `next-themes` para o tema, Vercel Web Analytics + Speed Insights
- Playwright para testes end-to-end, GitHub Actions para CI, deploy na Vercel

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
pnpm build        # gera out/
pnpm test:e2e     # testa o build estático (precisa do build antes)
```

Na primeira vez, instale o navegador do Playwright: `pnpm exec playwright install chromium`.

## Estrutura

```
src/app/          rotas, layout raiz, globals.css (tokens)
src/components/   componentes de UI, layout e seções
src/content/      textos e dados por idioma (sem CMS)
e2e/              testes Playwright
docs/PLANO.md     planejamento, tokens e fases
```
