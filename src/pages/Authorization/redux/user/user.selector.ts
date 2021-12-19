import { RootState } from "store/store";

export const getUserProfile = (state: RootState) => state.user.profile;
