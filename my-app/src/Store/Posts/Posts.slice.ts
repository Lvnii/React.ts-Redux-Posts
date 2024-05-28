import { createSlice } from "@reduxjs/toolkit";
import { Post } from "../../Static/types";

type InitialState = {
    status: 'idle' | 'loading' | 'loaded' | 'failed'
    data: Post[]
    error: undefined | string
}

const initialState: InitialState = {
    status: 'idle',
    data: [],
    error: undefined
}

const PostsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {}
})

export default PostsSlice.reducer;