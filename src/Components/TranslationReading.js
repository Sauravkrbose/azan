import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

import Entypo from 'react-native-vector-icons/Entypo';
import {useSelector} from 'react-redux';
import useTheme1 from '../Utils/useTheme1';
const TranslationReading = ({state, setState, onPress}) => {
  const {btnbackground2, txtWhite} = useTheme1();
  const {styles} = useGetStyle();
  return (
    <View style={styles.root}>
      <TouchableOpacity
        onPress={() => {
          setState({...state, reading: false});
        }}
        style={[
          styles.view1,
          styles.activeView,
          state.reading ? null : styles.activeBacground,
        ]}
        activeOpacity={0.5}>
        <View style={styles.translationButton}>
          <Text
            style={[
              styles.txt,
              !state.reading ? {color: btnbackground2} : null,
            ]}>
            Translation
          </Text>
          <TouchableOpacity
            activeOpacity={0.6}
            onPress={onPress}
            style={styles.arrowButton}>
            <Entypo name="chevron-down" size={20} color={txtWhite} />
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.activeView,
          state.reading ? styles.activeBacground : null,
        ]}
        activeOpacity={0.5}
        onPress={() => {
          setState({...state, reading: true});
        }}>
        <Text
          style={[styles.txt, state.reading ? {color: btnbackground2} : null]}>
          Reading
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default TranslationReading;
const useGetStyle = () => {
  const {background, btnBackground, txtWhite} = useTheme1();
  const {darkMode} = useSelector(state => state.userReducer);

  const styles = StyleSheet.create({
    root: {
      backgroundColor: background,
      paddingHorizontal: 3,
      paddingVertical: 3,
      borderRadius: 20,
      flexDirection: 'row',
      alignItems: 'center',
    },
    activeView: {
      paddingVertical: 7,
      paddingHorizontal: 20,
      borderRadius: 20,
    },
    txt: {
      color: txtWhite,
      fontSize: 18,
    },
    activeBacground: {
      backgroundColor: btnBackground,
      elevation: darkMode ? 20 : 0,
    },
    translationButton: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    arrowButton: {
      paddingHorizontal: 3,
      paddingVertical: 2,
      marginLeft: 2,
      borderRadius: 5,
      backgroundColor: background,
    },
  });
  return {
    styles,
  };
};
