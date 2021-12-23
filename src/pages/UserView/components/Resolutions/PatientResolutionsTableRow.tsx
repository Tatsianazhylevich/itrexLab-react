import { ResolutionsTableRow, ResolutionsTableCell } from "./PatientResolutions.styles";
import { PatientResolutionTableRowProps } from "pages";



export function PatientResolutionTableRow({ 
    firstName,
    lastName,
    resolution,
    visitDate,
    nextVisit,
    actions

 }: PatientResolutionTableRowProps) {
    return (
        <ResolutionsTableRow>
            <ResolutionsTableCell>{firstName}</ResolutionsTableCell>
            <ResolutionsTableCell>{lastName}</ResolutionsTableCell>
            <ResolutionsTableCell>{resolution}</ResolutionsTableCell>
            <ResolutionsTableCell>{visitDate}</ResolutionsTableCell>
            <ResolutionsTableCell>{nextVisit}</ResolutionsTableCell>
            <ResolutionsTableCell>{actions}</ResolutionsTableCell>
        </ResolutionsTableRow>
    )
} 