import React from 'react';
import {StyleSheet, Text, ScrollView, View} from 'react-native';
import {TAFSEER} from '../../../Utils/ActionSheetConstant';
import useTheme1 from '../../../Utils/useTheme1';
import ActionSheetClose from '../../ActionSheetClose';

const Tafseer = ({text, lang}) => {
  const {styles} = useStyle();
  return (
    <>
      <ScrollView>
        <View style={styles.close}>
          <ActionSheetClose id={TAFSEER} />
        </View>
        <View style={styles.root}>
          <Text style={[styles.txt, !lang ? {textAlign: 'right'} : null]}>
            {text}
          </Text>
        </View>
      </ScrollView>
    </>
  );
};

export default Tafseer;
const useStyle = () => {
  const {txtWhite} = useTheme1();
  const styles = StyleSheet.create({
    root: {
      paddingHorizontal: 20,
      paddingVertical: 20,
    },
    txt: {
      color: txtWhite,
      fontSize: 20,
    },
    close: {
      marginHorizontal: 20,
      marginTop: 10,
    },
  });
  return {
    styles,
  };
};
