import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { blogsType } from '@/types'

interface initialStateType {
  blogs: blogsType | []
  isLoading: boolean
  user: any
}

const initialState: initialStateType = {
  blogs: [],
  isLoading: true,
  user: null,
}

export const getBlogs = createAsyncThunk<any>('/blogs/getData', async () => {
  try {
    const response = await axios.get('/blogs/get-blogs')
    const data: blogsType[] = response.data
    console.log(data)
    return data
  } catch (err) {
    console.log(err)
  }
})

const blogSlice = createSlice({
  name: 'blog',
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getBlogs.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(getBlogs.fulfilled, (state, { payload }) => {
      state.isLoading = false
      state.blogs = payload
    })
    builder.addCase(getBlogs.rejected, (state) => {
      state.isLoading = true
    })
  },
})

export default blogSlice.reducer
