import {StyleSheet} from 'react-native';
import useTheme1 from '../../Utils/useTheme1';
import {useSelector} from 'react-redux';
import { heightPercentageToDP } from 'react-native-responsive-screen';
const useGetStyle = () => {
  const {darkMode} = useSelector(state => state.userReducer);
  const {
    background,
    btnBackground,
    white,
    align,
    primary,
    txtSmall,
    txtMedium,
    txtWhite,
    wp,
  } = useTheme1();
  const styles = StyleSheet.create({
    flatlist_root: {
      paddngVertical: 50,
      backgroundColor: background,
      paddingHorizontal: 15,
      minHeight: heightPercentageToDP('95%'),
    },
    flatlistCard_root: {
      paddingHorizontal: 13,
      paddingVertical: 15,
      marginVertical: 5,
      borderRadius: 10,
      elevation: darkMode ? 10 : 0,
      backgroundColor: btnBackground,
    },
    flatlistCard_view: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    flatlistCard_view2: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    flatlistCard_view3: {
      alignItems: 'flex-start',
    },
    flatlistCard_txt: {
      color: txtWhite,
      fontSize: 22,
    },
    flatlistCard_txt1: {
      color: txtWhite,
      fontSize: 25,
      fontWeight: '700',
      marginHorizontal: 5,
    },
    flatlistCard_txt2: {
      color: txtWhite,
      fontSize: 18,
      fontWeight: '600',
      marginLeft: 3,
    },
    flatlistCard_txt3: {
      color: txtWhite,
      fontStyle: 'italic',
      fontSize: 16,
      opacity: 0.7,
      marginLeft: 3,
    },
    wrapInnerFL: {
      backgroundColor: white,
      width: '100%',
      marginTop: '5%',
      elevation: darkMode ? 5 : 0,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: align,
      paddingVertical: '5%',
    },
    fixWidth: {
      width: '32%',
    },
    txtCap: {
      color: primary,
      fontSize: txtSmall,
    },
    txtName: {
      color: primary,
      fontSize: txtMedium,
      textAlign: align,
      fontWeight: '500',
    },
    WrapViews: {
      flexDirection: 'row',
      marginTop: '4%',
      padding: '5%',
      width: '100%',
      elevation: darkMode ? 3 : 0,
      justifyContent: align,
    },
    WrapText: {
      fontSize: 18,
      fontWeight: '900',
      color: txtWhite,
      top: 8,
    },
    WrapTextType: {
      fontSize: 14,
      fontWeight: '900',
      color: 'green',
      left: '8%',
      top: '5%',
    },
    num: {
      fontSize: 16,
      fontWeight: '900',
      color: txtWhite,
      top: '2%',
    },
    txtTranslation: {
      fontSize: 16,
      fontWeight: '900',
      color: txtWhite,
      opacity: 0.8,
      marginTop: 10,
      left: '7%',
    },
    txtTranslations: {
      fontSize: 16,
      fontWeight: '900',
      color: 'grey',
      left: '7%',
    },
    col: {
      flexDirection: 'column',
    },
    row: {
      flexDirection: 'row',
    },
    rowSpace: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: wp('80%'),
    },
  });
  return {
    styles,
  };
};

export default useGetStyle;
