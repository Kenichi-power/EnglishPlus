import {configureStore} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistReducer, persistStore} from 'redux-persist';
import resultSlice from './result';
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import statusSlice from './status';
import statsSlice from './stats';

const persistResultConfig = {
  key: 'result',
  storage: AsyncStorage,
};
const persistStatusConfig = {
  key: 'status',
  storage: AsyncStorage,
};
const persistStatsConfig = {
  key: 'stats',
  storage: AsyncStorage,
};

const persistResultReducer = persistReducer(persistResultConfig, resultSlice);
const persistStatusReducer = persistReducer(persistStatusConfig, statusSlice);
const persistStatsReducer = persistReducer(persistStatsConfig, statsSlice);

const store = configureStore({
  reducer: {
    results: persistResultReducer,
    status: persistStatusReducer,
    stats: persistStatsReducer,
  },

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({serializableCheck: false}),
});

declare global {
  type RootState = ReturnType<typeof store.getState>;
}
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const persistor = persistStore(store);
export default store;
