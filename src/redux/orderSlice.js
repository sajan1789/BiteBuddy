import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  orderHistory: [],
};

const orderSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    addOrder: (state, action) => {
      state.orderHistory.push(action.payload);
    },
  },
});

export const { addOrder } = orderSlice.actions;
export default orderSlice.reducer;
