import { useSelector } from 'react-redux';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
const useTheme1 = () => {
  const { darkMode } = useSelector((state) => state.userReducer);

  return {
    primary: '#001a3f',
    red: '#f7021b',
    green: '#02d41b',
    lightModeBackground:"#8aa2ed20",
    btnBackground: darkMode ? '#001a3f' : 'rgba(0,0,0,0.2)',
    btnbackground2: '#FF8F6E',
    background: darkMode ? '#002349' : '#FEFCFF',
    backgroundLight: '#fff',
    txtWhite: darkMode ? '#ffffff' : '#000',
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
    searchTextColor: darkMode ? 'rgba(255,255,255,0.7)' : 'rgba(0,0,0,0.7)',
  };
};

export default useTheme1;
