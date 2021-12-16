export interface Appointment {
    id: 'string',
    reason: 'string',
    note: 'string',
    patient_id: 'string',
    doctor_id: 'string',
    visit_date: 'string',
    status: 'string',
  }
  
export interface AppointmentForPatient extends Appointment {
    doctor: {
      last_name: 'string',
      first_name: 'string',
      id: 'string',
      photo: 'string',
      specialization_name: 'string',
    };
}
  
export interface AppointmentForDoctor extends Appointment {
    patient: {
      last_name: 'string',
      first_name: 'string',
      id: 'string',
      photo: 'string',
    };
}

export interface AppointmentData {
    date: string;
    reason: string;
    note: string;
    doctorID: string;
}
  
export interface NewAppointmentResponse {
    id: 'string',
    patient_id: 'string',
    doctor_id: 'string',
    visit_date: 'string',
    reason: 'string',
    note: 'string',
    status: 'string'
}

export type OccupationType = {
    specialization_name: string
    id: string
}

export type DoctorsBySpecializationIdResponseType = {
    first_name: string
    last_name: string
    id: string
}
  
export type SpecializationsResponseType = Array<OccupationType>

export type FreeTimeType = {
    date: string | number | null,
    doctorId: string
}