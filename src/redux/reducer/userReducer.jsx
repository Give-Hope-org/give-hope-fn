import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// Create a thunk for fetching data from the API
export const fetchUser = createAsyncThunk(
    'user/fetchUser',
    async () => {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        return response.data;
    }
);
export const fetchUserById = createAsyncThunk(
    'user/fetchUserById',
    async (id) => {
        try {
            const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
            console.log('response data:', response.data);
            return response.data;
        } catch (error) {
            console.log('fetchUserById error:', error.message);
            throw error;
        }
    }
);
export const login=createAsyncThunk(
    'user/login',
    async (user) => {
        try {
            const response = await axios.post(`https://jsonplaceholder.typicode.com/users/login`,user);
            console.log('response data:', response.data);
            return response.data;
        } catch (error) {
            console.log('fetchUserById error:', error.message);
            throw error;
        }
    }
);

// Create a slice for the user
const userSlice = createSlice({
    name: 'user',
    initialState: {
        users: [],
        status: null,
        Error: null
    },
    extraReducers: {
        [fetchUser.pending]: (state, action) => {
            state.status = 'loading';
        },

        [fetchUser.fulfilled]: (state, action) => {

            state.users = action.payload;
            state.status = 'success';
        },

        [fetchUser.rejected]: (state, action) => {
            state.status = 'failed';
            state.Error = action.error.message;
        },
        [fetchUserById.pending]: (state, action) => {
            state.status = 'loading';
        }
        ,
        [fetchUserById.fulfilled]: (state, action) => {
            state.users = action.payload;
            state.status = 'success';
        },
        [fetchUserById.rejected]: (state, action) => {
            state.status = 'failed';
            state.Error = action.error.message;
        }
        ,
        [login.pending]: (state, action) => {
            state.status = 'loading';
        }
        ,
        [login.fulfilled]: (state, action) => {
            state.users = action.payload;
            state.status = 'success';
        }
    }
});

export default userSlice.reducer;