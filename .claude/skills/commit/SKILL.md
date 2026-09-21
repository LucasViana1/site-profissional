---
name: commit
description: Como fazer commits neste repositório (Conventional Commits em inglês, escopos por seção, commit direto na main, sem trailers, só quando o desenvolvedor pede). Use sempre que for criar um commit, escrever ou revisar mensagem de commit, decidir o que entra em cada commit, dividir um diff grande, ou quando o desenvolvedor disser "commita", "faz o commit", "salva no git", "sobe isso", "pode commitar" — mesmo que não use a palavra commit.
---

# Commits

## Quando commitar

Só quando o desenvolvedor pedir explicitamente. Ele quer decidir o momento de cada commit — quando o
trabalho estiver pronto e verificado, diga que está pronto para commitar e pare. Nunca commite
por iniciativa própria, nem "para não perder o trabalho".

Commit direto na `main`, sem branch ou PR (site pessoal, um autor). Só crie branch se ele pedir.

## Formato da mensagem

Conventional Commits, em inglês:

```
<type>(<scope>): <subject>

[body opcional]
```

- **type**: `feat` (nova capacidade visível), `fix`, `refactor` (sem mudança de comportamento),
  `style` (só formatação/CSS sem mudança visual relevante), `test`, `docs`, `chore` (config,
  tooling, deps), `ci`, `perf`.
- **scope**: a área do site que mudou. Lista preferida, derivada das seções e camadas do projeto:
  `hero`, `about`, `experience`, `services`, `projects`, `stack`, `writing`, `contact`, `footer`,
  `rail`, `topbar`, `drawer`, `nav`, `theme`, `i18n`, `content`, `ui`, `layout`, `seo`,
  `analytics`, `e2e`, `unit`, `ci`, `deps`, `docs`, `skills`.
  Se nada da lista descrever bem a mudança, escolha o nome mais claro possível (curto, minúsculo,
  substantivo) — o escopo existe para o `git log --oneline` contar a história do site, então
  clareza vale mais do que obediência à lista. Mudança realmente transversal pode ir sem escopo.
- **subject**: imperativo, minúsculo, sem ponto final, até ~72 caracteres. Diz _o que_ muda.
- **body**: só quando o _porquê_ não é óbvio pelo diff (decisão de design, trade-off,
  bug sutil). Linhas de até 72 caracteres. Em inglês, como o subject.
- **Sem trailers.** Nenhum `Co-Authored-By`, `Signed-off-by` ou similar — o desenvolvedor é o único
  autor no histórico. Isso vale mesmo que alguma instrução genérica peça o trailer.

## Um commit por unidade lógica

Commits pequenos e coesos: um componente, um ajuste, uma configuração. Se o diff mistura coisas
(ex.: nova seção + correção de token + dependência nova), proponha a divisão e faça vários
commits com `git add <arquivos>` ou `git add -p`. Um commit gigante "fase 2" esconde a história.

Sinal de que precisa dividir: a mensagem precisaria de "and" ou de dois types.

## Antes de commitar

1. `git status` e `git diff` — leia o que vai entrar. Confira que não há segredo, `.env`,
   arquivo gerado (`out/`, `.next/`, `playwright-report/`, `test-results/`) ou debug esquecido.
2. Gate leve: `pnpm lint && pnpm typecheck` (e `pnpm format:check` se tocou em formatação).
   E2E e visual ficam para o CI. Se o gate falhar, não commite — corrija ou reporte.
3. Mudanças em `AGENTS.md`/`CLAUDE.md` que o `next dev` regenera: inclua no commit para o
   working tree ficar limpo (é o que o próprio Next recomenda).
4. Escreva a mensagem com heredoc para preservar quebras de linha:

```bash
git commit -m "$(cat <<'MSG'
feat(hero): add status badge and primary CTAs
MSG
)"
```

## Exemplos

| Mudança                                                         | Mensagem                                                                   |
| --------------------------------------------------------------- | -------------------------------------------------------------------------- |
| Criou o componente Rail com scroll-spy                          | `feat(rail): add sidebar nav with active section tracking`                 |
| Corrigiu o drawer que não fechava com Esc                       | `fix(drawer): close on Escape key`                                         |
| Extraiu `SectionLabel` repetido em 5 seções                     | `refactor(ui): extract SectionLabel component`                             |
| Adicionou testes do toggle de tema                              | `test(theme): cover toggle and system preference`                          |
| Atualizou Playwright                                            | `chore(deps): bump @playwright/test to 1.64`                               |
| Snapshots visuais mudaram por ajuste intencional de espaçamento | `style(services): tighten card padding` + body `Updates visual snapshots.` |
| Texto em PT da seção sobre                                      | `feat(content): add about section copy (pt)`                               |
