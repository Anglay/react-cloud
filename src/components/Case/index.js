import React, { Component } from 'react';
import TopBar from "./TopBar";
import { Link } from 'react-router-dom';

class Index extends Component {
  render() {
    return (
      <div className="page">
        <TopBar/>
        <div className="page-content">
        <Link to="/home">TeamIndex</Link>
        </div>
      </div>
    );
  }
}

export default Index;
