import React from 'react';
import {View, StyleSheet} from 'react-native';
import Chart from '../components/Chart';
import Dropdown from '../components/Dropdown';
import data from '../data/data.json';
import moment from 'moment';

// 월
const DaySorting = para => {
  //최적화?(index)
  const obj = para.reduce(function (acc, cur, index) {
    const day = moment(cur.REG_DT).format('YYYY-MM-DD');
    if (day in acc) {
      acc[day] += cur.TRADE_RETURN;
    } else {
      acc[day] = cur.TRADE_RETURN;
    }
    return acc;
  }, {});
  let result = [];
  Object.entries(obj).forEach(([key, value]) => {
    result = [...result, {value: value, date: moment(key)}];
  });
  result.sort((a, b) => a.date - b.date);
  return result;
};

//reduce, filter

// 일
const MonthSorting = para => {
  const obj = para.reduce(function (acc, cur, index) {
    const day = moment(cur.REG_DT).format('YYYY-MM');
    if (day in acc) {
      acc[day] += cur.TRADE_RETURN;
    } else {
      acc[day] = cur.TRADE_RETURN;
    }
    return acc;
  }, {});
  let result = [];
  Object.entries(obj).forEach(([key, value]) => {
    result = [...result, {value: value, date: moment(key)}];
  });
  result.sort((a, b) => a.date - b.date);
  return result;
};

// 실시간(최근 4시간)
const TimeSorting = para => {};

const ChartContainer = () => {
  const result = DaySorting(data);
  return (
    <View style={styles.block}>
      <Dropdown />
      <Chart data={result} />
    </View>
  );
};

const styles = StyleSheet.create({
  block: {
    width: '80%',
    height: '50%',
  },
});

export default ChartContainer;
