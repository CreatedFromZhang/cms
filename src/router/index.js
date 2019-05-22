import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from '../view/Login'
import Project from '../view/Project'
export default class Routers extends React.Component {
    render(){
        return <Router>
            <Route path="/" exact component={Login} />
            <Route path="/Project" exact component={Project} />
        </Router>;
    }
}