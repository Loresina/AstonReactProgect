import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import type { BooksInfo, OneBookInfo } from "../types/dataTypes";

const key = import.meta.env.VITE_KEY;

export const bookSearchApi = createApi({
  reducerPath: "bookSearchApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://www.googleapis.com/books/v1/volumes/",
  }),
  endpoints: (builder) => ({
    getBooks: builder.query<{ items: BooksInfo[] }, string>({
      query: () => ({
        url: "",
        params: {
          q: "intitle:flowers",
          orderBy: "newest",
          key,
        },
      }),
    }),
    getBooksSearch: builder.query<{ items: BooksInfo[] }, string>({
      query: (searchParam) => ({
        url: "",
        params: {
          q: `intitle:${searchParam}`,
          orderBy: "newest",
          key,
        },
      }),
    }),
    getBookById: builder.query<OneBookInfo, string>({
      query: (id) => `${id}`,
      transformResponse: (rawResult: { volumeInfo: OneBookInfo }) => {
        return rawResult.volumeInfo;
      },
    }),
  }),
});

export const { useGetBooksQuery, useGetBooksSearchQuery, useGetBookByIdQuery } =
  bookSearchApi;
