import React, {useState} from 'react';
import {Text, TouchableOpacity, View, ScrollView} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {SET_METHOD} from '../../../../redux/constants';
import {CALCULATION_METHOD} from '../../../../Utils/ActionSheetConstant';
import {calculationDataData} from '../../../../Utils/PrayerData';
import Theme from '../../../../Utils/useTheme';
import useTheme1 from '../../../../Utils/useTheme1';
import ActionSheetClose from '../../../ActionSheetClose';
import getStyle from '../../style';

const CalculationMethod = () => {
  const {styles} = getStyle();
  const {method} = useSelector(states => states.userReducer);
  const dispatch = useDispatch();
  const {btnbackground2} = useTheme1();
  const onPressMethod = req => {
    dispatch({
      type: SET_METHOD,
      payload: req,
    });
  };

  return (
    <View style={styles.root}>
      <ActionSheetClose id={CALCULATION_METHOD} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.heading_text}>Prayer Times</Text>
        <Text style={styles.heading_text2}>Calculation Method</Text>
        <Text style={styles.para}>
          Each option represents different methods for calculating prayer times.
          The main defference are in the Fajr & Isha angles.Please ensure you
          select the same Calculation method as your previous app or
          timetable.More options coming soon.
        </Text>

        {calculationDataData.map(item => (
          <TouchableOpacity
            key={item.id}
            onPress={() => onPressMethod(item.method)}
            style={[
              styles.calculation_btn_root,
              method === item.method ? styles.active_button : null,
            ]}>
            <Text
              style={[
                styles.calculation_btn_txt1,
                method === item.method ? {color: btnbackground2} : null,
              ]}>
              {item.head}
            </Text>
            <Text style={styles.calculation_btn_txt2}>{item.para}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default CalculationMethod;
