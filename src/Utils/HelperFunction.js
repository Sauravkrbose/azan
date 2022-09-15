import { SheetManager } from 'react-native-actions-sheet';
import notifee, { TriggerType } from '@notifee/react-native';
import PushNotification from 'react-native-push-notification';
export const FormatedDate = (date) => {
  let month;
  if (date.getMonth() < 9 && date.getMonth() > 0) {
    month = `${0}${date.getMonth() + 1}`;
  } else if (date.getMonth() === 0) {
    month = `${0}${date.getMonth() + 1}`;
  } else {
    month = date.getMonth() + 1;
  }
  let day;
  if (date.getDate() < 10) {
    day = `${0}${date.getDate()}`;
  } else {
    day = date.getDate();
  }
  const fd = `${day}-${month}-${date.getFullYear()}`;
  return fd;
};
export const OpenActionSheet = async (id) => {
  SheetManager.show(id);
};
export const setPrayerNotifictionTime = async (reducerState, time, type) => {
  const silent = [
    {
      Fajr: {
        silent: true,
        unsilent: false,
        azansound: false,
      },
      Sunrise: {
        silent: true,
        unsilent: false,
        azansound: false,
      },
      Dhuhr: {
        silent: true,
        unsilent: false,
        azansound: false,
      },
      Asr: {
        silent: true,
        unsilent: false,
        azansound: false,
      },
      Maghrib: {
        silent: true,
        unsilent: false,
        azansound: false,
      },
      Isha: {
        silent: true,
        unsilent: false,
        azansound: false,
      },
    },
  ];
  const unsilent = [
    {
      Fajr: {
        silent: false,
        unsilent: true,
        azansound: false,
      },
      Sunrise: {
        silent: false,
        unsilent: true,
        azansound: false,
      },
      Dhuhr: {
        silent: false,
        unsilent: true,
        azansound: false,
      },
      Asr: {
        silent: false,
        unsilent: true,
        azansound: false,
      },
      Maghrib: {
        silent: false,
        unsilent: true,
        azansound: false,
      },
      Isha: {
        silent: false,
        unsilent: true,
        azansound: false,
      },
    },
  ];
  const sound = [
    {
      Fajr: {
        silent: false,
        unsilent: false,
        azansound: true,
      },
      Sunrise: {
        silent: false,
        unsilent: false,
        azansound: true,
      },
      Dhuhr: {
        silent: false,
        unsilent: false,
        azansound: true,
      },
      Asr: {
        silent: false,
        unsilent: false,
        azansound: true,
      },
      Maghrib: {
        silent: false,
        unsilent: false,
        azansound: true,
      },
      Isha: {
        silent: false,
        unsilent: false,
        azansound: true,
      },
    },
  ];
  const obj = {};
  if (type === 'silent') {
    obj[time.name] = silent[0][time.name];
    const returnSilentData = {
      ...reducerState,
      ...obj,
    };
    return returnSilentData;
  } else if (type === 'noti') {
    obj[time.name] = unsilent[0][time.name];
    const returnUnsilentData = {
      ...reducerState,
      ...obj,
    };
    return returnUnsilentData;
  } else if (type === 'sound') {
    obj[time.name] = sound[0][time.name];
    const returnSoundData = {
      ...reducerState,
      ...obj,
    };
    return returnSoundData;
  }
};

// const notify = async (hour, minute, sound, prayerName) => {
//   const date = new Date(Date.now());
//   date.setHours(hour);
//   date.setMinutes(minute);
//   const trigger = {
//     type: TriggerType.TIMESTAMP,
//     timestamp: date.getTime(),
//     alarmManager: true,
//   };

