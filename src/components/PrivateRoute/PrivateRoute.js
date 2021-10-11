import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../../hooks/useAuth';

/* 
Redirects(Auth) from react router.
A wrapper for <Route> that redirects to the login.
*/
const PrivateRoute = ({ children, ...rest }) => {
    const { user } = useAuth();

    return (
        <Route
            {...rest}
            render={({location}) => user.email ?
                children
                :
                <Redirect
                    to={{
                        pathname: "/signin",
                        state: { from: location }
                    }}
                />
            }
        />
    );
};

export default PrivateRoute;