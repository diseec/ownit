import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import counterSlice from "@/features/counter/counter";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import productMotionSlice from "./product-motion";
import { authSlice } from "./useAuth";

// store
export const store = configureStore({
  reducer: {
    counter: counterSlice,
    productMotion: productMotionSlice,
    auth: authSlice.reducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

// hooks
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
