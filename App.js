import React, { Component, useEffect, useState } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { Store, persistor } from './src/redux/store';
import messaging from '@react-native-firebase/messaging';
import PushNotification from 'react-native-push-notification';

const RootStack = createNativeStackNavigator();
// Navigator Screens
import Navigation from './src/Screens/Navigations/StackNavigation';
import AsyncStorage from '@react-native-async-storage/async-storage';

function App() {
  const generateFcmToken = async () => {
    const fcmtoken = await AsyncStorage.getItem('fcmToken');
    console.log(fcmtoken, 'old token');
    if (!fcmtoken) {
      try {
        const newfcmToken = messaging().getToken();
        await AsyncStorage.setItem('fcmToken', newfcmToken);
      } catch (error) {
        console.log(error, 'in generating fcm token error');
      }
    }
  };
  const requestUserPermission = async () => {
    const authStatus = await messaging().requestPermission();
    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;

    if (enabled) {
      console.log('Authorization status:', authStatus);
      generateFcmToken();
    }
  };

  useEffect(() => {
    // requestUserPermission();
    PushNotification.createChannel({
      channelId: 'WorldAzanTime',
      channelName: 'Azan Time',
    });
  }, []);

  return (
    <Provider store={Store}>
      <PersistGate loading={null} persistor={persistor}>
        <SafeAreaProvider>
          <NavigationContainer>
            <RootStack.Navigator
              headerMode="none"
              screenOptions={{
                headerShown: false,
              }}
            >
              <RootStack.Screen name="Navigation" component={Navigation} />
            </RootStack.Navigator>
          </NavigationContainer>
        </SafeAreaProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;
