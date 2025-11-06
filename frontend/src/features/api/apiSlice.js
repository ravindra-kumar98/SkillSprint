import { fetchBaseQuery } from "@reduxjs/toolkit/query";

// Base query with auth token
const baseQuery = fetchBaseQuery({
  baseUrl: "https://api.example.com",
  prepareHeaders: (headers, { getState }) => {},
});
