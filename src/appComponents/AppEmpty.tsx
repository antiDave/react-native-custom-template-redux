import React, { Component } from 'react';
import { StyleSheet, View, StyleProp, ViewStyle, ActivityIndicator, TouchableOpacity } from 'react-native';
import { Language } from '../locales';
import Text from '../components/CustomText';
import globalStyle from '../constants/globalStyle';
import genericFunctions, { emptyValidate } from '../helper/genericFunctions';
import colors from '../constants/colors';
//END OF IMPORT's


interface componentInterface {
    center?: boolean,
    title?: any,
    description?: any,
    style?: StyleProp<ViewStyle>,
    onPress(): any,
    loader?: boolean,
}//end of INTERFACE 


export default class AppEmpty extends Component<componentInterface, any> {


    public static defaultProps = {
        center: true,
        title: Language["APP_NAME"],
        description: "",
        onPress: () => { },
        loader: false
    };//end of DEFAULT PROPS DECLARATION

    render() {
        let { center, title, description, style, onPress, loader } = this.props;
        return (
            <View style={[center ? styles.containerCenter : styles.container, style]}>
                {loader &&
                    <ActivityIndicator size={"large"} />
                }
                <Text style={styles.heading}>
                    {title}
                </Text>
                {emptyValidate(description) &&
                    <TouchableOpacity onPress={() => { onPress() }}>
                        <Text style={styles.text}>
                            {description}
                        </Text>
                    </TouchableOpacity>
                }
            </View>

        )
    } // end of Function Render

} //end of class AppEmpty


const styles = StyleSheet.create({
    containerCenter: {
        flex: 1,
        alignSelf: "center",
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: globalStyle.screenPadding
    },
    container: {
        flex: 1,
        paddingHorizontal: globalStyle.screenPadding
    },
    heading: {
        ...globalStyle.heading,
        color: genericFunctions.hexToRgbA(colors.text212121, 50),
        textAlign: "center"
    },
    text: {
        ...globalStyle.cardTitleStyle,
        color: genericFunctions.hexToRgbA(colors.text212121, 40),
        textAlign: "center",
        fontWeight: "500"
    }
}); //end of StyleSheet STYLES