//   await notifee.createTriggerNotification(
//     {
//       title: "It's Time to Pray",
//       body: prayerName + 'Pray time',
//       android: {
//         channelId: 'WorldAzanTime',
//         sound: sound ? 'azan' : false,
//         showTimestamp: true,
//         largeIcon:
//           'https://gumlet.assettype.com/greaterkashmir%2F2021-06%2Fca48251e-6dda-4e22-a131-58fb3bc77265%2FHajj_Makkah_Kaaba_Harmain.jpg?auto=format%2Ccompress&fit=max&w=768&dpr=1.0',
//       },
//       ios: {
//         sound: sound ? 'azan2' : false,
//       },
//     },
//     trigger
//   );
// };
// const SetNotifictionSeconds = async (gettingTime, sound, prayerName) => {
//   let dt = new Date();
//   let hour = Number(gettingTime.slice(0, 2));
//   let minute = Number(gettingTime.slice(3, 5));
//   let currentHour = dt.getHours();
//   let currentMinute = dt.getMinutes();
//   if (hour > currentHour) {
//     // let calhour = Math.abs(currentHour - hour) * 3600;
//     // let calminutes = Math.abs(currentMinute - minute) * 60;
//     // let total = calhour + calminutes;

//     notify(hour, minute, sound, prayerName);
//   } else if (hour === currentHour) {
//     if (minute > currentMinute) {
//       // let calhour = Math.abs(currentHour - hour) * 3600;
//       // let calminutes = Math.abs(currentMinute - minute) * 60;
//       // let total = calhour + calminutes;
//       notify(hour, minute, sound, prayerName);
//     }
//   }
// };

// Using notifee library
export const NotificationSetting = async (prayertime, azanData) => {
  const d = ['Fajr', 'Sunrise', 'Dhuhr', 'Asr', 'Maghrib', 'Isha'];
  d.forEach(async (item) => {
    if (azanData[item].silent) {
      const gettingTime = prayertime?.data?.timings[item];
      let hour = Number(gettingTime.slice(0, 2));
      let minute = Number(gettingTime.slice(3, 5));
      const date = new Date(Date.now());
      date.setHours(hour);
      date.setMinutes(minute);
      const trigger = {
        type: TriggerType.TIMESTAMP,
        timestamp: date.getTime(),
        alarmManager: true,
      };
      console.log('in data upper silent');
      await notifee.createTriggerNotification(
        {
          title: "It's Time to Pray",
          body: item + ' Pray time',
          android: {
            channelId: 'WorldAzanTime',
            showTimestamp: true,
            largeIcon:
              'https://gumlet.assettype.com/greaterkashmir%2F2021-06%2Fca48251e-6dda-4e22-a131-58fb3bc77265%2FHajj_Makkah_Kaaba_Harmain.jpg?auto=format%2Ccompress&fit=max&w=768&dpr=1.0',
          },
        },
        trigger
      );
      console.log('in data lower silent');
    }
    if (azanData[item].unsilent) {
      const gettingTime = prayertime?.data?.timings[item];
      let hour = Number(gettingTime.slice(0, 2));
      let minute = Number(gettingTime.slice(3, 5));

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
          title: "It's Time to Pray",
          body: item + ' Pray time',
          android: {
            channelId: 'WorldAzanTime',
            sound: 'default',
            showTimestamp: true,
            largeIcon:
              'https://gumlet.assettype.com/greaterkashmir%2F2021-06%2Fca48251e-6dda-4e22-a131-58fb3bc77265%2FHajj_Makkah_Kaaba_Harmain.jpg?auto=format%2Ccompress&fit=max&w=768&dpr=1.0',
          },
          ios: {
            sound: 'default',
          },
        },
        trigger
      );
      console.log('in data lower unsilent');
    }

    if (azanData[item].azansound) {
      const gettingTime = prayertime?.data?.timings[item];

      let hour = Number(gettingTime.slice(0, 2));
      let minute = Number(gettingTime.slice(3, 5));
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
          title: "It's Time to Pray",
          body: item + ' Pray time',
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
      console.log('in data lower sound');
    }
  });

  console.log(await notifee.getTriggerNotifications());
};

