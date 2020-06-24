# React Native Custom Template with Redux
 
React Native custom template with structure includes Redux

# Description
This is an open source template of react-native library maintained by facebook. This project is not for profit and is used only for create a initial template of React Native.

# Stack Project:
React, React Native, React Native Async Storeage ,React Native Masked View, React Navigation, React Navigation Stack, Moment, React Native Device Info, React Native Dotenv, React Native Gesture Hanfler, React Native Reanimated, React Native Responsive Dimesions, React Native Safe Area Content, React Native Screens, React Native Svg, React Native Svg Transformer, React Native Vector Icons, React Native Netinfo, React Redux, Redux

# ⚛️ Usage

Download zip <br/> unzip in the root folder of the project
 

# 🎉 Installation Guide! 

# All packages without Redux
| yarn add @react-navigation/native @react-navigation/stack && yarn add react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view react-native-vector-icons react-native-device-info react-native-dotenv react-native-responsive-dimensions react-native-safe-area-context react-native-svg moment @react-native-community/netinfo @react-native-community/async-storage  && yarn add --dev babel-plugin-transform-remove-console react-native-svg-transformer typescript @types/jest @types/react @types/react-native @types/react-test-renderer babel-plugin-module-resolver <h4>using npm</h4> npm install @react-navigation/native @react-navigation/stack && npm install react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view react-native-vector-icons react-native-device-info react-native-dotenv react-native-responsive-dimensions react-native-safe-area-context react-native-svg moment @react-native-community/netinfo @react-native-community/async-storage  && npm install babel-plugin-transform-remove-console react-native-svg-transformer typescript @types/jest @types/react @types/react-native @types/react-test-renderer babel-plugin-module-resolver --save-dev  |
| ------------- | 

# Packages 
| yarn add @react-navigation/native @react-navigation/stack <h4>using npm</h4> npm install @react-navigation/native @react-navigation/stack  |
| ------------- | 


| yarn add react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view react-native-vector-icons react-native-device-info react-native-dotenv react-native-responsive-dimensions react-native-safe-area-context react-native-svg moment @react-native-community/netinfo @react-native-community/async-storage  <h4>using npm</h4> npm install react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view react-native-vector-icons react-native-device-info react-native-dotenv react-native-responsive-dimensions react-native-safe-area-context react-native-svg moment @react-native-community/netinfo @react-native-community/async-storage |
| ------------- | 

| yarn add react-redux redux  <h4>using npm</h4> npm install react-redux redux |
| ------------- | 

| yarn add --dev react-native-svg-transformer typescript @types/jest @types/react @types/react-native @types/react-test-renderer babel-plugin-module-resolver <h4>using npm</h4> npm install react-native-svg-transformer typescript @types/jest @types/react @types/react-native @types/react-test-renderer babel-plugin-module-resolver --save-dev |
| ------------- | 


|If you are using Mac| 
| ------------- | 
|npx pod-install ios  <br/> OR <br/> cd ios <br/> pod install <br/>  |

# React Native Vector Icons Configuration in Android
This method has the advantage of fonts being copied from this module at build time so that the fonts and JS are always in sync, making upgrades painless.

Edit android/app/build.gradle ( NOT android/build.gradle ) and add the following:

```gradle 
apply from: "../../node_modules/react-native-vector-icons/fonts.gradle" 
```
<br/>
To customize the files being copied, add the following instead:

```gradle
project.ext.vectoricons = [
    iconFontNames: [ 'MaterialIcons.ttf', 'EvilIcons.ttf' ] // Name of the font files you want to copy
]

apply from: "../../node_modules/react-native-vector-icons/fonts.gradle"
```

# How to Remove Redux from Project 
Remove in src/routes/index.js <br/> line# 4, 5, 20, 26
<br/><br/>
Delete src/redux folder
<br/><br/>
Replace src/screens/Dashboard/index.js with below code
```js
import React, { Component } from 'react';
import { View } from 'react-native';
import CustomHeader from '../../components/CustomHeader';
import CustomText from '../../components/CustomText';

export default class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View>
                <CustomHeader />
                <CustomText>Hello</CustomText>
            </View>
        );
    }
}
```

