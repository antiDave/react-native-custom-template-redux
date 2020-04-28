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
}
