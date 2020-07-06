import DocumentPicker from 'react-native-document-picker';
import { Platform } from 'react-native';

export default {
    Multiple() {
        return new Promise(async (resolve) => {
            // Pick multiple files
            try {
                const results = await DocumentPicker.pickMultiple({
                    type: [DocumentPicker.types.pdf, DocumentPicker.types.plainText],
                });
                let prod = []
                for (const res of results) {
                    let url = res.uri;
                    console.warn("URLLLL", url);

                    if (Platform.OS === 'android') {
                        url = "file://" + res.uri;
                    }
                    prod.push({
                        uri: url,
                        type: res.type, // mime type
                        name: res.name,
                        size: res.size
                    })
                }
                resolve(prod);
            } catch (err) {
                if (DocumentPicker.isCancel(err)) {
                    resolve(undefined);
                    // User cancelled the picker, exit any dialogs or menus and move on
                } else {
                    resolve(undefined);
                    throw err;
                }
            }
        })//end of PROMISE
    },
}