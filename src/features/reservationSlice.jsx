import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const reservationsSlice = createSlice({
  name: "reservations",
  initialState,
  reducers: {
    addReservation: (state, action) => {
      state.items.push(action.payload);
    },
  },
});

export const { addReservation } = reservationsSlice.reducer;
export default reservationsSlice.reducer;
