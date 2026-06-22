type MediaProgressCardProps = {
  title: string;

  creator: string;

  category?: string;
  difficulty?: string;

  totalVideos?: number;
  duration?: string;

  progress?: number;

  eta?: string;

  status?: string;

  thumbnail?: React.ReactNode;

  actions?: React.ReactNode;
};

export default function MediaProgressCard({
  title,
  creator,
  category,
  difficulty,
  totalVideos,
  duration,
  progress = 0,
  eta,
  status,
  thumbnail,
  actions,
}: MediaProgressCardProps) {
  return (
    <div
      className="
        w-full
        rounded-[28px]
        border border-(--c-border)
        bg-(--c-cards)
        overflow-hidden
      "
    >
      <div
        className="
          flex items-stretch
        "
      >
        {/* Left Content */}
        <div
          className="
            flex flex-1
            gap-5
            px-6 py-5
            min-w-0
          "
        >
          {/* Thumbnail */}
          <div
            className="
               h-23
               w-23
              shrink-0
              rounded-2xl
              bg-(--c-hover)
              border border-(--c-border)
              overflow-hidden
            "
          >
            {thumbnail}
          </div>

          {/* Main Content */}
          <div className="flex flex-1 flex-col min-w-0">
            {/* Title */}
            <h3
              className="
                text-title
                font-semibold
                text-(--c-text)
                truncate
              "
            >
              {title}
            </h3>

            {/* Meta Row */}
            <div
              className="
                mt-2
                flex flex-wrap items-center gap-2
                text-md
                text-(--c-textS)
              "
            >
              <span>{creator}</span>

              {category && (
                <span
                  className="
                    rounded-lg
                    border border-(--c-border)
                    bg-(--c-hover)
                    px-2 py-1
                    text-[12px]
                  "
                >
                  {category}
                </span>
              )}

              {difficulty && (
                <span
                  className="
                    rounded-lg
                    border border-(--c-bookmarkB)
                    bg-(--c-bookmarkB)
                    px-2 py-1
                    text-[12px]
                    text-(--c-amber)
                  "
                >
                  {difficulty}
                </span>
              )}

              {(totalVideos || duration) && (
                <span>
                  {totalVideos} videos · {duration}
                </span>
              )}
            </div>

            {/* Progress */}
            <div className="mt-5">
              <div
                className="
                  h-2
                  w-full
                  overflow-hidden
                  rounded-full
                  bg-(--c-hover)
                "
              >
                <div
                  className="
                    h-full
                    rounded-full
                    bg-(--c-purple)
                    transition-all
                  "
                  style={{
                    width: `${progress}%`,
                  }}
                />
              </div>

              {/* Status */}
              {status && (
                <div
                  className="
                    mt-3
                    text-md
                    text-(--c-textS)
                  "
                >
                  {status}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Right Panel */}
        <div
          className="
            flex
            min-w-45
            flex-col
            justify-between
            border-l border-(--c-border)
            px-5 py-5
          "
        >
          {/* Progress Stat */}
          <div className="text-right">
            <div
              className="
                text-[34px]
                font-bold
                leading-none
                text-(--c-text)
              "
            >
              {progress}%
            </div>

            {eta && (
              <div
                className="
                  mt-2
                  text-md
                  text-(--c-textS)
                "
              >
                ETA: {eta}
              </div>
            )}
          </div>

          {/* Actions */}
          {actions && (
            <div
              className="
                flex justify-end gap-2
              "
            >
              {actions}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}