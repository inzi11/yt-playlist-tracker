import clsx from "clsx";

type StatCardProps = {
  title: string;
  value?: string | number;
  description?: string;
  footer?: React.ReactNode;
  children?: React.ReactNode;

  variant?: "default" | "stat";
  interactive?: boolean;

  className?: string;
};

const variantStyles = {
  default: "p-6 rounded-3xl bg-[var(--c-cards)] border border-[var(--c-border)]",
  
  stat: `
    p-6
    rounded-3xl
    bg-[var(--c-cards)]
    border border-[var(--c-border)]
    min-w-[180px]
  `,
};

export default function StatCard({
  title,
  value,
  description,
  footer,
  children,
  variant = "default",
  interactive = false,
  className,
}: StatCardProps) {
  return (
    <div
      className={clsx(
        variantStyles[variant],

        interactive &&
          `
          transition-all duration-200
          hover:border-[var(--c-borderH)]
          hover:bg-[var(--c-hover)]
        `,

        className
      )}
    >
      <div
        className="
          text-[var(--text-sm)]
          uppercase
          tracking-wide
          text-[var(--c-textS)]
          mb-4
        "
      >
        {title}
      </div>

      {children ? (
        children
      ) : (
        <>
          {value && (
            <div
              className="
                text-[var(--text-stat)]
                font-semibold
                text-[var(--c-text)]
                leading-none
              "
            >
              {value}
            </div>
          )}

          {description && (
            <p
              className="
                mt-3
                text-[var(--text-body)]
                text-[var(--c-textS)]
                leading-relaxed
              "
            >
              {description}
            </p>
          )}
        </>
      )}

      {footer && (
        <div
          className="
            mt-4
            text-[var(--text-sm)]
            text-[var(--c-textS)]
          "
        >
          {footer}
        </div>
      )}
    </div>
  );
}