import { Linking } from "react-native";
export function emptyValidate(text) {
    if (text === "" || text === " " || text === "null" || text === null || text === "undefined" || text === undefined || text === false || text === "false") {
        return false;
    }
    else {
        return true;
    }
};//end of emptyValidate/

export default {
    emptyValidate(text) {
        if (text === "" || text === " " || text === "null" || text === null || text === "undefined" || text === undefined || text === false || text === "false") {
            return false;
        }
        else {
            return true;
        }
    },//end of emptyValidate
    sleep(second) {
        return new Promise(resolve => {
            let ms = Number(second) * Number(1000);
            setTimeout(resolve, ms)
        });
    },//end of sleep
    hexToRgbA(hex, opacity) {
        var c;
        var op = opacity ? opacity : 100;
        if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {

            if (op > 100 || op < 0) {
                throw new Error('Bad Opacity');
            }
            c = hex.substring(1).split('');
            if (c.length == 3) {
                c = [c[0], c[0], c[1], c[1], c[2], c[2]];
            }
            c = '0x' + c.join('');
            return 'rgba(' + [(c >> 16) & 255, (c >> 8) & 255, c & 255].join(',') + ',' + op / 100 + ')';
        }
        throw new Error('Bad Hex');
    },//end of hexToRgbA
    priceWithCommas(number) {
        if (typeof number === "number") {
            let x = number;
            return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }

        throw new Error('Not Number');
    },//end of priceWithCommas
    getHeightWidthOrientation(event) {
        let windowHeight = Dimensions.get('window').height;
        let windowWidth = Dimensions.get('window').width;

        let { width, height } = event.nativeEvent.layout;
        let orientation = "portrait";

        if (windowWidth > windowHeight) {
            orientation = "landscape";
        }
        let res = {};
        res["orientation"] = orientation;
        res["width"] = width;
        res["height"] = height;
        res["borderRadius"] = height / 2;
        return res;
    },//end of getHeightWidthOrientation
    RandomString(length, format) {
        const leng = length ? length : 10;
        const chars = format ? format : '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ~@!#$%|^';
        var result = '';
        for (var i = leng; i > 0; --i) {
            result += chars[Math.floor(Math.random() * chars.length)];
        }
        return result;
        // Usage Example

        // randomString(16, 'aA')
        // randomString(32, '#aA')
        // randomString(64, '#A!')
        // var rString = randomString(32, '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ');
    },//end of RandomString
    RandomID(length, format) {
        const leng = length ? length : 5;
        const chars = format ? format : '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        var result = '';
        for (var i = leng; i > 0; --i) {
            result += chars[Math.floor(Math.random() * chars.length)];
        }
        return result;
        // Usage Example

        // randomString(16, 'aA')
        // randomString(32, '#aA')
        // randomString(64, '#A!')
        // var rString = randomString(32, '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ');
    },//end of RandomID
    drawerToggle(props) {
        props.navigation.openDrawer();
    },//end of drawerToggle
    getMonthNameNumber(date = new Date()) {
        let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        const d = date;
        return {
            number: d.getMonth(),
            name: months[d.getMonth()]
        };
    },//end of getMonthNameNumber
    getYear(date = new Date()) {
        return date.getFullYear();
    },//end of getYear
    getDate(date = new Date()) {
        return date.getDate();
    },//end of getDate
    firebaseString(length, format) {
        const leng = length ? length : 20;
        const chars = format ? format : '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        var result = '';
        for (var i = leng; i > 0; --i) {
            result += chars[Math.floor(Math.random() * chars.length)];
        }
        return result;
        // Usage Example

        // randomString(16, 'aA')
        // randomString(32, '#aA')
        // randomString(64, '#A!')
        // var rString = randomString(32, '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ');
    },//end of firebaseString
    titleCase(text) {
        let str = text;
        var splitStr = str.toLowerCase().split(' ');
        for (var i = 0; i < splitStr.length; i++) {
            // You do not need to check if i is larger than splitStr length, as your for does that for you
            // Assign it back to the array
            splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
        }
        // Directly return the joined string
        return splitStr.join(' ');
    },//end of titleCase
    upperCase(text) {
        return text.toUpperCase();
    },//end of upperCase
    lowerCase(text) {
        return text.toLowerCase();
    },//end of lowerCase
    removeAllSpaces(text) {
        return text.replace(/\s/g, '')
    },//end of removeAllSpaces
    openURL(url) {
        Linking.canOpenURL(url).then(supported => {
            if (supported) {
                Linking.openURL(url);
            } else {
                console.log("Don't know how to open URI: " + url);
            }
        });
    },//end of openURL
    RandomColorHex() {
        return '#' + (Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0');
    },//end of RandomColorHex
    mapFirstCharacter(array, keyName) {
        return new Promise((resolve) => {
            let newArray = [];
            for (let i = 0; i < array.length; i++) {
                const element = array[i];
                let name = element[keyName];
                name = name.replace(/\s/g, '');
                newArray.push({
                    ...element,
                    firstCharacter: name.charAt(0).toUpperCase()
                });
            }//end of I
            resolve(newArray)
        })//end of PROMISE
    },//end of mapFirstCharacterWithNestedArray
    mapFirstCharacterWithNestedArray(array, arrayName, keyName) {
        return new Promise((resolve) => {
            let newArray = [];
            for (let i = 0; i < array.length; i++) {
                const element = array[i];
                let newNestedArray = [];
                for (let j = 0; j < element[arrayName].length; j++) {
                    const nestedElement = element[arrayName][j];
                    let name = nestedElement[keyName];
                    name = name.replace(/\s/g, '');
                    newNestedArray.push({
                        ...nestedElement,
                        firstCharacter: name.charAt(0).toUpperCase()
                    });
                }//end of J
                element[arrayName] = newNestedArray;
                newArray.push(element);
            }//end of I
            resolve(newArray)
        })//end of PROMISE
    },//end of mapFirstCharacterWithNestedArray

}//end of EXPORT DEFAULT
