@AGENTS.md

# Portfólio — lucasvianacunha.com.br

One-page estático (Next 16, `output: 'export'`), PT em `/` e EN em `/en`, tema light/dark.
Plano, tokens e fases: `docs/PLANO.md`. Wireframe: projeto Claude Design (ver plano).

## Convenções

- Tokens de cor/fonte só em `src/app/globals.css`; nos componentes use as classes derivadas
  (`bg-surface`, `text-primary`, `text-accent`, `font-mono`…). Nunca hex solto.
- Textos e dados ficam em `src/content/` (tipados, por idioma); componentes não têm texto fixo.
- Clean code e SOLID com sutileza; nomes no lugar de comentários (skill `code-style`).
- Nada que exija servidor (redirects, proxy, server actions, `next/image` com loader padrão).

## Estrutura e nomes

- `src/app/` rotas · `src/components/` UI · `src/hooks/` hooks customizados ·
  `src/utils/` helpers sem estado (i18n) · `src/content/` textos e dados por idioma.
- O arquivo tem o nome do que exporta: componente em PascalCase (`ContactLinks.tsx`),
  hook com o próprio nome (`useScrollSpy.ts`).
- Um componente exportado por arquivo. Quando vários componentes formam um mesmo escopo,
  o escopo vira pasta em minúsculo com um arquivo por componente
  (`controls/theme/ThemeSwitch.tsx`, `controls/theme/ThemeToggleButton.tsx`).
- Subcomponentes usados só naquele arquivo (ícones, item de lista) ficam nele, sem export.
- Módulo que não é componente nem hook fica em minúsculo (`i18n.ts`, `types.ts`).
- Teste ao lado do arquivo testado, com o mesmo nome (`NavList.test.tsx`).

## Skills do projeto

Código: skill `code-style`. Commits: skill `commit`. Testes: skill `testing`.
Consulte `code-style` antes de escrever código, e as outras antes de commitar ou de dar
uma feature por pronta.

## Verificação

`pnpm lint && pnpm typecheck && pnpm build && pnpm test:e2e` — o e2e testa `out/`, então o build
vem antes. `typecheck` roda `next typegen` primeiro (o `LayoutProps` global depende disso).
