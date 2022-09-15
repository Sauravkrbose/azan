import React, { useEffect, useState } from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';
import Images from '../../Utils/Images'
import getStyle from './Style';
const Splash = ({ navigation }) => {
  const { styles } = getStyle();
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('TabNavigator');
    }, 3000);
  }, []);

  return (
    <View style={styles.MainView}>
      <Image
        source={Images.logo}
        style={styles.imgSplash}
      />
    </View>
  );
};
export default Splash;
