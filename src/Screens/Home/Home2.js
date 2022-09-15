/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import * as RNLocalize from 'react-native-localize';
import {
  View,
  TouchableOpacity,
  ScrollView,
  Platform,
  Text,
  PermissionsAndroid,
  ImageBackground,
  Alert,
  Button,
} from 'react-native';
import getStyle from './Styles';
import useTheme1 from '../../Utils/useTheme1';
import moment from 'moment';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ButtonSalah from '../../Components/Buttons/Buttons';
import {
  geoLocation,
  PrayerTimes,
  PrayerTimesByDate,
  QiblaDirection,
  setLatLongtd,
} from '../../redux/actions';
import { useSelector, useDispatch } from 'react-redux';
import DateTimePicker from '@react-native-community/datetimepicker';
import PrayerTimingCard from '../../Components/FlatLists/PrayerTimingCard';
import ActionSheet, { SheetManager } from 'react-native-actions-sheet';
import {
  FormatedDate,
  NotificationSetting,
  NowUpcomingPrayerFilter,
  PushNotificationSetting,
} from '../../Utils/HelperFunction';
import TimeCompo from '../../Components/TimeCompo';
import HomeActionSheet from '../../Components/ActionSheets/Home/HomeActionSheet';
import getActionSheetStyle from '../../Utils/ActionSheetStyle';
import Geolocation from 'react-native-geolocation-service';
import RNHTMLtoPDF from 'react-native-html-to-pdf';
import { HOME_NOTIFICATION } from '../../Utils/ActionSheetConstant';
import RandomImages from '../../Utils/randomImages';
import Images from '../../Utils/Images';
import FileViewer from 'react-native-file-viewer';
import RNDateTimePicker from '@react-native-community/datetimepicker';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import notifee, { TriggerType } from '@notifee/react-native';
import PushNotification from 'react-native-push-notification';
const Home = ({ navigation }) => {
  const { styles } = getStyle();
  const { ActionSheetStyle } = getActionSheetStyle();
  const { btnbackground2, btnBackground, txtWhite } = useTheme1();
  const dispatch = useDispatch();
  const {
    darkMode,
    method,
    adjustmentMethod,
    asrLater,
    prayerByDate,
    azanNotification,
    hour12,
    PrayerTime,
    geo_location,
    Latitude,
    Longitude,
  } = useSelector((state) => state.userReducer);
  const dt = new Date();
  const [state, setState] = useState({
    pickerdate: new Date(),
    show: false,
    parayeNotiData: {},
    now: '',
    coming: '',
    comingTime: '',
    cityName: '',
    countryName: '',
  });

  let yourDate = new Date();
  var ds = yourDate.toISOString().split('T')[0];

  // console.warn(ds)

  var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  var dayName = days[state.pickerdate.getDay()];
  const PrevPress = () => {
    setState({
      ...state,
      pickerdate: new Date(state.pickerdate.setDate(state.pickerdate.getDate() - 1)),
    });
  };
  const NextPress = () => {
    setState({
      ...state,
      pickerdate: new Date(state.pickerdate.setDate(state.pickerdate.getDate() + 1)),
    });
    return;
  };
  const timeAMPM = (time) => {
    return moment(time, 'hh:mm a').format('hh:mm A');
  };

  const onPressButton = (item) => {
    setState({ ...state, parayeNotiData: item });
    SheetManager.show(HOME_NOTIFICATION);
  };

  const getPrayer = () => {
    const timestamp = moment(state.pickerdate).unix();
    const type = asrLater ? 1 : 0;
    dispatch(PrayerTimesByDate(timestamp, Latitude, Longitude, method, adjustmentMethod, type));
  };

  const getPrayer2 = () => {
    const timezone = RNLocalize.getTimeZone();
    const month = dt.getMonth() + 1;
    const year = dt.getFullYear();
    const type = asrLater ? 1 : 0;
    console.log(Latitude, Longitude, 'in prayer');
    dispatch(
      PrayerTimes(Latitude, Longitude, method, adjustmentMethod, type, year, month, timezone)
    );
  };

  const getLoacation = () => {
    dispatch(geoLocation(Latitude, Longitude));
  };

  const getQiblaPosition = () => {
    dispatch(QiblaDirection(Latitude, Longitude));
  };

  const userPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Azan world',
          message: 'Azan world access to your location ',
        }
      );
      await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE, {
        title: 'Write File Permission',
        message: 'The app needs the permission to save the file to the device storage.',
      });

      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        Geolocation.getCurrentPosition((position) => {
          if (position.coords) {
            dispatch(setLatLongtd(position.coords.latitude, position.coords.longitude));
          }
        });
      } else {
        console.log('location permission denied');
        alert('Location permission denied');
      }
    } catch (error) {
      console.warn(error);
    }
  };
  const createPDF = async () => {
    const monthsName = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];
    let tabledata;
    if (PrayerTime) {
      try {
        PrayerTime?.data?.map((item) => {
          const tempData = `
                <tr>
                <td>${item.date.readable}</td>
                <td>${timeAMPM(item?.timings?.Fajr?.split(' ')[0])}</td>
                <td>${timeAMPM(item?.timings?.Sunrise?.split(' ')[0])}</td>
                <td>${timeAMPM(item?.timings?.Dhuhr?.split(' ')[0])}</td>
                <td>${timeAMPM(item?.timings?.Asr?.split(' ')[0])}</td>
                <td>${timeAMPM(item?.timings?.Maghrib?.split(' ')[0])}</td>
                <td>${timeAMPM(item?.timings?.Isha?.split(' ')[0])}</td>
              </tr>
              `;
          if (!tabledata) {
            tabledata = tempData;
          } else {
            tabledata += tempData;
          }
        });
        const htmlStyle = ` <style>
      .table-heading {
        background-color: rgb(2, 2, 77);
      }
      table {
        border-collapse: collapse;
        width: 100%;
      }
      th {
        color: #fff;
      }
      th,
      td {
        text-align: left;
        padding: 8px;
      }
      tr:nth-child(even) {
        background-color: rgba(0, 0, 0, 0.1);
      }
      /* th {
        color: #fff;
        font-weight: 700;
        font-size: 20px;
      } */
    </style>`;
        const html = `<html>
    <head>
    ${htmlStyle}
    </head>
    <body>
    <h2>Prayer time of ${monthsName[dt.getMonth()]} ${dt.getFullYear()} of ${
          geo_location?.results[0]?.address_components[0]?.long_name
        } By Azaan App</h2>
    <table>
      <tr class="table-heading">
        <th>Date</th>
        <th>Fajr</th>
        <th>Sunrise</th>
        <th>Dhuhr</th>
        <th>Asr</th>
        <th>Maghrib</th>
        <th>Isha</th>
      </tr>
      ${tabledata}
    </table>
    </body>
    </html>`;
        let options = {
          html,
          fileName: `${state.cityName}-${monthsName[dt.getMonth()]}-PrayerTime`,
          directory: 'Download',
          base64: true,
        };
        // console.log(options)
        let file = await RNHTMLtoPDF.convert(options);
        if (file.filePath) {
          Alert.alert('Successfully Exported', `File Save at Location: ${file.filePath}`, [
            { text: 'Cancel', style: 'cancel' },
            {
              text: 'Open',
              onPress: () => {
                FileViewer.open(file.filePath)
                  .then(() => console.log('SuccessFully View'))
                  .catch((err) => console.log(err));
              },
            },
          ]);
        }
      } catch (error) {
        console.log(error, 'error on create pdf Function');
      }
    }
  };

  const notification = async (hour, minute) => {
    // await notifee.cancelAllNotifications()
    await notifee.requestPermission();
    const date = new Date(Date.now());
    date.setHours(hour);
    date.setMinutes(minute);
    const trigger = {
      type: TriggerType.TIMESTAMP,
      timestamp: date.getTime(),
      alarmManager: true,
    };
    await notifee.createTriggerNotification(
      {
        title: 'Meeting with Prakash',
        body: 'Today at 11:20am',
        android: {
          channelId: 'WorldAzanTime',
          sound: 'azan',
          showTimestamp: true,
          largeIcon:
            'https://gumlet.assettype.com/greaterkashmir%2F2021-06%2Fca48251e-6dda-4e22-a131-58fb3bc77265%2FHajj_Makkah_Kaaba_Harmain.jpg?auto=format%2Ccompress&fit=max&w=768&dpr=1.0',
        },
        ios: {
          sound: 'azan2',
        },
      },
      trigger
    );
    console.log('in home');
  };
  useEffect(() => {
    if (geo_location) {
      const cityName = geo_location?.results[0]?.address_components[0]?.long_name;
      const addressArray = geo_location?.results[0]?.formatted_address.split(',');
      const countryName = addressArray[addressArray.length - 1];
      setState({ ...state, cityName, countryName });
    }
  }, [geo_location, Latitude, Longitude]);

  useEffect(() => {
    userPermission();
  }, []);

  useEffect(() => {
    if (Latitude && Longitude) {
      // getPrayer2();
      getQiblaPosition();
      getLoacation();
    }
  }, [Latitude, Longitude]);

  useEffect(() => {
    if (Latitude && Longitude) {
      getPrayer2();
    }
  }, [hour12, Latitude, Longitude, adjustmentMethod, method, asrLater]);

  useEffect(() => {
    NowUpcomingPrayerFilter(prayerByDate, state, setState);
  }, [prayerByDate]);
  useEffect(() => {
    if (Latitude && Longitude) {
      getPrayer();
    }
  }, [state.pickerdate, method, asrLater, adjustmentMethod, Latitude, Longitude]);

  const channelId = async () => {
    
    PushNotification.createChannel({
      channelId: 'Azan_Time',
      channelName: 'Prayer_Time',
    });
    // For notifee library
    await notifee.requestPermission();
    await notifee.createChannel({
      id: 'WorldAzanTime',
      name: 'World Azan Time',
      sound: 'azan',
    });
    // await notification(16,42);
    // await notifee.cancelAllNotifications()
    // await NotificationSetting(prayerByDate, azanNotification);
    PushNotificationSetting(prayerByDate, azanNotification);
  };
  useEffect(() => {
    channelId();
  }, [azanNotification]);

  const currentDateStatus = () => {
    let pickDate = `"${state.pickerdate.getDate()}-${state.pickerdate.getMonth()}-${state.pickerdate.getFullYear()}"`;
    let currentD = `"${dt.getDate()}-${dt.getMonth()}-${dt.getFullYear()}"`;
    if (pickDate > currentD) {
      return 1;
    } else if (pickDate < currentD) {
      return 2;
    } else if (pickDate === currentD) {
      return 3;
    }
  };

  const onChangeDate = (event, selectedDate) => {
    const currentdate = selectedDate || state.pickerdate;
    setState({ ...state, show: Platform.OS === 'ios', pickerdate: currentdate });
  };
  const PickDate = () => {
    showDatePicker();
    setState({ ...state, show: true });
  };

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    // console.warn('---', date);
    setState({ ...state, show: Platform.OS === 'ios', pickerdate: date });
    hideDatePicker();
  };

  return (
    <>
      <ActionSheet id={HOME_NOTIFICATION} containerStyle={ActionSheetStyle.container}>
        <HomeActionSheet data={state.parayeNotiData} />
      </ActionSheet>
      {state.show && (
        <>
          {Platform.OS === 'android' ? (
            <View style={{ flex: 1, zIndex: 9999 }}>
              <DateTimePicker
                testID="dateTimePicker"
                value={state.pickerdate}
                mode="date"
                display="calendar"
                onChange={onChangeDate}
              />
            </View>
          ) : (
            <>
              <View style={styles.calender}>
                <DateTimePickerModal
                  isVisible={isDatePickerVisible}
                  mode="date"
                  onConfirm={handleConfirm}
                  onCancel={hideDatePicker}
                  date={state.pickerdate}
                />
              </View>
            </>
          )}
        </>
      )}
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.MainView}>
          <ImageBackground
            source={
              RandomImages.length
                ? {
                    uri: `${RandomImages[Math.floor(Math.random() * RandomImages.length)]}`,
                    cache: 'reload',
                  }
                : Images.Masjid
            }
            imageStyle={{
              width: '100%',
              resizeMode: 'cover',
            }}
            style={{
              height: 150,
              justifyContent: 'space-between',
            }}
          >
            <View style={styles.heading_container}>
              <View style={styles.backgroundDrop}>
                <Text style={styles.headingTxt}>World Azan Time</Text>
                <TimeCompo />
              </View>
            </View>
            <View style={[styles.heading_container, { marginBottom: 6, alignItems: 'center' }]}>
              <View style={[styles.backgroundDrop, { alignItems: 'center' }]}>
                <Text style={styles.nowcoming_heading_txt}>Now</Text>
                <Text style={styles.nowcoming_txt}>{state.now}</Text>
              </View>
              <View style={[styles.backgroundDrop, { alignItems: 'center' }]}>
                <Text style={styles.nowcoming_heading_txt}>Upcoming</Text>
                <Text style={styles.nowcoming_txt}>{state.coming}</Text>
                {state.comingTime ? (
                  <Text style={styles.nowcoming_txt}>
                    {hour12 ? timeAMPM(state.comingTime) : state.comingTime}
                  </Text>
                ) : null}
              </View>
            </View>
          </ImageBackground>

          <View style={styles.wrapView}>
            <ButtonSalah Icons label={currentDateStatus()} />

            <View style={styles.wrapViewRow}>
              <TouchableOpacity onPress={PrevPress}>
                <Ionicons name="chevron-back" size={28} color={btnbackground2} />
              </TouchableOpacity>
              <View>
                <TouchableOpacity activeOpacity={0.6} onPress={() => PickDate()}>
                  <ButtonSalah
                    simpleTxt={true}
                    label={`${dayName} ${FormatedDate(state.pickerdate)}`}
                    customStyle={styles.txtSub}
                  />
                  {/* <Text style={[{ textAlign: 'center' }, styles.txtSub]}>{state.cityName}</Text> */}
                  <TouchableOpacity
                    onPress={() => navigation.navigate('LocationSearch')}
                    style={{ flexDirection: 'row', alignSelf: 'center' }}
                  >
                    <Text style={[{ textAlign: 'center' }, styles.txtSub]}>{state.cityName}</Text>
                    <Ionicons
                      name="location"
                      color={'#f75c2d'}
                      size={25}
                      style={{ marginTop: 3 }}
                    />
                  </TouchableOpacity>
                </TouchableOpacity>
              </View>
              <TouchableOpacity onPress={NextPress}>
                <Ionicons name="chevron-forward-sharp" size={28} color={btnbackground2} />
              </TouchableOpacity>
            </View>
          </View>
          <PrayerTimingCard timeAMPM={timeAMPM} onPress={onPressButton} date={state.pickerdate} />
          <TouchableOpacity
            // activeOpacity={0.4}
            style={{
              backgroundColor: darkMode ? btnBackground : '#8aa2ed50',
              alignSelf: 'center',
              paddingHorizontal: 20,
              paddingVertical: 7,
              borderRadius: 10,
              elevation: darkMode ? 5 : 0,
              borderWidth: 1,
              borderColor: '#fff',
              marginTop: 2,
              marginBottom: 30,
            }}
            onPress={createPDF}
          >
            <Text
              style={{
                color: txtWhite,
                fontSize: 18,
                fontWeight: '600',
              }}
            >
              Generate PDF
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </>
  );
};
export default Home;
