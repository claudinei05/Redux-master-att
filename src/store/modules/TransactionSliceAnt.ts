import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import Operations from "../../types/OperationsType";

interface TransactionSlice {
  id: number;
  balance: number;
  withdraw: Array<Operations>;
  deposit: Array<Operations>;
}

const initialState = {
  id: 0,
  balance: 1000,
  withdraw: [],
  deposit: [],
} as TransactionSlice;

const transactionSlice = createSlice({
  name: "transactions",
  initialState,
  reducers: {
    addValue(state, action: PayloadAction<number>) {
      state.balance += action.payload;
    },
    subValue(state, action: PayloadAction<number>) {
      state.balance -= action.payload;
    },
    doWithdraw(state, action: PayloadAction<Operations>) {
      state.withdraw.push(action.payload);
    },
    doDeposit(state, action: PayloadAction<Operations>) {
      state.deposit.push(action.payload);
    },
  },
});

export const { addValue, subValue, doWithdraw, doDeposit } =
  transactionSlice.actions;
export default transactionSlice.reducer;
