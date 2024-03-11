// // import { jwtDecode } from "jwt-decode";

// // import { createSlice } from '@reduxjs/toolkit';

// // const initialState = {
// //   user: null,
// // };

// // const userSlice = createSlice({
// //   name: 'user',
// //   initialState,
// //   reducers: {
// //     setUser(state, action) {
// //       state.user = action.payload;
// //     },
// //   },
// // });

// // export const { setUser } = userSlice.actions;

// // export const loginUser = (token) => async (dispatch) => {
// //   try {
// //     // Decode the token to get user information
// //     const decodedToken = jwtDecode(token);
// //     let userRole = decodedToken.roles;
// //     if (Array.isArray(userRole)) {
// //       userRole = userRole[0];
// //     }
// //     // Dispatch an action to store the token and user role in Redux state
// //     dispatch(setUser({ token, role: userRole }));

// //     // Redirect user based on role
// //     if (userRole === "ADMIN") {
// //       window.location.href = '/bec-app/admin/adminpro'; // Adjust the URL as per your routes
// //     } else if (userRole === "STUDENT") {
// //       window.location.href = '/bec-app/user/userpro'; // Adjust the URL as per your routes
// //     }
// //   } catch (error) {
// //     console.error('Login failed:', error);
// //     // Handle login error
// //   }
// // };




// // export default userSlice.reducer;


// // import { createSlice } from '@reduxjs/toolkit';

// // const initialState = {
// //   user: null,
// //   token: null,
// // };

// // const userSlice = createSlice({
// //   name: 'user',
// //   initialState,
// //   reducers: {
// //     setUser(state, action) {
// //       state.user = action.payload.user;
// //       state.token = action.payload.token;
// //     },
// //     logoutUser(state) {
// //       state.user = null;
// //       state.token = null;
// //     },
// //   },
// // });

// // export const { setUser, logoutUser } = userSlice.actions;

// // export const loginUser = (token) => async (dispatch) => {
// //   try {
// //     const decodedToken = jwtDecode(token);
// //     const userRole = Array.isArray(decodedToken.roles) ? decodedToken.roles[0] : decodedToken.roles;

// //     // Store both user information and token in the state
// //     dispatch(setUser({ user: decodedToken, token }));

// //     // Redirect based on user role
// //     if (userRole === "ADMIN") {
// //       window.location.href = '/bec-app/admin/adminpro';
// //     } else if (userRole === "STUDENT") {
// //       window.location.href = '/bec-app/user/userpro';
// //     }
// //   } catch (error) {
// //     console.error('Login failed:', error);
// //     // Handle login error
// //   }
// // };

// // export default userSlice.reducer;
// // import { createSlice } from '@reduxjs/toolkit';

// // const initialState = {
// //   user: null,
// //   token: null,
// //   studentId: null, // Add studentId to the initial state
// // };

// // const userSlice = createSlice({
// //   name: 'user',
// //   initialState,
// //   reducers: {
// //     setUser(state, action) {
// //       state.user = action.payload.user;
// //       state.token = action.payload.token;
// //       state.studentId = action.payload.studentId; // Set the studentId in the state
// //     },
// //     logoutUser(state) {
// //       state.user = null;
// //       state.token = null;
// //       state.studentId = null; // Reset the studentId when logging out
// //     },
// //   },
// // });

// // export const { setUser, logoutUser } = userSlice.actions;

// // export const loginUser = (token) => async (dispatch) => {
// //   try {
// //     const decodedToken = jwtDecode(token);
// //     const userRole = Array.isArray(decodedToken.roles) ? decodedToken.roles[0] : decodedToken.roles;
// //     const studentId = decodedToken.studentId; // Extract the studentId from the decoded token

// //     // Store both user information, including the student ID, and token in the state
// //     dispatch(setUser({ user: decodedToken, token, studentId }));

// //     // Redirect based on user role
// //     if (userRole === "ADMIN") {
// //       window.location.href = '/bec-app/admin/adminpro';
// //     } else if (userRole === "STUDENT") {
// //       window.location.href = '/bec-app/user/userpro';
// //     }
// //   } catch (error) {
// //     console.error('Login failed:', error);
// //     // Handle login error
// //   }
// // };

