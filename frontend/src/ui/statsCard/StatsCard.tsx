
interface statsType{
    label: string, 
    color: string, 
    value: number | string,
    sub: string
}

const StatsCard = (s : statsType) => {
  return (
    <div
              key={s.label}
              className=" bg-(--c-inputs) hover:bg-(--c-hover) border border-(--c-border) rounded-xl px-4 py-3"
            >
              <p className="text-sm font-semibold uppercase tracking-widest text-(--c-textS) mb-1.5">
                {s.label}
              </p>
              <p
                className="text-title font-semibold tracking-tight leading-none mb-1"
                style={{ color: s.color }}
              >
                {s.value}
              </p>
              <p className="text-micro text-(--c-textS)">{s.sub}</p>
    </div>
  )
}

export default StatsCard
