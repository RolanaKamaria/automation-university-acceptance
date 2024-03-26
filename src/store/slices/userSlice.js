import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
var loginUser;
export const userSlice = createSlice({
  name: "user",
  initialState: {
    userinfo: {
      username: "",
      password: "",
      baseUrl: "https:/",
    },
    connectInfo: {
      loading: false,
      userData: {},
      userToken: null,
      error: null,
      success: false,
    },
  },
  reducers: {
    login: (state) => {
      loginUser = axios
        .post(state.userinfo.baseUrl + "/api/v1/Auth/login", {
          username: state.userinfo.username,
          password: state.userinfo.password,
        })
        .then((response) => {
          console.log(getToken());
          setToken(response.data.accessToken);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    logout: (state) => {
      axios
        .post(state.userinfo.baseUrl + "/api/v1/Auth/logout", null, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${state.authToken}`,
          },
        })
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    },
    setUsername: (state, action) => {
      state.userinfo.username = action.payload;
    },
    setPassword: (state, action) => {
      state.userinfo.password = action.payload;
    },
    setToken: (state, action) => {
      state.userinfo.userToken = action.payload;
    },
    getToken: (state, action) => {
      return state.userinfo.userToken;
    },
  },
});

export const { login, logout, setUsername, setPassword, setToken, getToken } =
  userSlice.actions;
export default userSlice.reducer;
