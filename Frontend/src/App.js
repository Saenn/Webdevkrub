import React, { Component } from 'react';
import {Route,Switch} from 'react-router-dom';
import './App.css'
import Home from './pages/Home'
import 'semantic-ui-css/semantic.min.css'
import Login from './pages/Login'
import Register from './pages/Register'
import Announce from './pages/Announce'

class App extends Component {
  render() {
    return (
      <div className="pages">      
        <Switch> 
            <Route path='/announce' component={Announce}></Route> 
            <Route path='/register' component={Register}></Route> 
            <Route path='/signin' component={Login}></Route> 
            <Route path='/' component={Home}></Route>                 
        </Switch>
      </div>
    );
  }
}

export default App;
