import { combineReducers } from "@reduxjs/toolkit";

import login from "./LoginSlice";
import balance from "./BalanceSlice";
import operation from "./OperationSlice";

export default combineReducers({
  balance,
  operation,
  login,
});
