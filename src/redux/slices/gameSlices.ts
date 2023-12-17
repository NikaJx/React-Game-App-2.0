import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { IGame } from "../../interfaces/games.type";
import axios from "axios";

interface IState {
    games: IGame[] | null,
    loading: string | boolean
}

const initialState: IState = {
    games: [],
    loading: false
}

export const getGames = createAsyncThunk<IGame[], undefined, { rejectValue: string | unknown }>('game/getGames', 
    async (_, { rejectWithValue }) => {
        try {
            const res = await axios.get<IGame[]>('http://localhost:4002/games');

            return res.data;

        } catch (error) {
            return rejectWithValue(error);
        }
});

const gameSlice = createSlice({
    name: 'game',
    initialState,

    reducers: {},

    extraReducers: (builder) => {
        builder
            .addCase(getGames.pending, (state) => {
                state.loading = true;
            })
            .addCase(getGames.fulfilled, (state, action) => {
                state.games = action.payload;
                state.loading = false;
            })
    }
});

export default gameSlice.reducer;