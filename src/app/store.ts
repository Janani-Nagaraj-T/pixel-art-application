import { configureStore } from "@reduxjs/toolkit";
import selectedCrayon from "../features/selectedCrayon/selectedCrayonSlice.ts";
import gameLevel from "../features/gameLevel/gameLevel.ts";

export const store = configureStore({
  reducer: {
    selectedCrayon: selectedCrayon,
    gameLevel: gameLevel,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
