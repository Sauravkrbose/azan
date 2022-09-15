import {StyleSheet} from 'react-native';

import useTheme1 from '../../Utils/useTheme1';
const useGetStyle = () => {
  const {align, background, wp} = useTheme1();
  const styles = StyleSheet.create({
    MainView: {
      flex: 1,
      alignItems: align,
      backgroundColor: background,
      justifyContent: align,
    },
    imgSplash: {
      width: wp('60%'),
      height: wp('60%'),
    },
  });
  return {
    styles,
  };
};

export default useGetStyle;
