import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const key = import.meta.env.VITE_KEY;

export const bookSearchApi = createApi({
  reducerPath: "bookSearchApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://www.googleapis.com/books/v1/volumes/",
  }),
  endpoints: (builder) => ({
    getBooks: builder.query({
      query: () => ({
        url: "",
        params: {
          q: "intitle:flower",
          orderBy: "newest",
          key,
        },
      }),
    }),
    getBooksSearch: builder.query({
      query: (searchParam) => ({
        url: "",
        params: {
          q: `intitle:${searchParam}`,
          orderBy: "newest",
          key,
        },
      }),
    }),
    getBookById: builder.query({
      query: (id) => `${id}`,
    }),
  }),
});

export const { useGetBooksQuery, useGetBooksSearchQuery, useGetBookByIdQuery } =
  bookSearchApi;
