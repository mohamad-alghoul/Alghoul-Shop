import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    itemsList: [],
    totalQuantity: 0,
    totalPrice: 0,
  },
  reducers: {
    addToCart(state, action) {
      state.changed = true;
      const newItem = action.payload;
      // to check if item is already available
      const existingItem = state.itemsList.find(
        (item) => item.id === newItem.id
      );

      if (existingItem) {
        existingItem.quantity++;
        existingItem.totalPrice += newItem.price;
      } else {
        state.itemsList.push({
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          title: newItem.title,
          img:newItem.img
        });
        state.totalQuantity++;
      }
      state.totalPrice = state.itemsList.reduce(
        (total, item) => total + item.totalPrice,
        0
      );
    },
    removeFromCart(state, action) {
      state.changed = true;
      const id = action.payload;

      const existingItem = state.itemsList.find((item) => item.id === id);
      if (existingItem.quantity === 1) {
        state.itemsList = state.itemsList.filter((item) => item.id !== id);
        state.totalQuantity--;
      } else {
        existingItem.quantity--;
        existingItem.totalPrice -= existingItem.price;
      }

      state.totalPrice = state.itemsList.reduce(
        (total, item) => total + item.totalPrice,
        0
      );

    }
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;
