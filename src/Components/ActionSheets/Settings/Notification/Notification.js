import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {Switch} from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';
import {
  SET_ALL_NOTIFICATION,
  SET_PRAYER_TIME_NOTIFICATION,
} from '../../../../redux/constants';
import {NOTIFICATION} from '../../../../Utils/ActionSheetConstant';
import useTheme1 from '../../../../Utils/useTheme1';
import ActionSheetClose from '../../../ActionSheetClose';
import getStyle from '../../style';
const Notification = () => {
  const {styles} = getStyle();
  const {txtWhite, btnbackground2} = useTheme1();
  const {allNotifiction, prayerNotifiction} = useSelector(
    state => state.userReducer,
  );
  const dispatch = useDispatch();
  const onPressAllNotification = e => {
    if (e) {
      dispatch({
        type: SET_ALL_NOTIFICATION,
        payload: true,
      });
    } else {
      dispatch({
        type: SET_ALL_NOTIFICATION,
        payload: false,
      });
    }
  };
  const onPressPrayerNotification = e => {
    if (e) {
      dispatch({
        type: SET_PRAYER_TIME_NOTIFICATION,
        payload: true,
      });
    } else {
      dispatch({
        type: SET_PRAYER_TIME_NOTIFICATION,
        payload: false,
      });
    }
  };
  return (
    <View style={styles.root}>
      <ActionSheetClose id={NOTIFICATION} />
      <View style={styles.noti_btn_head_root}>
        <View>
          <Text style={styles.heading_text}>Prayer Times</Text>
          <Text style={styles.heading_text2}>Notification</Text>
        </View>
        <View>
          <Text style={{color: txtWhite}}>All Notification</Text>
          <Switch
            value={allNotifiction}
            onValueChange={onPressAllNotification}
            color={btnbackground2}
          />
        </View>
      </View>
      <Text style={styles.para}>
        Please select which types of notification you would like to receive.
      </Text>
      <TouchableOpacity
        style={[
          styles.madhab_button_root,
          {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          },
        ]}>
        <Text style={styles.calculation_btn_txt1}>Prayer Times</Text>
        <Switch
          value={prayerNotifiction}
          onValueChange={onPressPrayerNotification}
          color={btnbackground2}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Notification;
