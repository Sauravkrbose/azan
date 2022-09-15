import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import getStyle from './Styles';
import QuranFList from '../../Components/FlatLists/HomePageFL';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {quranPak} from '../../redux/actions';
import {useSelector, useDispatch} from 'react-redux';
import {data} from '../../Utils/juzzAllData';
import Theme from '../../Utils/useTheme';
import Favourite from '../../Components/FlatLists/Favourite';
import {SurahName} from '../../Utils/suraName';
import PushNotification from 'react-native-push-notification';
import useTheme1 from '../../Utils/useTheme1';
import {Searchbar} from 'react-native-paper';
import {heightPercentageToDP} from 'react-native-responsive-screen';

const Tab = createMaterialTopTabNavigator();

function Juz({navigation}) {
  const {styles} = getStyle();
  const {btnBackground, btnbackground2, searchTextColor, txtWhite, background} =
    useTheme1();
  const [juzzData, setJuzzData] = useState(data);
  const [searchText, setSearchText] = useState('');
  const onPressButton = (firstIndex, secondIndex) => {
    const filteredData = data.find((item, index) => index === firstIndex);
    // console.log(filteredData);
    const filteredData2 = filteredData.find(
      (item, index) => index === secondIndex,
    );
    navigation.navigate('juzDetail', {
      firstIndex,
      secondIndex,
      filteredData2,
    });
  };

  useEffect(() => {
    if (searchText) {
      let d = [];
      juzzData.forEach(parent => {
        const filteredData = parent.filter(
          child =>
            String(child.englishName)
              .toLowerCase()
              .includes(String(searchText).toLowerCase()) ||
            String(child.englishNameTranslation)
              .toLowerCase()
              .includes(String(searchText).toLowerCase()) ||
            String(child.name)
              .toLowerCase()
              .includes(String(searchText).toLowerCase()) ||
            child.number === Number(searchText),
        );

        d.push(filteredData);
      });
      const finalFilter = d.filter(item => item.length > 0);

      if (finalFilter?.length > 0) {
        setJuzzData(finalFilter);
        // console.log(finalFilter);
      }
    } else {
      setJuzzData(data);
    }
  }, [searchText]);

  return (
    <ScrollView>
      <View
        style={{
          backgroundColor: background,
          minHeight: heightPercentageToDP('95%'),
        }}>
        <View style={{paddingHorizontal: 20, marginTop: 10}}>
          <Searchbar
            placeholder="Search"
            onChangeText={text => setSearchText(text)}
            value={searchText}
            iconColor={txtWhite}
            placeholderTextColor={searchTextColor}
            collapsable={true}
            inputStyle={{color: txtWhite}}
            style={{
              backgroundColor: btnBackground,
              elevation: 0,
              color: {txtWhite},
              borderRadius: 15,
            }}
          />
        </View>
        {juzzData.map((item, i) => (
          <View key={i} style={styles.juz_card_root}>
            <Text style={styles.juz_card_head_txt}>Juz {i + 1}</Text>
            <View>
              {item.map((res, index) => (
                <TouchableOpacity
                  onPress={() => onPressButton(i, index)}
                  key={index + res.englishName}
                  activeOpacity={0.7}
                  style={styles.juz_btn_root}>
                  <View style={styles.juz_btn_left}>
                    <Text style={[styles.juz_btn_left_txt, {fontSize: 16}]}>
                      {res.number}
                    </Text>
                  </View>
                  <View style={[styles.juz_btn_center_root, {padding: '2%'}]}>
                    <View style={{width: '50%', margin: 2}}>
                      <Text
                        style={[styles.juz_btn_center_txt1, {fontSize: 18}]}>
                        {res.englishName}
                      </Text>
                      <Text
                        style={[styles.juz_btn_center_txt2, {fontSize: 12}]}>
                        {res.englishNameTranslation}
                      </Text>
                    </View>

                    <View style={{alignItems: 'center'}}>
                      <Text
                        style={[styles.juz_btn_center_txt2, {fontSize: 19}]}>
                        {res.name}
                      </Text>
                      <Text style={styles.juz_btn_center_txt2}>
                        {res.ayahas} Ayahas
                      </Text>
                    </View>
                  </View>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

function Surah({navigation}) {
  const {btnBackground} = useTheme1();
  return (
    <View>
      <QuranFList
        data={SurahName}
        navigation={navigation}
        BGColor={btnBackground}
      />
    </View>
  );
}

function MyTabs() {
  const {btnbackground2, background, txtWhite} = useTheme1();
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      screenOptions={{
        tabBarActiveTintColor: btnbackground2,
        tabBarInactiveTintColor: txtWhite,
        tabBarLabelStyle: {fontSize: 14, fontWeight: '700'},
        tabBarStyle: {
          backgroundColor: background,
          paddingTop: 20,
        },
      }}>
      <Tab.Screen
        name="Quran"
        component={Surah}
        options={{
          tabBarLabel: 'Surah',
        }}
      />
      <Tab.Screen name="Juz" component={Juz} options={{tabBarLabel: 'Juz'}} />
      <Tab.Screen
        name="Favourite"
        component={Favourite}
        options={{tabBarLabel: 'Favourite'}}
      />
    </Tab.Navigator>
  );
}

const Quran = ({navigation}) => {
  return <MyTabs />;
};
export default Quran;
