import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
  };
};
export type Users = User[];

const initialState: Users = [];

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setUsers: (state, action: PayloadAction<[]>) => {
      return action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setUsers } = usersSlice.actions;

export default usersSlice.reducer;
