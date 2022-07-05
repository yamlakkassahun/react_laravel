import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../../app/store";
import { environment } from "../../config/Environment";
import { Book } from "../../types/Book";

// Define a service using a base URL and expected endpoints
export const BookApi = createApi({
  reducerPath: "bookApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${environment.URL}`,
  }),
  tagTypes: ["Book"],
  endpoints: (builder) => ({
    getBooks: builder.query<Book[], void>({
      query: () => `books`,
      providesTags: ['Book']
    }),
    getBook: builder.query<Book, number>({
      query: (id) => `book/${id}`,
      providesTags: ['Book']
    }),
    addBook: builder.mutation<Book, {}>({
      query(body) {
        return {
          url: `book-add`,
          method: "POST",
          body,
        };
      },
      // this will refresh the lists automatically.
      invalidatesTags: ["Book"],
    }),
    updateBook: builder.mutation<Book, Partial<Book>>({
      query(data) {
        const { id, ...body } = data
        return {
          url: `book/${id}`,
          method: 'PATCH',
          body,
        }
      },
      invalidatesTags: ["Book"],
    }),
    deleteBook: builder.mutation<{ success: boolean; id: number }, number>({
      query(id) {
        return {
          url: `book/${id}`,
          method: 'DELETE',
        }
      },
      invalidatesTags: ["Book"]
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetBooksQuery, useGetBookQuery, useAddBookMutation, useDeleteBookMutation, useUpdateBookMutation } = BookApi;