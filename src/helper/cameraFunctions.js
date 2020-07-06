import ImagePicker from 'react-native-image-picker';

let callCamera = 5;
let callGallery = 5;

export default {
    camera() {
        return new Promise((resolve) => {
            const options = {};
            ImagePicker.launchCamera(options, (response) => {

                if (response.didCancel) {
                    console.log('User cancelled image picker');
                    resolve(false);
                } else if (response.error) {
                    if (response.error.includes("Permissions weren't granted")) {
                        if (callCamera < 6) {
                            this.camera();
                            callCamera++;
                        }

                    }
                    console.log('ImagePicker Error: ', response.error);
                    resolve(false);
                } else if (response.customButton) {
                    console.log('User tapped custom button: ', response.customButton);
                    resolve(false);
                } else {
                    const source = { uri: "file://" + response.path };

                    // You can also display the image using data:
                    // const source = { uri: 'data:image/jpeg;base64,' + response.data };

                    resolve(response);

                }
            });
        })//end of PROMISE
    },

    gallery() {
        return new Promise((resolve) => {
            const options = {};
            ImagePicker.launchImageLibrary(options, (response) => {

                if (response.didCancel) {
                    console.log('User cancelled image picker');
                    resolve(false);
                } else if (response.error) {
                    if (response.error.includes("Permissions weren't granted")) {
                        if (callGallery < 6) {
                            this.gallery();
                            callGallery++;
                        }
                    }
                    console.log('ImagePicker Error: ', response.error);
                    resolve(false);
                } else if (response.customButton) {
                    console.log('User tapped custom button: ', response.customButton);
                    resolve(false);
                } else {

                    // const source = { uri: response.uri };
                    const source = { uri: "file://" + response.path };

                    // You can also display the image using data:
                    // const source = { uri: 'data:image/jpeg;base64,' + response.data };

                    resolve(response);

                }
            });
        })//end of PROMISE
    },

    cameraSingle() {
        return new Promise((resolve) => {
            const options = {};
            ImagePicker.launchCamera(options, (response) => {

                if (response.didCancel) {
                    console.log('User cancelled image picker');
                    resolve(false);
                } else if (response.error) {
                    console.log('ImagePicker Error: ', response.error);
                    resolve(false);
                } else if (response.customButton) {
                    console.log('User tapped custom button: ', response.customButton);
                    resolve(false);
                } else {
                    const source = { uri: "file://" + response.path };

                    // You can also display the image using data:
                    // const source = { uri: 'data:image/jpeg;base64,' + response.data };

                    resolve(response);

                }
            });
        })//end of PROMISE
    },

    gallerySingle() {
        return new Promise((resolve) => {
            const options = {};
            ImagePicker.launchImageLibrary(options, (response) => {

                if (response.didCancel) {
                    console.log('User cancelled image picker');
                    resolve(false);
                } else if (response.error) {
                    console.log('ImagePicker Error: ', response.error);
                    resolve(false);
                } else if (response.customButton) {
                    console.log('User tapped custom button: ', response.customButton);
                    resolve(false);
                } else {

                    // const source = { uri: response.uri };
                    const source = { uri: "file://" + response.path };

                    // You can also display the image using data:
                    // const source = { uri: 'data:image/jpeg;base64,' + response.data };

                    resolve(response);

                }
            });
        })//end of PROMISE
    },

}//end of EXPORT DEFAULT

