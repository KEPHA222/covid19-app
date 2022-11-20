import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// const options = {
//   method: "GET",
//   headers: {
//     "x-rapidapi-key": "d28d2bf077mshe2e45e344bbc036p1a38b8jsna7170ce70020",
//     "X-RapidAPI-Host": "covid-193.p.rapidapi.com",
//   },
// };

// fetch("https://covid-193.p.rapidapi.com/statistics", options)
//   .then((response) => response.json())
//   .then((response) => console.log(response))
//   .catch((err) => console.error(err));

export const shazamCoreApi = createApi({
  reducerPath: "shazamCoreApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://covid-193.p.rapidapi.com",
    prepareHeaders: (headers) => {
      headers.set(
        "x-rapidapi-key",
        "d28d2bf077mshe2e45e344bbc036p1a38b8jsna7170ce70020"
      );

      return headers;
    },
  }),
  endpoints: (builder) => ({
    getTopCharts: builder.query({ query: () => "/statistics" }),

    getSongsBySearch: builder.query({
      query: (searchTerm) => `/statistics?country=${searchTerm}`,
    }),

    getTopChartsHistory: builder.query({
      query: (time) => `/history?day=${time}`,
    }),
  }),
});

export const {
  useGetTopChartsQuery,
  useGetSongsBySearchQuery,
  useGetTopChartsHistoryQuery,
} = shazamCoreApi;
