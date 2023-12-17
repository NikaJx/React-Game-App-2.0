import { createSlice } from '@reduxjs/toolkit';
import { IGame } from '../../interfaces/games.type';

interface IState {
    currentGame: IGame | null
}

const initialState: IState = {
    currentGame: null
}

const gameSlice = createSlice({
    name: 'currentGame',
    initialState,

    reducers: {
        setCurrentGame: (state, action) => {
            state.currentGame = action.payload;
        }
    }
});

export const { setCurrentGame } = gameSlice.actions;

export default gameSlice.reducer;