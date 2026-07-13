import { createAsyncThunk, createSlice, type PayloadAction } from "@reduxjs/toolkit";
import ApiModule from "@/services/module/ApiModule";


export type Thumbnail = {
    url?: string;
    width?: number;
    height?: number;
};

export type Playlist = {
    _id: string;
    userId: string;
    title: string;
    description?: string;
    category?: string;
    thumbnail?: {
        default?: Thumbnail;
        medium?: Thumbnail;
        high?: Thumbnail;
        maxres?: Thumbnail;
    };
    itemCount: number;
    youtubePlaylistId: string;
    createdAt: string;
    updatedAt: string;
};

type GetPlaylistsResponse = {
    message: string;
    allPlaylist: Playlist[];
};

type AddPlaylistResponse = {
    message: string;
    playlist: Playlist;
};

type DeletePlaylistResponse = {
    message: string;
    deletePlaylist: Playlist;
};

export type AddPlaylistPayload = {
    url: string; // expected to receive youtube playlist url or id
    title?: string;
    description?: string;
};

// --- State ---
type PlaylistsState = {
    data: Playlist[];
    isLoading: boolean;
    error: string | null;
};

const initialState: PlaylistsState = {
    data: [],
    isLoading: false,
    error: null,
};

// --- Thunks ---
export const fetchPlaylists = createAsyncThunk<Playlist[], void, { rejectValue: string }>(
    "playlists/fetch",
    async (_, { rejectWithValue }) => {
        try {
            const res = (await ApiModule.getPlaylist()) as GetPlaylistsResponse;
            return res.allPlaylist;
        } catch (error: any) {
            return rejectWithValue(error?.response?.data?.message || error.message || "Failed to fetch playlists");
        }
    },
);

export const addPlaylist = createAsyncThunk<Playlist, AddPlaylistPayload, { rejectValue: string }>(
    "playlists/add",
    async (payload, { rejectWithValue }) => {
        try {
            const res = (await ApiModule.addPlaylist(payload)) as AddPlaylistResponse;
            return res.playlist;
        } catch (error: any) {
            return rejectWithValue(error?.response?.data?.message || error.message || "Failed to add playlist");
        }
    },
);

export const removePlaylist = createAsyncThunk<string, string, { rejectValue: string }>(
    "playlists/remove",
    async (playlistId, { rejectWithValue }) => {
        try {
            const res = (await ApiModule.removePlaylist(playlistId)) as DeletePlaylistResponse;
            // return the deleted playlist id so reducers can update state
            return res.deletePlaylist._id;
        } catch (error: any) {
            return rejectWithValue(error?.response?.data?.message || error.message || "Failed to remove playlist");
        }
    },
);

// --- Slice ---
const PlaylsitSlice = createSlice({
    name: "playlists",
    initialState,
    reducers: {
        clearPlaylists(state) {
            state.data = [];
            state.error = null;
            state.isLoading = false;
        },
    },
    extraReducers: (builder) => {
        // fetch
        builder
            .addCase(fetchPlaylists.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(fetchPlaylists.fulfilled, (state, action: PayloadAction<Playlist[]>) => {
                state.isLoading = false;
                state.data = action.payload;
            })
            .addCase(fetchPlaylists.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload ?? "Failed to fetch playlists";
            })

            // add
            .addCase(addPlaylist.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(addPlaylist.fulfilled, (state, action: PayloadAction<Playlist>) => {
                state.isLoading = false;
                state.data.unshift(action.payload);
            })
            .addCase(addPlaylist.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload ?? "Failed to add playlist";
            })

            // remove
            .addCase(removePlaylist.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(removePlaylist.fulfilled, (state, action: PayloadAction<string>) => {
                state.isLoading = false;
                state.data = state.data.filter((p) => p._id !== action.payload);
            })
            .addCase(removePlaylist.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload ?? "Failed to remove playlist";
            });
    },
});

export const { clearPlaylists } = PlaylsitSlice.actions;

export default PlaylsitSlice.reducer;