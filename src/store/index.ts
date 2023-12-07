import { configureStore } from '@reduxjs/toolkit';

import { postsApi } from '@/features/posts';
import { postApi } from '@/features/post';
import counterPageReducer from './counterPageSlice';

export const store = configureStore({
  reducer: {
    [postsApi.reducerPath]: postsApi.reducer,
    [postApi.reducerPath]: postApi.reducer,
    counterPage: counterPageReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(postsApi.middleware, postApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;