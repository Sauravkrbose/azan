import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import getStyle from '../style';

const AdhanNotification = () => {
  const {styles} = getStyle();
  return (
    <View style={styles.root}>
      <Text style={styles.heading_text}>isha time</Text>
      <Text style={styles.heading_text2}>adhan & Notification</Text>
      <Text style={styles.para}>
        Please select which types of notification you would like to receive.
      </Text>
      <TouchableOpacity>
        {/* icon */}
        <Text>Silent</Text>
        <Text>No notifications or adhans.</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        {/* icon */}
        <Text>Notification</Text>
        <Text>Banner notification only (with default sound).</Text>
        <Text>No adhan.</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        {/* icon */}
        <Text>Adhan</Text>
        <Text>Adhan by Mishary Rashid Al-Afasy + banner notification.</Text>
        <Text>Adhan</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AdhanNotification;