// using push-notification
export const PushNotificationSetting = async (prayertime, azanData) => {
  PushNotification.cancelAllLocalNotifications()
  const dt = new Date();
  console.log('in notification');
 
  PushNotification.localNotificationSchedule({
    channelId: 'WorldAzanTime',
    title: "initial notification",
    message: ' Pray time',
    date: new Date(Date.now() + 5 * 1000),
    allowWhileIdle: false,
    // playSound: true,
    soundName:'azan.mp3',
    bigPictureUrl:
      'https://gumlet.assettype.com/greaterkashmir%2F2021-06%2Fca48251e-6dda-4e22-a131-58fb3bc77265%2FHajj_Makkah_Kaaba_Harmain.jpg?auto=format%2Ccompress&fit=max&w=768&dpr=1.0',
  });
  const d = ['Fajr', 'Sunrise', 'Dhuhr', 'Asr', 'Maghrib', 'Isha'];
  d.forEach(async (item) => {
    if (azanData[item].silent) {
      const gettingTime = prayertime?.data?.timings[item];
      let hour = Number(gettingTime.slice(0, 2));
      let minute = Number(gettingTime.slice(3, 5));
      let currentHour = dt.getHours();
      let currentMinute = dt.getMinutes();
      console.log('in data upper silent');
      if (hour > currentHour) {
        let calhour = Math.abs(currentHour - hour) * 3600;
        let calminutes = Math.abs(currentMinute - minute) * 60;
        let total = calhour + calminutes;

        PushNotification.localNotificationSchedule({
          channelId: 'WorldAzanTime',
          title: "It's Time to Pray",
          message: item + ' Pray time',
          date: new Date(Date.now() + total * 1000),
          allowWhileIdle: false,
          playSound: false,
          bigPictureUrl:
            'https://gumlet.assettype.com/greaterkashmir%2F2021-06%2Fca48251e-6dda-4e22-a131-58fb3bc77265%2FHajj_Makkah_Kaaba_Harmain.jpg?auto=format%2Ccompress&fit=max&w=768&dpr=1.0',
        });
      } else if (hour === currentHour) {
        if (minute > currentMinute) {
          let calhour = Math.abs(currentHour - hour) * 3600;
          let calminutes = Math.abs(currentMinute - minute) * 60;
          let total = calhour + calminutes;
          PushNotification.localNotificationSchedule({
            channelId: 'WorldAzanTime',
            title: "It's Time to Pray",
            message: item + ' Pray time',
            date: new Date(Date.now() + total * 1000),
            allowWhileIdle: false,
            playSound: false,
            bigPictureUrl:
              'https://gumlet.assettype.com/greaterkashmir%2F2021-06%2Fca48251e-6dda-4e22-a131-58fb3bc77265%2FHajj_Makkah_Kaaba_Harmain.jpg?auto=format%2Ccompress&fit=max&w=768&dpr=1.0',
          });
        }
      }

      console.log('in data lower silent');
    }
    if (azanData[item].unsilent) {
      const gettingTime = prayertime?.data?.timings[item];
      let hour = Number(gettingTime.slice(0, 2));
      let minute = Number(gettingTime.slice(3, 5));
      let currentHour = dt.getHours();
      let currentMinute = dt.getMinutes();
      console.log('in data upper silent');
      if (hour > currentHour) {
        let calhour = Math.abs(currentHour - hour) * 3600;
        let calminutes = Math.abs(currentMinute - minute) * 60;
        let total = calhour + calminutes;

        PushNotification.localNotificationSchedule({
          channelId: 'WorldAzanTime',
          title: "It's Time to Pray",
          message: item + ' Pray time',
          date: new Date(Date.now() + total * 1000),
          allowWhileIdle: false,
          playSound: true,
          soundName: 'default',
          bigPictureUrl:
            'https://gumlet.assettype.com/greaterkashmir%2F2021-06%2Fca48251e-6dda-4e22-a131-58fb3bc77265%2FHajj_Makkah_Kaaba_Harmain.jpg?auto=format%2Ccompress&fit=max&w=768&dpr=1.0',
        });
      } else if (hour === currentHour) {
        if (minute > currentMinute) {
          let calhour = Math.abs(currentHour - hour) * 3600;
          let calminutes = Math.abs(currentMinute - minute) * 60;
          let total = calhour + calminutes;
          PushNotification.localNotificationSchedule({
            channelId: 'WorldAzanTime',
            title: "It's Time to Pray",
            message: item + ' Pray time',
            date: new Date(Date.now() + total * 1000),
            allowWhileIdle: false,
            playSound: true,
            soundName: 'default',
            bigPictureUrl:
              'https://gumlet.assettype.com/greaterkashmir%2F2021-06%2Fca48251e-6dda-4e22-a131-58fb3bc77265%2FHajj_Makkah_Kaaba_Harmain.jpg?auto=format%2Ccompress&fit=max&w=768&dpr=1.0',
          });
        }
      }

      console.log('in data lower silent');
    }
    if (azanData[item].azansound) {
      const gettingTime = prayertime?.data?.timings[item];
      let hour = Number(gettingTime.slice(0, 2));
      let minute = Number(gettingTime.slice(3, 5));
      let currentHour = dt.getHours();
      let currentMinute = dt.getMinutes();
      console.log('in data upper silent');
      if (hour > currentHour) {
        let calhour = Math.abs(currentHour - hour) * 3600;
        let calminutes = Math.abs(currentMinute - minute) * 60;
        let total = calhour + calminutes;

        PushNotification.localNotificationSchedule({
          channelId: 'WorldAzanTime',
          title: "It's Time to Pray",
          message: item + ' Pray time',
          date: new Date(Date.now() + total * 1000),
          allowWhileIdle: false,
          playSound: true,
          soundName: 'azan',
          bigPictureUrl:
            'https://gumlet.assettype.com/greaterkashmir%2F2021-06%2Fca48251e-6dda-4e22-a131-58fb3bc77265%2FHajj_Makkah_Kaaba_Harmain.jpg?auto=format%2Ccompress&fit=max&w=768&dpr=1.0',
        });
      } else if (hour === currentHour) {
        if (minute > currentMinute) {
          let calhour = Math.abs(currentHour - hour) * 3600;
          let calminutes = Math.abs(currentMinute - minute) * 60;
          let total = calhour + calminutes;
          PushNotification.localNotificationSchedule({
            channelId: 'WorldAzanTime',
            title: "It's Time to Pray",
            message: item + ' Pray time',
            date: new Date(Date.now() + total * 1000),
            allowWhileIdle: false,
            playSound: true,
            soundName: 'azan',
            bigPictureUrl:
              'https://gumlet.assettype.com/greaterkashmir%2F2021-06%2Fca48251e-6dda-4e22-a131-58fb3bc77265%2FHajj_Makkah_Kaaba_Harmain.jpg?auto=format%2Ccompress&fit=max&w=768&dpr=1.0',
          });
        }
      }

      console.log('in data lower silent');
    }
    // if (azanData[item].unsilent) {
    //   const gettingTime = prayertime?.data?.timings[item];
    //   let hour = Number(gettingTime.slice(0, 2));
    //   let minute = Number(gettingTime.slice(3, 5));

    //   const date = new Date(Date.now());
    //   date.setHours(hour);
    //   date.setMinutes(minute);
    //   PushNotification.localNotificationSchedule({
    //     channelId: 'WorldAzanTime',
    //     title: "It's Time to Pray",
    //     message: item + ' Pray time',
    //     date: date.getTime(),
    //     allowWhileIdle: false,
    //     playSound: true,
    //     soundName: 'default',
    //     bigPictureUrl:
    //       'https://gumlet.assettype.com/greaterkashmir%2F2021-06%2Fca48251e-6dda-4e22-a131-58fb3bc77265%2FHajj_Makkah_Kaaba_Harmain.jpg?auto=format%2Ccompress&fit=max&w=768&dpr=1.0',
    //   });
    //   console.log('in data lower unsilent');
    // }

    // if (azanData[item].azansound) {
    //   const gettingTime = prayertime?.data?.timings[item];
    //   let hour = Number(gettingTime.slice(0, 2));
    //   let minute = Number(gettingTime.slice(3, 5));
    //   const date = new Date(Date.now());
    //   date.setHours(hour);
    //   date.setMinutes(minute);
    //   PushNotification.localNotificationSchedule({
    //     channelId: 'WorldAzanTime',
    //     title: "It's Time to Pray",
    //     message: item + ' Pray time',
    //     date: date.getTime(),
    //     allowWhileIdle: false,
    //     playSound: true,
    //     soundName: 'azan',
    //     bigPictureUrl:
    //       'https://gumlet.assettype.com/greaterkashmir%2F2021-06%2Fca48251e-6dda-4e22-a131-58fb3bc77265%2FHajj_Makkah_Kaaba_Harmain.jpg?auto=format%2Ccompress&fit=max&w=768&dpr=1.0',
    //   });

    //   console.log('in data lower sound');
    // }
  });
  console.log(
    PushNotification.getScheduledLocalNotifications((res) =>
      console.log(res, 'in all notification')
    )
  );
  // console.log(await notifee.getTriggerNotifications());
};

