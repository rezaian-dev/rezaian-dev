import Reveal from "./Reveal";

type Props = { eyebrow: string; title: string; description?: string };

// 🏷️ Eyebrow + title + optional description, shared by every section
export default function SectionHeading({ eyebrow, title, description }: Props) {
  return (
    <Reveal className="mb-12 max-w-2xl md:mb-16">
      <p className="ltr mb-3 flex items-center gap-3 text-xs font-semibold tracking-[0.25em] text-brand rtl:flex-row-reverse rtl:justify-end">
        <span className="h-px w-8 bg-gradient-to-r from-brand to-brand-2" />
        {eyebrow}
      </p>
      <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-foreground md:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description && <p className="mt-4 text-base leading-8 text-muted-foreground md:text-lg">{description}</p>}
    </Reveal>
  );
}
