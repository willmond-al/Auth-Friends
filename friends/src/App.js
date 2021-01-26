import logo from './logo.svg';
import React from 'react'
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom'
import './App.css';
import Friends from './components/Friends'

import { axiosWithAuth } from './utils/axiosWithAuth'
import Login from './components/Login'
// import Friend from './components/Friend';

const logout = () => {
  axiosWithAuth()
      localStorage.removeItem('token');
      window.location.href =  '/login';
};


function App() {
  return (
    <Router>
      <div className="App">
        <Link to='/login'>Login</Link><br/>
        <Link onClick={logout}>LogOut</Link>
        <Switch>
          <Route exact path='/friends' component={Friends}/>
          <Route path="/login" component={Login} />
          <Route component={Login}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
