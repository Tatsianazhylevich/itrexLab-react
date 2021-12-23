import Loader from "react-loader-spinner";
import { colors } from "theme";
import { SpinnerStyled } from './Spinner.style';


export function Spinner() {
 return (
     <SpinnerStyled>
        <Loader type="Puff" color={colors.solidgrey} height={100} width={100} />
     </SpinnerStyled>
     
 )
}