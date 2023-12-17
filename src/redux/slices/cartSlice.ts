import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IGame } from '../../interfaces/games.type';

interface IState {
    itemsInCart: IGame[]
}

const initialState: IState = {
    itemsInCart: []
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,

    reducers: {
        setItemInCart: (state, action: PayloadAction<IGame>) => {
            state.itemsInCart.push(action.payload);
        },
        deleteItemFromCart: (state, action) => {
            state.itemsInCart = state.itemsInCart.filter(game => game.id !== action.payload);
        }
    }
});

export const { setItemInCart, deleteItemFromCart } = cartSlice.actions;

export default cartSlice.reducer;