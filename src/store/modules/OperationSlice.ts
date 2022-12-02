import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { RootState } from "..";
import OperationsType from "../../types/OperationsType";

const adapter = createEntityAdapter<OperationsType>({
  selectId: (item) => item.id,
});

export const { selectAll: selectOperations, selectById: selectOperationsById } =
  adapter.getSelectors((state: RootState) => state.operation);

const sliceOperation = createSlice({
  name: "operation",
  initialState: adapter.getInitialState({ status: "" }),
  reducers: {
    addOperation: adapter.addOne,
    //   addMany: adapter.addMany,
    //   updateContact: adapter.updateOne,
    //   deleteContact: adapter.removeOne,
    //   deleteContacts: adapter.removeAll,
  },
});

export const { addOperation } = sliceOperation.actions;
export default sliceOperation.reducer;
