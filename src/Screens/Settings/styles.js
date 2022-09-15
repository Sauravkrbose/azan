import {StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';
import useTheme1 from '../../Utils/useTheme1';
const useGetStyle = () => {
  const {
    width,
    align,
    wp,
    grey,
    blue,
    hp,
    white,
    primary,
    txtMedium,
    background,
    txtWhite,
  } = useTheme1();
  const {darkMode} = useSelector(state => state.userReducer);
  const styles = StyleSheet.create({
    root: {
      marginTop: 20,
      flex: 1,
      backgroundColor: txtWhite,
    },

    setting_heading_txt: {
      fontSize: 30,
      letterSpacing: 1,
      color: txtWhite,
      marginLeft: 20,
      marginBottom: 25,
      fontWeight: '700',
    },
    MainView: {
      flex: 1,
      backgroundColor: background, //light
    },
    setWidth: {
      width: width,
      alignSelf: align,
    },
    wrapFL: {
      paddingBottom: '20%',
    },

    setView: {
      width: wp('90%'),
      alignSelf: align,
    },
    loaders: {
      zIndex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      alignSelf: 'center',
      position: 'absolute',
      top: 200,
    },
    topFlatViewHead: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: '2%',
    },

    topFlatTextHead: {
      backgroundColor: grey,
      // textAlign: "center",
      color: blue,
      fontWeight: 'bold',
    },

    wrapRecords: {
      width: wp('80%'),
      height: hp('7%'),
      alignSelf: align,
      backgroundColor: white,
      marginTop: '2%',
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingHorizontal: '5%',
      alignItems: align,
      borderBottomWidth: 1,
      borderColor: primary,
    },
    txtName: {
      color: primary,
      fontSize: txtMedium,
      textAlign: align,
      fontWeight: '500',
    },
    WrapViews: {
      flexDirection: 'row',
      marginVertical: '2%',
    },

    WrapText: {
      fontWeight: '500',
      color: primary,
      // flex:2,
      textAlign: 'center',
    },

    IconFlat: {
      fontSize: 12,
      color: primary,
      flex: 1,
      textAlign: 'center',
    },
  });
  return {
    styles,
  };
};

export default useGetStyle;
