import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import crudService from '@/services/api/curdService'; // adjust path if needed
import ENDPOINTS from '@/services/api/endPoints';


// Fetch users
export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
  const response = await crudService.getAll(ENDPOINTS.getUsers);
  return response.data;
});

const userSlice = createSlice({
  name: 'users',
  initialState: {
    data: [],
    loading: false,
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  }
});

export default userSlice.reducer;
