import React, { Component } from 'react';
import { NavLink as Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Notice from "../common/Notice";
import Title from "../common/Title";

class TopBar extends Component {
  render() {
    return (
      <div className="page-top-bar team-top-bar">
        <div className="top-bar-left"><Title title="team" pagetitle={this.props.teams.currentTeam.name}/></div>
        <div className="top-bar-content">
          <Link to="/team/basesetting" activeClassName="top-tab-active" className="top-tab">
            <span>基本设置</span>
          </Link>
          <Link to="/team/membersetting" activeClassName="top-tab-active" className="top-tab">
            <span>成员设置</span>
          </Link>
          <Link to="/team/statistics" activeClassName="top-tab-active" className="top-tab">
            <span>统计</span>
          </Link>
        </div>
        <div className="top-bar-right">
            <Notice/>
        </div>
      </div>
    );
  }
}

// export default TopBar;
const mapStateToProps = function(store) {
  return {
      teams: store.teams
  };
};
// 连接 store，作为 props
export default connect(mapStateToProps)(TopBar);
