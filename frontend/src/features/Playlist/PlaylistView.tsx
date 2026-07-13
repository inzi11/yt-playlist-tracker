import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { fetchPlaylists, type Playlist } from "@/store/slice/PlaylistSlice";
import PlaylistCard from "@/ui/PlaylistCard/PlaylistCard";
import Button from "@/ui/customButtons/CustomButtons";
import { useNavigate } from "react-router-dom";

const AVATAR_COLORS = [
  "bg-[var(--c-accent)]",
  "bg-[var(--c-purple)]",
  "bg-[var(--c-blue)]",
  "bg-[var(--c-yellow)]",
  "bg-[var(--c-green)]",
];

const PlaylistView = () => {
  const dispatch = useAppDispatch();
  const {
    data: playlists,
    isLoading,
    error,
  } = useAppSelector((state) => state.playlist);

  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchPlaylists());
  }, [dispatch]);

  const renderThumbnail = (playlist: Playlist, index: number) => {
    const imageUrl =
      playlist.thumbnail?.medium?.url ||
      playlist.thumbnail?.high?.url ||
      playlist.thumbnail?.default?.url;
    const colorClass = AVATAR_COLORS[index % AVATAR_COLORS.length];

    return (
      <div
        className={`h-full w-full ${colorClass} flex items-center justify-center text-[32px] font-semibold text-(--light-tx)`}
      >
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={playlist.title}
            className="h-full w-full object-cover"
          />
        ) : (
          <span>{playlist.title?.charAt(0) ?? "P"}</span>
        )}
      </div>
    );
  };

  const formatStatus = (playlist: Playlist) => {
    if (!playlist.category) return "No category";
    return playlist.category;
  };

  return (
    <section className="space-y-6">
      <div className="flex items-center justify-between gap-4 rounded-3xl border border-[var(--c-border)] bg-[var(--light-bg)] px-6 py-5 shadow-sm">
        <div>
          <p className="text-sm uppercase tracking-[0.26em] text-(--light-tx3)">
            Playlist library
          </p>
          <h2 className="mt-2 text-2xl font-semibold text-(--light-tx)">
            Browse your playlists
          </h2>
          <p className="mt-1 text-sm text-(--light-tx2)">
            {playlists.length} playlists ·{" "}
            {playlists.reduce((sum, playlist) => sum + playlist.itemCount, 0)}{" "}
            videos tracked
          </p>
        </div>
        <div className="rounded-3xl bg-[var(--light-surf)] px-4 py-3 text-sm text-(--light-tx)">
          Updated automatically from YouTube
        </div>
      </div>

      <div className="space-y-4">
        {isLoading && (
          <div className="rounded-3xl border border-[var(--c-border)] bg-[var(--c-cards)] p-8 text-center text-sm text-(--light-tx2)">
            Loading playlists...
          </div>
        )}

        {error && !isLoading && (
          <div className="rounded-3xl border border-rose-500 bg-rose-500/10 p-6 text-sm text-rose-600">
            {error}
          </div>
        )}

        {!isLoading && !error && playlists.length === 0 && (
          <div className="rounded-3xl border border-[var(--c-border)] bg-[var(--c-cards)] p-8 text-center text-sm text-(--light-tx2)">
            No playlists found. Add one from the top bar or import a YouTube
            playlist URL.
          </div>
        )}

        <div className="grid gap-4 xl:grid-cols-2">
          {playlists.map((playlist, index) => (
            <PlaylistCard
              key={playlist._id}
              title={playlist.title}
              creator={playlist.description ?? "YouTube playlist"}
              category={formatStatus(playlist)}
              totalVideos={playlist.itemCount}
              duration={`${playlist.itemCount} videos`}
              progress={0}
              eta={new Date(playlist.createdAt).toLocaleDateString()}
              status={`Playlist ID: ${playlist.youtubePlaylistId}`}
              thumbnail={renderThumbnail(playlist, index)}
              actions={<Button title="View" onClick={() => navigate("")} />}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlaylistView;
