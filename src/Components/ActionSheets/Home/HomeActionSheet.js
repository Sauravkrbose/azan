import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { Colors } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import getStyle from '../style';

import { setPrayerNotifictionTime } from '../../../Utils/HelperFunction';
import { PRAYER_NOTIFICATION } from '../../../redux/constants';
import ActionSheetClose from '../../ActionSheetClose';
import { HOME_NOTIFICATION } from '../../../Utils/ActionSheetConstant';
import useTheme1 from '../../../Utils/useTheme1';
const HomeActionSheet = ({ data }) => {
  const dispatch = useDispatch();
  const { styles } = getStyle();
  const { btnbackground2, txtWhite } = useTheme1();
  const { azanNotification } = useSelector(states => states.userReducer);
  const onPressSilent = async () => {
    const d = await setPrayerNotifictionTime(azanNotification, data, 'silent');
    dispatch({
      type: PRAYER_NOTIFICATION,
      payload: d,
    });
  };
  const onPressNotification = async () => {
    const d = await setPrayerNotifictionTime(azanNotification, data, 'noti');
    dispatch({
      type: PRAYER_NOTIFICATION,
      payload: d,
    });
  };
  const onPressAzan = async () => {
    const d = await setPrayerNotifictionTime(azanNotification, data, 'sound');
    dispatch({
      type: PRAYER_NOTIFICATION,
      payload: d,
    });
  };
  return (
    <View style={styles.root}>
      <ActionSheetClose id={HOME_NOTIFICATION} />
      <Text style={[styles.heading_text, { textTransform: 'capitalize', fontSize: 20 }]}>
        {data.name}
      </Text>
      <Text style={styles.heading_text2}>Adhan & Notifications</Text>
      <View style={{ marginVertical: 20 }}>
        <Text style={{ color: txtWhite }}>
          Please select from the following three choices:
        </Text>
        <Text style={{ color: txtWhite }}>
          no adhan or notification, banner notifications only, or adhan & banner
          notification
        </Text>
      </View>
      <TouchableOpacity
        style={[
          styles.madhab_button_root,
          azanNotification[data.name]?.silent ? styles.active_button : null,
        ]}
        onPress={onPressSilent}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Ionicons
            name="md-notifications-off-sharp"
            size={25}
            style={[
              { marginRight: 10 },
              azanNotification[data.name]?.silent
                ? { color: btnbackground2 }
                : { color: txtWhite },
            ]}
          />
          <View>
            <Text
              style={[
                styles.madhab_button_text1,
                azanNotification[data.name]?.silent
                  ? { color: btnbackground2 }
                  : { color: txtWhite },
              ]}>
              Silent
            </Text>
            <Text style={{ color: txtWhite }}>No notification or Adhan</Text>
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.madhab_button_root,
          azanNotification[data.name]?.unsilent ? styles.active_button : null,
        ]}
        onPress={onPressNotification}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Ionicons
            name="md-notifications"
            size={25}
            style={[
              { marginRight: 10 },
              azanNotification[data.name]?.unsilent
                ? { color: btnbackground2 }
                : { color: txtWhite },
            ]}
          />
          <View>
            <Text
              style={[
                styles.madhab_button_text1,
                azanNotification[data.name]?.unsilent
                  ? { color: btnbackground2 }
                  : null,
              ]}>
              Notification
            </Text>
            <Text style={{ color: txtWhite, width: "80%" }}>
              Banner notification only (with default sound).No Adhan
            </Text>
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.madhab_button_root,
          azanNotification[data.name]?.azansound ? styles.active_button : null,
        ]}
        onPress={onPressAzan}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Entypo
            name="sound"
            size={35}
            style={[
              { marginRight: 10 },
              azanNotification[data.name]?.azansound
                ? { color: btnbackground2 }
                : { color: txtWhite },
            ]}
          />
          <View>
            <Text
              style={[
                styles.madhab_button_text1,
                azanNotification[data.name]?.azansound
                  ? { color: btnbackground2 }
                  : null,
              ]}>
              Adhan
            </Text>
            <Text style={{ color: txtWhite, width: "70%" }}>
              Adhan By Misharay Rashid Al-Afasy + banner Notification
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default HomeActionSheet;
