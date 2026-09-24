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
pnpm test:e2e e2e/visual.spec.ts --update-snapshots   # só quando o layout muda de propósito
```

Na primeira vez, instale o navegador do Playwright: `pnpm exec playwright install chromium`.

## Seções opcionais

Copie `.env.example` para `.env` (o `.env` não é versionado) e ajuste as flags:

| Variável                    | Controla                                    |
| --------------------------- | ------------------------------------------- |
| `NEXT_PUBLIC_SHOW_PROJECTS` | Seção de projetos, na página e na navegação |
| `NEXT_PUBLIC_SHOW_WRITING`  | Seção de escrita, na página e na navegação  |
| `NEXT_PUBLIC_SHOW_AI_STACK` | Bloco de IA dentro da seção de stack        |

Só `true` liga; variável ausente mantém o conteúdo oculto. O valor é lido no `pnpm build`,
então mudanças exigem novo build. Em produção, defina as variáveis nas configurações do projeto
na Vercel — o `.env` local não chega lá.

## Deploy

O deploy acontece pela integração da Vercel com o GitHub: um push na `main` vai para produção
e cada pull request ganha um preview. É o caminho recomendado, porque o CI roda antes e o que
está no ar corresponde ao que está versionado.

Os scripts abaixo existem para um deploy manual pontual, fora desse fluxo:

```bash
pnpm deploy:preview   # sobe um preview
pnpm deploy:prod      # sobe direto para produção
```

Eles enviam a pasta local, não o que está commitado, e não passam pelo CI. Use com cuidado.
O login do CLI é pedido na primeira vez e fica guardado fora do repositório.

## Estrutura

```
src/app/(pt)/     rota PT em /        (root layout próprio)
src/app/(en)/en/  rota EN em /en      (root layout próprio)
src/app/globals.css  design tokens
src/components/   layout (rail, topbar, drawer), controles, seções, ui
src/content/      textos e dados por idioma (sem CMS)
src/hooks/        hooks customizados (scroll-spy, controles de tema)
src/utils/        helpers sem estado (i18n, seções, cn)
e2e/              testes Playwright
docs/PLANO.md     planejamento, tokens e fases
docs/notas/       notas pessoais (fora do versionamento)
```
