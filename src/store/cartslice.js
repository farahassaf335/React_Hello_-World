import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import cartService from '../services/cartService';

export const addToCart = createAsyncThunk(
  'cart/addToCart',
  async ({ userId, products }, { getState, rejectWithValue }) => {
    try {
      const { auth } = getState();
      return await cartService.addToCart(userId, products, auth.token);
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const fetchCart = createAsyncThunk(
  'cart/fetchCart',
  async (userId, { getState, rejectWithValue }) => {
    try {
      const { auth } = getState();
      return await cartService.getCart(userId, auth.token);
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    userId: null,
    status: 'idle',
    error: null
  },
  reducers: {
    loadCartFromStorage(state) {
      const storedCart = localStorage.getItem('cart');
      if (storedCart) {
        state.items = JSON.parse(storedCart);
      }
    },
    clearCart: (state) => {
      state.items = [];
      state.userId = null;
      localStorage.removeItem('cart');
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(addToCart.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(addToCart.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload.products;
        state.userId = action.payload.userId;
        localStorage.setItem('cart', JSON.stringify(state.items));
      })
      .addCase(addToCart.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      })
      .addCase(fetchCart.fulfilled, (state, action) => {
        if (action.payload) {
          state.items = action.payload.products;
          state.userId = action.payload.userId;
          localStorage.setItem('cart', JSON.stringify(state.items));
        } else {
          // إذا لم يكن للمستخدم سلة، قم بإعادة تعيينها إلى فارغة
          state.items = [];
          localStorage.removeItem('cart');
        }
      });
  }
});

export const { clearCart, loadCartFromStorage } = cartSlice.actions;
export default cartSlice.reducer;
