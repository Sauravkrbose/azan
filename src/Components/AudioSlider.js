import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Slider from '@react-native-community/slider';
const AudioSlider = () => {
  return (
    <View style={styles.root}>
      <View style={styles.time}>
        <Text style={styles.timeTxt}>00:00 / </Text>
        <Text style={styles.timeTxt}>00:00</Text>
      </View>
      <Slider
        value={5000}
        minimumValue={0}
        maximumValue={1000}
        thumbTintColor="#fff"
        maximumTrackTintColor="#fff"
        minimumTrackTintColor="red"
        onSlidingComplete={async value => {
          // await TrackPlayer.seekTo(value);
        }}
      />
      <Text>mute</Text>
      <Text>play</Text>
    </View>
  );
};

export default AudioSlider;

const styles = StyleSheet.create({
  root: {
    //     flexDirection: 'row',
    //     alignItems: 'center',
  },
  time: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  timeTxt: {
    color: '#fff',
    fontSize: 10,
  },
});
