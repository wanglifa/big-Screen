import React, {useEffect, useRef, useState} from 'react';
import * as echarts from 'echarts';
import {createEchartsOptions} from '../shared/create-echarts-options';

export const Chart1 = () => {
  const divRef = useRef(null);
  const myChart = useRef(null);
  const [data, setData] = useState([]);
  useEffect(() => {
    myChart.current = echarts.init(divRef.current);
    const timer = setInterval(() => {
      setData([
        {name: '辖城关', value: Math.random() * 10},
        {name: '七里河', value: Math.random() * 10},
        {name: '西固', value: Math.random() * 10},
        {name: '安宁', value: Math.random() * 10},
        {name: '红古', value: Math.random() * 10},
        {name: '永登县', value: Math.random() * 10},
        {name: '榆中县', value: Math.random() * 10},
        {name: '皋兰县', value: Math.random() * 10},
        {name: '兰州新区', value: Math.random() * 10},
      ])
    }, 2000)
    return () => clearInterval(timer);
  }, []);
  useEffect(() => myChart.current.setOption(createEchartsOptions({
    xAxis: {
      data: data.map(i => i.name),
      axisTick: {show: false},
      axisLine: {
        lineStyle: {color: '#083B70'}
      },
      axisLabel: {
        formatter(val) {
          if (val.length > 2) {
            const array = val.split('');
            array.splice(2, 0, '\n');
            return array.join('');
          } else {
            return val;
          }
        }
      },
    },

    yAxis: {
      type: 'value',
      splitLine: {show: false},
      axisLine: {
        show: true,
        lineStyle: {color: '#083B70'}
      }
    },
    series: [{
      type: 'bar',
      data: data.map(i => i.value)
    }]
  })), [data])

  return (
    <div className="bordered 管辖统计">
      <h2>案发派出所管辖统计</h2>
      <div ref={divRef} className="chart">

      </div>
    </div>
  );
};