export interface OptionType {
  value: string,
  label: string
}

export interface FreeTimeType {
  date: string,
  doctorId: string
}

export interface SpecializationType {
  specialization_name: string,
  id: string
}

export interface DoctorType {
  first_name: string,
  last_name: string,
  id: string
}

export interface AppointmentType {
  id: string,
  patient_id: string,
  doctor_id: string,
  visit_date: string,
  reason: string,
  note: string,
  status: string
}

export interface Appointment {
  id: 'string',
  reason: 'string',
  note: 'string',
  patient_id: 'string',
  doctor_id: 'string',
  visit_date: 'string',
  status: 'string',
}

export interface AppointmentForDoctor extends Appointment {
  patient: {
    last_name: 'string',
    first_name: 'string',
    id: 'string',
    photo: 'string',
  };
}
export interface DoctorAppointmentsType {
  appointments: AppointmentForDoctor[]
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

export interface PatientAppointmentsType {
  appointments: AppointmentForPatient[]
}