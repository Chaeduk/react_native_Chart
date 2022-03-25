import React from 'react';
import {StyleSheet, View} from 'react-native';
import {LineChart, Grid} from 'react-native-svg-charts';

const Chart = () => {
  const data = [50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80];
  return (
    <View style={styles.block}>
      <LineChart
        style={styles.chart}
        data={data}
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
