---
name: code-style
description: Como escrever o código deste projeto — comentário é exceção rara, o nome e o tipo carregam o sentido, clean code e SOLID aplicados com sutileza. Use sempre que for escrever, alterar ou revisar qualquer código do projeto (componente, hook, util, conteúdo, teste, config), antes de criar o arquivo e não depois; e quando o desenvolvedor disser "limpa isso", "melhora esse nome", "tira os comentários", "refatora", "tá confuso" ou reclamar de comentário demais.
---

# Estilo de código

## O padrão é zero comentário

Em `src/` o código não é comentado. Nem componente, nem hook, nem util, nem conteúdo,
nem teste. Não é economia de digitação: comentário envelhece em silêncio, ninguém o
verifica e, quando vira mentira, atrapalha mais do que a ausência dele. Nome de arquivo,
nome de função, tipo e teste dizem a mesma coisa e são conferidos pelo compilador, pelo
editor e pelo CI.

Quando sentir vontade de comentar, faça nesta ordem:

1. **Renomear** — `d` vira `activeSectionId`, `handle` vira `closeOnNavigate`.
2. **Extrair** — o trecho que pediria comentário vira função com o nome que seria o
   comentário.
3. **Tipar** — `tone: "base" | "surface"` diz os valores possíveis melhor que uma frase.
4. **Testar** — um teste chamado `should close the drawer when a section is selected`
   documenta o comportamento e quebra quando deixa de ser verdade.

Se depois disso o comentário ainda parecer necessário, quase sempre o código é que
precisa mudar.

## O "porquê" mora fora do código

Decisão de projeto não vira comentário: vai para o corpo do commit e, quando é estrutural,
para o `docs/PLANO.md`. Exemplos reais deste repositório:

- Os dois root layouts (`app/(pt)/`, `app/(en)/`) existem porque o export estático não
  tem redirect para escolher o `lang` em runtime — está registrado no `docs/PLANO.md`.
- O `LangToggleLink` mostrar o idioma de destino e não o atual, o `suppressHydrationWarning`
  no `<html>` e no `<body>`, o ícone em SVG no lugar do glifo: cada um é uma linha no
  commit que os introduziu.

O histórico responde "por que isso está assim?" com data e contexto. O comentário só
responde até alguém mudar o código em volta e esquecer dele.

## A única exceção

`src/` está com zero comentários e é assim que fica. Os únicos que sobreviveram à revisão
estão em configuração de ferramenta, onde o código contorna uma limitação externa e
pareceria arbitrário sem a linha — alguém o apagaria por não entender:

| Onde                   | O que a linha explica                                                          |
| ---------------------- | ------------------------------------------------------------------------------ |
| `vitest.setup.ts`      | Por que existem stubs: o jsdom não tem `IntersectionObserver` nem `matchMedia` |
| `vitest.setup.ts`      | Por que o `localStorage` é limpo entre testes: o `next-themes` persiste o tema |
| `playwright.config.ts` | Pré-condição de quem roda: o e2e testa `out/`, então o build vem antes         |

Fora de arquivo de configuração, presuma que não cabe comentário.

Formato: português, uma ou duas linhas, acima do trecho.

## Nunca

- Descrever o que o nome já diz (`/** Par de pills PT/EN */` acima de `LangSwitch`).
- Narrar a linha seguinte (`// monta o observer`).
- Cabeçalho de arquivo, `// imports`, separadores decorativos.
- Código comentado — o git guarda.
- `// TODO` sem dono nem contexto.

## Clean code e SOLID, sutilmente

Sutil quer dizer: o princípio aparece no formato do código, não em cerimônia. Nada de
interface, factory, container de injeção ou camada extra para "ficar SOLID".

- **Uma responsabilidade por arquivo.** Se o nome do componente precisaria de um "e",
  são dois componentes.
- **Estado em quem coordena, dados por prop em quem exibe.** O `SiteShell` segura seção
  ativa e menu aberto; `Rail` e `TopBar` recebem prontos e só desenham.
- **Variação por prop, não por `if` espalhado.** `variant="rail" | "drawer"` no `NavList`
  em vez de dois componentes quase iguais.
- **Dependa do que vem de fora.** Componente não tem texto fixo: recebe `content`. Trocar
  idioma ou copy não toca em componente nenhum.
- **Extraia na segunda repetição real**, não na primeira suspeita. Abstração especulativa
  custa mais do que a duplicação que ela evitaria.
- **Verbo para função, substantivo para componente e para dado.** Evite abreviação,
  booleano negativo (`notDisabled`) e nomes vagos (`data`, `info`, `handleThing`).

## Ao revisar código existente

Comentário que descreve o código: apague e melhore o nome. Comentário que explica decisão:
mova para o commit ou para o plano e apague. Só fica o que se encaixa nas três exceções
acima — e confira se ainda é verdade antes de manter.
