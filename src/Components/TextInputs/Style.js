import {StyleSheet} from 'react-native';
import useTheme1 from '../../Utils/useTheme1';
const useGetStyle = () => {
  const {white, black, hp, align, wp, lightGrey, primary, bold, txtMedium} =
    useTheme1();
  const styles = StyleSheet.create({
    txtInp: {
      borderWidth: 1,
      backgroundColor: white,
      borderRadius: 10,
      borderColor: white,
      padding: '4%',
      height: hp('7%'),
      color: black,
    },
    width25Flex: {
      width: '25%',
      flexDirection: 'row',
      alignItems: align,
    },
    width25: {
      width: '25%',
      alignItems: align,
      justifyContent: align,
    },
    txtInp75Width: {
      width: '75%',
      height: hp('8%'),
      borderRightWidth: 0.5,
    },
    wrapIconTxtInp: {
      borderRadius: 10,
      height: hp('8%'),
      flexDirection: 'row',
      width: '100%',
    },
    txtInpBgWhite: {
      borderWidth: 0.5,
      backgroundColor: lightGrey,
      borderRadius: 10,
      borderColor: white,
      padding: '4%',
      height: hp('7%'),
      width: wp('35'),
    },
    txtSend: {
      fontWeight: bold,
      color: primary,
      fontSize: txtMedium,
    },
  });
  return {
    styles,
  };
};

export default useGetStyle;
