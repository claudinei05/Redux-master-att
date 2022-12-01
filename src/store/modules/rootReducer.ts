import { combineReducers } from "@reduxjs/toolkit";

import login from "./LoginSlice";
import transaction from "./TransactionSlice";

export default combineReducers({
  login,
  transaction,
});
