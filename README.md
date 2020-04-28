# React Native Custom Template with Redux
 
React Native custom template with structure includes Redux

# Description
This is an open source template of react-native library maintained by facebook. This project is not for profit and is used only for create a initial template of React Native.

# Stack Project:
React, React Native, React Native Async Storeage ,React Native Masked View, React Navigation, React Navigation Stack, Moment, React Native Device Info, React Native Dotenv, React Native Gesture Hanfler, React Native Reanimated, React Native Responsive Dimesions, React Native Safe Area Content, React Native Screens, React Native Svg, React Native Svg Transformer, React Native Vector Icons, React Native Netinfo, React Redux, Redux

# 🎉 Installation Guide! 

| yarn add @react-navigation/native  |
| ------------- | 

| yarn add react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view react-native-vector-icons react-native-device-info react-native-dotenv react-native-responsive-dimensions react-native-safe-area-context react-native-svg moment @react-native-community/netinfo  |
| ------------- | 

| yarn add react-redux redux |
| ------------- | 

| yarn add @react-navigation/stack  |
| ------------- | 

| yarn add --dev react-native-svg-transformer typescript @types/jest @types/react @types/react-native @types/react-test-renderer babel-plugin-module-resolver |
| ------------- | 

|If you are using Mac| 
| ------------- | 
|npx pod-install ios  <br/> OR <br/> cd ios <br/> pod install <br/>  |

# ⚛️ Usage

Download zip <br/> unzip in the root folder of the project

# How to Remove Redux from Project 
Remove in src/routes/index.js <br/> line# 4, 5, 20, 26
<br/><br/>
Delete src/redux folder
<br/><br/>
Replace src/screens/Dashboard/index.js with below code
```js

import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
        <Text> index </Text>
      </View>
    );
  }
}
```
