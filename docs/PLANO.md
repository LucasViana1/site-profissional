# Plano — Portfólio one-page (lucasvianacunha.com.br)

Fonte de design: projeto Claude Design "Portfólio Frontend Engineer One-Page"
(`25a64a2b-2aab-4c41-98e1-713965b635fa`, arquivo `Portfolio Wireframes.dc.html`).
Frames de referência: **1b** (desktop, rail lateral) e **2b** (mobile, topbar + drawer).

## 1. Objetivo

Site estático, one-page, bilíngue (PT/EN), com tema light/dark, apresentando Lucas Viana
como frontend engineer focado em checkout & e-commerce, com serviços, projetos, stack,
escrita e contato. Sem backend: tudo gerado em build.

## 2. Decisões técnicas

| Tema          | Decisão                                                                                       | Motivo                                                                   |
| ------------- | --------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
| Framework     | Next.js (App Router) com `output: 'export'`                                                   | Requisito; gera HTML estático                                            |
| Linguagem     | TypeScript estrito                                                                            | Conteúdo tipado, menos erro em i18n                                      |
| Estilo        | Tailwind v4 + tokens CSS (`@theme`)                                                           | Tokens do wireframe viram variáveis; consistente com a stack exibida     |
| Código        | Clean code e SOLID com sutileza                                                               | Componentes pequenos e coesos, sem abstração prematura                   |
| Fontes        | `next/font/google` — Inter (400–800) + JetBrains Mono (400/500/700)                           | Self-hosted em build, sem FOUT, funciona no export                       |
| Tema          | `next-themes` (atributo `class`/`data-theme`, script anti-flash)                              | Padrão de mercado, respeita `prefers-color-scheme`                       |
| i18n          | Rotas estáticas: `/` = PT (padrão), `/en` = EN. Conteúdo em `content/pt.ts` e `content/en.ts` | SEO indexa as duas línguas; sem biblioteca de i18n; toggle é um `<Link>` |
| Imagens       | `images.unoptimized: true` + assets em `public/`, ou `<img>` direto                           | `next/image` otimizado não funciona no export sem loader                 |
| Conteúdo      | Arquivos TS tipados (sem CMS)                                                                 | Um só autor; PR no GitHub é o "CMS"                                      |
| Scroll-spy    | `IntersectionObserver` em client component                                                    | Item ativo no rail/drawer                                                |
| Drawer mobile | Componente próprio (`<dialog>` nativo), fecha em Esc / ao navegar                             | Sem dependência extra; a11y aceitável                                    |
| Contato       | `mailto:` + link LinkedIn                                                                     | Estático não tem formulário sem serviço externo (fase 2 se quiser)       |
| Testes        | Playwright: smoke (render PT/EN, toggle tema, drawer, âncoras) + axe a11y                     | Está na stack exibida; barato de manter                                  |
| Qualidade     | ESLint + Prettier + typecheck em CI (GitHub Actions)                                          |                                                                          |
| Deploy        | Vercel — output estático; domínio lucasvianacunha.com.br                                      | Decidido                                                                 |
| Analytics     | Vercel Web Analytics + Speed Insights                                                         | Sem cookies (sem banner LGPD), zero config, Web Vitals reais             |
| Pacotes       | pnpm                                                                                          |                                                                          |

## 3. Design tokens (extraídos do wireframe)

```
light: bg #FAFAFA · surface #FFFFFF · border #E4E4E7
       tp #18181B · ts #52525B · tm #A1A1AA
       accent #2563EB · soft #DBEAFE · softtx #1D4ED8
       dash #D4D4D8 · tile1 #F4F4F5 · tile2 #EBEBEE · tiletx #71717A
dark:  bg #0E1116 · surface #161B22 · border #2A313C
       tp #E6EDF3 · ts #9BA6B2 · tm #75818F
       accent #4C8DFF · soft #1B2A45 · softtx #8FB8FF
       dash #2A313C · tile1 #161B22 · tile2 #1C222B · tiletx #75818F
```

