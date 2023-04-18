import {createSlice} from '@reduxjs/toolkit';

const initialState: {
  result: any[];
} = {
  result: [],
};

export const resultSlice = createSlice({
  name: 'result',
  initialState,
  reducers: {
    setResult: (state, action) => {
      state.result.push(action.payload);
    },
    setReset: state => {
      state.result = [];
    },
  },
});

export const {setResult, setReset} = resultSlice.actions;
export const selectCurrentTask = (state: RootState) => state.status.status;
export default resultSlice.reducer;
