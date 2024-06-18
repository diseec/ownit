import { createSlice } from "@reduxjs/toolkit";
import { produce } from "immer";

type InitialState = {
  coordinates: { [key: string]: { x: number }[] };
};

const initialState: InitialState = {
  coordinates: {},
};

const motion = createSlice({
  name: "productMotionSlice",
  initialState,
  reducers: {
    setCoordinates: (state, action) => {
      state.coordinates = produce(state.coordinates, (draft) => {
        draft[action.payload.index] = action.payload.coordinates;
      });
    },
  },
});

export const { setCoordinates } = motion.actions;
export default motion.reducer;
