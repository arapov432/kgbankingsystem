import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  
} from "react-router-dom";
import Search from "./search";
import Contacts from "./contacts";
//import Home from "./home";


const routes =[
    {path: "/",
    exact: true,
    sidebar: ()=><h1>Main page is here</h1>,
    main: ()=>  <h1> Home page is less fun </h1>
},
{
    path: "/search",
    sidebar: ()=> <h1>Search is here</h1>,
    main: ()=> <Search/>
},
{
    path:'/contacts',
    sidebar: ()=> <h1>Contacts here</h1>,
    main:()=> <Contacts/>
}
]

export default function SidebarExample() {
  return (
    <Router>
         <div style={{ display: "flex" }}>
        <div
          style={{
            padding: "10px",
            width: "40%",
            background: "#f0f0f0"
          }}
        >
        <ul style={{ listStyleType: "none", padding: 0 }}>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to='/search'>Search</Link>
            </li>
            <li>
                <Link to="/contacts">Contacts</Link>
            </li>
        </ul>
      <Switch>
        
        {routes.map((route, index)=>(
            <Route 
            key={index}
            path={route.path}
            exact={route.exact}
            children={<route.sidebar/>}
/>            
        ))}
        </Switch>
</div>
<div style={{ flex: 1, padding: "10px" }}>
               <Switch>
                   {routes.map((route, index)=>(
                       <Route 
                       key={index}
                       path={route.path}
                       exact={route.exact}
                       children={<route.main/>}
                       />
                   ))}
                   </Switch>    
                   </div>
     </div>
    </Router>
  );
}



