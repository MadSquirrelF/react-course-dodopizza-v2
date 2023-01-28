import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../axios'
// import { Posts, PostsSliceState } from './types';

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
  const { data } = await axios.get('/posts');
  return data;
});