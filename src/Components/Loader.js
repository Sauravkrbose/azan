import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import {ActivityIndicator, Modal, Portal} from 'react-native-paper';
import {useSelector} from 'react-redux';

import useTheme1 from '../Utils/useTheme1';
const Loader = () => {
  const {isLoading} = useSelector(states => states.userReducer);
  const {background, btnbackground2, txtWhite} = useTheme1();
  return (
    <Portal>
      <Modal visible={isLoading}>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <View
            style={{
              backgroundColor: background,
              padding: 10,
              borderRadius: 5,
            }}>
            <ActivityIndicator color={btnbackground2} size="small" />
            <Text style={{marginTop: 10, color: txtWhite}}>Fetching..</Text>
          </View>
        </View>
      </Modal>
    </Portal>
  );
};

export default Loader;
