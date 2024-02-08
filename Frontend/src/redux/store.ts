import { configureStore } from "@reduxjs/toolkit";
import toDosReducer from "./features/toDosSlice";

export const store = configureStore({
  reducer: {
    toDosReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch