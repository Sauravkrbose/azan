import React from 'react';
import {} from 'react-native';
import {useSelector} from 'react-redux';

const NotificationSetting = () => {
  const {azanNotification, PrayerTime} = useSelector(
    state => state.userReducer,
    console.log(azanNotification, PrayerTime, 'in setting'),
  );
  return null;
};

export default NotificationSetting;
