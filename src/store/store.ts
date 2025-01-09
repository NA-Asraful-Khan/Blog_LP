import { configureStore } from '@reduxjs/toolkit';
import { blogApi } from './services/blogApi';
import notificationReducer from './slices/notificationSlice';

export const store = configureStore({
  reducer: {
    [blogApi.reducerPath]: blogApi.reducer,
    notification: notificationReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(blogApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;