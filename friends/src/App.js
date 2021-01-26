import logo from './logo.svg';
import React from 'react'
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom'
import './App.css';

import Login from './components/Login'

function App() {
  return (
    <Router>
      <div className="App">
        <Link to='/login'>Login</Link><br/>
        <Link>LogOut</Link>
        <Switch>
          <Route component={Login}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
