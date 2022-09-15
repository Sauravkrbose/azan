import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import Theme from '../Utils/useTheme';
import useTheme1 from '../Utils/useTheme1';

const PrevNextButtons = ({sura, onPressPrev, onPressNext}) => {
  const {styles} = useGetStyle();
  return (
    <>
      <View style={styles.root}>
        {sura !== '1' ? (
          <TouchableOpacity onPress={onPressPrev} style={styles.prevButtonRoot}>
            <Text style={styles.txt}>Prev</Text>
          </TouchableOpacity>
        ) : null}
        {sura !== '114' ? (
          <TouchableOpacity onPress={onPressNext} style={styles.nextButtonRoot}>
            <Text style={styles.txt}>Next</Text>
          </TouchableOpacity>
        ) : null}
      </View>
    </>
  );
};

export default PrevNextButtons;
const useGetStyle = () => {
  const {btnBackground, txtWhite} = useTheme1();
  const styles = StyleSheet.create({
    root: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      marginVertical: 15,
    },
    prevButtonRoot: {
      backgroundColor: btnBackground,
      paddingHorizontal: 30,
      paddingVertical: 10,
      borderRadius: 15,
      marginRight: 10,
    },
    nextButtonRoot: {
      backgroundColor: btnBackground,
      paddingHorizontal: 30,
      paddingVertical: 10,
      borderRadius: 15,
    },
    txt: {
      color: txtWhite,
    },
  });
  return {
    styles,
  };
};
