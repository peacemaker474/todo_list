import React from 'react';
import { 
    BrowserRouter as Router, 
    Route, 
    Switch,
} from "react-router-dom";
import Home from '../Views/Home';
import Login from '../Views/Login';

const Routers = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/login" exact component={Login} />
            </Switch>
        </Router>
    );
};

export default Routers;
