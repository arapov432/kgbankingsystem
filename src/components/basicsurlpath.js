import React from 'react'
import { BrowserRouter as Router, Route, Link, useRouteMatch } from 'react-router-dom'
import Search from './search';

export default function Basicsurlpath() {
    let {path, url} = useRouteMatch();
    return (
        <Router>
        <div>
            <ul>
                <li>
                    <Link to={`${url}/`}>Applications</Link>
                </li>
                <li>
                    <Link to={`${url}/devices`}>Devices</Link>
                </li>
                <li>
                    <Link to={`${url}/platform`}>Platform</Link>
                </li>
               
            </ul>
            <hr/>
            <Route exact path={`${path}/`} component={Applications}/>
            <Route path={`${path}/devices`} component={Devices}/>
            <Route path={`${path}/platform`} component={Platform}/>
       
        </div>
        </Router>
    )
}

function Applications() {
    return (
      <div>
        <h2>Applications pages </h2>
      </div>
    );
  }
  
  function Devices() {
    return (
      <div>
        <h2>About Device page</h2>
      </div>
    );
  }
  
  function Platform() {
    return (
      <div>
        <h2>Platform Dashboard</h2>
      </div>
    );
  }