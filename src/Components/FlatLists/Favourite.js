import React, {useEffect, useState} from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import useStyle from './useStyle';
import AntDesign from 'react-native-vector-icons/AntDesign'; //heart hearto
import {useDispatch, useSelector} from 'react-redux';
import {addRemoveFavourite} from '../../redux/actions';
import {useNavigation} from '@react-navigation/native';
import {SurahName} from '../../Utils/suraName';
const Favourite = props => {
  const {styles} = useStyle();
  const [state, setState] = useState([]);
  const navigation = useNavigation();
  const {favouritArray} = useSelector(states => states.userReducer);
  const dispatch = useDispatch();
  const onPressfavourite = number => {
    dispatch(addRemoveFavourite(favouritArray, number));
  };
  useEffect(() => {
    let newArray = [];
    for (let item of favouritArray) {
      const filterArray = SurahName.filter(res => res.number === item);
      newArray = newArray.concat(filterArray[0]);
    }
    setState(newArray);
  }, [favouritArray]);
  return (
    <View style={[styles.flatlist_root, {flex: 1}]}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={state}
        keyExtractor={(item, index) => index + item.number + item.name}
        renderItem={({item, index}) => {
          return (
            <TouchableOpacity
              activeOpacity={0.5}
              style={styles.flatlistCard_root}
              key={index}
              onPress={() =>
                navigation.navigate('quran detail', {
                  data: item.number,
                  firstName: item.name,
                  secondName: item.englishName,
                  thirdName: item.englishNameTranslation,
                })
              }>
              <View style={styles.flatlistCard_view}>
                <View style={styles.flatlistCard_view2}>
                  {/* <Text style={styles.flatlistCard_txt}>{item.number}</Text> */}
                  <View style={styles.flatlistCard_view3}>
                    <Text style={styles.flatlistCard_txt2}>
                      {item.number} - {item.englishName}
                    </Text>
                    <Text style={styles.flatlistCard_txt3}>
                      {"        "} Verses {item.ayahs?.length}
                    </Text>
                  </View>
                </View>
                <Text style={styles.flatlistCard_txt1}>{item.name}</Text>
                <TouchableOpacity onPress={() => onPressfavourite(item.number)}>
                  <AntDesign
                    name={
                      favouritArray.some(res => res === item.number)
                        ? 'heart'
                        : 'hearto'
                    }
                    color={'red'}
                    size={20}
                  />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};
export default Favourite;
