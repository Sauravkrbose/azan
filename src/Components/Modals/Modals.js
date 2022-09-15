import React from 'react';
import {View, Text, ActivityIndicator} from 'react-native';
import Theme from '../../Utils/useTheme';
import Modal from 'react-native-modal';
import useStyle from './useStyle';
import useTheme1 from '../../Utils/useTheme1';

const Modals = props => {
  const {white} = useTheme1();
  const {styles} = useStyle();
  const {loader, loaderIndicator, label} = props;
  return (
    <>
      {loaderIndicator === true ? (
        <Modal isVisible={loader}>
          <View style={styles.modalWrap}>
            {/* <Image
              source={require('../../Assets/Logo.jpg')}
              style={styles.imgLogo}
            /> */}

            <ActivityIndicator
              size="large"
              color={white}
              style={styles.indic}
            />
            <Text style={styles.txtLoading}>{label}</Text>
          </View>
        </Modal>
      ) : null}
    </>
  );
};
export default Modals;
