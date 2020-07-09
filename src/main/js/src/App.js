import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Login from "./components/auth/Login";
import Navbar from "./components/nav/Navbar";
import {ProtectedRoute} from "./context/auth/ProtectedRoute";
import Profile from "./components/profile/Profile";
import Footer from "./components/footer/Footer";
import Register from "./components/auth/Register";


function App() {
    return (
        <BrowserRouter>
            <div className="container">
                <Navbar/>
                <Switch>
                    <Route exact path="/" component={() => 'home'}/>
                    <Route exact path="/login" component={Login}/>
                    <Route exact path="/register" component={Register}/>

                    <ProtectedRoute exact path="/profile" component={Profile}/>
                </Switch>
                <Footer/>
            </div>
        </BrowserRouter>
    );
}

export default App;
