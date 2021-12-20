import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import { MyAppointments, UserProfile, ResolutionsForUser, DoctorsResolutions, Patients, AppointmentsView } from "pages";
import { NavMenu } from "modules";
import { USER_APPOINTMENT_PATH, APPOINTMENTS_LIST_PATH, PATIENTS_LIST_PATH, PROFILE_LIST_PATH, RESOLUTION_DOCTOR_LIST_PATH, RESOLUTION_PATIENT_LIST_PATH} from "./routes";
import { navButtons } from "shared";
import { SelectDoctorForm } from "pages/Appointments/components/SelectDoctorForm";

export function InnerUserRoute() {
    return(
        <Router>
            <NavMenu
                buttons={navButtons.usersButtons}
            />
            <Switch>
                <Route exact path={PROFILE_LIST_PATH}>
                    <UserProfile />
                </Route>
                <Route exact path={APPOINTMENTS_LIST_PATH}>
                    <MyAppointments />
                </Route>
                <Route exact path={RESOLUTION_PATIENT_LIST_PATH}>
                    < ResolutionsForUser />
                </Route>
                <Route exact path={USER_APPOINTMENT_PATH} component={SelectDoctorForm} />
            </Switch>
        </Router>   
    )
}


export function InnerDoctorRoute() {
    return(
        <Router>
            <NavMenu
                buttons={navButtons.doctorsButtons}
            />
            <Switch>
                <Route exact path={PATIENTS_LIST_PATH}>
                    <Patients />
                </Route>
                <Route path={RESOLUTION_DOCTOR_LIST_PATH}>
                    < DoctorsResolutions />
                </Route>
            </Switch>
        </Router>   
    )
}

