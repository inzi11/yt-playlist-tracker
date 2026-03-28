
interface NavItem {
  label: string;
  badge?: number | string;
  count?: number;
  isActive?: boolean;
  accentDot?: boolean; // red dot variant
}

interface NavSection {
  title?: string;
  items: NavItem[];
}

interface NavListProps {
  section: NavSection;
  activeItem: string;
  onSelect: (label: string) => void;
}

function NavList({ section, activeItem, onSelect }: NavListProps) {

    
  return (
    <div className="flex flex-col gap-0.5">
      {section.title && (
        <p
          className="px-3 pb-1 pt-2 text-[10px] font-semibold tracking-widest uppercase"
          style={{ color: "var(--c-textM)" }}
        >
          {section.title}
        </p>
      )}
      {section.items.map((item) => {
        const isActive = item.isActive ?? activeItem === item.label;
        return (
          <button
            key={item.label}
            onClick={() => onSelect(item.label)}
            className="group flex w-full items-center justify-between rounded-lg px-3 py-[9px] text-sm font-medium transition-all duration-150"
            style={{
              background: isActive ? "var(--c-hover)" : "transparent",
              color: isActive ? "var(--c-text)" : "var(--c-textS)",
              border: isActive
                ? "1px solid var(--c-borderS)"
                : "1px solid transparent",
            }}
            onMouseEnter={(e) => {
              if (!isActive) {
                (e.currentTarget as HTMLButtonElement).style.background =
                  "var(--c-hover)";
                (e.currentTarget as HTMLButtonElement).style.color =
                  "var(--c-text)";
              }
            }}
            onMouseLeave={(e) => {
              if (!isActive) {
                (e.currentTarget as HTMLButtonElement).style.background =
                  "transparent";
                (e.currentTarget as HTMLButtonElement).style.color =
                  "var(--c-textS)";
              }
            }}
          >
            <span className="flex items-center gap-2.5">
              {/* Dot indicator */}
              <span
                className="h-[7px] w-[7px] rounded-full flex-shrink-0"
                style={{
                  background: item.accentDot
                    ? "var(--c-accent)"
                    : isActive
                    ? "var(--c-accent)"
                    : "var(--c-borderH)",
                  boxShadow:
                    isActive || item.accentDot
                      ? "0 0 6px var(--c-accent)"
                      : "none",
                }}
              />
              {item.label}
            </span>

            {/* Badge (notifications) */}
            {item.badge != null && (
              <span
                className="flex h-5 min-w-[20px] items-center justify-center rounded-full px-1.5 text-[11px] font-semibold"
                style={{
                  background: "var(--c-accent)",
                  color: "#fff",
                }}
              >
                {item.badge}
              </span>
            )}

            {/* Count (subtle) */}
            {item.count != null && (
              <span
                className="text-xs tabular-nums"
                style={{ color: "var(--c-textM)" }}
              >
                {item.count}
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
}

export default NavList