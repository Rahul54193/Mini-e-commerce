import { configureStore } from '@reduxjs/toolkit'
import cartSlice, { cartMiddleware } from './slice/cart.slice'

export const store = configureStore({
    reducer: {
        cart: cartSlice
    },
    //midelware for cart item saving
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(cartMiddleware),
})