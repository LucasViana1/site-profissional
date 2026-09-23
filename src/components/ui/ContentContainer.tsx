import type { ReactNode } from "react";

/**
 * Largura de leitura do conteúdo. As bordas e os fundos das seções continuam
 * ocupando a coluna inteira; só o texto é limitado e centralizado, para não
 * ficar colado à esquerda em telas largas.
 */
export function ContentContainer({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-[1180px] px-4.5 lg:px-14 ${className}`}>{children}</div>
  );
}
