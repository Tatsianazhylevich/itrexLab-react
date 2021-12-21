import { Redirect, Route } from "react-router-dom";

type PrivateRoutePropsType = {
  component: React.FC,
  redirectPath: string,
  isLogged: boolean,
  path: string
}

export const PrivateRoute = ({
  component: Component,
  redirectPath,
  isLogged,
  path,
  ...rest
}: PrivateRoutePropsType) => ( isLogged ? <Route exact {...rest} path={path} component={Component} /> : <Redirect to={redirectPath}/>);