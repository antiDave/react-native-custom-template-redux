import ImagePickerCrop from 'react-native-image-crop-picker';
import genericFunctions from './genericFunctions';

let callCamera = 5;
let callGallery = 5;

export default {


    camera(includeBase64 = false, mediaType = "photo", cropping = false) {
        return new Promise((resolve) => {
            ImagePickerCrop.openCamera({
                mediaType: mediaType,
                cropping: cropping,
                includeBase64: includeBase64,
                compressImageMaxHeight: 300,
                compressImageMaxWidth: 300,
                compressImageQuality: 0.7,
                forceJpg: true,

            }).then(images => {
                let newImages = [];
                newImages.push(images);
                newImages.map(e => {
                    e.id = genericFunctions.RandomID();
                    return
                })
                resolve(newImages);
            }).catch(err => {
                if (err.includes("[Error: User cancelled image selection]")) {
                    resolve(undefined);
                } else if (err.includes("Permissions weren't granted")) {
                    if (callCamera < 6) {
                        this.camera();
                        callCamera++;
                    }
                }
                else {
                    console.warn("ERROR from CATCH IMAGE PICKER", err);
                    // AppSnackBar.show("Error from Image Picker! ");
                    resolve(undefined);
                }
            });
        })//end of PROMISE
    },

    gallery(multiple = false, includeBase64 = false, mediaType = "photo", cropping = false) {
        return new Promise((resolve) => {
            ImagePickerCrop.openPicker({
                multiple: multiple,
                mediaType: mediaType,
                cropping: cropping,
                includeBase64: includeBase64,
                compressImageMaxHeight: 300,
                compressImageMaxWidth: 300,
                compressImageQuality: 0.7,
                forceJpg: true,

            }).then(images => {
                images.map(e => {
                    e.id = genericFunctions.RandomID();
                    return
                })
                resolve(images);
            }).catch(err => {

                if (err.includes("[Error: User cancelled image selection]")) {
                    resolve(undefined);
                }
                else if (err.includes("Permissions weren't granted")) {
                    if (callGallery < 6) {
                        this.gallery();
                        callGallery++;
                    }
                }
                else {
                    console.warn("ERROR from CATCH IMAGE PICKER", err);
                    // AppSnackBar.show("Error from Image Picker! ");
                    resolve(undefined);
                }

            });
        })//end of PROMISE
    },


}//end of EXPORT DEFAULT

