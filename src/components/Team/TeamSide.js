import React, { Component } from 'react';
import { connect } from 'react-redux';
import store from "../../redux/store";
import { getNowFormatDate,getMobileCard } from "../../common/utils";
import { addTeam,checkTeam, addTouch } from "../../actions/teams";
import { MessageBox } from 'element-react';
import FreeScrollBar from 'react-free-scrollbar';
import SideHeader from "./SideHeader";
import SideConent from "./SideConent";

class TeamSide extends Component {
    addTeam(){
        MessageBox.prompt(' ', '创建团队', {
            inputPattern: /\S/,
            inputErrorMessage: '团队名称不能为空',
            inputPlaceholder:"请输入团队名称"
        }).then(({ value }) => {
            let team= {
                name:value,
                count:1,
                createDate:getNowFormatDate(),
                discription:"测试团队"+value,
                creater:"ouyang"
            }
            store.dispatch(addTeam(team));
        }).catch(() => {
        });
    }
    
    addToucher(){
        MessageBox.prompt('通过账号或名称查找联系人', '添加联系人', {
            inputPattern: /\S/,
            inputErrorMessage: '输入不能为空',
            inputPlaceholder:"请输入"
        }).then(({ value }) => {
            let touch = {
                name:value,
                mobile:getMobileCard(),
                createDate:getNowFormatDate(),
            }
            store.dispatch(addTouch(touch))
        }).catch(() => {
        });
    }

    checkTeam(team,e){
        store.dispatch(checkTeam(team));
    }

    render() {
        return (
            <div className="team-side">
                <div className="team-side-content">
                    <SideHeader title="团队"><span className="handle-btn" onClick={this.addTeam.bind(this)}>创建</span></SideHeader>
                    <SideConent>
                        <FreeScrollBar className="scroll">
                            <div className={this.props.teams.teamList.length>0?"team-list":"team-list empty-team-list"}>
                                {
                                    this.props.teams.teamList.map((team,index)=>{
                                        return (
                                            <div className={team.name===this.props.teams.currentTeam.name?"team-item active":"team-item"} key={index} onClick={this.checkTeam.bind(this,team)}>
                                                <span className="team-icon"></span>
                                                <div className="item-info">
                                                    <p className="team-name">{team.name}</p>
                                                    <p className="team-couent">{team.count}人（团队人数）</p>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </FreeScrollBar>
                    </SideConent>
                    <SideHeader title="联系人"><span className="handle-btn" onClick={this.addToucher.bind(this)}>添加</span></SideHeader>
                    <SideConent>
                        <FreeScrollBar className="scroll">
                            <div className={this.props.teams.touchList.length>0?"toucher-list":"toucher-list empty-toucher-list"}>
                            {
                                this.props.teams.touchList.map((touch,index)=>{
                                    return (
                                        <div className="touch-item" key={index}>
                                            <span className="touch-icon"></span>
                                            <span className="touch-name">{touch.name}</span>
                                            <span className="touch-mobile">{touch.mobile}</span>
                                        </div>
                                    )
                                })
                            }
                            </div>
                        </FreeScrollBar>
                    </SideConent>
                </div>
            </div>
        );
    }
}

// export default TeamSide;
const mapStateToProps = function(store) {
    return {
        teams: store.teams
    };
};
// 连接 store，作为 props
export default connect(mapStateToProps)(TeamSide);
