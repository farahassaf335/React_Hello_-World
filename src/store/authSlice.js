import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import authService from '../services/authService';

export const login = createAsyncThunk(
  'auth/login',
  async (credentials, { rejectWithValue }) => {
    try {
      const data = await authService.login(credentials);
      return data; 
    } catch (error) {
      return rejectWithValue(error.message || 'فشل تسجيل الدخول');
    }
  }
);

export const register = createAsyncThunk(
  'auth/register',
  async (userData, { rejectWithValue }) => {
    try {
      const data = await authService.register(userData);
      return data;
    } catch (error) {
      return rejectWithValue(error.message || 'فشل إنشاء الحساب');
    }
  }
);

const initialState = {
  user: null,
  status: 'idle', 
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout(state) {
      state.user = null;
      localStorage.removeItem('user');
    },
    loadUserFromStorage(state) {
      const storedUser = localStorage.getItem('user');
      if (storedUser) {
        state.user = JSON.parse(storedUser);
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
  state.status = 'succeeded';
  state.user = action.payload;

  localStorage.setItem('user', JSON.stringify(action.payload));

  
})

      .addCase(login.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload || 'فشل تسجيل الدخول';
      })

      .addCase(register.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(register.fulfilled, (state, action) => {
  state.status = 'succeeded';
  state.user = action.payload;

  localStorage.setItem('user', JSON.stringify(action.payload));

})

      .addCase(register.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload || 'فشل إنشاء الحساب';
      });
  },
});

export const { logout, loadUserFromStorage } = authSlice.actions;
export default authSlice.reducer;