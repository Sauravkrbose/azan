import React from 'react';
import {View, Platform} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Quran from '../Quran/Quran';
import Settings from '../Settings/Settings';
import useTheme1 from '../../Utils/useTheme1';
import QibleDirection2 from '../Qibla/QibleDirection2';
import Home2 from '../Home/Home2';
import MosqueIcon from 'react-native-vector-icons/FontAwesome5'; //mosque
import KaabaIcon from 'react-native-vector-icons/FontAwesome5'; //kaaba
import SettingIcons from 'react-native-vector-icons/Ionicons'; //md-settings-outline
import BookIcon from 'react-native-vector-icons/SimpleLineIcons'; //book-open
const Tab = createBottomTabNavigator();
export default function TabNavigator() {
  const {btnbackground2, background, txtWhite} = useTheme1();
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarLabelStyle: {fontSize: 12, marginBottom:  Platform.OS === 'android' ? 5 : 0,},
        tabBarActiveTintColor: btnbackground2,
        tabBarInactiveTintColor: txtWhite,
        tabBarStyle: {
          backgroundColor: background,
          // height: 50,
          borderTopWidth: 0,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={Home2}
        options={{
          headerShown: false,
          tabBarInactiveTintColor: txtWhite,
          title: 'Prayer',
          tabBarIcon: ({focused}) => {
            return (
              <MosqueIcon
                name="mosque"
                size={20}
                color={focused ? btnbackground2 : txtWhite}
              />
            );
          },
        }}
      />

      <Tab.Screen
        name="QiblaDirection"
        component={QibleDirection2}
        options={{
          title: 'Qibla',
          tabBarIcon: ({focused}) => {
            return (
              <KaabaIcon
                name="kaaba"
                size={23}
                color={focused ? btnbackground2 : txtWhite}
              />
            );
          },
        }}
      />

      <Tab.Screen
        name="Al Quran"
        component={Quran}
        options={{
          title: 'Al-Quran',
          tabBarIcon: ({focused}) => {
            return (
              <BookIcon
                name="book-open"
                size={20}
                color={focused ? btnbackground2 : txtWhite}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <SettingIcons
                name="md-settings-outline"
                size={23}
                color={focused ? btnbackground2 : txtWhite}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
}
