import arrow from '../../../../assets/icons/rightArrow.svg';
import { NavigationLinksStyled, NavigationLinksContainer, ArrowStyled} from './NavigationLinks.styled';
import { APPOINTMENTS_LIST_PATH, USER_APPOINTMENT_PATH } from 'routes';

export function NavigationLinks () {
    return (
        <NavigationLinksContainer>
            <NavigationLinksStyled href={APPOINTMENTS_LIST_PATH}>Doctors</NavigationLinksStyled>
            <ArrowStyled src={arrow} alt="arrow" />
            <NavigationLinksStyled isActive href={USER_APPOINTMENT_PATH}>Make an appointment </NavigationLinksStyled>
        </NavigationLinksContainer>
    )
}