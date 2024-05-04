import { createSlice } from "@reduxjs/toolkit";
import { User } from "../../Static/types";
import { fetchUsers } from "./Users.async.Actions";

type InitialState = {
    status: 'idle' | 'loading' | 'loaded' | 'failed',
    data: User[],
    error: undefined | string
}

const initialState: InitialState = {
    status: 'idle',
    data: [],
    error: undefined
}

const UsersSlice = createSlice({
    name: 'users',
    initialState: initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(fetchUsers.pending, (state) => {
            state.status = 'loading'
        })
        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            state.status = 'loaded'
            if (action.payload) {
                state.data = action.payload 
            }
        })
        builder.addCase(fetchUsers.rejected, (state, action) => {
            state.status = 'failed'
            state.error = action.error.message
        })
    }
})

export default UsersSlice.reducer;