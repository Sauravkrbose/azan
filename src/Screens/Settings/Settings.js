import React from 'react';
import { Platform, Share, Text, TouchableOpacity, View } from 'react-native';
import ActionSheet from 'react-native-actions-sheet';
import Prayer from '../../Components/ActionSheets/Settings/Prayer/Prayer';
import ButtonSalah from '../../Components/Buttons/Buttons';
import getStyle from '../Quran/Styles';
import RootStyles from './styles';
import Notification from '../../Components/ActionSheets/Settings/Notification/Notification';
import ThemePage from '../../Components/ActionSheets/Settings/Themes/ThemeSheet';
import CustomButton from '../../Components/ActionSheets/CustomButton';
import getActionSheetStyle from '../../Utils/ActionSheetStyle';
import {
  NOTIFICATION,
  PRAYER,
  PRIVACY_POLICY,
  THEME,
  APP_INFO,
} from '../../Utils/ActionSheetConstant';
import useTheme1 from '../../Utils/useTheme1';
import PrivacyPolicy from '../../Components/ActionSheets/Settings/PrivacyPolicy/PrivacyPolicy';
import Entypo from 'react-native-vector-icons/Entypo';
import AppInfo from '../../Components/ActionSheets/Settings/AppInfo/AppInfo';

export default function Settings() {
  const { styles } = getStyle();
  const { background, txtWhite, searchTextColor, btnBackground } = useTheme1();
  const { ActionSheetStyle } = getActionSheetStyle();
  const handleOnPressShare = () => {
    Share.share({
      message:
        Platform.OS === 'android'
          ? 'https://play.google.com/store/apps/details?id=com.worldazantime'
          : 'https://apps.apple.com/us/app/world-azan-time/id1638607557',
      title: 'World Azan Time',
    });
  };

  return (
    <>
      <View style={{ paddingTop: 20, flex: 1, backgroundColor: background }}>
        <ActionSheet id={PRAYER} containerStyle={ActionSheetStyle.container}>
          <Prayer />
        </ActionSheet>
        <ActionSheet id={THEME} containerStyle={ActionSheetStyle.container}>
          <ThemePage />
        </ActionSheet>
        <ActionSheet id={NOTIFICATION} containerStyle={ActionSheetStyle.container}>
          <Notification />
        </ActionSheet>
        <ActionSheet id={PRIVACY_POLICY} containerStyle={ActionSheetStyle.container}>
          <PrivacyPolicy />
        </ActionSheet>
        <ActionSheet id={APP_INFO} containerStyle={ActionSheetStyle.container}>
          <AppInfo />
        </ActionSheet>
        <Text style={RootStyles().styles.setting_heading_txt}>Settings</Text>
        <View style={{ alignItems: 'center' }}>
          <CustomButton text={'Prayer Time'} id={PRAYER} />
          <CustomButton text={'Notification'} id={NOTIFICATION} />
          <CustomButton text={'Theme'} id={THEME} />
          <CustomButton text={'Privacy Policy'} id={PRIVACY_POLICY} />
          <CustomButton text={'App Info'} id={APP_INFO} />
          <View
            style={{
              alignItems: 'flex-end',
              width: '100%',
              paddingHorizontal: 20,
            }}
          >
            <TouchableOpacity style={{ marginRight: 20 }} onPress={handleOnPressShare}>
              <Entypo name="share" color={txtWhite} size={35} />
              <Text style={{ color: txtWhite }}>Share</Text>
            </TouchableOpacity>
          </View>
        </View>

        <ButtonSalah
          simpleTxt={true}
          label={'Azan World Time \nv1.5'}
          customStyle={styles.txtApp}
        />
      </View>
    </>
  );
}
