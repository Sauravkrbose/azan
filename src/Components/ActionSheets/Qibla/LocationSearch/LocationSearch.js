import React, {useRef} from 'react';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import {Switch} from 'react-native-paper';
import {heightPercentageToDP} from 'react-native-responsive-screen';
import {useDispatch, useSelector} from 'react-redux';
import {setLatLongtd} from '../../../../redux/actions';
import {
  LOCATION_SEARCH,
  PRIVACY_POLICY,
} from '../../../../Utils/ActionSheetConstant';
import useTheme1 from '../../../../Utils/useTheme1';
import ActionSheetClose from '../../../ActionSheetClose';
import getStyle from '../../style';
const LocationSearch = () => {
  const {styles} = getStyle();
  const dispatch = useDispatch();
  const {txtWhite, btnbackground2, btnBackground, background} = useTheme1();
  const {geo_location} = useSelector(states => states.userReducer);
  const ref = useRef();
  return (
    <View style={[styles.root, {backgroundColor: background}]}>
      <View style={{flexDirection: 'row', marginBottom: 10}}>
        <Text style={{marginRight: 10, color: txtWhite, fontSize: 18}}>
          Current Location :{' '}
        </Text>
        <Text style={{color: btnbackground2, fontSize: 18}}>
          {geo_location
            ? geo_location?.results[0]?.address_components[0]?.long_name
            : null}
        </Text>
      </View>
      <Text style={styles.heading_text}>Search Your Desire Location</Text>
      <View style={{height: heightPercentageToDP('100%'), marginTop: 10}}>
        <GooglePlacesAutocomplete
          ref={ref}
          placeholder={'Search'}
          onPress={(data, details = null) => {
            if (details && details.geometry && details.geometry.location) {
              dispatch(
                setLatLongtd(
                  details.geometry.location.lat,
                  details.geometry.location.lng,
                ),
              );
            }
          }}
          fetchDetails={true}
          enablePoweredByContainer={false}
          styles={{
            container: {
              height: heightPercentageToDP('100%'),
            },

            textInput: {
              elevation: 20,
            },
            row: {
              // backgroundColor:'red'
            
            },
            description:{
              color:'#000'
            },
            listView: {
              height: '100%',
            },
          }}
          query={{
            key: 'AIzaSyAKB2FsqaJrptmP0dDSkzqL8DzVAX8PplU',
            language: 'en',
          }}
        />
      </View>
    </View>
  );
};

export default LocationSearch;
