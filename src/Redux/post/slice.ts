import { createSlice } from '@reduxjs/toolkit';
import { Status, PostsSliceState } from './types';
import { fetchPosts } from './asyncActions';



const initialState: PostsSliceState = {
  items: [],
  status: Status.LOADING,
};

const postSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {

  },
  extraReducers: (builder) => {
    builder.addCase(fetchPosts.pending, (state) => {
      state.status = Status.LOADING;
      state.items = [];
    });
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      state.items = action.payload;
      state.status = Status.SUCCESS;
    });
    builder.addCase(fetchPosts.rejected, (state) => {
      state.status = Status.ERROR;
      state.items = [];
    });
  }
});


export default postSlice.reducer;
