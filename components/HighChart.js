import React from 'react';
import {StyleSheet, View} from 'react-native';
import ChartView from 'react-native-highcharts';
import dummy from '../data/dummy.json';
import moment from 'moment';

const splitData = data => {
  const result = data.reduce(
    function (acc, cur) {
      const day = moment(cur.REG_DT);
      if (day.hours() === 8) {
        const refine = cur.TRADE_PRICE.replace(new RegExp(/,/gi), '');
        acc.user = [
          ...acc.user,
          {x: day.toDate().getTime(), y: cur.TRADE_RETURN},
        ];
        acc.bot = [...acc.bot, {x: day.toDate().getTime(), y: Number(refine)}];
      }
      return acc;
    },
    {bot: [], user: []},
  );
  return result;
};

const sixMonthSort = data => {
  const result = data.filter(function (cur) {
    return moment(cur.x).isBetween(moment().subtract(6, 'months'), moment());
  });
  return result;
};

const oneMonthSort = data => {
  const result = data.filter(function (cur) {
    return moment(cur.x).isBetween(moment().subtract(1, 'months'), moment());
  });
  return result;
};

const threeMonthSort = data => {
  const result = data.filter(function (cur) {
    return moment(cur.x).isBetween(moment().subtract(3, 'months'), moment());
  });
  return result;
};

const HighChart = () => {
  const {bot, user} = splitData(dummy);
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
        data: threeMonthSort(bot),
      },
      {
        name: 'dd',
        yAxis: 1,
        data: threeMonthSort(user),
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
