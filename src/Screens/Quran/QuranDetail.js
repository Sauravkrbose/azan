import React, {useEffect, useState, useRef} from 'react';
import {Text, View, TouchableOpacity, FlatList} from 'react-native';
import {Colors, Switch} from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';
import Loader from '../../Components/Loader';
import {SurahsDetail} from '../../redux/actions';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Sound from 'react-native-sound';
import getStyle from './Styles';
import ActionSheet, {SheetManager} from 'react-native-actions-sheet';
import getActionSheetStyle from '../../Utils/ActionSheetStyle';
import Tafseer from '../../Components/ActionSheets/Tafseer/Tafseer';
import {TAFSEER, TRANSLATION} from '../../Utils/ActionSheetConstant';
import TranslationReading from '../../Components/TranslationReading';
import PrevNextButtons from '../../Components/PrevNextButtons';
import {SurahName} from '../../Utils/suraName';
import Translation from '../../Components/ActionSheets/Translation';
import useTheme1 from '../../Utils/useTheme1';
const QuranDetail = ({route}) => {
  const {styles} = getStyle();
  const {txtWhite} = useTheme1();
  const {ActionSheetStyle} = getActionSheetStyle();
  const commonStyles = styles;
  const {data, firstName, secondName, thirdName} = route.params;
  const {surah_detail} = useSelector(states => states.userReducer);
  const dispatch = useDispatch();
  const Firstname = useRef(firstName);
  const SecondName = useRef(secondName);
  const ThirdName = useRef(thirdName);
  const suranNumber = useRef(data);
  const songRef = useRef(false);
  const [state, setState] = useState({
    lang_toggle: false,
    accordian: null,
    reading: false,
    play: true,
    song: false,
    data: [],
    tafseerText: '',
  });
  if (!songRef.current) {
    let song;
    let songNumber = Number(suranNumber.current);
    if (songNumber < 10) {
      song = `00${songNumber}`;
    } else if (songNumber <= 10 && songNumber > 100) {
      song = `0${songNumber}`;
    } else {
      song = songNumber;
    }
    Sound.setCategory('Playback');
    let audio = new Sound(
      `https://server6.mp3quran.net/akdr/${song}.mp3`,
      null,
      error => {
        if (error) {
          console.log('failed to load the sound', error);
          return;
        }
        songRef.current = audio;
      },
    );
  }
  const UpdateNames = async number => {
    const filteredData = await SurahName.find(
      item => item.number === Number(number),
    );
    SecondName.current = filteredData.englishName;
    ThirdName.current = filteredData.englishNameTranslation;
    Firstname.current = filteredData.name;
  };
  const returningData = nxtprev => {
    if (nxtprev) {
      const lang = state.lang_toggle ? 'english_saheeh' : 'urdu_junagarhi';
      return surah_detail.find(
        item => item.number === suranNumber.current && item.lang === lang,
      );
    } else {
      const lang = state.lang_toggle ? 'english_saheeh' : 'urdu_junagarhi';
      return surah_detail.find(
        item => item.number === suranNumber.current && item.lang === lang,
      );
    }
  };
  const onPressPlayPause = () => {
    if (songRef.current) {
      if (state.play) {
        songRef.current.play();
        setState({...state, play: false});
      } else {
        songRef.current.pause();
        setState({...state, play: true});
      }
    }
  };
  const DispatchingNextPrevFunc = nxtprev => {
    if (nxtprev) {
      const lang = state.lang_toggle ? 'english_saheeh' : 'urdu_junagarhi';
      if (
        !surah_detail.some(
          item => item.number === suranNumber.current && item.lang === lang,
        )
      ) {
        if (state.lang_toggle) {
          dispatch(SurahsDetail(suranNumber.current, 'english_saheeh'));
        }
        if (!state.lang_toggle) {
          dispatch(SurahsDetail(suranNumber.current, 'urdu_junagarhi'));
        }
      } else {
        const temdata = returningData(nxtprev);
        setState({...state, data: temdata?.data?.result});
      }
    } else {
      const lang = state.lang_toggle ? 'english_saheeh' : 'urdu_junagarhi';
      if (
        !surah_detail.some(
          item => item.number === suranNumber.current && item.lang === lang,
        )
      ) {
        if (state.lang_toggle) {
          dispatch(SurahsDetail(suranNumber.current, 'english_saheeh'));
        }
        if (!state.lang_toggle) {
          dispatch(SurahsDetail(suranNumber.current, 'urdu_junagarhi'));
        }
      } else {
        const temdata = returningData();
        setState({...state, data: temdata?.data?.result});
      }
    }
  };
  const onPressNext = async () => {
    const number = suranNumber.current + 1;
    suranNumber.current = number;
    UpdateNames(number);
    DispatchingNextPrevFunc('next');
  };
  const onPressPrev = () => {
    const number = suranNumber.current - 1;
    suranNumber.current = number;
    UpdateNames(number);
    DispatchingNextPrevFunc('prev');
  };
  const onPressTafseer = text => {
    setState({...state, tafseerText: text});
    SheetManager.show(TAFSEER);
  };
  const onPressTranslationButton = () => {
    setState({...state, lang_toggle: !state.lang_toggle});
  };
  const onPressTranslationArrow = () => {
    SheetManager.show(TRANSLATION);
  };
  useEffect(() => {
    return () => {
      songRef.current.pause();
    };
  }, []);
  useEffect(() => {
    const temdata = returningData();
    setState({...state, data: temdata?.data?.result});
  }, [surah_detail]);
  useEffect(() => {
    DispatchingNextPrevFunc();
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
          <Text style={commonStyles.heading_text}>{SecondName.current}</Text>
          <Text style={commonStyles.heading_text}>({ThirdName.current})</Text>
          <Text style={commonStyles.heading_text}>{Firstname.current}</Text>
        </View>
        <View style={commonStyles.button_container}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <AntDesign
              name={state.play ? 'play' : 'pausecircle'}
              size={25}
              color={txtWhite}
              onPress={() =>  onPressPlayPause()}
            />
            <Text
              style={{
                color: txtWhite,
                fontSize: 16,
                fontWeight: '600',
                marginLeft: 5,
              }}>
              {state.play ? 'Play  ' : 'Pause'}
            </Text>
          </View>
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
                          {item.sura}:{index + 1}
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
                      <>
                        <Text
                          style={[
                            commonStyles.flatlist_text,
                            !state.lang_toggle ? {textAlign: 'right'} : null,
                          ]}>
                          {item.translation}
                        </Text>
                      </>
                    ) : null}
                  </View>
                  {index + 1 === state.data.length ? (
                    <PrevNextButtons
                      sura={item.sura}
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

export default QuranDetail;
