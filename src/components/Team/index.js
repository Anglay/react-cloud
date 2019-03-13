import React, { Component } from 'react';
import { Route,withRouter} from 'react-router-dom';
import { connect } from 'react-redux';
import TopBar from "./TopBar";
import TeamSide from "./TeamSide";
import BaseSetting from "./BaseSetting/index";
import MemberSetting from "./MemberSetting/index";
import Statistics from "./Statistics/index";
import "./team.less";

class Index extends Component {
  componentDidMount(){
    this.props.history.push("/team/basesetting")
  }
  render() {
    return (
      <div className="page">
        <div className="team-page">
          <TeamSide/>
          <div className="team-wraper">
            <TopBar/>
            <div className="page-content">
              <Route path="/team/basesetting" component={BaseSetting} />
              <Route path="/team/membersetting" component={MemberSetting} />
              <Route path="/team/statistics" component={Statistics} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = function(store) {
  return {
      teams: store.teams
  };
};
export default connect(mapStateToProps)(withRouter(Index));
