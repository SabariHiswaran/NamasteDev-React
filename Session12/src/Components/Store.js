import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./utils/cartSlice"

const store = configureStore({
     reducer : {
        cartS : cartSlice
     }
})

export default store