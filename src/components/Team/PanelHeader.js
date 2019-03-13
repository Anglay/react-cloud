import React, { Component } from 'react';

class PanelHeader extends Component {
  render() {
    return (
        <div className="panel-header">
            <div className="panel-title">{this.props.title}</div>
            <div className="panel-handle">{this.props.children}</div>
        </div>
    );
  }
}

export default PanelHeader;