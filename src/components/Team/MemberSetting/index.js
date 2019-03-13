import React, { Component } from 'react';
import FreeScrollBar from 'react-free-scrollbar';
import Panel from "../Panel";
import PanelHeader from "../PanelHeader";
import { Table } from 'element-react';

class MemberSetting extends Component {
  constructor(props){
    super(props);
    this.state = {
      columns: [
        {
          label: "姓名",
          prop: "name",
          width: 100
        },
        {
          label: "手机好",
          prop: "mobile",
          width: 150
        },
        {
          label: "加入日期",
          prop: "date",
          width: 150
        },
        {
          label: "角色",
          prop: "role",
          width: 120
        },
        {
          label: "状态",
          prop: "state",
          width: 100
        },
        {
          label: "设置",
          prop: "setting"
        }
      ],
      data: [{
        name: '王小虎',
        mobile:'13349906247',
        date: '2016-05-02',
        role:'团队拥有者',
        state:'正常',
        setting: '上海市普陀区金沙江路 1518 弄'
      }, {
        name: '王小虎',
        mobile:'13349906247',
        date: '2016-05-02',
        role:'团队拥有者',
        state:'正常',
        setting: '上海市普陀区金沙江路 1518 弄'
      }, {
        name: '王小虎',
        mobile:'13349906247',
        date: '2016-05-02',
        role:'团队拥有者',
        state:'正常',
        setting: '上海市普陀区金沙江路 1518 弄'
      }, {
        name: '王小虎',
        mobile:'13349906247',
        date: '2016-05-02',
        role:'团队拥有者',
        state:'正常',
        setting: '上海市普陀区金沙江路 1518 弄'
      }]
    }
  }

  render() {
    return (
      <FreeScrollBar className="scroll">
      <div className="member-setting">
          <Panel>
              <PanelHeader title="团队成员"><span className="icon-edit">添加成员</span></PanelHeader>
              <div className="member-setting-content">
              <Table
                style={{width: '100%'}}
                columns={this.state.columns}
                data={this.state.data}
                border={true}
              />
              </div>
          </Panel>
      </div>
      </FreeScrollBar>
    );
  }
}

export default MemberSetting;