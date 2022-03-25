import React from 'react';
import {StyleSheet, View} from 'react-native';
import {LineChart, Grid} from 'react-native-svg-charts';
import data from '../data/data.json';
import moment from 'moment';

const Chart = ({data}) => {
  return (
    <View style={styles.block}>
      <LineChart
        style={styles.chart}
        data={data}
        xAccessor={({item}) => item.date}
        yAccessor={({item}) => item.value}
        contentInset={{top: 10, bottom: 10}}
        svg={{stroke: 'rgb(134, 65, 244)'}}>
        <Grid />
      </LineChart>
    </View>
  );
};

const styles = StyleSheet.create({
  block: {
    flex: 7,
    justifyContent: 'center',
    alignItems: 'center',
  },
  chart: {
    height: '100%',
    width: '100%',
  },
});

export default Chart;
