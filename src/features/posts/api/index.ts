import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { PostType } from '@/shared/types';
import { BASE_URL } from '@/shared/constants';

export const postsApi = createApi({
  reducerPath: 'posts',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getPosts: builder.query<PostType[], number>({
      query: (page) => `posts?_page=${page}`,
      serializeQueryArgs: ({ endpointName }) => {
        return endpointName;
      },
      merge: (currentCache, newItems) => {
        currentCache.push(...newItems)
      },
      forceRefetch({ currentArg, previousArg }) {
        return currentArg !== previousArg
      },
      
    }),
  }),
});

export const { useGetPostsQuery } = postsApi;