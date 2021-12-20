import { Redirect, Route } from "react-router-dom";

type PrivateRoutePropsType = {
  component: any,
  redirectPath: string,
  status: string,
  path: string
}

export const PrivateRoute = ({
  component: Component,
  redirectPath,
  status,
  path,
  ...rest
}: PrivateRoutePropsType) => (
  <Route
    {...rest}
   path={path} render={(props) => ((status === 'OK') ? <Component {...props} /> : <Redirect to={redirectPath} />)}
  />
);