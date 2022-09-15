import {
  QURAN,
  QURANNAME,
  PRAYER_DATA,
  SURAHS_DETAIL,
  QIBLA_DIRECTION,
  GEO_LOCATION,
  FILTERING_PRAYER_TIME,
  THEME_AUTO,
  THEME_DAY,
  THEME_NIGHT,
  FONT_ONE,
  FONT_TWO,
  FONT_THREE,
  PRAYER_BY_DATE,
  isLoading,
  SET_12HOUR,
  SET_METHOD,
  SET_ALL_NOTIFICATION,
  SET_PRAYER_TIME_NOTIFICATION,
  JUZ_DATA,
  ASR_LATER,
  ADJUSTMENT_METHOD,
  PRAYER_NOTIFICATION,
  ADD_REMOVE_FAVOURITE,
  THEME_TOGGLE,
  PERMISSIONS,
  SET_LANG_LAT,
} from './constants';

const initialState = {
  isLoading: false,
  geo_location: false,
  quranPAK: [],
  quranPAKName: [],
  PrayerTime: false,
  surah_detail: [],
  qibla_direction: false,
  fitered_prayerData: false,
  prayerByDate: false,
  fontOne: true,
  fontTwo: false,
  fontThree: false,
  themeDay: false,
  themeAuto: true,
  themeNight: false,
  hour12: true,
  method: 1,
  allNotifiction: false,
  prayerNotifiction: false,
  juzData: false,
  asrLater: true,
  adjustmentMethod: 3,
  favouritArray: [1, 2, 3],
  darkMode: true,
  permission: false,
  azanNotification: {
    Fajr: {
      silent: true,
      unsilent: false,
      azansound: false,
    },
    Sunrise: {
      silent: true,
      unsilent: false,
      azansound: false,
    },
    Dhuhr: {
      silent: true,
      unsilent: false,
      azansound: false,
    },
    Asr: {
      silent: true,
      unsilent: false,
      azansound: false,
    },
    Maghrib: {
      silent: true,
      unsilent: false,
      azansound: false,
    },
    Isha: {
      silent: true,
      unsilent: false,
      azansound: false,
    },
  },
  Latitude: '',
  Longitude: '',
};

function userReducer(state = initialState, action) {
  switch (action.type) {
    case THEME_AUTO:
      return {...state, themeAuto: true, themeDay: false, themeNight: false};
    case THEME_DAY:
      return {...state, themeAuto: false, themeDay: true, themeNight: false};
    case THEME_NIGHT:
      return {...state, themeAuto: false, themeDay: false, themeNight: true};
    case FONT_ONE:
      return {...state, fontOne: true, fontTwo: false, fontThree: false};
    case FONT_TWO:
      return {...state, fontOne: false, fontTwo: true, fontThree: false};
    case FONT_THREE:
      return {...state, fontOne: false, fontTwo: false, fontThree: true};
    case PRAYER_BY_DATE:
      return {...state, prayerByDate: action.payload};
    case GEO_LOCATION:
      return {...state, geo_location: action.payload};
    case QURAN:
      return {...state, quranPAK: action.payload};
    case QURANNAME:
      return {...state, quranPAK: action.payload};
    case PRAYER_DATA:
      return {...state, PrayerTime: action.payload};
    case SURAHS_DETAIL:
      const pushingData = state.surah_detail.concat([action.payload]);
      return {...state, surah_detail: pushingData};
    case QIBLA_DIRECTION:
      return {...state, qibla_direction: action.payload};
    case FILTERING_PRAYER_TIME:
      return {...state, fitered_prayerData: action.payload};
    case isLoading:
      return {...state, isLoading: action.payload};
    case SET_12HOUR:
      return {...state, hour12: action.payload};
    case SET_METHOD:
      return {...state, method: action.payload};
    case SET_ALL_NOTIFICATION:
      return {...state, allNotifiction: action.payload};
    case SET_PRAYER_TIME_NOTIFICATION:
      return {...state, prayerNotifiction: action.payload};
    case JUZ_DATA:
      return {...state, juzData: action.payload};
    case ASR_LATER:
      return {...state, asrLater: action.payload};
    case ADJUSTMENT_METHOD:
      return {...state, adjustmentMethod: action.payload};
    case PRAYER_NOTIFICATION:
      return {...state, azanNotification: action.payload};
    case ADD_REMOVE_FAVOURITE:
      return {...state, favouritArray: action.payload};
    case THEME_TOGGLE:
      return {...state, darkMode: action.payload};
    case PERMISSIONS:
      return {...state, permission: action.payload};
    case SET_LANG_LAT:
      return {
        ...state,
        Latitude: action.payload.lat,
        Longitude: action.payload.lng,
      };
    default:
      return state;
  }
}

export default userReducer;
