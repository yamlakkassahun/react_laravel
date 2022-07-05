import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import { BookApi } from '../features/book/bookSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    [BookApi.reducerPath]: BookApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
    .concat(
      BookApi.middleware, 
      ),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
