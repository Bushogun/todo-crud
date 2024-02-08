import { createSlice } from "@reduxjs/toolkit";
import { initialStateToDos } from "../initial-state";

const toDosSlice = createSlice({
  name: "toDos",
  initialState: initialStateToDos,
  reducers: {
    setToDos: (state, action) => {
      state.toDos = action.payload;
    },
    setAddTask: (state, action) => {
      state.toDos.push(action.payload);
    },
    setFilters: (state, action) => {
      state.filter = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const {
  setToDos,
  setAddTask,
  setFilters,
  setLoading,
  setError,
} = toDosSlice.actions;

export default toDosSlice.reducer;
