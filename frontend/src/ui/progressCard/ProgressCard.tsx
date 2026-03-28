import { Box } from "@mui/material";
import DisabledByDefaultIcon from "@mui/icons-material/DisabledByDefault";
import Progress from "./Progress";

type ProgressCardProps = {
  icon?: React.ReactNode;
  title: string;
  items: number;
  time: number;
  completion: number;
  variant?: "default" | "compact";
  className?: string;
};

const getColor = (val: number) => {
  if (val <= 40) return "var(--c-accent)";
  if (val <= 75) return "var(--c-amber)";
  return "var(--c-green)";
};

const ProgressCard = ({
  icon,
  title,
  items,
  time,
  completion,
  variant = "default",
  className = "",
}: ProgressCardProps) => {
  const isCompact = variant === "compact";

  return (
    <Box
      className={`
        flex items-center w-full border border-solid border-(--c-border) rounded-md hover:border-(--c-border-glow) bg-(--c-inputs) duration-200 ease-in-out
        ${isCompact ? "gap-2 px-1" : "gap-2 px-2 py-1"}
        ${className}
      `}
    >
      {/* ICON */}
      <div className="shrink-0">
        {icon || <DisabledByDefaultIcon />}
      </div>

      {/* CONTENT */}
      <div className="flex flex-col flex-1 w-20">
              <h1
                  className=" font-semibold text-ellipsis text-sm" >
          {title}
        </h1>

        <div
          className={`
            flex flex-wrap items-center text-sm opacity-70 gap-1 text-micro
          `}
        >
          <span>{items} videos</span>
          <span>•</span>
          <span>{time} days left</span>
        </div>

        <div className="w-full mt-1">
          <Progress prog={completion} />
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div
        className={`
          shrink-0 font-semibold text-micro
        `}
        style={{ color: getColor(completion) }}
      >
        {completion}%
      </div>
    </Box>
  );
};

export default ProgressCard;