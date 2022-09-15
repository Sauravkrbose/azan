import {StyleSheet} from 'react-native';
import useTheme1 from '../../Utils/useTheme1';
const useStyle = () => {
  const {align, wp, hp, txtMedium, txtWhite} = useTheme1();
  const styles = StyleSheet.create({
    modalWrap: {
      flex: 1,
      alignItems: align,
      justifyContent: align,
    },
    imgLogo: {
      width: wp('60%'),
      height: wp('60%'),
    },
    txtLoading: {
      fontSize: txtMedium,
      color: txtWhite,
      margin: '5%',
    },
    indic: {
      margin: '5%',
    },
  });
  return {
    styles,
  };
};

export default useStyle;
