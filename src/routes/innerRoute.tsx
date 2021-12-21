import {
    Switch,
    Route,
} from "react-router-dom";
import { MyAppointments, UserProfile, ResolutionsForUser, DoctorsResolutions, Patients } from "pages";
import { NavMenu } from "modules";
import { USER_APPOINTMENT_PATH, APPOINTMENTS_LIST_PATH, PATIENTS_LIST_PATH, PROFILE_LIST_PATH, RESOLUTION_DOCTOR_LIST_PATH, RESOLUTION_PATIENT_LIST_PATH} from "./routes";
import { navButtons } from "shared";
import { SelectDoctorForm } from "pages/Appointments/components/SelectDoctorForm";

export function InnerUserRoute() {
    return(
        <div>
            <NavMenu
                buttons={navButtons.usersButtons}
            />
            <Switch>
                <Route exact path={PROFILE_LIST_PATH} component={UserProfile} />
                <Route exact path={APPOINTMENTS_LIST_PATH} component={MyAppointments} />
                <Route exact path={RESOLUTION_PATIENT_LIST_PATH} component={ResolutionsForUser} />
                <Route exact path={USER_APPOINTMENT_PATH} component={SelectDoctorForm} />
            </Switch>
        </div>   
    )
}


export function InnerDoctorRoute() {
    return(
        <div>
            <NavMenu
                buttons={navButtons.doctorsButtons}
            />
            <Switch>
                <Route exact path={PATIENTS_LIST_PATH} component={Patients} />
                <Route path={RESOLUTION_DOCTOR_LIST_PATH} component={DoctorsResolutions} />
            </Switch>
        </div>   
    )
}

