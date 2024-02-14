import { configureStore } from "@reduxjs/toolkit";
import { IPDetailSlice } from "./ip-detail/ip-detail.reducer";

export const store = configureStore({
  reducer: {
    ipDetail: IPDetailSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
