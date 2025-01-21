import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  address: null, // Initial state for address
};

const addressSlice = createSlice({
  name: "address",
  initialState,
  reducers: {
    setAddress: (state, action) => {
      state.address = action.payload; // Set the new address
    },
    clearAddress: (state) => {
      state.address = null; // Clear the address
    },
  },
});

export const { setAddress, clearAddress } = addressSlice.actions;

export default addressSlice.reducer;
