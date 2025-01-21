import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import addressReducer from "./addressSlice"; // Import the new address slice

const store = configureStore({
  reducer: {
    carts: cartReducer,
    address: addressReducer, // Add the address reducer
  },
});

export default store;
