import DeviceInfo from 'react-native-device-info';

export function DeviceIP (){
    return new Promise(async(resolve) => {
      const ip=await DeviceInfo.getIpAddress();
      resolve(ip);
      return;
    })
    
}

export function DeviceType (){
    return new Promise(async(resolve) => {
      const type=await DeviceInfo.getDeviceType();
      resolve(type);
      return;
    })
    
}

export function DeviceID (){
    return new Promise(async(resolve) => {
      const id=await DeviceInfo.getDeviceId(); 
      resolve(id);
      return;
    })
    
}

export function DeviceName (){
    return new Promise(async(resolve) => {
      const name=await DeviceInfo.getDeviceName();
      resolve(name);
      return;
    })
    
}

export function DeviceOS (){
    return new Promise(async(resolve) => {
      const os=await DeviceInfo.getBaseOs();
      resolve(os);
      return;
    })
    
}


export function DeviceForm (){
    return new Promise(async(resolve) => {
        if(Platform.OS==='android'){
            resolve('ANDROID');
            return;
          }
          if(Platform.OS==='ios'){
            resolve('IOS');
            return;
          }
    })
    
}

