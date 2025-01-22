import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import addressReducer from "./addressSlice"; // Import the new address slice
import orderReducer from "./orderSlice"; 
const store = configureStore({
  reducer: {
    carts: cartReducer,
    address: addressReducer,
    orders: orderReducer,
     // Add the address reducer
  },
});

export default store;
