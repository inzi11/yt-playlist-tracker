import PlusIcon from "@/assets/Icons/PlusIcon";
import Button from "@/ui/customButtons/CustomButtons";
import SearchIcon from "@/assets/Icons/SearchIcon";
import ArrowDownIcon from "@/assets/Icons/ArrowDownIcon";

type StatCardProps = {
  label: string;
  value: string;
  valueColor: string;
};

type StatSubLabelProps = {
  icon?: string;
  text: string;
};

type FilterPillProps = {
  label: string;
  count?: number;
  icon?: string;
  active?: boolean;
  onClick?: () => void;
};

// ─── Reusable Sub-components ──────────────────────────────────────────────────

const StatCard = ({ label, value, valueColor }: StatCardProps) => (
  <div>
    <p className="text-[11px] uppercase tracking-[0.18em] --light-tx">
      {label}
    </p>
    <h3
      className="mt-3 text-[34px] font-bold leading-none"
      style={{ color: `var(${valueColor})` }}
    >
      {value}
    </h3>
  </div>
);

const StatSubLabel = ({ icon, text }: StatSubLabelProps) => (
  <p className="mt-2 text-[14px] --light-tx2">
    {icon && <span className="mr-1">{icon}</span>}
    {text}
  </p>
);

const FilterPill = ({
  label,
  count,
  icon,
  active = false,
  onClick,
}: FilterPillProps) => (
  <button
    onClick={onClick}
    className={`
      flex items-center gap-1.5
      rounded-full border px-3 py-1.5
      text-sm font-medium
      transition-all duration-200
      ${
        active
          ? "border-(--c-accentB) bg-(--c-accentB) text-(--light-tx)"
          : "border-(--light-bg2) bg-(--light-bg2) --light-tx2 hover:border(--c-borderH)"
      }
    `}
  >
    {icon && <span className="text-[13px]">{icon}</span>}
    <span>{label}</span>
    {count !== undefined && (
      <span
        className={`text-[12px] ${active ? "text-(--light-tx)" : "--light-tx"}`}
      >
        {count}
      </span>
    )}
  </button>
);

// ─── Data ─────────────────────────────────────────────────────────────────────

const STATS = [
  {
    label: "In Progress",
    value: "3",
    valueColor: "--c-accent",
    subLabel: "playlists active",
  },
  {
    label: "Completed",
    value: "2",
    valueColor: "--c-green",
    subLabel: "all done",
    subIcon: "🎉",
  },
  {
    label: "Queued",
    value: "2",
    valueColor: "--c-purple",
    subLabel: "not started",
  },
  {
    label: "Avg Completion",
    value: "61%",
    valueColor: "--c-blue",
    subLabel: "across all lists",
  },
  {
    label: "Total Watch Time",
    value: "42h",
    valueColor: "--c-yellow",
    subLabel: "of 96h 40m",
  },
];

const STATUS_FILTERS = [
  { label: "All", count: 7 },
  { label: "Active", count: 3, icon: "▶" },
  { label: "Completed", count: 2, icon: "✓" },
  { label: "Queued", count: 2, icon: "▭" },
];

const CATEGORY_FILTERS = [
  { label: "Programming", count: 3, icon: "🟦" },
  { label: "Design", count: 2, icon: "🎨" },
  { label: "Math", count: 1, icon: "📐" },
  { label: "AI / ML", count: 1, icon: "🤖" },
];

// ─── Main Component ───────────────────────────────────────────────────────────

const PlaylistHeader = () => {
  return (
    <section className="bg-(--light-surf) text-(--light-tx)">
      <div className="border-b border-[var(--c-borderS)] px-8 py-8">
        {/* Top Header */}
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
          {/* Left */}
          <div>
            <h1 className="text-[40px] font-bold tracking-tight text-(--light-tx)">
              Your Playlists
            </h1>
            <p className="mt-2 text-[15px] --light-tx font-medium2">
              7 playlists · 184 videos · 96h 40m total
            </p>
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-3">
            <Button
              title="Sort"
              variant="default"
              leftIcon={<ArrowDownIcon />}
            />
            <Button
              title="Add playlist"
              variant="primary"
              leftIcon={<PlusIcon />}
            />
          </div>
        </div>

        {/* Stats */}
        <div className="mt-10 grid grid-cols-2 gap-8 border-y border-[var(--c-border)] py-8 lg:grid-cols-5">
          {STATS.map(({ label, value, valueColor, subLabel, subIcon }) => (
            <div key={label}>
              <StatCard label={label} value={value} valueColor={valueColor} />
              <StatSubLabel icon={subIcon} text={subLabel} />
            </div>
          ))}
        </div>

        {/* Bottom Controls */}
        <div className="mt-6 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          {/* All filter pills */}
          <div className="flex flex-wrap gap-2">
            {/* Status filters */}
            {STATUS_FILTERS.map(({ label, count, icon }) => (
              <FilterPill
                key={label}
                label={label}
                count={count}
                icon={icon}
                active={label === "All"}
              />
            ))}

            {/* Divider */}
            <div className="w-px self-stretch bg-[var(--c-border)] mx-1" />

            {/* Category filters */}
            {CATEGORY_FILTERS.map(({ label, count, icon }) => (
              <FilterPill
                key={label}
                label={label}
                count={count}
                icon={icon}
                active={false}
              />
            ))}
          </div>

          {/* Right: Search + Sort dropdown */}
          <div className="flex items-center gap-2 shrink-0">
            {/* Search */}
            <div className="flex items-center gap-2 rounded-2xl h-8 border border-[var(--c-border)] bg-[var(--light-bg)] px-4 py-3 lg:w-[200px]">
              <span className="w-4">
                <SearchIcon className="--light-tx w-4" />
              </span>
              <input
                type="text"
                placeholder="Filter playlists..."
                className="w-full bg-transparent text-sm h-6 text-(--light-tx) outline-none placeholder:--light-tx"
              />
            </div>

            {/* Recent dropdown */}
            <button className="flex items-center gap-2 rounded-2xl h-8 border border-[var(--c-border)] bg-[var(--light-bg)] px-4 text-sm --light-tx2 hover:border-[var(--c-borderH)] transition-all duration-200 whitespace-nowrap">
              Recent
              <ArrowDownIcon className="w-3 --light-tx" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlaylistHeader;
