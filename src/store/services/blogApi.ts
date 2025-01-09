import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export interface Post {
  id: number;
  slug: string;
  url: string;
  title: string;
  content: string;
  image: string;
  thumbnail: string;
  status: string;
  category: string;
  publishedAt: string;
  updatedAt: string;
  userId: number;
}

export const blogApi = createApi({
  reducerPath: 'blogApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.org/' }),
  endpoints: (builder) => ({
    getPosts: builder.query<Post[], void>({
      query: () => 'posts',
    }),
    getPost: builder.query<Post, string>({
      query: (id) => `posts/${id}`,
    }),
  }),
});

export const { useGetPostsQuery, useGetPostQuery } = blogApi;