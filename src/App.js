import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import SideBar from "./components/common/SideBar";
import Main from './components/Main';//首页
import Team from "./components/Team/index";
import Calendar from "./components/Calendar/index";
import Case from "./components/Case/index";
import Matter from "./components/Matter/index";
import Knowledge from "./components/Knowledge/index";
import Tools from "./components/Tools/index";
import Customer from "./components/Customer/index";

import "./app.less";

export default class App extends Component {
  render() {
    return (
        <div className="main-page">
          <SideBar/>
          <div className="main-content">
          <Switch>
            <Route exact path="/" component={Main}/>
            <Route path="/team" component={Team} />
            <Route path="/time" component={Calendar} />
            <Route path="/case" component={Case} />
            <Route path="/matter" component={Matter} />
            <Route path="/knowledge" component={Knowledge} />
            <Route path="/tools" component={Tools} />
            <Route path="/Customer" component={Customer} />
          </Switch>
          </div>
        </div>
    )
  }
}
 