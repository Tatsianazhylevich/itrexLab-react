import { format } from 'date-fns';
import { ResolutionsTable, HeaderCell, ResolutionsTableHead, More } from './PatientResolutions.styles';
import { PatientResolutionTableRow } from './PatientResolutionsTableRow';
import { ResolutionForPatient, PatientResolutionType } from 'pages';

export function PatientResolutionsTable({resolutions}: PatientResolutionType) {

    return (
     <ResolutionsTable>
        <thead>
            <ResolutionsTableHead>
                <HeaderCell>First Name</HeaderCell>
                <HeaderCell>Last Name</HeaderCell>
                <HeaderCell>Resolution</HeaderCell>
                <HeaderCell>Visit Date</HeaderCell>
                <HeaderCell>Next Visit</HeaderCell>
                <HeaderCell>Actions</HeaderCell>
            </ResolutionsTableHead>  
        </thead>
        <tbody>
            {resolutions.map((resolution: ResolutionForPatient) => (
                <PatientResolutionTableRow
                    key={resolution.id}
                    firstName={resolution.doctor.first_name}
                    lastName={resolution.doctor.last_name}
                    resolution={resolution.resolution}
                    visitDate={format(new Date(resolution.visit_date), 'MM/dd/yy')}
                    nextVisit={format(new Date(resolution.next_appointment_date), 'MM/dd/yy')}
                    actions={<More />}
              />
            ))}
        </tbody>
    </ResolutionsTable>
    );
}