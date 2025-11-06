import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { apiSlice } from "../features/api/apiSlice";

export const store = configureStore({
  reducer: {
    // RTK Query API slice
    [apiSlice.reducerPath]: apiSlice.reducer,

    // Regular Redux slices
  },
  // Add RTK Query middleware
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});
// Enable refetchOnFocus/refetchOnReconnect behaviors
setupListeners(store.dispatch);
