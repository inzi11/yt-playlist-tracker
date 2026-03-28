type Prop = {
  prog: number | string;
};

const Progress = ({ prog }: Prop) => {
  const progress = Number(prog);

  const style: React.CSSProperties = {
    width: `${progress}%`,
    backgroundColor:
      progress <= 40
        ? "var(--c-accent)"
        : progress <= 75
        ? "var(--c-amber)"
        : "var(--c-green)",
  };

  return (
    <div className="w-full h-1 rounded-full bg-(--c-hover) overflow-hidden">
      <div className="h-full transition-all duration-300 rounded-full delay-200 ease-in" style={style} />
    </div>
  );
};

export default Progress;