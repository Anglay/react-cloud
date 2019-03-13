import React, { Component } from 'react';
import Notice from "../common/Notice";
import Title from "../common/Title";

class TopBar extends Component {
  render() {
    return (
      <div className="page-top-bar matter-top-bar">
        <div className="top-bar-left"><Title title="matter" pagetitle="事项"/></div>
        <div className="top-bar-content"></div>
        <div className="top-bar-right">
            <Notice/>
        </div>
      </div>
    );
  }
}

export default TopBar;
