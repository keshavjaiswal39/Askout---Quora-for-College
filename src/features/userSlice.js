import createSlice from '@reduxjs/toolkit';

export const userSlice = userSlice({
  name: 'user',
  initialState: {
    user: null,
  },
  
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },

    logout: state => {
      state.uesr = null;
    },
  },
});

export const { login, logout } = userSlice.actions;

export const selectUser = (state) => state.user.user;

export default userSlice.reducer;
