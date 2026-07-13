type ModalProps = {
  title: string;

  children: React.ReactNode;
  footer?: React.ReactNode;

  open?: boolean;

  size?: "sm" | "md" | "lg";

  className?: string;

  onClose?: () => void;
};

const sizeStyles = {
  sm: "max-w-md",
  md: "max-w-2xl",
  lg: "max-w-4xl",
};

export default function Modal({
  title,
  children,
  footer,
  open = true,
  size = "md",
  className = "",
  onClose,
}: ModalProps) {
  if (!open) return null;

  return (
    <div
      onClick={onClose}
      className="
        fixed inset-0 z-50
        flex items-center justify-center
        bg-black/30
        backdrop-blur-[2px]
        p-4
      "
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`
          w-full
          ${sizeStyles[size]}
          rounded-[32px]
          border border-[var(--c-border)]
          bg-[var(--c-cards)]
          shadow-2xl
          overflow-hidden
          ${className}
        `}
      >
        {/* Header */}
        <div className="px-8 pt-8">
          <h2
            className="
              text-[28px]
              font-semibold
              tracking-tight
              text-[var(--c-text)]
            "
          >
            {title}
          </h2>
        </div>

        {/* Body */}
        <div className="px-8 py-6">
          {children}
        </div>

        {/* Footer */}
        {footer && (
          <div
            className="
              px-8 pb-8
              flex items-center justify-end
              gap-4
            "
          >
            {footer}
          </div>
        )}
      </div>
    </div>
  );
}