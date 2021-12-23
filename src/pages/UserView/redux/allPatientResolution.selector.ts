import { RootState } from 'store/store';

export const patientResolutions = (state: RootState) => state.patientResolutions.resolutions;
export const loadingForResolutions = (state: RootState) => state.patientResolutions.loading;