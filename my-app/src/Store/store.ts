import { configureStore } from "@reduxjs/toolkit";
import UsersSlice from "./Users/Users.slice";
import PostsSlice from "./Posts/Posts.slice";

const store = configureStore({
    reducer: {
        users: UsersSlice,
        posts: PostsSlice,
    }
})

export default store;