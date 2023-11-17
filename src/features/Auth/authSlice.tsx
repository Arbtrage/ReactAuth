import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Login, User } from "./authAPI";

interface UserData {
  accessToken: string;
  refreshToken: string;
}

interface UserProfile {
  data: {
    email: string | null;
    createdAt: string;
    instituteId: string | null;
    profileImageUrl: string | null;
    partnerCode: string | null;
    state: string | null;
    city: string | null;
    currentQualification: string;
    gender: string | null;
    grade: string | null;
    updatedAt: string;
    partnerId: string | null;
    fullName: string | null;
    dob: string | null;
  };
}

const initialState = {
  userData: {} as UserData | null,
  userInfo: {} as UserProfile | null,
  isAuthenticated: false,
};

export const loginAsync = createAsyncThunk("auth/login", async (data) => {
  const response = await Login(data);
  return response;
});
export const fetchUser = createAsyncThunk("async/getUser", async (data) => {
  const response = await User(data);
  return response;
});
export const logoutAsync = createAsyncThunk("auth/logout", async (data) => {
  return "Logout";
});

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginAsync.fulfilled, (state, action) => {
        if (action.payload) {
          state.userData = action.payload as UserData;
          state.isAuthenticated = true;
        }
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        console.log("Slice");
        state.userInfo = action.payload as UserProfile;
      })
      .addCase(logoutAsync.fulfilled, (state) => {
        state.userData = null;
        state.userInfo = null;
        state.isAuthenticated = false;
      });
  },
});

export const selectUserData = (state) => state.auth;
export default authSlice.reducer;
