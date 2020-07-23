import DeviceInfo from 'react-native-device-info';
import { Platform } from 'react-native';

export default {
  IP() {
    return new Promise(async (resolve) => {
      const ip = await DeviceInfo.getIpAddress();
      resolve(ip);
      return;
    })
  },//end of DeviceIP

  type() {
    return new Promise(async (resolve) => {
      const type = await DeviceInfo.getDeviceType();
      resolve(type);
      return;
    })
  },//end of DeviceType

  ID() {
    return new Promise(async (resolve) => {
      const id = await DeviceInfo.getDeviceId();
      resolve(id);
      return;
    })
  },//end of DeviceID

  name() {
    return new Promise(async (resolve) => {
      const name = await DeviceInfo.getDeviceName();
      resolve(name);
      return;
    })
  },//end of DeviceName

  OS() {
    return new Promise(async (resolve) => {
      const os = await DeviceInfo.getBaseOs();
      resolve(os);
      return;
    })
  },//end of DeviceOS

  appVersion() {
    return new Promise(async (resolve) => {
      let version = DeviceInfo.getVersion();
      let buildNumber = "";
      if (Platform.OS === "ios") {
        buildNumber = DeviceInfo.getBuildNumber();
      }

      let string = "Version " + version + "." + buildNumber;
      resolve(string);
      return;
    })
  },//end of AppVersion

  form() {
    return new Promise(async (resolve) => {
      if (Platform.OS === 'android') {
        resolve('ANDROID');
        return;
      }
      if (Platform.OS === 'ios') {
        resolve('IOS');
        return;
      }
    })
  },//end of DeviceForm

}//end of EXPORT DEFAULT