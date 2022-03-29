import React from 'react';
import {StyleSheet, View} from 'react-native';
import ChartView from 'react-native-highcharts';

const HighChart = () => {
  const Highcharts = 'Highcharts';
  const conf = {
    chart: {
      type: 'spline',
      animation: Highcharts.svg,
      marginRight: 10,
      events: {
        load: function () {
          const series = this.serires[0];
          setInterval(function () {
            const x = new Date().getTime(),
              y = Math.random();
            series.addPont([x, y], true, true);
          }, 1000);
        },
      },
    },
    title: {
      atext: 'Live random data',
    },
    xAxis: {
      type: 'datetime',
      tickPixelInterval: 150,
    },
    yAxis: {
      title: {
        text: 'Value',
      },
      plotLines: [
        {
          value: 0,
          width: 1,
          color: '#808080',
        },
      ],
    },
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
        name: 'Random data',
        data: (function () {
          // generate an array of random data
          var data = [],
            time = new Date().getTime(),
            i;

          for (i = -19; i <= 0; i += 1) {
            data.push({
              x: time + i * 1000,
              y: Math.random(),
            });
          }
          return data;
        })(),
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
