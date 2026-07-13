import { cn } from "@/lib/utils";

/**
 * BetterFit mark — blue rounded square with the branching/network icon,
 * matching the logo used in the product's auth screens.
 */
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("h-9 w-9", className)}
      aria-hidden="true"
    >
      <rect x="1" y="1" width="38" height="38" rx="10" fill="#1769FF" />
      <rect
        x="1.5"
        y="1.5"
        width="37"
        height="37"
        rx="9.5"
        stroke="white"
        strokeOpacity="0.15"
      />
      {/* branching mark: one node splitting into two — connected system */}
      <circle cx="20" cy="12.5" r="3.1" stroke="white" strokeWidth="2.3" />
      <circle cx="13" cy="27.5" r="3.1" stroke="white" strokeWidth="2.3" />
      <circle cx="27" cy="27.5" r="3.1" stroke="white" strokeWidth="2.3" />
      <path
        d="M20 15.6v3.2c0 1.8-1 2.6-2.6 3.4l-2.4 1.2M20 18.8c0 1.8 1 2.6 2.6 3.4l2.4 1.2"
        stroke="white"
        strokeWidth="2.3"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function Logo({
  className,
  markClassName,
}: {
  className?: string;
  markClassName?: string;
}) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <LogoMark className={markClassName} />
      <span className="text-[1.02rem] font-bold tracking-[-0.02em] text-bf-ink">
        BetterFit
      </span>
    </span>
  );
}
