import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {OpenActionSheet} from '../../Utils/HelperFunction';
import Theme from '../../Utils/useTheme';
import useTheme1 from '../../Utils/useTheme1';

const CustomButton = ({text, id}) => {
  const {styles} = GetStyle();
  return (
    <View style={styles.root}>
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => OpenActionSheet(id)}
        style={styles.button_root}>
        <Text style={styles.button_text}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CustomButton;
const GetStyle = () => {
  const {btnBackground, wp, hp, txtMedium, txtWhite} = useTheme1();
  const styles = StyleSheet.create({
    root: {
      marginHorizontal: 20,
      marginVertical: 10,
    },
    button_root: {
      backgroundColor: btnBackground,
      justifyContent: 'center',
      paddingHorizontal: 20,
      width: wp('94%'),
      height: hp('8%'),
      borderRadius: 10,
    },
    // button_text: {
    //   color: txtWhite,
    //   letterSpacing: 1,
    //   fontSize: txtMedium,
    //   fontWeight: '900',
    // },
    button_text: {
      color: txtWhite,
      letterSpacing: 1,
      fontSize: txtMedium,
      fontWeight: '600',
    },
  });
  return {
    styles,
  };
};
