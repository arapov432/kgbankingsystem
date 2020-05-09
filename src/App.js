import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch, useHistory, useLocation, Redirect } from 'react-router-dom'

import './App.css';
import Home from './components/home';
import Basicsurlpath from './components/basicsurlpath';

function App() {
  return (
    <div className="App">
    <h1>Hello world</h1>
    <Router>
      <SignInOut/>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/basics">Basic UrlPath</Link>
        </li>
        <li>
          <Link to="/protects">Protected Page</Link>
        </li>
      </ul>
      <Switch>
        <Route exact path={"/"} component={Home}/>
        <Route path={"/basics"} component={Basicsurlpath}/>
        <Route path={"/login"} component={Login}/>
        <RedirectRoutes path={"/protects"}><Protecteds/></RedirectRoutes> 
      </Switch>
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
):(<p>You have to sign in first!</p>)
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
  <p>You must log in to view the page at {from.pathname}</p>
  <button type="button" onClick={login}>Log in</button>
</div>
  )
}
function Protecteds(){
return(
<h1>This is Protected Page</h1>
)
}

export default App;
