import { format } from 'date-fns';
import { ResolutionsTable, HeaderCell, ResolutionsTableHead } from './DoctorResolutions.styles';
import { DoctorsResolutionTableRow } from './DoctorsResolutionsTableRow';
import { ResolutionForDoctor, DoctorResolutionType } from 'pages';


export function DoctorsResolutionsTable({resolutions}: DoctorResolutionType) {

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
            {resolutions.map((resolution: ResolutionForDoctor) => (
                <DoctorsResolutionTableRow
                    key={resolution.id}
                    firstName={resolution.patient.first_name}
                    lastName={resolution.patient.last_name}
                    resolution={resolution.resolution}
                    visitDate={format(new Date(resolution.visit_date), 'MM/dd/yy')}
                    nextVisit={format(new Date(resolution.next_appointment_date), 'MM/dd/yy')}
              />
            ))}
        </tbody>
    </ResolutionsTable>
    );
}