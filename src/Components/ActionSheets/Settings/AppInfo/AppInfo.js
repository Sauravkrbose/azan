import React from 'react';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {Switch} from 'react-native-paper';
import {APP_INFO, PRIVACY_POLICY} from '../../../../Utils/ActionSheetConstant';
import useTheme1 from '../../../../Utils/useTheme1';
import ActionSheetClose from '../../../ActionSheetClose';
import getStyle from '../../style';
const AppInfo = () => {
  const {styles} = getStyle();
  const {txtWhite, btnbackground2} = useTheme1();

  return (
    <ScrollView style={[styles.root, {marginBottom: 30}]}>
      <ActionSheetClose id={APP_INFO} />
      <Text style={styles.heading_text}>App Info</Text>
      <View>
        <Text style={styles.privacy_policy_text}>
          • The World Azan Time initially set out to be an alternative prayer
          app for Muslims.
        </Text>
        <Text style={styles.privacy_policy_text}>
          • This came in light of a report from VICE that highlighted data
          privacy concerns with existing popular prayer apps.
        </Text>
        <Text style={styles.privacy_policy_text}>
          • The long-term vision of World Azan Time is to become a tool that
          helps Muslims improve their condition.
        </Text>

        <Text style={styles.privacy_policy_text}>
          • The app has three key USPs:
        </Text>
        <View style={{marginLeft: '6%', marginBottom: '10%'}}>
          <Text style={styles.privacy_policy_text}>
            o Privacy-focused - prayer times are calculated locally using
            location data on the phone. No location data is collected.
          </Text>
          <Text style={styles.privacy_policy_text}>
            o No ads - Pillars is strictly ad-free. Adverts are not appropriate
            and should not be affiliated with prayer.
          </Text>
          <Text style={styles.privacy_policy_text}>
            o Design - with our long thought-out design we provide users with a
            superior user experience that is not available with other apps.
          </Text>
        </View>
        <Text style={styles.privacy_policy_text}>
          • The app has the following features:
        </Text>
        <View style={{marginLeft: '6%', marginBottom: '10%'}}>
          <Text style={styles.privacy_policy_text}>
            o Prayer page - this page shows the 5 daily prayer times for
            Muslims.
          </Text>
          <Text style={styles.privacy_policy_text}>
            o Qibla (compass) - a compass that’s shows Muslims the direction
            towards Mecca (i.e., the direction of prayer).
          </Text>
          <Text style={styles.privacy_policy_text}>
            o Settings page - adjust prayer calculation settings, language,
            themes and more.
          </Text>
          <Text style={styles.privacy_policy_text}>
            o Widget - indicates the prayer times for that current day’s five
            daily prayers, easily viewable from the home screen.
          </Text>
          <Text style={styles.privacy_policy_text}>
            o Prayer Notifications - push notifications at the start of each
            prayer window (i.e., the 5 daily prayers).
          </Text>
          <Text style={styles.privacy_policy_text}>
            o Quran reading and audio recitation with Urdu and English
            translation.
          </Text>
          <Text style={styles.privacy_policy_text}>
            o Tracker page (new in 2022) - easily log prayers into the app
            (on-time or delayed) and track progress with insights.
          </Text>
        </View>
        <Text style={styles.privacy_policy_text}>
          You can find media assets related to the different features of the app
          in the rest of our PR kit.
        </Text>
        <Text style={styles.privacy_policy_text}>
          ________________________________________
        </Text>
        <Text style={styles.privacy_policy_text}>Last Updated: June 2022</Text>
        {/* <Text style={styles.privacy_policy_text}>
          This privacy policy is to let you know how World Azan Time handles
          data.
        </Text>
        <Text style={styles.privacy_policy_text}>
        This notice provides you with information regarding your rights and explains how, why and when we collect and process your data.
        </Text>
        <Text style={styles.privacy_policy_text}>
        If you have any questions or want to exercise any of your rights set out in this privacy notice, please contact us at info@worldazantime.com
        </Text>
        <Text style={styles.privacy_policy_heading}>About Us</Text>
        <Text style={styles.privacy_policy_text}>
        We are trading as World Azan Time work as SADAQAH JARRIYAH project.
        </Text>
        <Text style={styles.privacy_policy_text}>
        We can be contacted by email a info@worldazantime.com.
        </Text>
        <Text style={styles.privacy_policy_heading}>What this notice covers</Text>
        <Text style={styles.privacy_policy_text}>
        This privacy notice covers the Worldazantime App v1.x only.
        </Text>
        <Text style={styles.privacy_policy_text}>
        Future versions of the World Azan Time App may involve changes to data handling policy. This will require you to review and agree to a new privacy policy covering the new changes and/or features.
        </Text>
        <Text style={styles.privacy_policy_text}>
        We don't collect location or personal* data
        </Text>
        <Text style={styles.privacy_policy_text}>
        We believe all users of the app (both Muslims and non-Muslims) are entitled to their privacy and have built Pillars around this central principle.
        </Text>
        <Text style={styles.privacy_policy_text}>
        Therefore, whilst the app requires your location data to calculate bespoke prayer times for your specific geolocation, this is all done locally (i.e. on the phone) and no data whatsoever is sent to or store World Azan Time by ourselves.
        </Text>
        <Text style={styles.privacy_policy_text}>
        No other data is collected (including analytics or personal information*).
        </Text>
        <Text style={styles.privacy_policy_text}>
        *this excludes email addresses if you have signed up to our mailing list (to facilitate email updates).
        </Text>

        <Text style={styles.privacy_policy_heading}>Email address data</Text>
     
        <Text style={styles.privacy_policy_text}>
        We collect the email addresses of individuals who have signed up to our mailing list or beta programme, as well as details of your engagement with our emails. This is limited to information about whether you open our emails or not and click on links inside them.
        </Text>

        <Text style={styles.privacy_policy_heading}>Global transfer and processing</Text>
        <Text style={styles.privacy_policy_text}>
        We do not collect any data apart from your email address. This may be stored and processed in any country where we operate, or where other companies provide services to us (in this case MailChimp). By signing up to our mailing list, you're agreeing to let us store it in, and transfer your email address to these countries.
        </Text>
        <Text style={styles.privacy_policy_text}>
        Flodesk & Revue
        </Text>
        <Text style={styles.privacy_policy_heading}>Google Analytics</Text>
        <Text style={styles.privacy_policy_text}>
        We use Google Analytics as a service provider in order to receive anonymous website analytical data that helps us improve our website experience. The way Google Analytics store and process your data is subject to their Privacy Policy. 
        </Text>
        <Text style={styles.privacy_policy_heading}>Email address retention</Text>
        <Text style={styles.privacy_policy_text}>
        We'll keep your email address and name for the purpose of sending you updates until either we decide to stop sending updates, or you ask us to delete your data by getting in touch at info@worldazantime.com.
        </Text>
        <Text style={styles.privacy_policy_text}>
        Your marketing preferences
        </Text>
        <Text style={styles.privacy_policy_text}>
        When you sign up to our mailing list, you are opting in to receive updates on our product by email. You can opt out of these email communications at any time by clicking the "unsubscribe" link at the bottom of any message we send to you, or by contacting us at info@worldazantime.com.
        </Text>
        
        <Text style={styles.privacy_policy_heading}>Your rights (in general)</Text>

        <Text style={styles.privacy_policy_text}>
        Under data protection regulation, you have...
        </Text>
        <View style={{marginLeft:15}}>

        <Text style={styles.privacy_policy_text}>
        • the right to be informed about the collection and use of your personal data
        </Text>
        <Text style={styles.privacy_policy_text}>
        • the right to access the personal data we hold about you via a Subject Access Request
        </Text>
        <Text style={styles.privacy_policy_text}>
        • the right to correct inaccurate personal data
        </Text>
        <Text style={styles.privacy_policy_text}>
        • the right to have your personal data deleted
        </Text>
        <Text style={styles.privacy_policy_text}>
        • the right to request restriction of or suppression of your personal data
        </Text>
        <Text style={styles.privacy_policy_text}>
        • the right to make use of your personal data for your own purposes across different services
        </Text>
        <Text style={styles.privacy_policy_text}>
        • the right to object to the processing of your personal data in some circumstances.
        </Text>
        </View>
        <Text style={styles.privacy_policy_heading}>Making a rights request</Text>
        <Text style={styles.privacy_policy_text}>
        If you would like to exercise any of the rights outlined above, please contact us by email at info@worldazantime.com.
        </Text>
        <Text style={styles.privacy_policy_heading}>Making a complaint</Text>

        <Text style={styles.privacy_policy_text}>
        You have the right to complain to us and to the data protection regulator, the Information Commissioner’s Office. Their address is Wycliffe House, Water Lane, Wilmslow, Cheshire, SK9 5AF, United Kingdom. They can be contacted by phone on +44303 123 1113 (local rate) or +441625 545745 (national rate). You can find details on how to report a concern at ico.org.uk/make-a-complaint/
        </Text>
        <Text style={styles.privacy_policy_heading}>Links to other sites</Text>
        <Text style={styles.privacy_policy_text}>
        Our website may contain hyperlinks to websites that are not operated by us. Please review the privacy policy posted on any site you visit before using the site or providing any personal information about yourself.
        </Text>
        <Text style={styles.privacy_policy_heading}>Changes in the Privacy Policy</Text>

        <Text style={styles.privacy_policy_text}>
        We may update this privacy policy from time to time in order to reflect, for example, changes to our practices, new features or for other operational or legal reasons. Updated versions of this policy will be posted on our website.
        </Text>
        <Text style={styles.privacy_policy_heading}>Contact us</Text>

        <Text style={styles.privacy_policy_text}>
        For more information about our Privacy Notice, or if you would like to make a complaint, please contact us info@worldazantime.com
        </Text> */}
      </View>
    </ScrollView>
  );
};

export default AppInfo;
