import messaging from '@react-native-firebase/messaging';
import Storage from '@react-native-async-storage/async-storage';
export async function requestUserPermission() {
  const authStatus = await messaging().requestPermission();
  const enabled =
    authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
    authStatus === messaging.AuthorizationStatus.PROVISIONAL;

  if (enabled) {
    getNotificationToken();
  }
}

const getNotificationToken = async () => {
  let storageToken = await Storage.getItem('nfToken');
  if (!storageToken) {
    try {
      await Storage.setItem('nfToken', storageToken);
    } catch (error) {
      console.log(error, 'error async notification');
    }
  }
};
export const notificationListener = async () => {
  messaging().onNotificationOpenedApp(remoteMessage => {
    console.log(
      'Notification caused app to open from background state:',
      remoteMessage.notification,
    );
  });
  messaging().onMessage(async remoteMessage => {
    console.log(
      'Notification caused app to open from forground state:',
      remoteMessage.notification,
    );
  });
  messaging()
    .getInitialNotification()
    .then(remoteMessage => {
      if (remoteMessage) {
        console.log(
          'Notification caused app to open from quit state:',
          remoteMessage.notification,
        );
      }
    });
};
