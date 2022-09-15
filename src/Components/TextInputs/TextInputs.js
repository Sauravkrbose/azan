import React from 'react';
import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import useTheme1 from '../../Utils/useTheme1';
import getStyle from './Style';
const TextInputs = props => {
  const {placeholderCol} = useTheme1();
  const {styles} = getStyle();
  const {
    simpleTxtInput,
    label,
    onPressSend,
    value,
    onChangeText,
    secureTextEntry,
    placeholder,
    width,
    maxLength,
    chatTxtInput,
    whiteBgTxtInp,
  } = props;
  return (
    <>
      {simpleTxtInput === true ? (
        <TextInput
          label={label}
          value={value}
          placeholderTextColor={placeholderCol}
          onChangeText={onChangeText}
          secureTextEntry={secureTextEntry}
          style={{...styles.txtInp, width: width}}
          placeholder={placeholder}
          maxLength={maxLength}
        />
      ) : chatTxtInput === true ? (
        <View style={styles.wrapIconTxtInp}>
          <TextInput
            value={value}
            onChangeText={onChangeText}
            placeholderTextColor={placeholderCol}
            style={styles.txtInp75Width}
            placeholder={placeholder}
            maxLength={maxLength}
            multiline={true}
          />
          <View style={styles.width25}>
            <TouchableOpacity onPress={onPressSend}>
              <Text style={styles.txtSend}>Send</Text>
            </TouchableOpacity>
          </View>
        </View>
      ) : whiteBgTxtInp === true ? (
        <TextInput
          label={label}
          value={value}
          onChangeText={onChangeText}
          placeholderTextColor={placeholderCol}
          secureTextEntry={secureTextEntry}
          style={styles.txtInpBgWhite}
          placeholder={placeholder}
        />
      ) : null}
    </>
  );
};
export default TextInputs;
