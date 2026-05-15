import { useState } from "react";
import NavList from "../../ui/NavList/NavList";



interface NavItem {
  label: string;
  badge?: number | string;
  route?: string;
  count?: number;
  isActive?: boolean;
  accentDot?: boolean; // red dot variant
}

interface NavSection {
  title?: string;
  items: NavItem[];
}



const SECTIONS: NavSection[] = [
  {
    title: "Main",
    items: [
      { label: "Dashboard", route : "/"},
      { label: "Analytics", route: "analytics"},
      { label: "Explore", route: "explore"},
      { label: "Notes", badge: 8, route: "notes"},
    ],
  },
  {
    title: "Library",
    items: [
      { label: "In Progress", count: 3 },
      { label: "Completed", count: 1 },
      { label: "Archived" },
    ],
  },
  {
    title: "Categories",
    items: [
      { label: "Programming",},
      { label: "Design" },
      { label: "Business" },
      { label: "Science" },
    ],
  },
];

export default function Sidebar() {
  const [activeItem, setActiveItem] = useState("Dashboard");

  const stats = [
    { value: "7", label: "Lists" },
    { value: "84", label: "Videos" },
    { value: "42h", label: "Time" },
  ];

  return (
    <>
      <aside
        className="flex w-80 h-full shrink-0 flex-col items-center overflow-y-auto overflow-x-hidden py-5 px-4"
        style={{
          background: "var(--c-sidebar)",
          borderRight: "1px solid var(--c-border)",
          scrollbarWidth: "thin",
          scrollbarColor: "var[--c-border]",
        }}
      >
        <div
          className="mx-3 mb-4 w-full flex items-center gap-3 rounded-xl p-3"
          style={{ background: "var(--c-cards)", border: "1px solid var(--c-border)" }}
        >
          {/* Avatar */}
          <div
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-sm font-semibold"
            style={{
              background:
                "linear-gradient(135deg, var(--c-purple), var(--c-accent))",
              color: "#fff",
              letterSpacing: "0.03em",
            }}
          >
            AK
          </div>
          <div className="min-w-0 flex-1">
            <p
              className="truncate text-sm font-semibold leading-tight"
              style={{ color: "var(--c-text)" }}
            >
              Aryan Kumar
            </p>
            <p
              className="truncate text-[11px] leading-tight mt-0.5"
              style={{ color: "var(--c-textS)" }}
            >
              aryan@example.com
            </p>
          </div>
        </div>

        <div className="mx-3 mb-4 w-full grid grid-cols-3 divide-x overflow-hidden rounded-xl"
          style={{
            background: "var(--c-cards)",
            border: "1px solid var(--c-border)"
          }}
        >
          {stats.map((s) => (
            <div
              key={s.label}
              className="flex flex-col items-center py-3"
              style={{ borderRight: "1px solid var(--c-border)" }}
            >
              <span
                className="text-base font-semibold leading-tight"
                style={{ color: "var(--c-text)" }}
              >
                {s.value}
              </span>
              <span
                className="text-[10px] uppercase tracking-wider mt-0.5"
                style={{ color: "var(--c-textS)" }}
              >
                {s.label}
              </span>
            </div>
          ))}
        </div>

        <div
          className="mx-3 mb-5 w-full rounded-xl px-4 py-3"
          style={{
            background: "var(--c-bookmarkB)",
            border: "1px solid rgba(176,138,62,.35)",
          }}
        >
          <p
            className="text-[10px] font-medium uppercase tracking-widest mb-1"
            style={{ color: "rgba(176,138,62,0.75)" }}
          >
            Current streak
          </p>
          <p
            className="flex items-center gap-2 text-xl font-semibold"
            style={{ color: "var(--c-amber)" }}
          >
            <span>🔥</span> 12 days
          </p>
        </div>

        <div className="flex w-full flex-col gap-3 px-2 " style={{fontFamily: "DM sans"}}>
          {SECTIONS.map((section) => (
            <NavList
              key={section.title ?? "main"}
              section={section}
              activeItem={activeItem}
              onSelect={setActiveItem}
              
            />
          ))}
        </div>

        <div className="flex-1" />

        <div
          className="mx-3 mt-4 w-full flex items-center justify-between rounded-xl px-3 py-2.5"
          style={{
            background: "var(--c-cards)",
            border: "1px solid var(--c-border)",
          }}
        >
          <span
            className="text-xs font-medium"
            style={{ color: "var(--c-textS)" }}
          >
            Settings
          </span>
          <span style={{ color: "var(--c-textS)", fontSize: 14 }}>⚙️</span>
        </div>
      </aside>
    </>
  );
}