import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
    reducerPath: 'api', 
    baseQuery: fetchBaseQuery({ baseUrl: 'https://19429ba06ff2.vps.myjino.ru/api' }), 
    endpoints: (builder) => ({
    //getPosts: builder.query({
    //    query: () => 'posts', 
    //}),
    signup: builder.mutation({
        query: (user) => ({
        url: 'signup',
        method: 'POST',
        body: user,
        }),
    }),
    signin: builder.mutation({
        query: (user) => ({
        url: 'signin',
        method: 'POST',
        body: user,
        }),
    }),
    }),
});

export const { useSignupMutation, useSigninMutation } = api; 