- Fontes: Inter (texto/títulos), JetBrains Mono (labels de seção, tags, metadados).
- Raios: 8px botões/cards de stack, 10px cards de serviço/projeto, 4–5px pills, 6px toggles do topbar.
- Labels de seção: mono 10px, uppercase, `letter-spacing .14em`, cor `tm`.
- Hero: nome 62px/800 `letter-spacing -.035em` (desktop) / 40px (mobile).
- Espaçamento de seção desktop: `padding 44px 56px 56px`, `border-top 1px border`. Mobile: `32px 18px`.
- Seções com fundo `surface`: serviços e contato. Demais: `bg`.

## 4. Layout

**Desktop (≥ 1024px)** — grid `232px minmax(0,1fr)`:

- Rail sticky (fundo `surface`, `border-right`): avatar 64px → domínio (mono) → nav
  (sobre, experiência, serviços, projetos, stack, escrita, contato; item ativo tem traço
  accent 16px, inativos traço `dash` 8px) → rodapé do rail: toggle idioma (pills PT/EN),
  toggle tema (pills light/dark), email + github/linkedin.
- Conteúdo: seções empilhadas.

**Mobile (< 1024px)**:

- Topbar sticky (`surface`, `border-bottom`): avatar 26px + nome/role · toggle idioma
  (label PT/EN) · toggle tema (glifo ◐/☾) · hamburger.
- Drawer: domínio + ×, links 22px/600, seletor de idioma, seletor de tema, email/links.
- Tudo em coluna única; CTAs full-width empilhados.

Breakpoint intermediário (tablet): mesmo layout mobile até 1024px; grids internos
(serviços, projetos, stack) podem ir a 2 colunas a partir de 640px.

## 5. Seções (ordem e conteúdo)

