import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Login from "./components/auth/Login";
import Navbar from "./components/nav/Navbar";
import {ProtectedRoute} from "./context/auth/ProtectedRoute";
import {Profile, ProfileWrapper} from "./components/profile/Profile";
import Footer from "./components/footer/Footer";
import Register from "./components/auth/Register";
import Author from "./components/author/Author";
import Authors from "./components/author/Authors";
import {AdminRoute} from "./context/auth/AdminRoute";
import Admin from "./components/admin/Admin";


function App() {
    return (
        <BrowserRouter>
            <div className="container">
                <Navbar/>
                <Switch>
                    <Route exact path="/" component={() => 'home'}/>
                    <Route exact path="/login" component={Login}/>
                    <Route exact path="/register" component={Register}/>
                    <Route exact path="/author/:username" component={Author}/>
                    <Route exact path="/authors" component={Authors}/>
                    <AdminRoute exact path="/admin" component={Admin}/>
                    <ProtectedRoute path="/profile" component={Profile}/>
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;
