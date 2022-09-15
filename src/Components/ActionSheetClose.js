import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {SheetManager} from 'react-native-actions-sheet';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import {useSelector} from 'react-redux';
import useTheme1 from '../Utils/useTheme1';
const ActionSheetClose = ({id}) => {
  const {darkMode} = useSelector(state => state.userReducer);
  const {txtWhite} = useTheme1();
  const onPressClose = () => {
    SheetManager.hide(id);
  };
  return (
    <TouchableOpacity
      style={{
        backgroundColor: darkMode ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.3)',
        height: 20,
        width: 20,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'flex-end',
      }}
      onPress={() => onPressClose()}>
      <EvilIcons name="close" size={15} color={'#fff'} />
    </TouchableOpacity>
  );
};

export default ActionSheetClose;

const styles = StyleSheet.create({});
