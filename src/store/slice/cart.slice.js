import { createSlice } from '@reduxjs/toolkit';
import { MMKV } from 'react-native-mmkv';
import { storage } from '../../..';
import { LocalStorage } from '../../helper/strings';
// for golbal state management of cart
const loadCartFromStorage = () => {
    const savedCart = storage.getString(LocalStorage.CARTITEM);
    console.log(`savedCart------- ${savedCart}`);
    return savedCart ? JSON.parse(savedCart) : [];
  };

const initialState = {
    cartItems: 0,
    items: loadCartFromStorage() || [],
};

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const { id, title, price, image,quantity = 1 } = action.payload;
            const existingItem = state.items.find(item => item.id === id);

            if (existingItem) {
                existingItem.quantity += quantity;
            } else {
                state.items.push({ id, title, price, image,quantity });
            }

            state.cartItems += quantity;
        },
        removeFromCart: (state, action) => {
            const id = action.payload;
            const existingItem = state.items.find(item => item.id === id);

            if (existingItem) {
                state.cartItems -= existingItem.quantity;existingItem.quantity;
                state.items = state.items.filter(item => item.id !== id);
            }
        },
        increaseQuantity: (state, action) => {
            const id = action.payload;
            const item = state.items.find(item => item.id === id);

            if (item) {
                item.quantity += 1;
                state.cartItems += 1;
            }
        },
        decreaseQuantity: (state, action) => {
            const id = action.payload;
            const item = state.items.find(item => item.id === id);

            if (item) {
                if (item.quantity > 1) {
                    item.quantity -= 1;
                    state.cartItems -= 1;
                } else {
                    state.cartItems -= 1;
                    state.items = state.items.filter(item => item.id !== id);
                }
            }
        },
        clearCart: (state) => {
            state.items = [];
            state.cartItems = 0;
        },
    },
});

export const {
    addToCart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    clearCart,
} = cartSlice.actions;

// Middleware For cart item saving
export const cartMiddleware = store => next => action => {
    const result = next(action);
    console.log(action, 'action');
    if (action.type.startsWith('cart/')) {
      const state = store.getState();
      storage.set(LocalStorage.CARTITEM, JSON.stringify(state.cart.items));
    }
    return result;
  };

export default cartSlice.reducer;