import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const url = "https://65bf42c625a83926ab94b075.mockapi.io/users";

export const contactsApi = createApi({
  reducerPath: "contactsApi",
  tagTypes: ["Contacts"],
  baseQuery: fetchBaseQuery({ baseUrl: url }),
  endpoints: (builder) => ({
    contacts: builder.query({
      query: () => "/users",
      providesTags: ["Contacts"],
    }),

    contact: builder.query({
      query: (id) => `/users/${id}`,
      providesTags: ["Contacts"],
    }),

    addContact: builder.mutation({
      query: (contact) => ({
        url: "/users",
        method: "POST",
        body: contact,
      }),
      invalidatesTags: ["Contacts"],
    }),

    updateContact: builder.mutation({
      query: (updatedContact) => ({
        url: `users/${updatedContact.id}`,
        method: "PUT",
        body: updatedContact,
      }),
      invalidatesTags: ["Contacts"],
    }),

    deleteContact: builder.mutation({
      query: (id) => ({
        url: `users/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Contacts"],
    }),
  }),
});

export const {
  useContactsQuery,
  useContactQuery,
  useAddContactMutation,
  useUpdateContactMutation,
  useDeleteContactMutation,
} = contactsApi;
