import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchGreeting = createAsyncThunk(
  "greeting/fetchGreeting",
  async () => {
    const response = await fetch("/api/v1/greetings");
    const data = await response.json();
    return data;
  }
);

const initialState = {
  greetings: [],
};

export const greetingSlice = createSlice({
  name: "greeting",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchGreeting.fulfilled]: (state, action) => {
      state.greetings = action.payload;
    },
  },
});

export default greetingSlice.reducer;