1. **Hero** — status "● aberto a novos projetos" (mono uppercase) · nome · tagline mono
   accent "frontend engineer · checkout & e-commerce" · parágrafo (max 520px) ·
   CTAs "Ver projetos" (primário → #projetos) e "Falar comigo" (secundário → #contato).
2. **Sobre** — texto em 2 colunas (desktop) / 1 (mobile).
3. **Experiência** — parágrafo-resumo + link "Currículo completo ↗" (PDF em `public/`).
4. **Serviços** (fundo surface) — label + "freelance · contrato · consultoria" · frase
   de abordagem · 3 cards numerados (01 Checkout & pagamentos · 02 Performance &
   conversão · 03 Features com IA), cada um com descrição e tags · CTA "Pedir orçamento"
   - "disponibilidade atual: NNh/semana".
5. **Projetos** — label + "todos no GitHub ↗" · grid 2× (desktop): 2 destaques com
   screenshot 16:9, título, "problema → solução", descrição, tags, links (Case/Repo/Demo)
   - 2 secundários só texto.
6. **Stack** — grid 2×2 de cards: Frontend · Backend & dados · IA · Infra & testes,
   cada um com chips.
7. **Estudos & escrita** — lista: data (mono) | título | "ler ↗". Links externos.
8. **Contato** (fundo surface) — "Vamos conversar sobre seu projeto" · "retorno em até
   24h úteis" · CTAs "Enviar email" (mailto) e "LinkedIn ↗".
9. **Footer** — "© {ano} · lucas viana".

## 6. Estrutura de pastas

```
app/
  layout.tsx            html/body, fontes, ThemeProvider, metadata base
  page.tsx              PT  → <Portfolio locale="pt" />
  en/page.tsx           EN  → <Portfolio locale="en" />
  globals.css           @theme tokens, dark override, reset
  sitemap.ts · robots.ts · opengraph-image.tsx (ou PNG estático)
components/
  Portfolio.tsx         monta rail/topbar + seções a partir do conteúdo
  layout/  Rail · TopBar · Drawer · NavList
  controls/ ThemeToggle · LangToggle
  sections/ Hero · About · Experience · Services · Projects · Stack · Writing · Contact · Footer
  ui/      Button · Card · Pill/Tag · Chip · SectionLabel · Section · ExternalLink
content/
  types.ts              tipos de todo o conteúdo
  pt.ts · en.ts         textos por idioma
  projects.ts · stack.ts · writing.ts   dados compartilhados (campos de texto localizados)
lib/
  i18n.ts               locale, alternates, helpers
  use-scroll-spy.ts
public/
  avatar.jpg · cv-pt.pdf · cv-en.pdf · projects/*.png · og.png
e2e/
  smoke.spec.ts · a11y.spec.ts
docs/
  PLANO.md
```

## 7. Fases

**Fase 0 — Setup — concluída em 2026-09-21**

- Next 16.3 (App Router, `src/`), TS, Tailwind v4, pnpm, `output: 'export'`, `images.unoptimized`.
- Tokens em `globals.css` (`@theme inline` + `data-theme` dark), Inter/JetBrains Mono via
  `next/font`, `next-themes`, Vercel Analytics + Speed Insights, Prettier, Playwright
  (smoke desktop/mobile contra `out/`), CI (lint, format, typecheck, build, e2e), README.
- `typecheck` roda `next typegen` antes do `tsc` (o helper global `LayoutProps` vem daí).

**Fase 1 — Shell — concluída em 2026-09-22**

- `Portfolio` + `SiteShell` com Rail (desktop), TopBar + `<dialog>` drawer (mobile),
  scroll-spy por `IntersectionObserver`, toggles de tema e idioma, Hero real e as 7
  seções como esqueleto.
- Rotas `/` e `/en` via route groups `app/(pt)/` e `app/(en)/en/`, cada uma com root
  layout próprio sobre um `RootDocument({ locale })` — o `lang` do `<html>` precisa ser
  estático porque o export não tem redirect/proxy.
- Âncoras canônicas em inglês (`#projects`) para valerem nos dois idiomas; rótulos vêm
  do conteúdo. Conteúdo tipado em `src/content/` (`pt.ts`/`en.ts`).
- Estrutura e nomenclatura (pastas `hooks/` e `utils/`, componentes em PascalCase,
  um componente por arquivo) estão registradas no `CLAUDE.md`.
- Vitest + Testing Library configurados; 15 unitários e 9 specs e2e (desktop + mobile).

**Fase 2 — Seções — concluída em 2026-09-23**

- Sobre, Experiência, Serviços, Projetos, Stack, Escrita e Contato montadas sobre os primitivos
  `ui/` (`Card`, `Tag`, `ActionLink`, `ArrowLink`, `Section`), com texto placeholder tipado em
  `src/content/`.
- `Section` passou a usar `<h2>` com `aria-labelledby` no lugar de `aria-label`.
- Contraste: `--text-muted` foi de `#a1a1aa`/`#75818f` para `#71717a`/`#7d8998`. Os valores do
  wireframe reprovavam no WCAG AA (2,45:1 no claro, 4,36:1 no escuro) nos rótulos de seção,
  datas e links do rail.
- `@axe-core/playwright` com `e2e/a11y.spec.ts` cobrindo `/` e `/en` em claro e escuro.
- Conteúdo opcional por flag no `.env`: `NEXT_PUBLIC_SHOW_PROJECTS` e
  `NEXT_PUBLIC_SHOW_WRITING` escondem a seção inteira (página e navegação);
  `NEXT_PUBLIC_SHOW_AI_STACK` esconde só o bloco de IA dentro da stack.
- Sem projetos publicados, o CTA "Ver projetos" some do hero e "Falar comigo" vira o primário.
- A label "disponibilidade atual" saiu dos serviços.

**Fase 3 — Conteúdo real (depende do Lucas)**

- Textos PT/EN, screenshots dos projetos, CV PDF, links de artigos, horas de
  disponibilidade, email/LinkedIn/GitHub.

**Fase 4 — Qualidade e SEO — concluída em 2026-09-24**

- `buildMetadata(locale)` em `src/utils/metadata.ts`: `metadataBase`, canonical, `hreflang`
  para PT e EN, Open Graph e Twitter card.
- `sitemap.ts` e `robots.ts`; OG image gerada no build por idioma
  (`opengraph-image.tsx` + `src/utils/openGraphImage.tsx`), com `dynamic = "force-static"`,
  exigido pelo export.
- JSON-LD `Person` no `RootDocument`; skip link para `#main`; anel de foco visível no
  `globals.css`.
- Título alinhado em "software engineer" (`meta.title` e `profile.role`) e descrição refeita
  para o posicionamento atual.
- `e2e/seo.spec.ts` e `e2e/visual.spec.ts` (8 snapshots). Porta do Playwright movida para 4173:
  na 3000 ele reaproveitava um `next dev` e testava o dev server em vez do `out/`.
- Lighthouse no build estático: 98/100/96/100 no mobile e 100/100/96/100 no desktop. As boas
  práticas param em 96 por causa dos 404 dos scripts da Vercel, que só existem em produção.
- O axe roda com as tags do WCAG 2.2. Sem elas, `target-size` ficava de fora e links de 16px de
  altura no rail passavam despercebidos — o problema só aparece no desktop, porque no mobile o
  rail não existe.

**Fase 5 — Deploy — concluída em 2026-09-25**

- No ar em `https://lucasvianacunha.com.br`, servido pela Vercel na região `gru1`, pela
  integração com o GitHub (push na `main` publica; cada PR ganha preview).
- Check de 2026-09-25: apex, `www`, `/en`, `/sitemap.xml`, `/robots.txt` e a OG image
  respondem 200; canonical e `hreflang` apontam para o domínio final; HSTS ativo
  (`max-age=63072000`); `x-vercel-cache: HIT`; o script do Vercel Analytics responde.
- As três flags de conteúdo opcional estão `false` em produção por opção — projetos,
  escrita e o bloco de IA ficam ocultos até haver o que mostrar.

## 8. Implementações adicionais

Pendências para priorizar com calma. Nenhuma bloqueia o site, que já está no ar.

### Conteúdo

- [ ] **Seção de projetos** — ligar `NEXT_PUBLIC_SHOW_PROJECTS`. Precisa de projetos reais e
      screenshots 16:9; sem imagem o card cai no padrão listrado do wireframe. Junto disso,
      decidir se "Case ↗" é link externo ou página interna.
- [ ] **Bloco de IA na stack** — ligar `NEXT_PUBLIC_SHOW_AI_STACK`. O que sustentar em cada
      termo está em `docs/notas/ia-llm-agents-rag.md`.
- [ ] **Revisar gramática e concordância do texto em inglês.**
- [ ] **Foto própria** no lugar do avatar do GitHub, que é placeholder e tem só 288×288 (é o
      máximo que o GitHub entrega).
- [ ] **Seção de escrita** — ligar `NEXT_PUBLIC_SHOW_WRITING` quando houver artigo publicado.

### Design

- [ ] **Revisar o design system e os ícones dos links.**
- [ ] **Chips da stack em `text-primary`** no lugar de `text-secondary`: nome de tecnologia é
      substantivo próprio e merece mais contraste.

### SEO e técnico

- [ ] **`www` não redireciona** — responde 200 e serve o mesmo conteúdo do apex. O canonical
      mitiga, mas o certo é um 301 configurado na Vercel.
- [ ] **URL do currículo carrega `ouid`**, que é o identificador da conta Google. Usar só o id
      do documento.
- [ ] **`apple-icon.png` 180×180** para a tela de início do iOS; sem ele o iPhone usa um print
      da página.
- [ ] **Tipografia da OG image** usa a fonte padrão do gerador, então o peso bold não aplica.
      Embutir o arquivo da Inter resolve, ao custo de ~300 KB no repositório.
- [ ] **Confirmar o Speed Insights** no dashboard — o script não aparece no HTML em produção.
- [ ] **Rebuild na virada do ano** — os anos de experiência vêm de `src/utils/career.ts` e são
      calculados no build; sem deploy, o número congela.
- [ ] **Atualizar as seções 1 a 6 deste plano**, que ainda descrevem o wireframe original
      (selo de disponibilidade, cards de checkout/performance/IA, "retorno em 24h úteis").

### Futuro

- [ ] Páginas de case (`/projetos/[slug]`) em MDX.
- [ ] Blog próprio em MDX.
- [ ] Formulário de contato via serviço externo (Formspree, Resend).
- [ ] Analytics alternativo (Umami) se quiser ser dono dos dados.

## 9. Pontos em aberto

- [x] Hospedagem: Vercel (domínio lucasvianacunha.com.br)
- [ ] "Case ↗" dos projetos: link externo ou página interna (fase 6)? — decidir na fase 3
- [x] Artigos: links externos
- [x] Rota do EN: `/en`
- [x] Analytics: Vercel Web Analytics + Speed Insights (sem cookies, sem banner)
