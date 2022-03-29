import React from 'react';
import {StyleSheet, View} from 'react-native';
import ChartView from 'react-native-highcharts';
import dummy from '../data/dummy.json';
import moment from 'moment';

const botData = data => {
  const result = data.map(function (cur, index) {
    return {x: moment(cur.REG_DT).toDate().getTime(), y: cur.TRADE_RETURN};
  });
  return result;
};

const userData = data => {
  const result = data.map(function (cur, index) {
    const refine = cur.TRADE_PRICE.replace(new RegExp(/,/gi), '');
    return {
      x: moment(cur.REG_DT).toDate().getTime(),
      y: Number(refine),
    };
  });
  return result;
};

const sixMonthSort = data => {
  const result = data.filter(function (cur) {
    return cur.x.isBetween(moment().subtract(6, 'months'), moment());
  });
  return result;
};

const oneMonthSort = data => {
  const result = data.filter(function (cur) {
    return cur.x.isBetween(moment().subtract(1, 'months'), moment());
  });
  return result;
};

const threeMonthSort = data => {
  const result = data.filter(function (cur) {
    return cur.x.isBetween(moment().subtract(3, 'months'), moment());
  });
  return result;
};

const HighChart = () => {
  const Highcharts = 'Highcharts';
  const conf = {
    title: {
      text: '',
    },
    xAxis: {
      type: 'datetime',
    },
    yAxis: [
      {
        title: {
          text: 'Value',
        },
      },
      {
        opposite: true,
        title: {
          text: 'user',
        },
      },
    ],
    tooltip: {
      formatter: function () {
        return (
          '<b>' +
          this.series.name +
          '</b><br/>' +
          Highcharts.dateFormat('%Y-%m-%d %H:%M:%S', this.x) +
          '<br/>' +
          Highcharts.numberFormat(this.y, 2)
        );
      },
    },
    legend: {
      enabled: false,
    },
    exporting: {
      enabled: false,
    },
    series: [
      {
        name: 'Random',
        yAxis: 0,
        data: botData(dummy),
      },
      {
        name: 'dd',
        yAxis: 1,
        data: userData(dummy),
      },
    ],
  };
  const options = {
    global: {
      useUTC: false,
    },
    lang: {
      decimalPoint: ',',
      thousandsSep: '.',
    },
  };
  return (
    <View style={styles.block}>
      <ChartView style={styles.webView} config={conf} options={options} />
    </View>
  );
};

const styles = StyleSheet.create({
  webView: {width: '100%', height: '100%'},
  block: {
    flex: 7,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HighChart;
