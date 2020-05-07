export const emptyValidate = (text) => {
    if (text === "" || text === " " || text === "null" || text === null || text === "undefined" || text === undefined || text === false || text === "false") {
        return false;
    }
    else {
        return true;
    }
}

export function sleep(second) {
    return new Promise(resolve => {
        let ms = Number(second) * Number(1000);
        setTimeout(resolve, ms)
    });
}


export function hexToRgbA(hex, opacity) {
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
}

export function priceWithCommas(number) {
    if (typeof number === "number") {
        let x = number;
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    throw new Error('Not Number');
}

export function getHeightWidthOrientation(event) {
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
}

export function RandomString(length, format) {
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
}

export function RandomID(length, format) {
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
}

export function drawerToggle(props) {
    props.navigation.openDrawer();
}

export function getMonthNameNumber() {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const d = new Date();
    return {
        number: d.getMonth(),
        name: months[d.getMonth()]
    };
}
export function getYear() {
    return new Date().getFullYear();
}

export function getDate() {
    return new Date().getDate();
}


export function firebaseString(length, format) {
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
}


export function titleCase(text) {
    let str = text;
    var splitStr = str.toLowerCase().split(' ');
    for (var i = 0; i < splitStr.length; i++) {
        // You do not need to check if i is larger than splitStr length, as your for does that for you
        // Assign it back to the array
        splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
    }
    // Directly return the joined string
    return splitStr.join(' ');
}


