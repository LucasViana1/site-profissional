import type { SiteContent } from "@/content";
import { ContentContainer } from "@/components/ui/ContentContainer";

export function Hero({ content }: { content: SiteContent }) {
  const { hero, profile } = content;

  return (
    <section className="py-11 lg:pt-20 lg:pb-16">
      <ContentContainer className="flex flex-col gap-4 lg:gap-5">
        <p className="text-secondary flex items-center gap-2 font-mono text-[10px] tracking-[.12em] uppercase">
          <span aria-hidden className="bg-accent h-1.5 w-1.5 rounded-full" />
          {hero.status}
        </p>

        <h1 className="text-primary text-[40px]/[1] font-extrabold tracking-[-.035em] lg:text-[68px]">
          {profile.name}
        </h1>
        <p className="text-accent font-mono text-[13px]/[1.4] font-medium lg:text-[16px]">
          {hero.tagline}
        </p>
        <p className="text-secondary max-w-[680px] text-[15px]/[1.6] text-pretty lg:text-[19px]/[1.6]">
          {hero.summary}
        </p>

        <div className="mt-2 flex flex-col gap-2.5 sm:flex-row">
          <a
            href="#projects"
            className="bg-accent text-surface rounded-lg px-5 py-3.5 text-center text-sm font-semibold"
          >
            {hero.primaryCta}
          </a>
          <a
            href="#contact"
            className="border-border bg-surface text-primary rounded-lg border px-5 py-3.5 text-center text-sm font-semibold"
          >
            {hero.secondaryCta}
          </a>
        </div>
      </ContentContainer>
    </section>
  );
}
