import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import BalanceType from "../../types/BalanceType";

const initialState = {
  balance: 1000,
} as BalanceType;

const balanceSlice = createSlice({
  name: "balance",
  initialState,
  reducers: {
    addBalance(state, action: PayloadAction<number>) {
      state.balance += action.payload;
    },
    subBalance(state, action: PayloadAction<number>) {
      state.balance -= action.payload;
    },
  },
});

export const { addBalance, subBalance } = balanceSlice.actions;
export default balanceSlice.reducer;
