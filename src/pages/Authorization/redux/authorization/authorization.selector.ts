import { RootState } from "store/store";

export const getStatus = (state: RootState) => state.login.status;
