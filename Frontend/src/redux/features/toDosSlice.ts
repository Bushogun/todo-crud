import { createSlice } from "@reduxjs/toolkit";
import { initialStateToDos } from "../initial-state";

const toDosSlice = createSlice({
  name: "toDos",
  initialState: initialStateToDos,
  reducers: {
    setSearchQuery: (state, action) => {
      state.query = action.payload;
    },
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
  setSearchQuery,
  setToDos,
  setAddTask,
  setFilters,
  setLoading,
  setError,
} = toDosSlice.actions;

export default toDosSlice.reducer;