# Auto Increment Version Code and Name for ANDROID
Download and place the version.properties file under the android/app directory in your project folder.
<a href="https://github.com/NoumanSakhawat/react-native-custom-template-redux/raw/master/files/version.properties.zip" download="version.properties">Click to Download version.properties</a>

```gradle

android {
    compileSdkVersion rootProject.ext.compileSdkVersion

    compileOptions {
        sourceCompatibility JavaVersion.VERSION_1_8
        targetCompatibility JavaVersion.VERSION_1_8
    }
    
    ....
    
    
 //    VERSIONING CODE SETTING START
    def versionPropsFile = file('version.properties')

    if (versionPropsFile.canRead()) {
        def Properties versionProps = new Properties()

        versionProps.load(new FileInputStream(versionPropsFile))

        def oldnaming=versionProps['VERSION_NAME'].toInteger()

        if(oldnaming % 100 == 0){
            def code = versionProps['VERSION_CODE'].toInteger() + 1
            versionProps['VERSION_CODE']=code.toString()

        }

 if(oldnaming % 10 == 0){
        def centerChanging=versionProps['VERSION_CENTER_NUMBER1'].toInteger() + 1   
        versionProps['VERSION_CENTER_NUMBER1']=centerChanging.toString()   
          }

        def naming=versionProps['VERSION_NAME'].toInteger() + 1
        def codeP = versionProps['VERSION_CODE'].toInteger()
         def center1=versionProps['VERSION_CENTER_NUMBER1'].toInteger();
        

        versionProps['VERSION_NAME']=naming.toString()

        versionProps['VERSION_CENTER_NUMBER1']=center1.toString()
        versionProps.store(versionPropsFile.newWriter(), null)

        defaultConfig {
            applicationId "com.PACKAGENAME"
            minSdkVersion rootProject.ext.minSdkVersion
            targetSdkVersion rootProject.ext.targetSdkVersion
            multiDexEnabled true
            versionCode codeP
            versionName codeP +"."+center1+"."+naming
        }
    }
    else {
        throw new GradleException("Could not read version.properties!")
    }

    //    VERSIONING CODE SETTING END


...

  splits {
        abi {
            reset()
            enable enableSeparateBuildPerCPUArchitecture
            universalApk false  // If true, also generate a universal APK
            include "armeabi-v7a", "x86", "arm64-v8a", "x86_64"
        }
    }
```

# Change APK File Name for ANDROID
replace
<br/>
```gradle
   def versionCodes = ["armeabi-v7a": 1, "x86": 2, "arm64-v8a": 3, "x86_64": 4]
           def abi = output.getFilter(OutputFile.ABI)
           if (abi != null) {  // null for the universal-debug, universal-release variants
               output.versionCodeOverride =
                       versionCodes.get(abi) * 1048576 + defaultConfig.versionCode
           }

```
<br/>
with
<br/>

```gradle
def outputDirPath = new     File("${project.rootDir.absolutePath}/app/build/outputs/apk/${variant.flavorName}/${variant.buildType.name}")
            variant.packageApplicationProvider.get().outputDirectory = outputDirPath
            def apkFileName = "APPNAME v${android.defaultConfig.versionName}.apk"
            output.outputFileName = apkFileName

```

# Auto Increment Version Build for IOS
In the latest version of Xcode (Version 11.1) you can do the build number auto increment fairly easily.

Here are the steps:
<ol>
 <li>Go to your target's <b>Build Settings</b> </li>
 <li>Search for <b>Versioning System</b></li>
 <li>Set it's value to <b>Apple Generic</b></li>
 <li>Go to your target's <b>Build Phases</b></li>
 <li>Add a new Run Script</li>
 <li>Add the following line <b>agvtool next-version -all </b> </li>
 </ol>
