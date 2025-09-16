// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   token: null,
//   isLoading: false,
//   error: null,
// };

// const authSlice = createSlice({
//   name: "auth",
//   initialState,
//   reducers: {
//     loginStart: (state) => {
//       state.isLoading = true;
//       state.error = null;
//     },
//     loginSuccess: (state, action) => {
//       state.isLoading = false;
//       state.token = action.payload; // ✅ store token
//     },
//     loginFailure: (state, action) => {
//       state.isLoading = false;
//       state.error = action.payload || "Login failed";
//     },
//     logout: (state) => {
//       state.token = null;
//       state.isLoading = false;
//     },
//   },
// });

// export const { loginStart, loginSuccess, loginFailure, logout } =
//   authSlice.actions;
// export default authSlice.reducer;



// import { createSlice } from "@reduxjs/toolkit";
// import AsyncStorage from "@react-native-async-storage/async-storage";

// const authSlice = createSlice({
//   name: "auth",
//   initialState: { user: null },
//   reducers: {
//     signup: (state, action) => {
//       state.user = action.payload; // { email, password }
//       AsyncStorage.setItem("user", JSON.stringify(action.payload));
//     },
//     login: (state, action) => {
//       state.user = action.payload;
//     },
//     logout: (state) => {
//       state.user = null;
//       AsyncStorage.removeItem("user");
//     },
//   },
// });

// export const { signup, login, logout } = authSlice.actions;
// export default authSlice.reducer;


// slice/AuthSlice.js


// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   user: null,            // { email, password }
//   isAuthenticated: false // simple flag after successful login
// };

// const authSlice = createSlice({
//   name: "auth",
//   initialState,
//   reducers: {
//     signup: (state, action) => {
//       state.user = action.payload; // { email, password }
//     },
//     login: (state) => {
//       state.isAuthenticated = true;
//     },
//     logout: (state) => {
//       state.user = null;
//       state.isAuthenticated = false;
//     },
//   },
// });

// export const { signup, login, logout } = authSlice.actions;
// export default authSlice.reducer;


// import { createSlice } from "@reduxjs/toolkit";

// const authSlice = createSlice({
//   name: "auth",
//   initialState: {
//     user: null,        // stores {email, password}
//     isAuthenticated: false, 
//   },
//   reducers: {
//     signup: (state, action) => {
//       state.user = action.payload; // {email, password}
//       state.isAuthenticated = false; // not logged in immediately after signup
//     },
//     login: (state) => {
//       state.isAuthenticated = true; // user logged in
//     },
//     logout: (state) => {
//       state.isAuthenticated = false;
//       state.user = null;
//     },
//     userdata: (state) =>{
//       state.user = action.payload;
//     }
//   },
// });

// export const { signup, login, logout ,userdata} = authSlice.actions;
// export default authSlice.reducer;


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
