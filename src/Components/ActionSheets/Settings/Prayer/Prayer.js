import React, {useEffect, useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import ActionSheet from 'react-native-actions-sheet';
import {Switch} from 'react-native-paper';
import getStyle from '../../style';
import Madhab from './Madhab';
import CalculationMethod from './CalculationMethod';
import {OpenActionSheet} from '../../../../Utils/HelperFunction';
import {useDispatch, useSelector} from 'react-redux';
import {SET_12HOUR} from '../../../../redux/constants';
import Theme from '../../../../Utils/useTheme';
import getActionSheetStyle from '../../../../Utils/ActionSheetStyle';
import Adjustment from './Adjustment';
import {
  AdjustmentMethod,
  calculationDataData,
} from '../../../../Utils/PrayerData';
import {
  ADJUSTMENT,
  CALCULATION_METHOD,
  MADHAB,
  PRAYER,
} from '../../../../Utils/ActionSheetConstant';
import ActionSheetClose from '../../../ActionSheetClose';
import useTheme1 from '../../../../Utils/useTheme1';
const Prayer = () => {
  const {ActionSheetStyle} = getActionSheetStyle();
  const {styles} = getStyle();
  const [isSwitchOn, setIsSwitchOn] = useState(false);
  const [calculationMethodName, setCalculationMethodName] = useState('');
  const [adjustmentMethodName, setAdjustmentMethodName] = useState('');
  const {hour12, asrLater, method, adjustmentMethod} = useSelector(
    states => states.userReducer,
  );
  const {btnbackground2} = useTheme1();
  const dispatch = useDispatch();
  const onToggleSwitch = e => {
    if (e) {
      dispatch({
        type: SET_12HOUR,
        payload: true,
      });
    } else {
      dispatch({
        type: SET_12HOUR,
        payload: false,
      });
    }
    setIsSwitchOn(!isSwitchOn);
  };
  useEffect(() => {
    const filterData = calculationDataData.find(item => item.method === method);
    setCalculationMethodName(filterData?.head);
    const filterAdjustment = AdjustmentMethod.find(
      item => item.id === adjustmentMethod,
    );
    setAdjustmentMethodName(filterAdjustment.name);
  }, [method, adjustmentMethod]);

  return (
    <>
      <ActionSheet id={MADHAB} containerStyle={ActionSheetStyle.container}>
        <Madhab />
      </ActionSheet>
      <ActionSheet
        id={CALCULATION_METHOD}
        containerStyle={ActionSheetStyle.container}>
        <CalculationMethod />
      </ActionSheet>
      <ActionSheet id={ADJUSTMENT} containerStyle={ActionSheetStyle.container}>
        <Adjustment />
      </ActionSheet>
      <View style={styles.root}>
        <ActionSheetClose id={PRAYER} />
        <Text style={styles.heading_text}>setting</Text>
        <Text style={styles.heading_text2}>Prayer Times</Text>
        <Text style={styles.para}>
          Please select how you would like your prayer times to be calculated.
        </Text>
        <TouchableOpacity
          style={[styles.button, {marginVertical: 10}]}
          activeOpacity={0.7}>
          <Text style={styles.btn_text}>12-Hour Time</Text>
          <Switch
            value={hour12}
            onValueChange={onToggleSwitch}
            color={btnbackground2}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, {marginVertical: 10}]}
          activeOpacity={0.7}
          onPress={() => OpenActionSheet(MADHAB)}>
          <Text style={styles.btn_text}>Madhab / Asr Time</Text>
          <Text style={styles.btn_text2}>
            {asrLater ? 'Later' : 'Earlier'} Asr
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, {marginVertical: 10}]}
          activeOpacity={0.7}
          onPress={() => OpenActionSheet(CALCULATION_METHOD)}>
          <Text style={styles.btn_text}>Calulation method</Text>
          <Text style={styles.btn_text2}>{calculationMethodName}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, {marginVertical: 10}]}
          activeOpacity={0.7}
          onPress={() => OpenActionSheet(ADJUSTMENT)}>
          <Text style={styles.btn_text}>Adjustment</Text>
          <Text style={styles.btn_text2}>{adjustmentMethodName}</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default Prayer;
