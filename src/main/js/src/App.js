import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Login from "./components/auth/Login";


function App() {
    return (
        <BrowserRouter>
            <div className="container">
                <Switch>
                    <Route exact path="/" component={() => 'home'}/>
                    <Route exact path="/login" component={Login}/>
               </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;
