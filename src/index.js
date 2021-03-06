import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header.js'
import New from './components/new.js'
import Login from './components/login.js'
import Register from './components/register.js';
import Publish from './components/publish.js';
import Home from './components/home.js';
import Game from './components/game.js';
import Mynew from './components/mynews.js';
import Updatenew from './components/updatenew.js';
import './index.css';
import {BrowserRouter ,Route ,Switch } from 'react-router-dom' // 引入路由
ReactDOM.render(
  <BrowserRouter>
    <div>
      <Header/>
      <Switch>
        <Route path='/login' component={Login}/>
        <Route path='/Register' component={Register}/>
        <Route path='/publish' component={Publish}/>
        {/* <Route path='/news' component={New}/> */}
        <Route path='/mynew' component={Mynew}/>
        <Route path='/game' component={Game}/>
        <Route path='/updatenew/:id' component={Updatenew}/>        
        <Route path='/:index' component={New}/>
        
        <Route path='/' component={Home}/>
        
      </Switch>
    </div>
  </BrowserRouter>,
  document.getElementById('root')
);

