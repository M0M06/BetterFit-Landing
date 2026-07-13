import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  lead,
  align = "left",
  className,
}: {
  eyebrow: string;
  title: React.ReactNode;
  lead?: string;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      <p
        data-reveal
        className={cn("bf-eyebrow", align === "center" && "justify-center before:hidden")}
      >
        {eyebrow}
      </p>
      <h2
        data-reveal
        className="mt-4 text-[clamp(1.7rem,3.6vw,2.5rem)] font-bold leading-[1.12] text-bf-ink"
      >
        {title}
      </h2>
      {lead ? (
        <p
          data-reveal
          className={cn(
            "mt-4 max-w-xl text-[1rem] leading-relaxed text-bf-ink-700",
            align === "center" && "mx-auto"
          )}
        >
          {lead}
        </p>
      ) : null}
    </div>
  );
}
