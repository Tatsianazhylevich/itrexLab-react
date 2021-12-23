export interface DoctorsResolutionTableRowProps {
    firstName: string,
    lastName:  string,
    resolution:  string,
    visitDate:  string,
    nextVisit:  string,
    actions?: JSX.Element |(() => void)
}

export interface Resolution {
    id: 'string',
    appointment_id: 'string',
    next_appointment_date: 'string',
    resolution: 'string',
    doctor_id: 'string',
    visit_date: 'string',
}
  
export interface ResolutionForDoctor extends Resolution {
    patient: {
        last_name: 'string',
        first_name: 'string',
        id: 'string',
        photo: 'string',
    };
}

export interface DoctorResolutionType {
    resolutions: ResolutionForDoctor[]
}