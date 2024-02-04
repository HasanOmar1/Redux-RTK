import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const url = "https://65bf42c625a83926ab94b075.mockapi.io/users";

const fetchingData = createApi({
  reducerPath: "data",
  tagTypes: ["Data"],
  baseQuery: fetchBaseQuery({ baseUrl: url }),
  endpoints: (builder) => ({
    getContacts: builder.query({
      query: () => "/users",
      providesTags: ["Data"],
    }),
    getContactById: builder.query({
      query: (id) => `/users/${id}`,
      providesTags: ["Data"],
    }),
    addContact: builder.mutation({
      query: (contact) => ({
        url: "/users",
        method: "POST",
        body: contact,
      }),
      invalidatesTags: ["Data"],
    }),
    updateContact: builder.mutation({
      query: (id, ...rest) => ({
        url: `/users/${id}`,
        method: "PUT",
        body: rest,
      }),
      invalidatesTags: ["Data"],
    }),
    deleteContact: builder.mutation({
      query: (id) => ({
        url: `/users/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Data"],
    }),
  }),
});

export const {
  useGetContactsQuery,
  useGetContactByIdQuery,
  useAddContactMutation,
  useUpdateContactMutation,
  useDeleteContactMutation,
} = fetchingData;

import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    [fetchingData.reducerPath]: fetchingData.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(fetchingData.middleware),
});
