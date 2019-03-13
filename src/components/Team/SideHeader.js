import React, { Component } from 'react';

class SideHeader extends Component {
  render() {
    return (
        <div className="team-side-header">
            <span className="handle-title">{this.props.title}</span>
            {this.props.children}
        </div>
    );
  }
}

export default SideHeader;
