import React from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'

const routes =[{
    path: "/sandwich",
    component: Sandwichs},
    {
        path: "/tacos",
        component: Tacos,
        routes: [
            {
                path: "/tacos/bus",
                component: Bus,
            },
            {
                path: "/tacos/cart",
                component: Cart
            }

        ]
    }
];

export default function Routeconfig() {
    return (
        <Router>
        <div>
        <ul>
            <li>
                <Link to="/tacos">Tacos</Link>
                </li>
                <li>
                    <Link to="/sandwich">Sandwichs</Link>
                    </li>
                    </ul>    
        <Switch>
            {routes.map((route, i)=>(
                <RouteWithSubRoutes key={i} {...route}/>
            ))}
        </Switch>
        </div>
        </Router>
    );
}
function RouteWithSubRoutes(route){
return (
    <Route 
    path={route.path}
    render={props=>(
        //pass the sub-routes dwon to keep nesting
        <route.component {...props} routes= {route.routes}/>
    )}
    />
);
}
function Sandwichs(){
    return <h1>Sandwiches here</h1>
}
function Tacos({routes}){
    return(
        <div>
            <h2>Tacos</h2>
            <ul>
                <li>
                    <Link to="/tacos/bus">Bus</Link>
                </li>
                <li>
                    <Link to="/tacos/cart">Cart</Link>
                </li>
            </ul>
            <Switch>
                {routes.map((route, i)=>(
                    <RouteWithSubRoutes key={i} {...route}/>
                ))}
            </Switch>
        </div>
    )
}
function Bus(){
    return <h1>Bus page is here</h1>
}
function Cart(){
    return <h1>The cart is goes here</h1>
}