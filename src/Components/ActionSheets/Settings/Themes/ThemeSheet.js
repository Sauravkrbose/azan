import React from 'react';
import {Text, View} from 'react-native';
import {Switch} from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';
import {THEME_TOGGLE} from '../../../../redux/constants';
import {THEME} from '../../../../Utils/ActionSheetConstant';
import ActionSheetClose from '../../../ActionSheetClose';
import getStyle from '../../style';
import useTheme1 from '../../../../Utils/useTheme1';
const ThemeSheet = () => {
  const {styles} = getStyle();
  const dispatch = useDispatch();
  const {black, txtWhite} = useTheme1();
  const {darkMode} = useSelector(states => states.userReducer);
  const {btnbackground2} = useTheme1();
  const onToggleSwitch = e => {
    if (e) {
      dispatch({
        type: THEME_TOGGLE,
        payload: true,
      });
    } else {
      dispatch({
        type: THEME_TOGGLE,
        payload: false,
      });
    }
  };
  return (
    <>
      <View style={styles.root}>
        <ActionSheetClose id={THEME} />
        <Text style={styles.heading_text}>Dark or Light Mode</Text>
        <Text style={styles.heading_text2}>Theme</Text>
        <View style={{marginVertical: 20}}>
          <Text style={styles.paraMadhab}>Please select Your Theme Mode</Text>
        </View>
        <View>
          <Text style={{color: txtWhite, fontWeight: '700', fontSize: 18}}>
            Dark Mode
          </Text>
          <Switch
            value={darkMode}
            onValueChange={onToggleSwitch}
            color={btnbackground2}
          />
        </View>
      </View>
    </>
  );
};

export default ThemeSheet;
