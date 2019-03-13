import React, { Component } from 'react';

class Title extends Component {
    render() {
        return (
            <div className="title">
                <span className={`top-icon-title top-icon-${this.props.title}`}>{this.props.pagetitle}</span>
            </div>
        );
    }
}

export default Title;
