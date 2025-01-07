import { configureStore } from "@reduxjs/toolkit";
import selectedCrayon from "../features/selectedCrayon/selectedCrayonSlice.ts";

export const store = configureStore({
  reducer: {
    selectedCrayon: selectedCrayon,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
