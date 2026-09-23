export function ContentSkeleton({ widths }: { widths: string[] }) {
  return (
    <div className="flex max-w-[620px] flex-col gap-2">
      {widths.map((width, index) => (
        <span key={index} aria-hidden className="bg-border h-2.5 rounded" style={{ width }} />
      ))}
    </div>
  );
}
