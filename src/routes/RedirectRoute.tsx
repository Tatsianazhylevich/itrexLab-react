import { Children } from "react";
import { Redirect, Route } from "react-router-dom";

interface PrivateRouteProps {
    logStatus: string,
    pathTo: string,
    redirect: string
  }

export const RedirectRoute = ({logStatus, pathTo, redirect}: PrivateRouteProps) => {
    return logStatus === 'OK' ? <Redirect to={pathTo} /> : <Redirect to={redirect}/>
} 