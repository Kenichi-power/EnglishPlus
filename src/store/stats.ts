import {createSlice} from '@reduxjs/toolkit';
type Status = 'all' | 'success' | 'failed';

const initialState: {
  stats: Status;
} = {
  stats: 'all',
};

export const statsSlice = createSlice({
  name: 'result',
  initialState,
  reducers: {
    setStats: (state, action) => {
      state.stats = action.payload;
    },
  },
});

export const {setStats} = statsSlice.actions;
export const selectCurrentTask = (state: RootState) => state.stats.stats;

export default statsSlice.reducer;
