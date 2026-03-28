import ProdLogo from "../../../ui/ProdLogo/ProdLogo";
import Progress from "../../../ui/progressCard/Progress";
import StatsCard from "../../../ui/statsCard/StatsCard";

type Stat = {
  label: string;
  value: string;
  color: string;
  sub: string;
};

type PlaylistProgress = {
  name: string;
  pct: number;
  daysLeft: number;
};

type StreakCardProps = {
  streakDays?: number;
  isPersonalBest?: boolean;
  stats?: Stat[];
  playlist?: PlaylistProgress;
  onSignIn?: () => void;
};

const FlameIcon = () => (
  <svg viewBox="0 0 22 22" fill="none" width={18} height={18}>
    <path
      d="M12.5 2C12.5 2 13 6.5 10.5 8.5C10.5 8.5 11 5.5 8.5 4C8.5 4 9 8 6 10C4.5 11 3.5 13 4 15.5C4.5 18 6.5 20 11 20C15.5 20 18 17.5 18 14.5C18 11 15 9 15 9C15 9 15.5 12 13.5 13C13.5 13 14 10.5 12.5 8C12 7 12 5 12.5 2Z"
      fill="#e07b3a"
      opacity="0.9"
    />
    <path
      d="M11 20C11 20 8.5 18.5 8.5 16C8.5 14 10.5 13 10.5 13C10.5 13 10 15 11.5 15.5C11.5 15.5 11 14 12.5 13C12.5 13 14 13.5 14 15.5C14 17.5 11 20 11 20Z"
      fill="#f5b86e"
      opacity="0.95"
    />
  </svg>
);

const defaultStats: Stat[] = [
  { label: "Watched", value: "84", color: "var(--c-accent)", sub: "videos total" },
  { label: "Time", value: "42h", color: "var(--c-purple)", sub: "learned" },
];

const defaultPlaylist: PlaylistProgress = {
  name: "Web Dev Bootcamp",
  pct: 77,
  daysLeft: 4,
};

const SideSignin = ({
  streakDays = 12,
  isPersonalBest = true,
  stats = defaultStats,
  playlist = defaultPlaylist,
  onSignIn,
}: StreakCardProps) => {
  return (
    <div className="relative w-105 mx-auto rounded-r-xl">
      <div className="relative bg-(--c-cards) border w-full border-(--c-border) p-[31.5px] shadow-2xl shadow-black/60 overflow-hidden text-(--c-text)">

        {/* Logo */}
        <div className="flex flex-col gap-4 pb-4 ">
          <ProdLogo />
        </div>

        {/* Hero */}
        <div
          className="text-title leading-[1.15] font-serif tracking-tight text-(--c-text) mb-5"
        >
          Welcome back.<br />
          Your streak is{" "}
          <em className="text-(--c-accent)" style={{ fontStyle: "italic" }}>
            waiting.
          </em>
        </div>

        {/* Streak */}
        <div className="border border-(--c-bookmarkB) relative bg-(--c-bookmarkB) rounded-xl px-4 py-2.25 mb-2.5">
          <p className="text-sm text-(--c-amber) w-full font-semibold uppercase tracking-widest mb-2">
            Current streak
          </p>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5 text-lg font-semibold tracking-tight text-(--c-amber)">
              <FlameIcon />
              {streakDays} days
            </div>
            {isPersonalBest && (
              <p className="text-sm text-right leading-snug absolute right-5 top-5  text-(--c-amber)">
                Personal<br />best!
              </p>
            )}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-2.5 mb-2.5">
          {stats.map((s, index) => (
            <StatsCard key={index} {...s} />
          ))}
        </div>

        {/* Progress */}
        <div className="bg-(--c-inputs) hover:bg-(--c-hover) border border-(--c-border) rounded-lg px-4 py-2.5 mb-4">
          <div className="flex items-center justify-between mb-2.5">
            <span className="text-micro font-semibold text-(--c-text)">{playlist.name}</span>
            <span className="text-micro font-semibold text-(--c-text)">{playlist.pct}%</span>
          </div>
          <div className="mb-1">
            <Progress prog={playlist.pct} />
          </div>
          <p className="text-sm text-(--c-textS)">
            {playlist.daysLeft} days left at your current pace
          </p>
        </div>

        {/* Footer */}
        <button
          onClick={onSignIn}
          className="flex items-center gap-2 text-micro text-(--c-textS) bg-transparent border-none p-0"
        >
          <div className="text-micro text-left rounded-full  bg-(--c-border2)" />
          Sign in to pick up right where you left off.
        </button>

      </div>
    </div>
  );
};

export default SideSignin;