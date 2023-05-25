import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../reducer/userReducer";
export default configureStore({
    reducer: {
        // reducers
        user: userSlice
    }
});