import React, { Component } from 'react';
import {Layout, Card } from "element-react";

class Main extends Component {
  componentDidMount(){
  }
  render() {
    return (
      <div className="page">
        <Layout.Row gutter="20" style={{ "paddingTop": "40px" }}>
          <Layout.Col span="20" offset="2">
            <Card className="box-card">
            <h1 style={{textAlign:'center'}}>React+React-Router+redux+element-react UI框架的基础示例</h1>
            </Card> 
          </Layout.Col>
          <Layout.Col span="2"></Layout.Col>
        </Layout.Row>
      </div>
    );
  }
}

export default Main;
