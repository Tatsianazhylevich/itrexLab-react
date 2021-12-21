import {
    Switch,
    Route,
} from "react-router-dom";
import { MyAppointments, UserProfile, ResolutionsForUser, DoctorsResolutions, Patients } from "pages";
import { NavMenu } from "modules";
import { APPOINTMENTS_LIST_PATH, PATIENTS_LIST_PATH, PROFILE_LIST_PATH, RESOLUTION_DOCTOR_LIST_PATH, RESOLUTION_PATIENT_LIST_PATH} from "./routes";
import { navButtons } from "shared";

export function InnerUserRouter() {

    return(
        <div>
            <NavMenu
                buttons={navButtons.usersButtons}
            />
            <Switch>
                <Route exact path={PROFILE_LIST_PATH} component={UserProfile} />
                <Route exact path={APPOINTMENTS_LIST_PATH} component={MyAppointments} />
                <Route exact path={RESOLUTION_PATIENT_LIST_PATH} component={ResolutionsForUser} />
            </Switch>
        </div>   
    )
}


export function InnerDoctorRouter() {
    return(
        <div>
            <NavMenu
                buttons={navButtons.doctorsButtons}
            />
            <Switch>
                <Route exact path={PATIENTS_LIST_PATH} component={Patients} />
                <Route exact path={RESOLUTION_DOCTOR_LIST_PATH} component={DoctorsResolutions} />
            </Switch>
        </div>   
    )
}

