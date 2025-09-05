import { configureStore } from "@reduxjs/toolkit";
import { camperReducer } from "./campersSlice";


const store = configureStore({
    reducer: {
        campers: camperReducer
    }
})

export default store;