import {createSelector, createSlice} from '@reduxjs/toolkit';

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
export const selectCurrentResult = (state: RootState) => state.results.result;
export const selectCurrentTask = (state: RootState) => state.stats.stats;

export const selectFilteredResults = createSelector(
  selectCurrentResult,
  selectCurrentTask,
  (result, status) => {
    console.log('zaebis');
    // Изменяем результат, например, фильтруем его
    if (status == 'success') {
      return result.filter(item => item.score >= item.allQuestions / 2 && item);
    } else if (status == 'failed') {
      return result.filter(item => item.score < item.allQuestions / 2 && item);
    } else {
      return result;
    }
  },
);
// export const selectSuccessedResults = createSelector(
//   selectCurrentResult,
//   result => {
//     return result.filter(item => item.score >= item.allQuestions / 2 && item);
//   },
// );
// export const selectFailedResults = createSelector(
//   selectCurrentResult,
//   result => {
//     return result.filter(item => item.score < item.allQuestions / 2 && item);
//   },
// );
// export const selectAllResults = createSelector(selectCurrentResult, result => {
//   return result;
// });
export default resultSlice.reducer;
