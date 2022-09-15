import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {RadioButton} from 'react-native-paper';
import useTheme1 from '../../Utils/useTheme1';
import getStyle from './style';

const Translation = ({state, onPress}) => {
  const {styles} = getStyle();
  const {btnbackground2, txtWhite} = useTheme1();
  return (
    <View style={styles.root}>
      <Text style={styles.heading_text}>Language</Text>
      <Text style={styles.para}>Please select Your Language.</Text>
      <TouchableOpacity
        style={[styles.madhab_button_root, styles.translationButton]}>
        <Text style={styles.translationButton_txt}>English</Text>
        <RadioButton
          value="first"
          uncheckedColor={txtWhite}
          color={btnbackground2}
          status={state.lang_toggle ? 'checked' : 'unchecked'}
          onPress={onPress}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.madhab_button_root, styles.translationButton]}>
        <Text style={styles.translationButton_txt}>Urdu</Text>
        <RadioButton
          value="first"
          uncheckedColor={txtWhite}
          color={btnbackground2}
          status={!state.lang_toggle ? 'checked' : 'unchecked'}
          onPress={onPress}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Translation;
