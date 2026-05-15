
type handleOpenPlaylistType = {
  handleOpenPlaylist: (value: true | false) => void; 
}


export default function AddPlaylistModal({ handleOpenPlaylist }: handleOpenPlaylistType) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/30 backdrop-blur-sm z-50 ease-in-out duration-200 transition-all " onClick={()=> handleOpenPlaylist(false)}>
      <div
        className="w-[520px] rounded-2xl p-6 shadow-xl"
        style={{
          background: "var(--light-surf)",
          border: "1px solid var(--c-border)",
        }}
        onClick={(e)=> e.stopPropagation()}
      >
        {/* Title */}
        <h2
          className="text-[18px] font-semibold mb-1"
          style={{ color: "var(--light-tx)" }}
        >
          Add a new playlist
        </h2>
        <p
          className="text-[12px] mb-5"
          style={{ color: "var(--light-tx2)" }}
        >
          Paste a YouTube URL — metadata fetched automatically
        </p>

        {/* URL Input */}
        <div className="mb-4">
          <label
            className="text-[12px] mb-1 block"
            style={{ color: "var(--light-tx2)" }}
          >
            YouTube Playlist URL *
          </label>
          <input
            type="text"
            placeholder="https://youtube.com/playlist?list=..."
            className="w-full rounded-lg px-3 py-2 text-[13px] outline-none"
            style={{
              background: "var(--light-surf2)",
              border: "1px solid var(--c-border)",
              color: "var(--light-tx)",
            }}
          />
        </div>

        {/* Row 1 */}
        <div className="grid grid-cols-2 gap-3 mb-4">
          <div>
            <label className="text-[12px] mb-1 block" style={{ color: "var(--light-tx2)" }}>
              Name override
            </label>
            <input
              placeholder="Auto-fetched"
              className="w-full rounded-lg px-3 py-2 text-[13px] outline-none"
              style={{
                background: "var(--light-surf2)",
                border: "1px solid var(--c-border)",
                color: "var(--light-tx)",
              }}
            />
          </div>

          <div>
            <label className="text-[12px] mb-1 block" style={{ color: "var(--light-tx2)" }}>
              Category
            </label>
            <input
              placeholder="e.g. Design"
              className="w-full rounded-lg px-3 py-2 text-[13px] outline-none"
              style={{
                background: "var(--light-surf2)",
                border: "1px solid var(--c-border)",
                color: "var(--light-tx)",
              }}
            />
          </div>
        </div>

        {/* Row 2 */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          <div>
            <label className="text-[12px] mb-1 block" style={{ color: "var(--light-tx2)" }}>
              Daily goal (hrs)
            </label>
            <input
              defaultValue="1"
              className="w-full rounded-lg px-3 py-2 text-[13px] outline-none"
              style={{
                background: "var(--light-surf2)",
                border: "1px solid var(--c-border)",
                color: "var(--light-tx)",
              }}
            />
          </div>

          <div>
            <label className="text-[12px] mb-1 block" style={{ color: "var(--light-tx2)" }}>
              Playback speed
            </label>
            <select
              defaultValue="1.5x"
              className="w-full rounded-lg px-3 py-2 text-[13px] outline-none"
              style={{
                background: "var(--light-surf2)",
                border: "1px solid var(--c-border)",
                color: "var(--light-tx)",
              }}
            >
              <option>1x</option>
              <option>1.25x</option>
              <option>1.5x</option>
              <option>2x</option>
            </select>
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-3">
          <button
            className="flex-1 rounded-lg py-2 text-[13px]"
            style={{
              background: "var(--light-surf3)",
              border: "1px solid var(--c-border)",
              color: "var(--light-tx)",
            }}

            onClick={()=>handleOpenPlaylist(false)}
          >
            Cancel
          </button>

          <button
            className="flex-1 rounded-lg py-2 text-[13px] font-medium"
            style={{
              background: "var(--c-accent)",
              color: "#fff",
            }}
            onClick={()=> handleOpenPlaylist(false)}
          >
            Add playlist →
          </button>
        </div>
      </div>
    </div>
  );
}
