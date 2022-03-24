import React from 'react';
import {StyleSheet, View} from 'react-native';
import {LineChart, Grid} from 'react-native-svg-charts';

const App = () => {
  const data = [50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80];
  // const mul_data = [
  //   {value: 50, date: '2022-03-25 14:09:20'},
  //   {value: 50, date: '2022-03-20 14:09:20'},
  //   {value: 80, date: '2022-01-25 14:09:20'},
  //   {value: 44, date: '2022-03-05 14:09:20'},
  //   {value: 50, date: '2022-03-25 14:09:20'},
  //   {value: 100, date: '2020-03-25 14:09:20'},
  // ];
  const mul_data = [
    {value: 44, date: new Date(2011, 0, 1)},
    {value: 100, date: new Date(2015, 0, 1)},
    {value: 50, date: new Date(2015, 3, 1)},
    {value: 80, date: new Date(2016, 0, 1)},
    {value: 50, date: new Date(2020, 0, 1)},
    {value: 50, date: new Date(2022, 0, 1)},
  ];
  return (
    <View>
      <LineChart
        data={mul_data}
        style={{height: 200}}
        svg={{stroke: 'rgb(134, 65, 244)'}}
        contentInset={{top: 20, bottom: 20}}
        xAccessor={({item}) => item.date}
        yAccessor={({item}) => item.value}>
        <Grid />
      </LineChart>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
  },
  chart: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 200,
    width: 100,
  },
});

export default App;
