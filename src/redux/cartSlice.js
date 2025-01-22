import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    cart: [],
    isCartVisible: false,
    totalPrice: 0
}


const cartReducer = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        add: (state, action) => {
            const itemIndex = state.cart.findIndex((item) => item.id === action.payload.id)
            if (itemIndex >= 0) {
                state.cart[itemIndex].qnty += 1;
            } else {
                state.cart.push({ ...action.payload, qnty: 1 });
            }
            state.totalPrice = calculateTotalPrice(state.cart);
        },
        remove: (state, action) => {
            state.cart = state.cart.filter((index) => index.id !== action.payload)
            state.totalPrice = calculateTotalPrice(state.cart);
        },
        clear: (state) => {
            state.cart = []
            state.totalPrice = 0;
        },
        decreament: (state, action) => {
            const itemIndex = state.cart.findIndex((item) => item.id === action.payload.id)
            if (state.cart[itemIndex].qnty > 1) {
                state.cart[itemIndex].qnty -= 1
            } else {
                state.cart = state.cart.filter((item) => item.id !== action.payload.id)
            }
            state.totalPrice = calculateTotalPrice(state.cart);
        },
        toggleCart: (state) => {
            state.isCartVisible = !state.isCartVisible
        },
    }
})

const calculateTotalPrice = (cart) => {
    return cart.reduce((acc, item) => acc + (item.price*40 * item.qnty), 0);
}

export const { add, toggleCart, remove, clear, decreament } = cartReducer.actions

export default cartReducer.reducer
