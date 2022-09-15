import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {useSelector} from 'react-redux';
import React from 'react';
const useTheme = () => {
  // const {darkMode} = useSelector(state => state.userReducer);
  const theme = {
    red: '#f7021b',
    green: '#02d41b',
    btnBackground: '#001a3f',
    btnbackground2: '#FF8F6E',
    background: '#002349',
    backgroundLight: '#fff',
    txtWhite: '#ffffff',
    txtInLight: '#000',
    borderInLight: '#666666',
    secondary: '#ed5b00',
    gold: '#ada11f',
    txtBlue: 'blue',
    lightGrey: '#f0f1f2',
    lightBlue: '#182a4a',
    placeholderCol: 'grey',
    white: 'white',
    blue: '#5978ff',
    black: 'black',
    txtBlack: 'black',
    iconCol: '#D1D1D1',
    iconSize: 26,
    iconSizeLarge: 35,
    iconSizeSm: 18,
    iconSizeExSm: 12,
    bold: 'bold',
    errorColor: 'red',
    txtSmallest: hp('1.5%'),
    txtSmall: hp('1.7%'),
    txtMedium: hp('2.5%'),
    txtMedium1: hp('3%'),
    txtLarge: hp('3.5%'),
    txtExtraLarge: hp('4%'),
    align: 'center',
    wp,
    hp,
    width: wp('95%'),
    row: 'row',
    spaceBetween: 'space-between',
  };
  return theme;
};

export default useTheme;
