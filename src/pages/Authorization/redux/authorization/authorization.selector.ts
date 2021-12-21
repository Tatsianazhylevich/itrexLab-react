import { RootState } from "store/store";

export const getStatus = (state: RootState) => state.login.status;
export const getStateOfLog = (state: RootState) => state.login.isLogged;
