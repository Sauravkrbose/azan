import {StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';
import Theme from '../../Utils/useTheme';
import useTheme1 from '../../Utils/useTheme1';
const useGetStyle = () => {
  const {
    background,
    lightBlue,
    wp,
    align,
    txtMedium,
    white,
    btnBackground,
    btnbackground2,
    txtWhite,
  } = useTheme1();
  const {darkMode} = useSelector(state => state.userReducer);

  const styles = StyleSheet.create({
    MainView: {
      flex: 1,
      backgroundColor: background,
    },
    btnPrayer: {
      backgroundColor: lightBlue,
      padding: '5%',
      width: wp('90%'),
      alignSelf: align,
    },

    PrayerTime: {
      fontSize: txtMedium,
      color: white,
      fontWeight: 'bold',
    },
    translateView: {
      marginTop: 10,
      backgroundColor: txtWhite,
      flexDirection: 'row',
      justifyContent: 'space-around',
    },
    btnEng: {
      backgroundColor: 'lightgrey',
      padding: '4%',
      borderRadius: 10,
    },
    txtEng: {
      color: 'black',
      fontSize: 16,
      fontWeight: '900',
    },
    txtApp: {
      alignSelf: align,
      fontSize: 16,
      fontWeight: '400',
      color: txtWhite,
      marginTop: '8%',
      textAlign: 'center'
    },
    // txtApp: {
    //   alignSelf: align,
    //   fontSize: 16,
    //   fontWeight: '900',
    //   color: txtWhite,
    //   marginTop: '20%',
    //   textAlign: 'center',
    // },
    juz_card_root: {
      backgroundColor: btnBackground,
      padding: 20,
      marginVertical: 10,
      marginHorizontal: 20,
    },
    juz_card_head_txt: {
      color: txtWhite,
      fontWeight: '700',
      fontSize: 18,
    },
    juz_btn_root: {
      flex: 1,
      backgroundColor: background,
      borderRadius: 10,
      elevation: darkMode ? 10 : 0,
      paddingHorizontal: 10,
      paddingVertical: 10,
      marginVertical: 10,
      flexDirection: 'row',
      alignItems: 'center',
    },

    juz_btn_left: {
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 50,
      width: 40,
      height: 40,
      backgroundColor: btnBackground,
    },
    juz_btn_left_txt: {
      padding: 5,
      paddingVertical: 6,
      fontSize: 20,
      fontWeight: '700',
      color: txtWhite,
    },
    juz_btn_center_root: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      left: 7,
    },
    juz_btn_center_txt1: {
      fontWeight: '700',
      fontSize: 18,
      color: txtWhite,
    },
    juz_btn_center_txt2: {
      color: txtWhite,
      fontWeight: '600',
    },
    tafseerText: {
      color: txtWhite,
      fontSize: 14,
      fontWeight: '600',
      alignSelf: 'flex-end',
      backgroundColor: background,
      paddingHorizontal: 20,
      marginBottom: 10,
      elevation: darkMode ? 10 : 0,
      paddingVertical: 6,
      borderRadius: 10,
    },
    /*
    ##################################################################################
    Detail Screen style juz Detail or quran Detail
    ###################################################################################
    */
    root: {
      flex: 1,
      backgroundColor: background,
    },
    flatlist_root: {
      flex: 1,
    },
    flatlist_card_container: {
      paddingHorizontal: 10,
      paddingVertical: 15,
      marginHorizontal: 20,
      borderRadius: 10,
      elevation: darkMode ? 3 : 0,
      marginVertical: 5,
      backgroundColor: btnBackground,
    },
    flatlist_heading_text: {
      color: txtWhite,
      fontWeight: '600',
      textAlign: 'right',
      fontSize: 20,
    },
    flatlist_text: {
      color: txtWhite,
      opacity: 0.7,
      textAlign: 'justify',
      fontSize: 17,
    },
    accordianRoot: {
      paddingVertical: 5,
      paddingHorizontal: 10,
      marginTop: 10,
      borderTopColor: '#999',
      borderTopWidth: 2,
      borderRadius: 20,
      borderBottomColor: '#999',
      borderBottomWidth: 2,
    },
    accordianTitle_root: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    accordianTitle_txt: {
      color: txtWhite,
      fontSize: 14,
      fontWeight: '700',
      letterSpacing: 1.7,
    },
    switch_container: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    button_text: {
      color: txtWhite,
      fontSize: 16,
      letterSpacing: 1,
      fontWeight: '600',
    },
    button_container: {
      width: '100%',
      paddingBottom: 10,
      backgroundColor: btnBackground,
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'space-around',
    },
    touchable_button: {
      backgroundColor: btnbackground2,
      paddingHorizontal: 30,
      paddingVertical: 10,
      borderRadius: 10,
      elevation: 20,
    },
    switch_txt: {
      fontSize: 18,
      color: txtWhite,
      marginRight: 10,
    },
    heading_container: {
      backgroundColor: btnBackground,
      paddingHorizontal: 10,
      paddingVertical: 30,
      flexDirection: 'row',
      justifyContent: 'space-between',
    },

    heading_text: {
      color: txtWhite,
      fontWeight: '600',
      fontSize: 20,
    },
    tafseerRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    surahnumberTxt: {
      color: txtWhite,
      fontSize: 20,
      fontWeight: '600',
    },
  });
  return {
    styles,
  };
};

export default useGetStyle;
