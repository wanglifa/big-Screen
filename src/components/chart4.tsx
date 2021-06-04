import React, {useEffect, useRef, useState} from 'react';
import * as echarts from 'echarts';
import {createEchartsOptions} from '../shared/create-echarts-options';
import {px} from '../shared/px';

export const Chart4 = () => {
  const divRef = useRef(null);
  const myChart = useRef(null);
  const [data, setData] = useState([]);
  useEffect(() => {
    myChart.current = echarts.init(divRef.current);
    const timer = setInterval(() => {
      setData([
        {
          key: 0,
          value: Math.random()
        },
        {
          key: 2,
          value: Math.random()
        },
        {
          key: 4,
          value: Math.random()
        },
        {
          key: 6,
          value: Math.random()
        },{
          key: 8,
          value: Math.random()
        },{
          key: 10,
          value: Math.random()
        },{
          key: 12,
          value: Math.random()
        },{
          key: 14,
          value: Math.random()
        },{
          key: 16,
          value: Math.random()
        },{
          key: 18,
          value: Math.random()
        },{
          key: 20,
          value: Math.random()
        },{
          key: 22,
          value: Math.random()
        },{
          key: 24,
          value: Math.random()
        },
      ])
    }, 2000)
  }, []);
  useEffect(() => myChart.current.setOption(createEchartsOptions({
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: data.map(i => i.key),
      splitLine: {show: true, lineStyle: {color: '#073E78'}},
      axisTick: {show: false},
      axisLine: {show: false},
    },
    yAxis: {
      type: 'value',
      splitLine: {lineStyle: {color: '#073E78'}},
      axisLabel: {
        formatter(val) {
          return val * 100 + '%';
        }
      }
    },
    series: [{
      name: '故意伤人',
      type: 'line',
      data: data.map(i => i.value),
      symbol: 'circle',
      symbolSize: px(12),
      lineStyle: {width: px(2)},
      areaStyle: {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
          offset: 0,
          color: '#414a9f'
        }, {
          offset: 1,
          color: '#1b1d52'
        }]),
      }
    }]
  })), [data])

  return (
    <div className="bordered 案发时段">
      <h2>案发时段分析</h2>
      <div ref={divRef} className="chart"/>
    </div>
  );
};