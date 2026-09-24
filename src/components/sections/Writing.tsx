import type { Article, SiteContent } from "@/content";
import { Section } from "@/components/ui/section/Section";

export function Writing({ content }: { content: SiteContent }) {
  return (
    <Section id="writing" label={content.sections.writing}>
      <ul className="flex flex-col">
        {content.writing.items.map((article) => (
          <li key={article.href + article.title} className="border-border border-b last:border-b-0">
            <ArticleLink article={article} />
          </li>
        ))}
      </ul>
    </Section>
  );
}

function ArticleLink({ article }: { article: Article }) {
  return (
    <a
      href={article.href}
      target="_blank"
      rel="noreferrer"
      className="hover:bg-surface flex items-baseline gap-4 py-3.5 transition-colors"
    >
      <span className="text-muted w-[68px] shrink-0 font-mono text-[10px]">{article.date}</span>
      <span className="text-primary flex-1 text-[13px]/[1.4] font-semibold text-pretty">
        {article.title}
      </span>
      <span aria-hidden className="text-accent text-[11px] font-semibold">
        ↗
      </span>
    </a>
  );
}