// // export default userSlice.reducer;
// // userSlice.js

// // import { createSlice } from '@reduxjs/toolkit';

// // const initialState = {
// //   user: null,
// //   token: null,
// //   studentId: null,
// // };

// // const userSlice = createSlice({
// //   name: 'user',
// //   initialState,
// //   reducers: {
// //     setUser(state, action) {
// //       state.user = action.payload.user;
// //       state.token = action.payload.token;
// //       state.studentId = action.payload.studentId;
// //     },
// //     logoutUser(state) {
// //       state.user = null;
// //       state.token = null;
// //       state.studentId = null;
// //     },
// //   },
// // });

// // export const { setUser, logoutUser } = userSlice.actions;

// // export const loginUser = (token) => async (dispatch) => {
// //   try {
// //     const decodedToken = jwtDecode(token);

// //     const userRole = Array.isArray(decodedToken.roles) ? decodedToken.roles[0] : decodedToken.roles;
// //     const studentId = decodedToken.studentId;

// //     dispatch(setUser({ user: decodedToken, token, studentId }));

// //     if (userRole === "ADMIN") {
// //       window.location.href = '/bec-app/admin/adminpro';
// //     } else if (userRole === "STUDENT") {
// //       window.location.href = '/bec-app/user/userpro';
// //     }
// //   } catch (error) {
// //     console.error('Login failed:', error);
// //   }
// // };

// // export default userSlice.reducer;
// // import { createSlice } from '@reduxjs/toolkit';

// // const initialState = {
// //   user: null,
// //   token: null,
// //   studentId: null,
// // };

// // const userSlice = createSlice({
// //   name: 'user',
// //   initialState,
// //   reducers: {
// //     setUser(state, action) {
// //       state.user = action.payload.user;
// //       state.token = action.payload.token;
// //       state.studentId = action.payload.studentId;
// //     },
// //   },
// // });

// // export const { setUser } = userSlice.actions;

// // export const loginUser = (token) => async (dispatch) => {
// //   try {
// //     const decodedToken = jwtDecode(token);
    
// //     const userRole = Array.isArray(decodedToken.roles) ? decodedToken.roles[0] : decodedToken.roles;
// //     const studentId = decodedToken.studentId;

// //     dispatch(setUser({ user: decodedToken, token, studentId }));

// //     if (userRole === "ADMIN") {
// //       window.location.href = '/bec-app/admin/adminpro';
// //     } else if (userRole === "STUDENT") {
// //       console.log(token);
// //       window.location.href = '/bec-app/user/userpro';
// //     }
// //   } catch (error) {
// //     console.error('Login failed:', error);
// //   }
// // };

// // export default userSlice.reducer;
// // userSlice.js
// import { createSlice } from '@reduxjs/toolkit';
// import {jwtDecode} from 'jwt-decode'; // Import jwtDecode

// // Define the initial state
// const initialState = {
//   decodedToken: null,
//   token: null,
//   studentId: null,
// };

// // Create a slice for the user
// const userSlice = createSlice({
//   name: 'user',
//   initialState,
//   reducers: {
//     setUser(state, action) {
//       const { decodedToken, token, studentId } = action.payload;
//       state.decodedToken = decodedToken;
//       state.token = token;
//       state.studentId = studentId;
//     },
//   },
// });

// // Extract and export the action creators
// export const { setUser } = userSlice.actions;

// // Asynchronous action creator for login
// export const loginUser = (token) => async (dispatch) => {
//   try {
//     const decodedToken = jwtDecode(token);
    
//     const userRole = Array.isArray(decodedToken.roles) ? decodedToken.roles[0] : decodedToken.roles;
//     const studentId = decodedToken.studentId;

//     dispatch(setUser({ decodedToken, token, studentId }));

//     if (userRole === "ADMIN") {
//       window.location.href = '/bec-app/admin/adminpro';
//     } else if (userRole === "STUDENT") {
//       console.log(token);
//       window.location.href = '/bec-app/user/userpro';
//     }
//   } catch (error) {
//     console.error('Login failed:', error);
//   }
// };

// // Export the reducer
// export default userSlice.reducer;
