/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  StatusBar,
  NativeModules,
  AsyncStorage,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import Amplify, { Auth, Analytics } from 'aws-amplify'
import PushNotification from '@aws-amplify/pushnotification'
import aws_exports from './aws-exports'

window.LOG_LEVEL = 'DEBUG';

Amplify.configure(aws_exports);
PushNotification.configure(aws_exports);
console.log('Amplify configured');

export default class App extends React.Component {

  componentDidMount(){

    // get the notification data
    PushNotification.onNotification((notification) => {
      // Note that the notification object structure is different from Android and IOS
      console.log('Notification token', notification);

      // required on iOS only (see fetchCompletionHandler docs: https://facebook.github.io/react-native/docs/pushnotificationios.html)
      notification.finish(PushNotificationIOS.FetchResult.NoData);
    });

    // get the registration token
    PushNotification.onRegister((token) => {
      console.log('FCM', token);
    });


  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={{fontWeight: 'bold',fontSize: 28}}>  Welcome to Amazon Pinpoint Push-Notification using React Native!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
