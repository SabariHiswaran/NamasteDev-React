import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./utils/cartSlice"

const store = configureStore({
     reducer : {
        cart : cartSlice
     }
})

export default store