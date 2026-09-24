---
name: testing
description: Como escrever e rodar testes neste site (Vitest + Testing Library colocados ao lado do componente, Playwright E2E contra o build estático, axe para acessibilidade e screenshots para regressão visual). Use sempre que criar ou alterar componente, seção, hook, conteúdo ou configuração de teste; quando o desenvolvedor disser "testa", "adiciona teste", "cobre isso", "roda os testes", "o teste quebrou", "atualiza os snapshots"; e ao implementar qualquer feature — o teste vai no mesmo commit, então consulte antes de dar a feature por concluída.
---

# Testes

## Princípio

Teste vai junto com a feature, no mesmo commit. Uma seção ou componente "pronto" sem o teste
correspondente não está pronto. Mas teste é custo de manutenção: cada um precisa proteger um
comportamento que alguém realmente quebraria. Não escreva teste para provar que o React renderiza.

## As quatro camadas e o que cabe em cada uma

| Camada         | Ferramenta                       | Protege                                                                                                                     | Onde                                        |
| -------------- | -------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| Unitário       | Vitest + Testing Library (jsdom) | Lógica e interação isoladas: toggles, drawer, item ativo da nav, hook de scroll-spy, helpers de i18n, validação do conteúdo | `*.test.ts(x)` ao lado do arquivo testado   |
| E2E            | Playwright contra `out/`         | Jornadas reais: âncoras da nav, troca de tema persistindo, `/` ↔ `/en`, drawer no mobile, links externos, CTAs              | `e2e/*.spec.ts`                             |
| Acessibilidade | `@axe-core/playwright` no E2E    | Zero violações WCAG 2.1 AA em `/` e `/en`, light e dark                                                                     | `e2e/a11y.spec.ts`                          |
| Visual         | `toHaveScreenshot` no Playwright | Layout das páginas inteiras: `/` e `/en` × desktop/mobile × light/dark                                                      | `e2e/visual.spec.ts` + snapshots commitados |

Como decidir onde um teste vai:

- Tem estado ou evento (clique, tecla, scroll, `localStorage`)? → **unitário**, e se atravessa
  páginas ou depende do build estático, **também E2E**.
- É puramente visual (uma seção que só exibe conteúdo)? → **não ganha unitário**. O snapshot
  visual e o axe já cobrem. Testar "renderiza o título" ali é ruído.
- É conteúdo (`src/content/`)? → unitário de forma: PT e EN têm as mesmas chaves, links são
  URLs válidas, listas não estão vazias. Isso pega o erro mais provável: esquecer o EN.
- Mudou layout de propósito? → atualize os snapshots e diga isso no commit.

## Escrevendo

- Títulos de teste em inglês, no padrão `should <comportamento esperado>`, descrevendo o que o
  usuário observa, não a implementação: `"should close the drawer when a section is selected"`,
  não `"should call onClose"`. Agrupe com `describe("<Componente ou fluxo>")` para que o
  relatório leia como uma frase: `Drawer › should close on Escape`.
- Testing Library: consulte por papel/texto (`getByRole`, `getByText`), não por classe ou
  `data-testid`. Se precisar de `testid`, provavelmente falta semântica no componente.
- Playwright: use asserções web-first (`expect(locator).toBeVisible()`), nunca `waitForTimeout`.
  Os projetos `desktop` e `mobile` já rodam cada spec nos dois viewports — escreva pensando nisso
  e use `test.skip(({ isMobile }) => ...)` quando um fluxo só existe em um deles.
- Tema/idioma no E2E: `page.emulateMedia({ colorScheme })` para preferência do sistema;
  para o toggle, clique de verdade e verifique `data-theme` no `<html>`.
- Screenshots: `fullPage: true`, `animations: "disabled"`, e `mask` em qualquer elemento que
  varie entre runs. Snapshots são gerados em Linux (mesmo SO do CI) — não gere no macOS/Windows.
- Componente com `"use client"` que usa `next-themes` ou `next/navigation`: no unitário, envolva
  com o provider ou faça mock do módulo — não altere o componente para facilitar o teste.

## Rodando

```bash
pnpm test:unit                       # Vitest, rápido, rode nos arquivos que tocou
pnpm build && pnpm test:e2e          # E2E + a11y + visual contra out/ (o build vem antes)
pnpm test:e2e --project=desktop      # só um viewport
pnpm test:e2e e2e/visual.spec.ts --update-snapshots   # só quando a mudança visual é intencional
```

Antes de commitar o gate é leve (`pnpm lint && pnpm typecheck`); E2E, a11y e visual rodam no
CI. Mas o teste que você acabou de escrever precisa passar localmente — rode-o.

## Quando um teste quebra

Descubra se o teste está errado ou o código. Um snapshot diferente depois de um ajuste de CSS
pedido pelo desenvolvedor é o teste fazendo o trabalho dele: atualize. Um snapshot diferente sem mudança
intencional é bug. Nunca aumente `maxDiffPixels` ou apague um teste para "fazer passar".

## Setup pendente

Unitário (Vitest), e2e (Playwright) e acessibilidade (`e2e/a11y.spec.ts`) já estão montados e
rodando no CI. Falta só a camada visual, que fica para depois do conteúdo real, senão todo
ajuste de texto invalida as imagens:

- `e2e/visual.spec.ts` com os 8 snapshots iniciais (`/` e `/en` × desktop/mobile × light/dark).
