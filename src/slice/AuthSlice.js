import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,        // stores full user object
    isAuthenticated: false,
  },
  reducers: {
    signup: (state, action) => {
      state.user = action.payload; // store {firstName, lastName, email, password, date}
      state.isAuthenticated = false; // user still needs to login
    },
    login: (state) => {
      state.isAuthenticated = true;
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
    },
    updateName: (state, action) => {
      if (state.user) {
        state.user.firstName = action.payload.firstName;
        state.user.lastName = action.payload.lastName;
        
      }     
    },
    updateDate: (state, action) => {
      if (state.user) {
        state.user.date = action.payload.date;
      }
       
    },
    updateProfilePic: (state, action) => {
      if (state.user) {
        state.user.profilePic = action.payload.profilePic;
      }
    }
    
  },
});

export const { signup, login, logout,updateName,updateDate ,updateProfilePic} = authSlice.actions;
export default authSlice.reducer;
