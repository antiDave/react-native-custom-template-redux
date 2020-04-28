import colors from "./colors";
import { Dimensions } from "react-native";

const WIDTH = Dimensions.get('window').width


export default globalStyle = {
    screenPadding: 16,
    primaryContainer: {
        paddingHorizontal: 16,
        width: "90%",
        alignSelf: 'center',
        // backgroundColor: colors.background,
        flex: 1,
    },
    divider: {
        width: '100%',
        height: 1,
        fontWeight: 'bold',
        borderBottomWidth: 1,
        borderBottomColor: "#E5E5E5",
        marginBottom: 16,
    },
    heading: {
        fontSize: 34,
        fontWeight: "bold",
        color: "#000"
    },
    card: {
        borderRadius: 5,
        padding: 16,
        marginBottom: 16,
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