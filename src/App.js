import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch, useHistory, useLocation, Redirect } from 'react-router-dom'

import './App.css';
import Home from './components/home';
import Basicsurlpath from './components/basicsurlpath';
import Routeconfig from './components/routeconfig';
import "./components/logins.css";




function App() {
  return (
    <div className="App">
<div className="jumbotron textcenter">
    <h1>Hello world</h1>
    <h4>Bank of Kyrgyzstan</h4>
    </div>
   
    <Router>
     
      <nav className="navbar navbar-expand-sm bg-dark p-1  navbar-dark">
      <ul className="navbar-nav">
        <li className="nav-item active">
          <Link to="/" className="nav-link">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/basics" className="nav-link">Basic UrlPath</Link>
        </li>
        <li className="nav-item"> 
          <Link to="/protects" className="nav-link">Protected Page</Link>
        </li>
        <li className="nav-item"> 
          <Link to="/routconf" className="nav-link">Route config Page</Link>
        </li>
      </ul>
      </nav>
      <div className="container-fluid">
      <SignInOut/>
      <Switch>
        <Route exact path={"/"} component={Home}/>
        <Route path={"/basics"} component={Basicsurlpath}/>
        <Route path={"/login"} component={Login}/>
        <Route path={"/routconf"} component={Routeconfig}/>
        <RedirectRoutes path={"/protects"}><Protecteds/></RedirectRoutes> 
       
      </Switch>
      </div>
    </Router>
       </div>
  );
}
const fakeAuth = {
  isAuthon: false,
  signIn(ab){
    fakeAuth.isAuthon = true;
    setTimeout(ab, 1000)
  },
  singOut(ab){
    fakeAuth.isAuthon = false;
    setTimeout(ab, 1000)
  }
}
function SignInOut(){
  let history= useHistory();
  return(
fakeAuth.isAuthon ? (
  <p>
    Welcome to this web ! 
<button type="button" onClick={()=>fakeAuth.singOut(()=>history.push("/"))}>Sign Out</button>
  </p>
):("")
  )
}
function RedirectRoutes({children, ...rest}){
  
  return(
<Route {...rest}
render={({location})=>
fakeAuth.isAuthon ?(
  children):(
  <Redirect to={{
    pathname: "/login",
    state: { from: location}
  }}
  />
)}
/>
  )
}
function Login(){

let history = useHistory();
let location = useLocation();
let {from} = location.state || {from: {pathname: "/"}};
let login =()=>{
  fakeAuth.signIn(()=>{history.replace(from);
  });
}
return(
<div>
<div id="wholebody">
         <div id="login">
        <h3 className="text-center text-white pt-5">Login form</h3>
        <div className="container">
            <div id="login-row" className="row justify-content-center align-items-center">
                <div id="login-column" className="col-md-6">
                    <div id="login-box" className="col-md-10">
                        <form id="login-form" className="form" action="" method="post">
                            <h3 className="text-center text-info">Login</h3>
                            <div className="form-group">
                                <label for="username" className="text-info">Username:</label><br/>
                                <input type="text" name="username" id="username" className="form-control"/>
                            </div>
                            <div className="form-group">
                                <label for="password" className="text-info">Password:</label><br/>
                                <input type="password" name="password" id="password" className="form-control"/>
                            </div>
                            <div className="form-group">
                                <label for="remember-me" className="text-info">
                                    <span>Remember me</span> 
                                <span><input id="remember-me" name="remember-me" 
                                type="checkbox"/></span></label><br/>
                                
                                <button type="button" onClick={login}>Log in</button>
                            </div>
                            <div id="register-link" className="text-right">
                                <a href="./home.js" className="text-info">Register here</a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
  </div>
  </div>
  <p>You must log in to view the page at {from.pathname}</p>
  
 
</div>
  )
}
function Protecteds(){
  let history = useHistory();
  function handChange(){
    return history.push("/basics");
  }
return(
  <div>
<h1>This is Protected Page</h1>
<button type="button" onClick={handChange}>Go to Contact</button>
</div>
)
}

export default App;
