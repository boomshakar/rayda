import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
	reducerPath: "api",
	baseQuery: fetchBaseQuery({
		baseUrl: "https://currency-converter5.p.rapidapi.com/currency",
		headers: {
			"X-RapidAPI-Key": "f3666f333cmsh302b5634d41171bp1f5ceajsn7e396f7db55c",
			"X-RapidAPI-Host": "currency-converter5.p.rapidapi.com",
		},
	}),
	endpoints: (builder) => ({
		getCurrencyRate: builder.mutation({
			query: (cred) => ({
				url: `/historical/2020-01-20?from=${cred.from}?to=${cred.to}?amount=1?format=json`,
				method: "POST",
				body: cred,
			}),
		}),
	}),
});

export const { useGetCurrencyRateMutation } = apiSlice;
