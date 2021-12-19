import Loader from "react-loader-spinner";
import { colors } from "theme";


export function Spinner() {
 return (
     <Loader type="Puff" color={colors.solidgrey} height={80} width={80} />
 )
}