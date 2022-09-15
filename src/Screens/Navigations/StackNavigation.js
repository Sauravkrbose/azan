import React, { useEffect, useState } from 'react';
import {
  View,
  SafeAreaView,
  StatusBar,
  LogBox,
  Platform,
  TouchableOpacity,
  PermissionsAndroid,
} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Theme from '../../Utils/useTheme';

const Stack = createNativeStackNavigator();
//Screens Imported
import SplashScreen from '../Splash/Splash';
import TabNavigator from '../BottomTab/TabNaviagtor';
import QuranDetail from '../Quran/QuranDetail';
import Loader from '../../Components/Loader';
import JuzDetail from '../Quran/JuzDetail';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Provider as PaperProvider, DefaultTheme } from 'react-native-paper';
import useTheme1 from '../../Utils/useTheme1';
import { useSelector } from 'react-redux';
import LocationSearch from '../../Components/ActionSheets/Qibla/LocationSearch/LocationSearch';
function Navigation() {
  const userPermission = async () => {
    try {
      await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION, {
        title: 'Azan world',
        message: 'Azan world access to your location ',
      });
      await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE, {
        title: 'Write File Permission',
        message: 'The app needs the permission to save the file to the device storage.',
      });
      await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE, {
        title: 'Read File Permission',
        message: 'The app needs the permission to read the file to the device storage.',
      });
    } catch (error) {
      console.log(error);
    }
  };
  const { background, primary, txtWhite } = useTheme1();
  const { darkMode } = useSelector((state) => state.userReducer);

  useEffect(() => {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
    LogBox.ignoreLogs(['Possible Unhandled Promise Rejection']);
    userPermission();
  }, []);
  const theme = {
    ...DefaultTheme,
    roundness: 2,
    myOwnProperty: true,
    customSizes: {},
    colors: {
      ...DefaultTheme.colors,
      primary: '#3498db',
      accent: '#f1c40f',
      red: '#f7021b',
      green: '#02d41b',
      btnBackground: '#001a3f',
      btnbackground2: '#FF8F6E',
      background: '#002349',
      backgroundLight: '#fff',
      txtWhite: '#ffffff',
      txtInLight: '#000',
      borderInLight: '#666666',
      secondary: '#ed5b00',
      gold: '#ada11f',
      txtBlue: 'blue',
      lightGrey: '#f0f1f2',
      lightBlue: '#182a4a',
      placeholderCol: 'grey',
      white: 'white',
      blue: '#5978ff',
      black: 'black',
      txtBlack: 'black',
      iconCol: '#D1D1D1',
    },
  };
  return (
    <PaperProvider theme={theme}>
      <SafeAreaView style={{ flex: 1 }}>
        <Loader />
        <View>
          {Platform.OS === 'ios' ? (
            <StatusBar barStyle={darkMode ? 'light-content' : 'dark-content'} />
          ) : (
            <StatusBar
              barStyle={darkMode ? 'light-content' : 'dark-content'}
              backgroundColor={darkMode?primary:'#fff'}
            />
          )}
        </View>
        <Stack.Navigator initialRouteName="SplashScreen">
          <Stack.Screen
            name="SplashScreen"
            component={SplashScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="quran detail"
            component={QuranDetail}
            options={({ navigation }) => ({
              title: 'Quran Detail',
              headerStyle: { backgroundColor: background },
              headerTitleStyle: { color: txtWhite, fontSize: 20 },
              headerLeft: () => (
                <>
                  <TouchableOpacity
                    onPress={() => navigation.goBack()}
                    style={{ marginRight: 20, marginLeft: 10, marginTop: 6 }}
                  >
                    <MaterialIcons name="arrow-back-ios" color={txtWhite} size={25} />
                  </TouchableOpacity>
                </>
              ),
            })}
          />
          <Stack.Screen
            name="juzDetail"
            component={JuzDetail}
            options={({ navigation }) => ({
              title: 'Juz Detail',
              headerStyle: { backgroundColor: background },
              headerTitleStyle: { color: txtWhite, fontSize: 20 },
              headerLeft: () => (
                <>
                  <TouchableOpacity
                    onPress={() => navigation.goBack()}
                    style={{ marginRight: 20, marginLeft: 10, marginTop: 6 }}
                  >
                    <MaterialIcons name="arrow-back-ios" color={txtWhite} size={25} />
                  </TouchableOpacity>
                </>
              ),
            })}
          />
          <Stack.Screen
            name="LocationSearch"
            component={LocationSearch}
            options={({ navigation }) => ({
              title: 'Location Search',
              headerStyle: { backgroundColor: background },
              headerTitleStyle: { color: txtWhite, fontSize: 20 },
              headerLeft: () => (
                <>
                  <TouchableOpacity
                    onPress={() => navigation.goBack()}
                    style={{ marginRight: 20, marginLeft: 10, marginTop: 6 }}
                  >
                    <MaterialIcons name="arrow-back-ios" color={txtWhite} size={25} />
                  </TouchableOpacity>
                </>
              ),
            })}
          />
          <Stack.Screen
            name="TabNavigator"
            component={TabNavigator}
            options={{ headerShown: false }}
          />
          {/* <Stack.Screen
            name="LocationSearch"
            component={LocationSearch}
            options={{headerShown: true}}
          /> */}
        </Stack.Navigator>
      </SafeAreaView>
    </PaperProvider>
  );
}

export default Navigation;
