import { ResolutionsTableRow, ResolutionsTableCell } from "./DoctorResolutions.styles";
import { DoctorsResolutionTableRowProps } from "pages";



export function DoctorsResolutionTableRow({ 
    firstName,
    lastName,
    resolution,
    visitDate,
    nextVisit,
    actions

 }: DoctorsResolutionTableRowProps) {
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