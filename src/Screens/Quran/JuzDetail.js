import React, {useEffect, useRef, useState} from 'react';
import {Text, View, TouchableOpacity, FlatList} from 'react-native';
import {Switch} from 'react-native-paper';
import getStyle from './Styles';
import {useDispatch, useSelector} from 'react-redux';
import Loader from '../../Components/Loader';
import {SurahsDetail} from '../../redux/actions';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {isLoading} from '../../redux/constants';
import Theme from '../../Utils/useTheme';
import ActionSheet, {SheetManager} from 'react-native-actions-sheet';
import {TAFSEER, TRANSLATION} from '../../Utils/ActionSheetConstant';
import Tafseer from '../../Components/ActionSheets/Tafseer/Tafseer';
import getActionSheetStyle from '../../Utils/ActionSheetStyle';
import TranslationReading from '../../Components/TranslationReading';
import PrevNextButtons from '../../Components/PrevNextButtons';
import {data} from '../../Utils/juzzAllData';
import Translation from '../../Components/ActionSheets/Translation';

const JuzDetail = ({route}) => {
  const {ActionSheetStyle} = getActionSheetStyle();
  const {styles} = getStyle();
  const commonStyles = styles;
  const {firstIndex, secondIndex, filteredData2} = route.params;
  const {surah_detail} = useSelector(states => states.userReducer);
  const dispatch = useDispatch();

  const name = useRef(filteredData2.name);
  const englishName = useRef(filteredData2.englishName);
  const juz = useRef(filteredData2.juz);
  const surahNumber = useRef(filteredData2.number);
  const filter = useRef(filteredData2.filter);
  const from = useRef(filteredData2.from);
  const to = useRef(filteredData2.to);
  const index1 = useRef(firstIndex);
  const index2 = useRef(secondIndex);
  const [state, setState] = useState({
    lang_toggle: false,
    accordian: null,
    data: [],
    reading: false,
    tafseerText: '',
  });
  const updatingRef = props => {
    const filteredData = data.find((item, index) => index === index1.current);
    const filterdData2 = filteredData.find(
      (item, index) => index === index2.current,
    );
    englishName.current = filterdData2?.englishName;
    name.current = filterdData2?.name;
    juz.current = filterdData2?.juz;
    filter.current = filterdData2?.filter;
    from.current = filterdData2?.from;
    to.current = filterdData2?.to;
    surahNumber.current = filterdData2?.number;
    console.log(surahNumber.current);
    DispatchFunction();
  };
  const onPressNext = () => {
    const filteredData = data.find((item, index) => index === index1.current);
    if (filteredData?.length > index2.current + 1) {
      index2.current = index2.current + 1;
      updatingRef();
    } else {
      index1.current = index1.current + 1;
      index2.current = 0;
      updatingRef();
    }
  };
  const onPressPrev = () => {
    const filteredData = data.find((item, index) => index === index1.current);
    // console.log(filteredData);
    if (filteredData?.length > index2.current === 0 ? 0 : index2.current - 1) {
      index2.current = index2.current === 0 ? 0 : index2.current - 1;
      updatingRef();
    } else {
      index1.current = index1.current - 1;
      index2.current = 0;
      updatingRef();
    }
  };
  const returningData = () => {
    const lang = state.lang_toggle ? 'english_saheeh' : 'urdu_junagarhi';
    return surah_detail.find(
      item => item.number === surahNumber.current && item.lang === lang,
    );
  };
  const filterSurah = () => {
    let filterData = returningData();
    const datas = filterData?.data?.result?.slice(from.current, to.current);
    return datas;
  };
  const onPressTafseer = text => {
    setState({...state, tafseerText: text});
    SheetManager.show(TAFSEER);
  };
  const onPressTranslationArrow = () => {
    SheetManager.show(TRANSLATION);
  };
  const onPressTranslationButton = () => {
    setState({...state, lang_toggle: !state.lang_toggle});
  };
  const filteringData = props => {
    if (filter.current) {
      const filterData = filterSurah();
      setState({...state, data: filterData});
    } else {
      const temdata = returningData();
      setState({...state, data: temdata?.data?.result});
    }
  };
  const DispatchFunction = props => {
    const lang = state.lang_toggle ? 'english_saheeh' : 'urdu_junagarhi';
    if (
      !surah_detail.some(
        item => item.number === surahNumber.current && item.lang === lang,
      )
    ) {
      if (state.lang_toggle) {
        dispatch(SurahsDetail(surahNumber.current, 'english_saheeh'));
      }
      if (!state.lang_toggle) {
        dispatch(SurahsDetail(surahNumber.current, 'urdu_junagarhi'));
      }
    } else {
      if (filter.current) {
        const filterData = filterSurah();
        setState({...state, data: filterData});
      } else {
        // console.log('in filter');
        const temdata = returningData();
        setState({...state, data: temdata?.data?.result});
      }
    }
  };
  useEffect(() => {
    filteringData();
  }, [surah_detail]);
  useEffect(() => {
    DispatchFunction();
  }, [state.lang_toggle]);

  return (
    <>
      <ActionSheet id={TAFSEER} containerStyle={ActionSheetStyle.container}>
        <Tafseer text={state.tafseerText} lang={state.lang_toggle} />
      </ActionSheet>
      <ActionSheet id={TRANSLATION} containerStyle={ActionSheetStyle.container}>
        <Translation state={state} onPress={onPressTranslationButton} />
      </ActionSheet>
      <Loader />
      <View style={commonStyles.root}>
        <View style={commonStyles.heading_container}>
          <Text style={commonStyles.heading_text}>{englishName.current}</Text>
          <Text style={commonStyles.heading_text}>Juz {juz.current}</Text>
          <Text style={commonStyles.heading_text}>{name.current}</Text>
        </View>
        <View style={commonStyles.button_container}>
          <TranslationReading
            state={state}
            setState={setState}
            onPress={onPressTranslationArrow}
          />
        </View>
        <View style={commonStyles.flatlist_root}>
          <FlatList
            data={state.data}
            keyExtractor={(item, index) => index}
            renderItem={({item, index}) => {
              return (
                <>
                  <View
                    style={[
                      commonStyles.flatlist_card_container,
                      index === 0 ? {marginTop: 10} : null,
                    ]}>
                    <View style={styles.tafseerRow}>
                      <View>
                        <Text style={styles.tafseerText}>
                          {surahNumber.current}:{from.current + index + 1}
                        </Text>
                      </View>
                      <View>
                        {!state.reading ? (
                          <TouchableOpacity
                            activeOpacity={0.5}
                            onPress={() => onPressTafseer(item.footnotes)}>
                            <Text style={styles.tafseerText}>Tafseer</Text>
                          </TouchableOpacity>
                        ) : null}
                      </View>
                    </View>

                    <Text style={commonStyles.flatlist_heading_text}>
                      {item.arabic_text}
                    </Text>
                    {!state.reading ? (
                      <Text
                        style={[
                          commonStyles.flatlist_text,
                          !state.lang_toggle ? {textAlign: 'right'} : null,
                        ]}>
                        {item.translation}
                      </Text>
                    ) : null}
                  </View>
                  {index + 1 === state.data.length ? (
                    <PrevNextButtons
                      sura={surahNumber.current.toString()}
                      onPressNext={onPressNext}
                      onPressPrev={onPressPrev}
                    />
                  ) : null}
                </>
              );
            }}
          />
        </View>
      </View>
    </>
  );
};

export default JuzDetail;
