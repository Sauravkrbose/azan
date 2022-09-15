import React, { useEffect, useState } from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import getStyle from './useStyle';
import AntDesign from 'react-native-vector-icons/AntDesign'; //heart hearto
import {useDispatch, useSelector} from 'react-redux';
import {addRemoveFavourite} from '../../redux/actions';
import {Searchbar} from 'react-native-paper';
import useTheme1 from '../../Utils/useTheme1';

const QuranFList = props => {
  const {styles} = getStyle();
  const {navigation, data} = props;
  const {favouritArray} = useSelector(state => state.userReducer);
  const dispatch = useDispatch();
  const {txtWhite, searchTextColor, btnBackground} = useTheme1();
  const [state, setState] = useState({surahData: data, search: ''});

  const onPressfavourite = number => {
    dispatch(addRemoveFavourite(favouritArray, number));
  };
  const onChangeSearch = text => {
    setState({...state, search: text});
  };
  useEffect(() => {
    if (state.search) {
      const filteredData = data.filter(
        item =>
          Number(item?.number) === Number(state.search) ||
          Number(item?.verses) === Number(state.search) ||
          String(item?.name)
            .toLowerCase()
            .includes(String(state.search).toLowerCase())||
          String(item?.englishName)
            .toLowerCase()
            .includes(String(state.search).toLowerCase())||
          String(item?.englishNameTranslation)
            .toLowerCase()
            .includes(String(state.search).toLowerCase()),
      );
      if (filteredData.length > 0) {
        setState({
          ...state,
          surahData: filteredData,
        });
      }
    } else {
      setState({...state, surahData: data});
    }
  }, [state.search]);
  return (
    <View style={styles.flatlist_root}>
      <View style={{marginTop: 10}}>
        <Searchbar
          placeholder="Search"
          onChangeText={onChangeSearch}
          value={state.search}
          iconColor={txtWhite}
          placeholderTextColor={searchTextColor}
          collapsable={true}
          onTouchCancel={() => setSurahData(data)}
          inputStyle={{color: txtWhite}}
          style={{
            backgroundColor: btnBackground,
            elevation: 0,
            color: {txtWhite},
            borderRadius: 15,
          }}
        />
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={state.surahData}
        keyExtractor={(item, index) => index + item.number}
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
                      {'        '} Verses {item.ayahs?.length}
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
              {/* <View
                  style={{
                    ...styles.WrapViews,
                    borderRadius: 20,
                    backgroundColor: props.BGColor,
                  }}>
                  <View style={styles.col}>
                    <View style={styles.row}>
                      <ButtonSalah
                        simpleTxt={true}
                        label={`${item.number} -`}
                        customStyle={styles.num}
                      />
                      <View style={styles.rowSpace}>
                        <ButtonSalah
                          simpleTxt={true}
                          label={`${item.englishName}`}
                          customStyle={styles.WrapText}
                        />
                        <ButtonSalah
                          simpleTxt={true}
                          label={`${item.name}`}
                          customStyle={styles.WrapText}
                        />
                      </View>
                    </View>
                    <ButtonSalah
                      simpleTxt={true}
                      label={`${item.englishNameTranslation} (${item.ayahs.length})`}
                      customStyle={styles.txtTranslation}
                    />
                    <ButtonSalah
                      simpleTxt={true}
                      label={`${item.revelationType}`}
                      customStyle={styles.WrapTextType}
                    />
                  </View>
                </View> */}
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};
export default QuranFList;
