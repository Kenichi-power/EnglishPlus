import {createSlice} from '@reduxjs/toolkit';

const initialState: {
  status: any[];
} = {
  status: [],
};

export const statusSlice = createSlice({
  name: 'result',
  initialState,
  reducers: {},
});

export const {} = statusSlice.actions;
export const selectCurrentTask = (state: RootState) => state.results.result;
export default statusSlice.reducer;
