import Geolocation from '@react-native-community/geolocation';
import RNAndroidLocationEnabler from 'react-native-android-location-enabler';
import { Linking, Alert } from 'react-native';
import { Language } from '../locales';
import Permission from './Permission';

let call = 0;
let callPermission = 0;

export default {
    getCurrentLocation() {
        return new Promise((resolve) => {
            if (Platform.OS === "android") {
                RNAndroidLocationEnabler.promptForEnableLocationIfNeeded({ interval: 10000, fastInterval: 5000 })
                    .then(data => {
                        Geolocation.getCurrentPosition(
                            position => {

                                resolve(position);

                            },
                            error => {
                                if (error.message.includes("Location request timed out")) {
                                    if (call < 5) {
                                        this.getCurrentLocation();
                                        call++;
                                    }
                                }
                                if (error.message.includes("Location permission was not granted")) {
                                    // Permission.LOCATION();
                                    if (callPermission < 5) {
                                        this.getCurrentLocation();
                                        callPermission++;
                                    }
                                }
                                resolve(undefined);
                            });


                    }).catch(err => {
                        if (err.message.includes("denied")) {
                            this.getCurrentLocation();
                            // customAlert(Language["272"], Language["270"], () => { RNAndroidLocationEnabler.prompt() })
                        }
                        resolve(undefined);
                    });
            } else {
                Geolocation.getCurrentPosition(
                    position => {
                        console.warn("POSITITIONNN IOS", position);

                        resolve(position);
                    },
                    error => {
                        if (error.message.includes("Location services disabled.")) {
                            customAlert(Language["269"], Language["270"])


                        }
                        if (error.message.includes("User denied access to location services.")) {
                            customAlert(Language["272"], Language["270"])
                        }
                        resolve(undefined);
                    });
            }
        })//end of PROMISE
    },//end of getCurrentLocation
}//end of EXPORT DEFAULT

function customAlert(title, description, onPress = () => { Linking.openSettings(); }) {
    Alert.alert(title, description, [{
        text: Language["36"],
        style: 'cancel',
    }, {
        text: Language["271"],
        style: 'destructive',
        onPress() {
            // Linking.openURL('app-settings');
            onPress();

        }
    }], { cancelable: true });
}