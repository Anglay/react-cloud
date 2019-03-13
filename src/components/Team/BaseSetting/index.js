import React, { Component } from 'react';
import { connect } from 'react-redux';
import store from "../../../redux/store";
import { deleteTeam } from "../../../actions/teams";
import FreeScrollBar from 'react-free-scrollbar';
import Panel from "../Panel";
import PanelHeader from "../PanelHeader";
import { Button ,MessageBox} from 'element-react';

class BaseSetting extends Component {
    dissolveTeam(team,e){
        MessageBox.confirm('确认解散该团队吗?', '提示', {
            type: 'warning'
        }).then(() => {
            store.dispatch(deleteTeam(team));
        })
    }
  render() {
    return (
        <FreeScrollBar className="scroll">
        <div className="base-setting">
            <Panel>
                <PanelHeader title="团队信息"><span className="icon-edit">修改</span></PanelHeader>
                <div className="base-setting-content">
                    <div className="base-setting-wraper">
                        <div className="base-setting-item">
                            <span>团队名称</span>
                            <p>{this.props.teams.currentTeam.name}</p>
                        </div>
                        <div className="base-setting-item">
                            <span>创建时间</span>
                            <p>{this.props.teams.currentTeam.createDate}</p>
                        </div>
                        <div className="base-setting-item">
                            <span>创建人账号</span>
                            <p>{this.props.teams.currentTeam.creater}</p>
                        </div>
                        <div className="base-setting-item">
                            <span>描述</span>
                            <p>{this.props.teams.currentTeam.discription}</p>
                        </div>
                    </div>
                    <div className="right-wraper">
                        <div className="updatehead">
                            <div className="logo-box">
                                <span className="default-large-img">受</span>
                            </div>
                            <div className="logo-tips-flex">
                                <i className="icon"></i>
                                <p className="tips">上传团队logo照片，让团队成员凝聚在一起。</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Panel>
            <Panel>
                <PanelHeader title="转让团队"><span className="icon-skip">转让</span></PanelHeader>
                <div className="base-setting-content">
                    <div className="base-setting-wraper">
                        <div className="base-setting-item">
                            <span>拥有者</span>
                            <p>{this.props.teams.currentTeam.creater}</p>
                        </div>
                    </div>
                </div>
            </Panel>
            <Panel>
                <PanelHeader title="解散团队"></PanelHeader>
                <div className="base-setting-content">
                    <div className="base-setting-wraper">
                        <div className="base-setting-item">
                            <span></span>
                            <p>
                                <Button plain={true} type="warning" onClick={this.dissolveTeam.bind(this,this.props.teams.currentTeam)}>解散当前团队</Button>
                            </p>
                        </div>
                        <div className="base-setting-item">
                            <span></span>
                            <p className="tips">解散后所有数据都将被彻底删除，此操作无法撤消，请谨慎。</p>
                        </div>
                    </div>
                </div>
            </Panel>
        </div>
        </FreeScrollBar>
    );
  }
}

// export default BaseSetting;
// export default TeamSide;
const mapStateToProps = function(store) {
    return {
        teams: store.teams
    };
};
// 连接 store，作为 props
export default connect(mapStateToProps)(BaseSetting);