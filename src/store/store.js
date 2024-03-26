import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import userSlice from "./slices/userSlice";
import rootSlice from "./slices/rootSlice";
import AuthSlice from "./slices/AuthSlice";
import studentSlice from "./slices/studentSlice";
const customizeMiddleware = getDefaultMiddleware({
  serializableCheck: false,
});
export const store = configureStore({
  reducer: {
    student: studentSlice,
    root: rootSlice,
    user: userSlice,
    Auth: AuthSlice,
  },
  middleware: customizeMiddleware,
});
