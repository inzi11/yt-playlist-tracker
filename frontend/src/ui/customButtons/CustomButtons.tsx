import React from "react";


type ButtonVariant = "default" | "primary" | "ghost" | "danger";
type ButtonSize = "normal" | "sm";

type CustomButtonProps = {
  title: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  isDisabled?: boolean;
  isLoading?: boolean;
  fullWidth?: boolean;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  className?: string;
  style?: React.CSSProperties;
  "aria-label"?: string;
};


const BASE =
  "inline-flex items-center justify-center gap-2 font-medium rounded-lg " +
  "border transition-all duration-200 ease-in-out " +
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-[#1a1a2e] " +
  "disabled:opacity-40 disabled:cursor-not-allowed disabled:pointer-events-none " +
  "select-none cursor-pointer";

const VARIANT_STYLES: Record<ButtonVariant, string> = {
  default:
    "bg-[#2a2a3e] text-gray-100 border-[#3a3a5e] " +
    "hover:bg-[#32324a] hover:border-[#5a5a8e] hover:text-white " +
    "active:scale-[0.97] active:bg-[#222236] " +
    "focus-visible:ring-[#5a5a8e]",

  primary:
    "bg-[#e05a5a] text-white border-transparent " +
    "hover:bg-[#ea6e6e] hover:shadow-[0_4px_18px_rgba(224,90,90,0.45)] " +
    "active:scale-[0.97] active:bg-[#c94f4f] " +
    "focus-visible:ring-[#e05a5a]",

  ghost:
    "bg-transparent text-gray-300 border-transparent " +
    "hover:bg-[#2a2a3e] hover:text-white " +
    "active:scale-[0.97] " +
    "focus-visible:ring-[#5a5a8e]",

  danger:
    "bg-transparent text-[#e05a5a] border-[#7a2a2a] " +
    "hover:bg-[#7a2a2a]/30 hover:border-[#e05a5a] hover:text-[#f07a7a] " +
    "active:scale-[0.97] active:bg-[#7a2a2a]/50 " +
    "focus-visible:ring-[#e05a5a]",
};

const SIZE_STYLES: Record<ButtonSize, string> = {
  normal: "h-10 px-4 text-sm",
  sm: "h-8 px-3 text-xs",
};


function Spinner({ size }: { size: ButtonSize }) {
  const s = size === "sm" ? "w-3 h-3" : "w-4 h-4";
  return (
    <svg
      className={`${s} animate-spin`}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
      />
    </svg>
  );
}


function Button({
  title,
  variant = "default",
  size = "normal",
  leftIcon,
  rightIcon,
  isDisabled = false,
  isLoading = false,
  fullWidth = false,
  onClick,
  type = "button",
  className = "",
  style,
  "aria-label": ariaLabel,
}: CustomButtonProps) {
  const classes = [
    BASE,
    VARIANT_STYLES[variant],
    SIZE_STYLES[size],
    fullWidth ? "w-full" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button
      type={type}
      className={classes}
      style={style}
      disabled={isDisabled || isLoading}
      onClick={onClick}
      aria-label={ariaLabel}
      aria-busy={isLoading}
    >
      {isLoading ? (
        <Spinner size={size} />
      ) : (
        leftIcon && (
          <span className="shrink-0 w-4 flex items-center" aria-hidden="true">
            {leftIcon}
          </span>
        )
      )}

      <span>{title}</span>

      {!isLoading && rightIcon && (
        <span className="shrink-0 flex w-4 items-center" aria-hidden="true">
          {rightIcon}
        </span>
      )}
    </button>
  );
}

export default Button;
export type { CustomButtonProps, ButtonVariant, ButtonSize };