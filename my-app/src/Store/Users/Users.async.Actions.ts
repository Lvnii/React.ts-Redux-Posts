import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../Components/Config/api";
import { User } from "../../Static/types";

export const fetchUsers = createAsyncThunk('users/fetchUsers', async (_, ThunkApi) => {
    try {
        const response = await api.get<User[]>('/users')
        return response.data
    } catch (error) {
        if (error instanceof Error) {
            ThunkApi.rejectWithValue(error.message)                      
        } else {
            ThunkApi.rejectWithValue('Unknown Error Happened')
        }
    }
})