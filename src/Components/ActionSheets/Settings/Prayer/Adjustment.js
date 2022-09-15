import React, {useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {Colors} from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';
import {ADJUSTMENT_METHOD, ASR_LATER} from '../../../../redux/constants';
import {ADJUSTMENT} from '../../../../Utils/ActionSheetConstant';
import {AdjustmentMethod} from '../../../../Utils/PrayerData';
import Theme from '../../../../Utils/useTheme';
import useTheme1 from '../../../../Utils/useTheme1';
import ActionSheetClose from '../../../ActionSheetClose';
import getStyle from '../../style';

const Adjustment = () => {
  const {styles} = getStyle();
  const {asrLater, adjustmentMethod} = useSelector(state => state.userReducer);
  const dispatch = useDispatch();
  const {btnbackground2} = useTheme1();
  return (
    <View style={styles.root}>
      <ActionSheetClose id={ADJUSTMENT} />
      <Text style={styles.heading_text}>Prayer Timing</Text>
      <Text style={styles.heading_text2}>Madhab</Text>
      <View style={{marginVertical: 20}}>
        <Text style={styles.paraMadhab}>
          Please select your Adjustment Method.
        </Text>
      </View>
      {AdjustmentMethod.map((item, index) => (
        <TouchableOpacity
          key={index}
          style={[
            styles.madhab_button_root,
            adjustmentMethod === item.id ? styles.active_button : null,
          ]}
          onPress={() =>
            dispatch({
              type: ADJUSTMENT_METHOD,
              payload: item.id,
            })
          }>
          <Text
            style={[
              styles.madhab_button_text1,
              adjustmentMethod === item.id ? {color: btnbackground2} : null,
            ]}>
            {item.name}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default Adjustment;