export const NowUpcomingPrayerFilter = (prayerByDate, state, setstate) => {
  const dt = new Date();
  const hour = dt.getHours() < 10 ? `0${dt.getHours()}` : dt.getHours();
  const minutes = dt.getMinutes() < 10 ? `0${dt.getMinutes()}` : dt.getMinutes();
  const currentTime = `"${hour}:${minutes}"`;
  if (
    currentTime > `"${prayerByDate?.data?.timings?.Fajr}"` &&
    currentTime < `"${prayerByDate?.data?.timings?.Sunrise}"`
  ) {
    setstate({
      ...state,
      now: 'Fajr',
      coming: 'Sunrise',
      comingTime: prayerByDate?.data?.timings?.Sunrise,
    });
  } else if (
    currentTime > `"${prayerByDate?.data?.timings?.Sunrise}"` &&
    currentTime < `"${prayerByDate?.data?.timings?.Dhuhr}"`
  ) {
    setstate({
      ...state,
      now: 'Sunrise',
      coming: 'Dhuhr',
      comingTime: prayerByDate?.data?.timings?.Dhuhr,
    });
  } else if (
    currentTime > `"${prayerByDate?.data?.timings?.Dhuhr}"` &&
    currentTime < `"${prayerByDate?.data?.timings?.Asr}"`
  ) {
    setstate({
      ...state,
      now: 'Dhuhr',
      coming: 'Asr',
      comingTime: prayerByDate?.data?.timings?.Asr,
    });
  } else if (
    currentTime > `"${prayerByDate?.data?.timings?.Asr}"` &&
    currentTime < `"${prayerByDate?.data?.timings?.Maghrib}"`
  ) {
    setstate({
      ...state,
      now: 'Asr',
      coming: 'Maghrib',
      comingTime: prayerByDate?.data?.timings?.Maghrib,
    });
  } else if (
    currentTime > `"${prayerByDate?.data?.timings?.Maghrib}"` &&
    currentTime < `"${prayerByDate?.data?.timings?.Isha}"`
  ) {
    setstate({
      ...state,
      now: 'Maghrib',
      coming: 'Isha',
      comingTime: prayerByDate?.data?.timings?.Isha,
    });
  } else if (
    currentTime > `"${prayerByDate?.data?.timings?.Isha}"` &&
    currentTime > `"${prayerByDate?.data?.timings?.Fajr}"`
  ) {
    setstate({
      ...state,
      now: 'Isha',
      coming: 'Fajr',
      comingTime: '',
    });
  }
};
