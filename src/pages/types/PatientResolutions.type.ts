import { Resolution } from './DoctorResolutions.type';

export interface PatientResolutionTableRowProps {
    firstName: string,
    lastName:  string,
    resolution:  string,
    visitDate:  string,
    nextVisit:  string,
    actions?: JSX.Element |(() => void)
}
  
export interface ResolutionForPatient extends Resolution {
    doctor: {
        last_name: 'string',
        first_name: 'string',
        id: 'string',
        photo: 'string',
    };
}

export interface PatientResolutionType {
    resolutions: ResolutionForPatient[]
}