# React Native AWSPinpointPushApp

A sample react native app (Android only) to test push notifications using AWS Pinpoint service

### Step 1: Prepare working directory

	• git clone https://github.com/syumaK/Pinpoint-ReactNative-PushApp.git
	
	• npm install


### Step 2: Firebase(FCM) Configuration:

There exists two ways to connect your app to Firebase :

[Option 1](https://firebase.google.com/docs/android/setup#console): (recommended) Use the Firebase console setup workflow.

[Option 2](https://firebase.google.com/docs/android/setup#assistant): Use the Android Studio Firebase Assistant (requires additional configuration).

### Step 3: Backed-End(AWS) Configuration:

We’ll use the AWS Amplify CLI to initialize our AWS backend.

Make sure you have installed AWS Amplify CLI if not, you can refer to the amplify documentation link  how to install and configure AWS Amplify CLI

### Step 3.1 : Initialize our backend in the root directory of the React Native project

    $ amplify init

### Step 3.2: Add FCM server key to Pinpoint server using the Pinpoint console or using AWS Amplify CLI as shown below

    $ amplify add notification

Choose FCM as the push notification channel and when prompted for an ApiKey, enter the project credentials: Server Key that you previously saved from Firebase console

### Step 3.3 : upload changes to the cloud 

    $ amplify push

### Step 4: Running the Application

Start the packager by running :

    $ react-native start

Using an emulator or a real device run the command :

    $ react-native run-android

If all the steps were executed smoothly, you should see the React Native sample app rendering the display below:


![RN_AWSPinpoint](https://user-images.githubusercontent.com/13468243/83020051-39f95900-a028-11ea-931d-99dd48ad2f4b.png)

 
## License

This sample code is made available under the MIT-0 license. See the LICENSE file.

