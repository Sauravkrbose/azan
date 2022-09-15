import {StyleSheet} from 'react-native';
import useTheme1 from './useTheme1';
const useGetStyle = () => {
  const {hp, background} = useTheme1();
  const ActionSheetStyle = StyleSheet.create({
    container: {
      backgroundColor: background,
      height: hp('80%'),
      borderTopRightRadius: 20,
      borderTopLeftRadius: 20,
    },
  });
  return {
    ActionSheetStyle,
  };
};
export default useGetStyle;
