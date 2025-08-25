import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: {},
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const { userName, item } = action.payload;

      if (!state.cart[userName]) {
        state.cart[userName] = [];
      }

      state.cart[userName].push(item);
    },

    removeItem: (state, action) => {
      const { userName, id } = action.payload;

      if (state.cart[userName]) {
        state.cart[userName] = state.cart[userName].filter(
          (item) => item.id !== id
        );
      }
    },

    clearCart: (state, action) => {
      const { userName } = action.payload;
      state.cart[userName] = [];
    },

    setCart: (state, action) => {
      const { userName, items } = action.payload;
      state.cart[userName] = items;
    },
  },
});

export const { addItem, removeItem, clearCart, setCart } = cartSlice.actions;
export default cartSlice.reducer;
