import { Dimensions } from "react-native";
import { fontSizes, marginSizesHeight, marginSizesWidth, widthSize } from "./sizes";

const WIDTH = Dimensions.get('window').width


export default globalStyle = {
    screenPadding: marginSizesWidth._16,
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
        fontSize: fontSizes._34,
        fontWeight: "bold",
        color: "#000"
    },
    card: {
        borderRadius: 5,
        padding: marginSizesWidth._16,
        marginBottom: marginSizesHeight._16,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        backgroundColor: 'white',
        alignSelf: 'center',
    },
    shadow: {
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    headingStyle: {
        fontWeight: 'bold',
        color: "#212121",
        fontSize: fontSizes._26,
        lineHeight: 27,
        letterSpacing: -0.78
    },
    regularTitleStyle: {
        fontWeight: 'bold',
        color: "#212121",
        fontSize: fontSizes._20,
        lineHeight: 26,
        letterSpacing: -0.6
    },
    cardTitleStyle: {
        fontWeight: 'bold',
        color: "#212121",
        fontSize: fontSizes._16,
        lineHeight: 24,
        letterSpacing: -0.48,
        marginBottom: 16
    },

    textStyle_818181: {
        color: "#818181",
        fontSize: fontSizes._14,

    },
    textStyle_a6a6a6: {
        color: "#a6a6a6",
        fontSize: fontSizes._14,

    },
    textStyle_212121: {
        color: "#212121",
        fontSize: fontSizes._14,

    },
    textStyle_ffffff: {
        color: "#fff",
        fontSize: fontSizes._14,

    },
}