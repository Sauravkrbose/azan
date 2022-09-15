import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useSelector } from 'react-redux';
import useTheme1 from '../../Utils/useTheme1';


const ButtonSalah = props => {
  const { styles } = useGetstyle();
  const {
    loader,
    simpleTxt,
    btnSmall,
    label,
    labelTwo,
    onPress,
    onPressNotifiy,
    iconName,
    alignSelf,
    btnMedium,
    IconNames,
    Icons,
  } = props;
  return (
    <>
      {btnSmall === true ? (
        <TouchableOpacity
          style={{
            ...styles.btnWrap,
            alignSelf: alignSelf,
            backgroundColor: props.BGcolor,
          }}
          onPress={onPress}>
          <Text style={{ ...styles.txtLabel, color: props.txtColor }}>
            {label}
          </Text>
        </TouchableOpacity>
      ) : btnMedium === true ? (
        <>
          <TouchableOpacity
            style={{
              ...styles.btnMediumWrap,
              alignSelf: alignSelf,
              backgroundColor: props.BGcolor,
              borderColor: props.BColor,
              height: props.height,
              width: props.width,
            }}
            onPress={onPress}>
            <View style={styles.wrapView}>
              <Text style={{ ...styles.txtLabel, color: props.txtColor }}>
                {label}
              </Text>
              <View style={styles.wrapViewRow}>
                <Text style={{ ...styles.txtLabel, color: props.txtColor }}>
                  {labelTwo}
                </Text>
                <TouchableOpacity onPress={onPressNotifiy}>
                  <MaterialIcons
                    name={iconName}
                    size={20}
                    color={props.IconColor}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </TouchableOpacity>
        </>
      ) : simpleTxt === true ? (
        <Text
          style={{
            ...props.customStyle,
          }}>
          {label}
        </Text>
      ) : loader === true ? (
        <ActivityIndicator size={props.size} color={props.color} />
      ) : Icons === true ?
        (<View style={{
          flexDirection: "row",
          borderWidth: 1,
          borderColor: "#FF8F6E",
          justifyContent: "center",
          alignItems: "center",
          alignSelf: "center",
          borderRadius: 2,
          paddingHorizontal: "2%",
          marginBottom: "1.5%",
          width: 90,
          height: 30
        }}>
          {label == 2 ?
            <>
              <Text style={{
                color: '#FF8F6E',
                fontSize: 14,
                fontWeight: "700",
              }}> {"TODAY"} </Text>
              <Ionicons name={'arrow-forward'} size={19} color={'#FF8F6E'} />
            </>
            : label == 1 ?
              <>
                <Ionicons name={"arrow-back"} size={19} color={'#FF8F6E'} />
                <Text style={{
                  color: '#FF8F6E',
                  fontSize: 14,
                  fontWeight: "700",
                }}> {"TODAY"} </Text>
              </> :

              <Text style={{
                color: '#FF8F6E',
                fontSize: 14,
                fontWeight: "700",
              }}> {"TODAY"} </Text>
          }
        </View>)
        : null}
    </>
  );
};
const useGetstyle = () => {
  const { darkMode } = useSelector(state => state.userReducer);

  const {
    lightGrey,
    txtMedium,
    row,
    spaceBetween,
    btnBackground2,
    wp,
    hp,
    align,
    btnBackground,
  } = useTheme1();
  const styles = StyleSheet.create({
    txtLabel: {
      color: lightGrey,
      fontSize: txtMedium,
      marginStart: '5%',
      fontWeight: '600',
      paddingEnd: '3%',
    },
    wrapView: {
      flexDirection: row,
      justifyContent: spaceBetween,
    },
    wrapViewRow: {
      flexDirection: row,
    },
    btnWrap: {
      backgroundColor: btnBackground2,
      width: wp('40%'),
      height: hp('7%'),
      borderRadius: 10,
      elevation: darkMode ? 5 : 0,
      alignItems: align,
      justifyContent: align,
    },
    btnMediumWrap: {
      marginTop: '5%',
      width: wp('94%'),
      height: hp('7%'),
      borderWidth: 1,
      borderColor: btnBackground,
      borderRadius: 10,
      backgroundColor: btnBackground,
      justifyContent: align,
      alignSelf: align,
    },
    dd: {
      justifyContent: align,
    },
  });
  return {
    styles,
  };
};
export default ButtonSalah;
