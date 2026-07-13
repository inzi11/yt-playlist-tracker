import apiServices from "@/services/services";
class apiModule {
  private ApiService = new apiServices();

  addPlaylist = (payload: Record<string, string | number>) => {
    return this.ApiService.post("playlists", payload);
  };
  getPlaylist = () => {
    return this.ApiService.get("playlists");
  };
  removePlaylist = (id: string) => {
    return this.ApiService.delete(`playlists/${id}`);
  };
  getUserStreak = () => {
    return this.ApiService.get(`streak`);
  };
  getAllVideos = (playlistId: string) => {
    return this.ApiService.get(`videos/${playlistId}`);
  };
  getVideo = (videoId: string) => {
    return this.ApiService.get(`videos/${videoId}`);
  };
}

export default new apiModule();
