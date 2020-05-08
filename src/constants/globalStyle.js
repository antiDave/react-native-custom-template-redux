import { Dimensions, Platform } from "react-native";
import { fontSizes, marginSizesHeight, marginSizesWidth, widthSize } from "./sizes";
import colors from "./colors";

const WIDTH = Dimensions.get('window').width

const shadow = {
    android: {
        shadowColor: colors.shadow,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 3,
    },
    ios: {
        shadowColor: colors.shadow,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 3,
    }
}
const card = {
    android: {
        ...shadow.android,
        borderRadius: 5,
        padding: marginSizesWidth._16,
        marginBottom: marginSizesHeight._16,
        alignSelf: 'center',
        backgroundColor: colors.card,
    },
    ios: {
        ...shadow.android,
        borderRadius: 5,
        padding: marginSizesWidth._16,
        marginBottom: marginSizesHeight._16,
        alignSelf: 'center',
        backgroundColor: colors.card,
    }
}

export default globalStyle = {
    screenPadding: marginSizesWidth._16,
    flex: {
        flex: 1,
    },
    primaryContainer: {
        paddingHorizontal: marginSizesWidth._16,
        width: widthSize._90,
        alignSelf: 'center',
        // backgroundColor: colors.background,
        flex: 1,
    },
    divider: {
        width: widthSize._100,
        height: 1,
        fontWeight: 'bold',
        borderBottomWidth: 1,
        borderBottomColor: "#E5E5E5",
        marginBottom: marginSizesHeight._16,
    },
    heading: {
        fontWeight: 'bold',
        color: colors.text212121,
        fontSize: fontSizes._26,
        lineHeight: 27,
        letterSpacing: -0.78
    },
    card: Platform.OS === "android" ? card.android : card.ios,
    shadow: Platform.OS === "android" ? shadow.android : shadow.ios,

    regularTitleStyle: {
        fontWeight: 'bold',
        color: colors.text212121,
        fontSize: fontSizes._20,
        lineHeight: 26,
        letterSpacing: -0.6
    },
    cardTitleStyle: {
        fontWeight: 'bold',
        color: colors.text212121,
        fontSize: fontSizes._16,
        lineHeight: 24,
        letterSpacing: -0.48,
        marginBottom: 16
    },

    textStyle_818181: {
        color: colors.text818181,
        fontSize: fontSizes._14,

    },
    textStyle_a6a6a6: {
        color: colors.textA6A6A6,
        fontSize: fontSizes._14,

    },
    textStyle_212121: {
        color: colors.text212121,
        fontSize: fontSizes._14,

    },
    textStyle_ffffff: {
        color: colors.textFFFFFF,
        fontSize: fontSizes._14,

    },
}