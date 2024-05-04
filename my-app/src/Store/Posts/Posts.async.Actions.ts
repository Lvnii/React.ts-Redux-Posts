import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../Components/Config/api";
import { Post } from "../../Static/types";

const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
    
})