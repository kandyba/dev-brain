import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Async login

export const login = createAsyncThunk(
  'user/login',
  async ({ email, password }, thunkAPI) => {
    try {
      const response = await axios.post(`${import.meta.env.VITE_API_URL}/api/auth/login`, { email, password });
      console.log(response.data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const register = createAsyncThunk(
  'user/register',
  async ({ name, surname, email, password }, thunkAPI) => {
    try {
      const response = await axios.post(`${import.meta.env.VITE_API_URL}/api/auth/registration`, { name, surname, email, password })
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data?.message || 'Registration error');
    }
  }
);

const userSlice = createSlice({
  name: 'user',
  initialState: {
    currentUser: null,
    token: null,
    loading: false,
    error: null,
    registrationSuccess: false
  },
  reducers: {
    logout(state) {
      state.currentUser = null;
      state.token = null;
      localStorage.removeItem('token');
      localStorage.removeItem('user');
    },
    resetRegistrationState(state) {
      state.registrationSuccess = false;
      state.error = null;
    },
    loadUserFromStorage(state) {
      const token = localStorage.getItem('token');
      const user = localStorage.getItem('user');

      if( token ) {
        state.token = token;
      }

      if( user ) {
        state.currentUser = JSON.parse(user)
      }
    }
  },
  extraReducers: (builder) => {
    builder
      // Login
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.currentUser = action.payload.user;
        state.token = action.payload.token;

        localStorage.setItem('token', action.payload.token);
        // localStorage.setItem('user', JSON.stringify(action.payload.token));
        localStorage.setItem('user', JSON.stringify(action.payload.user));
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Registration
      .addCase(register.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.registrationSuccess = false;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.loading = false;
        state.registrationSuccess = true;
      })
      .addCase(register.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.registrationSuccess = false;
      })
  }
});

export const {
  logout,
  resetRegistrationState,
  loadUserFromStorage
} = userSlice.actions;
export default userSlice.reducer;





