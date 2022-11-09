import modalReducer from "./Slice/modalSlice";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore ({
    reducer: {
        showModal: modalReducer
    }
})