import React from 'react'
import {Route} from 'react-router-dom';
import {AuthConsumer} from './AuthContext';
import styled from 'styled-components';

const Li = styled.li`
  margin-top: 100px;
  list-style: none;
  text-align: center;
  align-self: center;
  justify-self: center;
`;

export const AdminRoute = ({
                               component: Component,
                               ...rest
                           }) => (
    <Route
        {...rest}
        render={props =>
            <AuthConsumer>
                {(Auth) =>
                    <>
                        {Auth.isAuth && localStorage.getItem('user') === 'enesusta' ?
                            <Component {...props} />
                            :
                            <Li>Bu sayfayı görüntülemek için gerekli izinlere sahip değilsiniz.</Li>
                        }
                    </>
                }
            </AuthConsumer>
        }
    />
);
