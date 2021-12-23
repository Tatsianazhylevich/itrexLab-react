import { RootState } from 'store/store';

export const doctorsResolutions = (state: RootState) => state.doctorResolutions.resolutions;
export const loadingForDoctorsResolutions = (state: RootState) => state.doctorResolutions.loading;