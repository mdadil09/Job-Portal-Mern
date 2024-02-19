/* eslint-disable no-unused-vars */
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchJobs = createAsyncThunk("fetchJob", async () => {
  try {
    const config = {
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    };

    const result = await axios.get("http://127.0.0.1:5700/api/jobs/", config);
    return result.data;
  } catch (error) {
    console.log(error);
  }
});

const initialState = {
  jobs: [],
  isLoading: false,
  isError: false,
};

const jobSlice = createSlice({
  name: "job",
  initialState,
  reducers: {
    setJobs: (state, action) => {
      state.jobs = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchJobs.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchJobs.fulfilled, (state, action) => {
      state.isLoading = false;
      state.jobs = action.payload;
    });
    builder.addCase(fetchJobs.rejected, (state, action) => {
      console.log("Error:", action.payload);
      state.isError = true;
    });
  },
});

export const { setJobs } = jobSlice.actions;

export default jobSlice.reducer;
