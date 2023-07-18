import { createSlice } from '@reduxjs/toolkit'

const initialState = [];

const cartItemSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        //add it into an cart
        add(state, action) {
            state.push(action.payload)
        },

        //remove a product from an cart
        remove(state, action) {
            return state.filter(cartItem => cartItem.id !== action.payload)
        }

    }
})
export const { add, remove } = cartItemSlice.actions;
export default cartItemSlice.reducer; 