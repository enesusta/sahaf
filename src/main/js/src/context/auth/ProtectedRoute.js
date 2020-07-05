import React from 'react'
import { Route, Redirect } from 'react-router-dom';
import { AuthConsumer } from './AuthContext';

export const ProtectedRoute = ({
                                   component: Component,
                                   ...rest
                               }) => (
    <Route
        {...rest}
        render={props =>
            <AuthConsumer>
                {(Auth) =>
                    <>
                        {Auth.isAuth ?
                            <Component {...props} />
                            :
                            <Redirect
                                to={{
                                    pathname: "/login",
                                    state: {
                                        from: props.location
                                    }
                                }}
                            />
                        }
                    </>
                }
            </AuthConsumer>
        }
    />
);