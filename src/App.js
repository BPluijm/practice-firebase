import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home/Home';
import SignIn from "./pages/SignIn/SignIn";
import SignUp from "./pages/SignUp/SignUp";
import Profile from "./pages/Profile/Profile";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import './App.css';

function App() {
    return (
        <>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/sign-in" exact component={SignIn}/>
                <Route path="/sign-up" exact component={SignUp}/>
                <PrivateRoute path="/profile">
                    <Profile/>
                </PrivateRoute>
            </Switch>
        </>
    );
}

export default App;
