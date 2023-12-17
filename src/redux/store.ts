import { configureStore } from "@reduxjs/toolkit";
import gamesReducer from './slices/gameSlices';
import cartReducer from './slices/cartSlice';
import currentGameReducer from './slices/gameSlice';

export const store = configureStore({
    reducer: {
        game: gamesReducer,
        cart: cartReducer,
        currentGame: currentGameReducer
    },

});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;