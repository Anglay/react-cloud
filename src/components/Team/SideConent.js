import React, { Component } from 'react';

class SideContent extends Component {
  render() {
    return (
        <div className="side-content">
            {this.props.children}
        </div>
    );
  }
}

export default SideContent;
