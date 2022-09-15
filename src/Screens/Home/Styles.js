import { StyleSheet, Dimensions } from 'react-native';
import { useSelector } from 'react-redux';

import useTheme1 from '../../Utils/useTheme1';
const Styles = () => {
  const {
    background,
    txtLarge,
    btnbackground2,
    txtMedium,
    align,
    wp,
    hp,
    row,
    txtMedium1,
    txtSmall,
    lightGrey,
    spaceBetween,
    txtWhite,
  } = useTheme1();
  const { darkMode } = useSelector((state) => state.userReducer);
  const styles = StyleSheet.create({
    MainView: {
      backgroundColor: background,
      minHeight: hp('100%'),
      // borderTopEndRadius: 30,
      // borderTopStartRadius: 30,
    },
    swiperRoot: {
      paddingHorizontal: 20,
    },
    txtMain: {
      color: txtWhite,
      fontSize: txtLarge,
      fontWeight: 'bold',
    },
    backgroundDrop: {
      backgroundColor:darkMode? 'rgba(0,35,73,.5)':'#8aa2ed',
      borderRadius: 10,
      paddingHorizontal: 10,
      paddingVertical: 3,
    },

    nowcoming_heading_txt: {
      color: '#fff',
      fontSize: 16,
      fontWeight: '600',
      letterSpacing: 1,
    },
    nowcoming_txt: {
      color: btnbackground2,
      fontSize: 16,
      letterSpacing: 1,
      textTransform: 'uppercase',
      fontWeight: '600',
    },
    heading_container: {
      flexDirection: 'row',
      paddingHorizontal: 10,
      marginTop: 3,
      justifyContent: 'space-between',
    },
    headingTxt: {
      color: '#fff',
      fontSize: 18,
      fontWeight: '900',
    },
    txtTime: {
      color: '#fff',
      fontSize: txtMedium,
      fontWeight: '900',
      textAlign: align,
    },
    devider: {
      marginTop: '2%',
      width: wp('95%'),
      backgroundColor: btnbackground2,
      height: wp('1%'),
    },
    wrapView: {
      marginTop: '3%',
    },
    wrapViewRow: {
      flexDirection: row,
      justifyContent: align,
      marginBottom: 1,
    },
    txtSub: {
      color: btnbackground2,
      fontSize: txtMedium1,
      fontWeight: 'bold',
      textAlign: align,
      paddingLeft: '2%',
      paddingRight: '2%',
    },
    txtToday: {
      color: btnbackground2,
      fontSize: txtSmall,
      fontWeight: '900',
      textAlign: align,
      padding: '1%',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: '2%',
    },
    txtTimeZone: {
      color: btnbackground2,
      fontSize: txtMedium,
      fontWeight: '900',
      textAlign: align,
      padding: '1%',
    },
    wrapColumn: {
      flexDirection: 'column',
    },
    wrapViewSalah: {
      marginTop: '5%',
      width: wp('95%'),
      height: hp('7%'),
      borderWidth: 2,
      borderColor: lightGrey,
      borderRadius: 10,
      justifyContent: align,
    },
    wrapViewHorizantal: {
      flexDirection: row,
      justifyContent: spaceBetween,
    },
    salahTime: {
      color: lightGrey,
      fontSize: txtMedium,
      marginStart: '5%',
      fontWeight: '900',
      paddingEnd: '3%',
    },
    timeZone: {
      flexDirection: row,
    },
    calender: {
      position: 'absolute',
      top: 210,
      right: 10,
      zIndex: 999,
    },
  });
  return {
    styles,
  };
};

export default Styles;
