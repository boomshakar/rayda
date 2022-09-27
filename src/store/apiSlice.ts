import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
	reducerPath: "api",
	baseQuery: fetchBaseQuery({
		baseUrl: "https://currency-converter5.p.rapidapi.com/currency",
		prepareHeaders: (headers, { getState }) => {
			headers.set("X-RapidAPI-Key", "f3666f333cmsh302b5634d41171bp1f5ceajsn7e396f7db55c");
			headers.set("X-RapidAPI-Host", "currency-converter5.p.rapidapi.com");

			return headers;
		},
	}),
	endpoints: (builder) => ({
		getCurrencyRate: builder.query({
			query: (cred) => ({
				url: `convert?format=json&from=${cred.from}&to=${cred.to}&amount=1`,
				method: "GET",
				body: cred,
			}),
		}),
	}),
});

export const { useGetCurrencyRateQuery } = apiSlice;
