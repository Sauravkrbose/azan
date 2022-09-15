import React, {useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {Colors} from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';
import {ASR_LATER} from '../../../../redux/constants';
import {MADHAB} from '../../../../Utils/ActionSheetConstant';
import Theme from '../../../../Utils/useTheme';
import useTheme1 from '../../../../Utils/useTheme1';
import ActionSheetClose from '../../../ActionSheetClose';
import getStyle from '../../style';

const Madhab = () => {
  const {styles} = getStyle();
  const {asrLater} = useSelector(state => state.userReducer);
  const dispatch = useDispatch();
  const {btnbackground2} = useTheme1();
  return (
    <View style={styles.root}>
      <ActionSheetClose id={MADHAB} />
      <Text style={styles.heading_text}>Prayer Timing</Text>
      <Text style={styles.heading_text2}>Madhab</Text>
      <View style={{marginVertical: 20}}>
        <Text style={styles.paraMadhab}>
          Please select your school of thought (Madhab).
        </Text>
        <Text style={styles.paraMadhab}>
          This will affect which Asr time is displayed.
        </Text>
      </View>
      <TouchableOpacity
        style={[
          styles.madhab_button_root,
          !asrLater ? styles.active_button : null,
        ]}
        onPress={() =>
          dispatch({
            type: ASR_LATER,
            payload: false,
          })
        }>
        <Text
          style={[
            styles.madhab_button_text1,
            !asrLater ? {color: btnbackground2} : null,
          ]}>
          Earlier Asr Time - Shafi'l, Maliki & Hanbali
        </Text>
        <Text style={styles.madhab_button_text2}>Mithl 1</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.madhab_button_root,
          asrLater ? styles.active_button : null,
        ]}
        onPress={() =>
          dispatch({
            type: ASR_LATER,
            payload: true,
          })
        }>
        <Text
          style={[
            styles.madhab_button_text1,
            asrLater ? {color: btnbackground2} : null,
          ]}>
          Later Asr Time - Hanfi
        </Text>
        <Text style={styles.madhab_button_text2}>Mithl 2</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Madhab;
