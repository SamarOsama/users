import React from 'react'
import Paths from './Routes'
import {

    BrowserRouter,
    Route,
    Routes
} from "react-router-dom";
import UserDetails from '../pages/UserDetails';
import UsersList from '../pages/UsersList';
import Register from '../forms/Register';
import Login from '../forms/Login';


export default function Navigation() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route exact path={'/'} element={<UsersList />} />
                    <Route path={Paths.UserDetails} element={<UserDetails />} />
                    <Route path={Paths.UserList} element={<UsersList />} />
                    <Route path={Paths.Register} element={<Register />} />
                    <Route path={Paths.Login} element={<Login />} />



                </Routes>

            </BrowserRouter>
        </div>
    )
}
