import { StyleSheet } from "react-native";
import globalStyle from "../../constants/globalStyle";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    buttonContainer: {
        alignSelf: 'center', alignItems: 'center', backgroundColor: '#212121', width: 50, opacity: 0.8, borderRadius: 8
    },
    buttonText: {
        ...globalStyle.heading, color: 'skyblue'
    }
});//end of Styles