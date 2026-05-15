type RecentlyWatchedItem = {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  time: string;
};

interface RecentlyWatchedItemsProps {
  items: RecentlyWatchedItem[];
}

const RecentlyWatchedItems = ({
  items,
}: RecentlyWatchedItemsProps) => {
  return (
    <div className="space-y-1.75">
      {items.map((item, i) => (
        <div
          key={i}
          className="flex items-center justify-between border-b border-gray-200 pb-1.75"
        >
          {/* left section */}
          <div className="flex items-center gap-4 min-w-0">
            <div className="w-10 h-8 rounded-xl bg-(--light-surf2) shadow-sm flex items-center justify-center shrink-0">
              {item.icon}
            </div>

            <div className="min-w-0">
              <h3 className="text-md font-semibold text-gray-900 truncate">
                {item.title}
              </h3>
              <p className="text-micro text-gray-500 mt-1">
                {item.subtitle}
              </p>
            </div>
          </div>

          {/* right time */}
          <span className="text-sm text-gray-400 shrink-0 ml-4">
            {item.time}
          </span>
        </div>
      ))}
    </div>
  );
};

export default RecentlyWatchedItems;