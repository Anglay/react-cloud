import React, { Component } from 'react';
import FreeScrollBar from 'react-free-scrollbar';
import Panel from "../Panel";
// 引入 ECharts 主模块
import echarts from 'echarts/lib/echarts';
// 引入柱状图
import  'echarts/lib/chart/bar';
// 引入提示框和标题组件
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';

class Statistics extends Component {
  componentDidMount(){
    var myChart = echarts.init(document.getElementById('echart'));
        // 绘制图表
        myChart.setOption({
            title: { text: 'Echarts在React中的简单使用' },
            tooltip: {},
            xAxis: {
                data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
            },
            yAxis: {},
            series: [{
                name: '销量',
                type: 'bar',
                data: [5, 20, 36, 10, 10, 20]
            }]
        });
  }
  render() {
    return (
      <FreeScrollBar className="scroll">
        <div className="base-setting">
          <Panel>
            <div id="echart" style={{ width: "100%", height: 400 }}></div>
          </Panel>
        </div>
      </FreeScrollBar>
    );
  }
}

export default Statistics;