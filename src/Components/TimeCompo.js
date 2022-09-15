import React, { useState, useEffect } from 'react';
import { Text } from 'react-native';
import moment from 'moment';

import getStyle from '../Screens/Home/Styles';
const TimeCompo = () => {
  const { styles } = getStyle();
  const [state, setState] = useState('');
  const UpdateTime = () => {
    // var time = moment().utcOffset('+05:00').format(' hh:mm:ss A');
    const date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    var ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0' + minutes : minutes;
    var strTime = hours + ':' + minutes + ':' + seconds + ' ' + ampm;
    setState(strTime);
  };
  useEffect(() => {
    setInterval(() => {
      UpdateTime();
    }, 1000);
    return () => {
      clearInterval();
    };
  }, [state]);
  return <Text style={[styles.txtTime, { color: '#fff' }]}>{state}</Text>;
};

export default TimeCompo;
