import {
  QURAN,
  QURANNAME,
  PRAYER_DATA,
  SURAHS_DETAIL,
  QIBLA_DIRECTION,
  GEO_LOCATION,
  FILTERING_PRAYER_TIME,
  PRAYER_BY_DATE,
  isLoading,
  JUZ_DATA,
  ADD_REMOVE_FAVOURITE,
  SET_LANG_LAT,
} from './constants';
import axios from 'axios';
export const URL = 'https://api.alquran.cloud/v1/quran/en.asad';
export const URLPrayer = 'https://api.aladhan.com/v1/timings';
export const URLGeoLocation = 'https://telize-v1.p.rapidapi.com/geoip';
//Quran In Api
export const geoLocation = (lat, long) => async dispatch => {
  try {
    const { data } = await axios.get(
      `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${long}&language=en&result_type=locality&sensor=true&key=AIzaSyAKB2FsqaJrptmP0dDSkzqL8DzVAX8PplU`,
    );
    dispatch({
      type: GEO_LOCATION,
      payload: data,
    });
  } catch (error) {
    console.log(error, 'in error');
  }
};
export const quranPak = () => async dispatch => {
  dispatch({
    type: isLoading,
    payload: true,
  });
  try {
    const { data } = await axios.get(`${URL}`);
    dispatch({
      type: QURAN,
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
  dispatch({
    type: isLoading,
    payload: false,
  });
};
export const quranPakName = data => dispatch => {
  // console.log("action======>", login data);
  dispatch({
    type: QURANNAME,
    payload: data,
  });
};
export const SurahsDetail = (number, lang) => async dispatch => {
  dispatch({
    type: isLoading,
    payload: true,
  });
  try {
    const { data } = await axios.get(
      `https://quranenc.com/api/v1/translation/sura/${lang}/${number}`,
    );
    dispatch({
      type: SURAHS_DETAIL,
      payload: {
        data,
        lang,
        number,
      },
    });
  } catch (error) {
    console.log(error);
  }
  dispatch({
    type: isLoading,
    payload: false,
  });
};

// export const PrayerTimes =
//   (lat, lon, meth, adjustment, type, year,timeZone) => async dispatch => {
//     dispatch({
//       type: isLoading,
//       payload: true,
//     });
//     try {
//       const {data} = await axios.get(
//         `http://api.aladhan.com/v1/calendar?latitude=${lat}&longitude=${lon}&year=${year}&annual=true&timezonestring=${timeZone}&method=1`,
//       );
//       dispatch({
//         type: PRAYER,
//         payload: data,
//       });
//     } catch (error) {
//       console.log(error, 'in prayer times error');
//     }
//     dispatch({
//       type: isLoading,
//       payload: false,
//     });
//   };
export const PrayerTimes =
  (lat, lon, meth, adjustment, type, year, month, timeZone) =>
    async dispatch => {
      try {
        const { data } = await axios.get(
          `https://api.aladhan.com/v1/calendar?latitude=${lat}&longitude=${lon}&month=${month}&year=${year}&annual=false&timezonestring=${timeZone}&method=${meth}&school=${type}&latitudeAdjustmentMethod=${adjustment}`,
        );
        dispatch({
          type: PRAYER_DATA,
          payload: data,
        });
      } catch (error) {
        console.log(error, 'in prayer times error');
      }
    };
export const PrayerTimesByDate =
  (date, lat, lon, meth, adjustment, type) => async dispatch => {
    dispatch({
      type: isLoading,
      payload: true,
    });
    try {
      const { data } = await axios({
        method: 'GET',
        url: `https://api.aladhan.com/v1/timings/${date}?latitude=${lat}&longitude=${lon}&method=${Number(
          meth,
        )}&latitudeAdjustmentMethod=${adjustment}&school=${type}`,
        headers: {
          'Content-type': 'multipart/form-data',
        },
      });
      dispatch({
        type: PRAYER_BY_DATE,
        payload: data,
      });
    } catch (error) {
      console.log(error.response.data, 'in prayer times by date error');
    }
    dispatch({
      type: isLoading,
      payload: false,
    });
  };
export const FilteringPrayerTime = data => async dispatch => {
  let prayerTiming = [];
  for (let i = 1; i < 13; i++) {
    data.data[`${i}`].map(item => {
      prayerTiming.push({
        time: item.timings,
        date: item.date,
      });
    });
  }
  dispatch({
    type: FILTERING_PRAYER_TIME,
    payload: prayerTiming,
  });
};
export const QiblaDirection = (lat, lon) => async dispatch => {
  try {
    const { data } = await axios({
      method: 'get',
      url: `https://qibla-direction.p.rapidapi.com/?latitude=${lat}&longitude=${lon}`,
      headers: {
        'x-rapidapi-host': 'qibla-direction.p.rapidapi.com',
        'x-rapidapi-key': '349f7652acmsh712b12fce0616b6p1051b8jsne004d5039bd4',
      },
    });
    dispatch({
      type: QIBLA_DIRECTION,
      payload: data,
    });
  } catch (error) {
    console.log(error, 'in error');
  }
};
export const getJuzz = (juzz, from, to, translation) => async dispatch => {
  dispatch({
    type: isLoading,
    payload: true,
  });
  try {
    const { data } = await axios.get(
      `https://api.alquran.cloud/v1/juz/${juzz}/${translation}?offset=${from}&limit=${to}`,
    );
    dispatch({
      type: JUZ_DATA,
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
  dispatch({
    type: isLoading,
    payload: false,
  });
};
export const addRemoveFavourite = (prevArray, number) => async dispatch => {
  try {
    if (prevArray.includes(number)) {
      const newData = prevArray.filter(item => item !== number);
      dispatch({
        type: ADD_REMOVE_FAVOURITE,
        payload: newData,
      });
    } else {
      const newData = prevArray.concat([number]);
      dispatch({
        type: ADD_REMOVE_FAVOURITE,
        payload: newData,
      });
    }
  } catch (error) {
    console.log(error);
  }
};
export const setLatLongtd = (lat, lng) => async dispatch => {
  dispatch({
    type: SET_LANG_LAT,
    payload: {
      lat,
      lng,
    },
  });
};