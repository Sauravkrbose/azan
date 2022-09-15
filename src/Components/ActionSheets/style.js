import {StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';
import useTheme1 from '../../Utils/useTheme1';
const useGetStyle = () => {
  const {btnbackground2, btnBackground, white, txtWhite} = useTheme1();
  const {darkMode} = useSelector(state => state.userReducer);

  const styles = StyleSheet.create({
    root: {
      paddingHorizontal: 20,
      paddingVertical: 10,
    },
    heading_text: {
      textTransform: 'uppercase',
      color: btnbackground2,
      fontWeight: '600',
      fontSize: 20
    },
    heading_text2: {
      fontSize: 24,
      letterSpacing: 0.7,
      color: txtWhite,
      fontWeight: '700',
    },
    para: {
      color: txtWhite,
      marginVertical: 20,
    },
    paraMadhab: {
      fontSize: 16,
      color: txtWhite,
    },
    button: {
      backgroundColor: btnBackground,
      paddingVertical: 15,
      flexDirection: 'row',
      borderRadius: 10,
      paddingHorizontal: 15,
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    btn_text: {
      color: txtWhite,
      fontSize: 17,
    },
    btn_text2: {
      color: txtWhite,
      opacity: 0.5,
      textTransform: 'capitalize',
    },
    noti_btn_head_root: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    madhab_button_root: {
      backgroundColor: btnBackground,
      borderWidth: 2,
      borderColor: btnBackground,
      padding: 10,
      borderRadius: 10,
      marginVertical: 10,
      elevation: darkMode ? 2 : 0,
    },
    active_button: {
      borderWidth: 2,
      borderColor: btnbackground2,
    },
    madhab_button_text1: {
      color: txtWhite,
      fontWeight: '600',
      fontSize: 17,
    },
    calculation_btn_root: {
      backgroundColor: btnBackground,
      borderWidth: 2,
      borderColor: btnBackground,
      padding: 10,
      borderRadius: 10,
      marginVertical: 10,
      elevation: darkMode ? 2 : 0,
    },
    calculation_btn_txt1: {
      fontWeight: '700',
      fontSize: 20,
      color: txtWhite,
      textTransform: 'capitalize',
      letterSpacing: 0.2,
    },
    calculation_btn_txt2: {
      textTransform: 'capitalize',
      color: txtWhite,
    },
    madhab_button_text2: {
      color: txtWhite,
      opacity: 0.7,
    },
    translationButton: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      elevation: darkMode ? 20 : 0,
    },
    translationButton_txt: {
      color: txtWhite,
      fontWeight: '600',
      fontSize: 18,
    },
    privacy_policy_text: {
      color: txtWhite,
      fontSize: 17,
      marginVertical: 8,
      textAlign: 'justify',
      lineHeight: 25,
    },
    privacy_policy_heading: {
      color: btnbackground2,
      fontSize: 20,
      marginTop: 15,
      fontWeight: '600',
    },
  });
  return {
    styles,
  };
};
export default useGetStyle;
