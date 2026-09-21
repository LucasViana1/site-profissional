@AGENTS.md

# Portfólio — lucasvianacunha.com.br

One-page estático (Next 16, `output: 'export'`), PT em `/` e EN em `/en`, tema light/dark.
Plano, tokens e fases: `docs/PLANO.md`. Wireframe: projeto Claude Design (ver plano).

## Convenções

- Tokens de cor/fonte só em `src/app/globals.css`; nos componentes use as classes derivadas
  (`bg-surface`, `text-primary`, `text-accent`, `font-mono`…). Nunca hex solto.
- Textos e dados ficam em `src/content/` (tipados, por idioma); componentes não têm texto fixo.
- Clean code e SOLID com sutileza: componentes pequenos e coesos, sem abstração prematura.
- Nada que exija servidor (redirects, proxy, server actions, `next/image` com loader padrão).

## Skills do projeto

Commits: skill `commit`. Testes: skill `testing`. Consulte-as antes de commitar ou de dar uma feature por pronta.

## Verificação

`pnpm lint && pnpm typecheck && pnpm build && pnpm test:e2e` — o e2e testa `out/`, então o build
vem antes. `typecheck` roda `next typegen` primeiro (o `LayoutProps` global depende disso).
