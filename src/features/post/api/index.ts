import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { PostType } from '@/shared/types';
import { BASE_URL } from '@/shared/constants';

export const postApi = createApi({
  reducerPath: 'post',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getPostById: builder.query<PostType, number>({
      query: (postId) => `posts/${postId}`,
    }),
  }),
});

export const { useGetPostByIdQuery } = postApi;