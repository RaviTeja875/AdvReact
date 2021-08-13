import React from 'react'
import About from './About';
import Home from './Home';
import Error from './Error';
import NavBar from './NavBar';
import People from './People';
import Person from './Person';
import {BrowserRouter as Router, Route, Switch } from "react-router-dom";
//we want to use our router in our web page so that we would 
//require a router which can route our components to there respective links 
//adn we would require some kind of switch to enable or disable our router

function ReactRouterDom() {
    return (
        <Router>
           <Route path="/">
               <Home />
           </Route>
           <Route path="/">
               <About />
           </Route>
           <Route path="/">
               <Error />
           </Route>
           <Route path="/">
               <People />
           </Route>
        </Router>
    )
}

export default ReactRouterDom
