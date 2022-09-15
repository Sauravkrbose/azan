import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  View,
  Image,
  Dimensions,
  Vibration,
  Text,
  TouchableOpacity,
} from 'react-native';
import CompassHeading from 'react-native-compass-heading';
import ImageBackground from 'react-native/Libraries/Image/ImageBackground';
import { useSelector } from 'react-redux';
import useTheme1 from '../../Utils/useTheme1';
const { height } = Dimensions.get('window');
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const QibleDirection2 = ({ navigation }) => {
  const { styles } = useGetStyle();
  const [compassHeading, setCompassHeading] = useState(0);
  const [position, setPosition] = useState(0);
  const { qibla_direction, geo_location } = useSelector((states) => states.userReducer);
  const { background, hp } = useTheme1();
  useEffect(() => {
    const degree_update_rate = 1;
    navigation.addListener('focus', () => {
      CompassHeading.start(degree_update_rate, ({ heading, accuracy }) => {
        setCompassHeading(heading);
      });
    });
    navigation.addListener('blur', () => {
      CompassHeading.stop();
    });
  }, []);

  const check = async () => {
    const plusfirst = qibla_direction?.degree + 3;
    const minusSecond = qibla_direction?.degree - 3;
    if (compassHeading < plusfirst) {
      setPosition(2);
    }
    if (compassHeading > minusSecond) {
      setPosition(1);
    }
    if (compassHeading < plusfirst && compassHeading > minusSecond) {
      Vibration.vibrate();
      setPosition(3);
    }
  };

  useEffect(() => {
    check();
  }, [compassHeading]);
  const { darkMode } = useSelector((state) => state.userReducer);
  return (
    <>
      <View
        style={{
          flex: 1,
          backgroundColor: darkMode ? background : '#000',
          justifyContent: 'space-around',
        }}
      >
        <View style={styles.citytxt_root}>
          <View style={styles.citytxt_wrap}>
            <Text style={styles.citytxt}>
              {geo_location ? geo_location?.results[0]?.address_components[0]?.long_name : null}
            </Text>
          </View>
          <View>
            <TouchableOpacity onPress={() => navigation.navigate('LocationSearch')}>
              <MaterialCommunityIcons name="map-search" color={'#fff'} size={40} />
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            justifyContent: 'center',
            alignSelf: 'center',
            width: '100%',
            position: 'relative',
          }}
        >
          <ImageBackground
            style={[styles.image, { transform: [{ rotate: `${360 - (compassHeading + 90)}deg` }] }]}
            resizeMode="contain"
            source={require('../../Assets/compass_bg.png')}
          >
            <View
              style={{
                width: '100%',
                height: height * 0.44,
                borderRadius: 400,
                alignItems: 'center',
                // backgroundColor:'red',
                transform: [{ rotate: `${qibla_direction?.degree + 90}deg` }],
              }}
            >
              {!!qibla_direction ? (
                <Image
                  source={require('../../Assets/kaaba.png')}
                  style={{ height: 30, width: 30 }}
                />
              ) : null}
            </View>
          </ImageBackground>
          <View
            style={{
              height: '100%',
              width: '100%',
              justifyContent: 'center',
              alignItems: 'center',
              position: 'absolute',
              // backgroundColor:'red',
              alignSelf: 'center',
            }}
          >
            <Image
              source={require('../../Assets/arr1.png')}
              resizeMode="contain"
              style={{ height: hp('17%'), marginBottom: hp('5%') }}
            />
          </View>
        </View>
        <View style={styles.turnRoot}>
          <Text style={styles.turntxt1}>{position === 3 ? 'You are Facing' : 'Turn to Your'}</Text>
          <Text style={styles.turntxt2}>
            {position === 1 ? 'Left' : position === 2 ? 'Right' : position === 3 ? 'Makkah' : null}
          </Text>
        </View>
      </View>
    </>
  );
};

export default QibleDirection2;
const useGetStyle = () => {
  const { btnbackground2, btnBackground } = useTheme1();
  const { darkMode } = useSelector((state) => state.userReducer);

  const styles = StyleSheet.create({
    image: {
      width: '100%',
      alignSelf: 'center',
    },
    citytxt_root: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: 25,
    },
    citytxt_wrap: {
      backgroundColor: darkMode ? btnBackground : 'rgba(255,255,255,.1)',
      paddingVertical: 15,
      paddingHorizontal: 25,
      borderRadius: 15,
    },
    citytxt: {
      color: btnbackground2,
      fontSize: 18,
      fontWeight: '600',
      textTransform: 'capitalize',
      letterSpacing: 1,
    },
    turnRoot: {
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
    },
    turntxt1: {
      color: btnbackground2,
      fontSize: 25,
      fontWeight: '700',
      opacity: 0.7,
    },
    turntxt2: {
      color: btnbackground2,
      fontSize: 25,
      fontWeight: '700',
      marginLeft: 10,
    },
  });
  return {
    styles,
  };
};
