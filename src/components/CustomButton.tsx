import React, { Component } from 'react';
import { StyleProp, StyleSheet, TextStyle, TouchableOpacityProps, View, ViewStyle, ActivityIndicator, TouchableOpacity } from 'react-native';

import globalColors from "../constants/colors";
import { fontSizes, heightSize, marginSizesWidth } from '../constants/sizes';
import CustomIcon from './CustomIcon';
import Text from './CustomText';

//END OF IMPORT's


interface componentInterface {
    styleButton?: StyleProp<ViewStyle>
    textStyle?: StyleProp<TextStyle>;
    title?: any;
    mode?: "default" | "text";
    disabled?: boolean;
    textColor?: any;
    backgroundColor?: any;

    icon?: boolean;
    textOrientation?: "left" | "center" | "right"

    iconType?: 'Ionicons' | 'AntDesign' | 'Entypo' | 'EvilIcons' | 'Feather' | 'FontAwesome' | 'Fontisto' | 'MaterialCommunityIcons' | 'MaterialIcons' | "Foundation" | "SimpleLineIcons";
    iconStyle?: StyleProp<ViewStyle>;
    iconName?: any;
    iconSize?: number;
    iconColor?: any;

    loading?: boolean;
}//end of INTERFACE 

const colors = {
    // background: "#fc5356",
    // text: "#FFFFFF",
    // shadow: "rgba(0,0,0,0.2)",//"#2AC062",

    // backgroundDisable: "#dbdbdb",
    // textDisable: "#fc5356",

    // backgroundTransparent: "rgba(0,0,0,0)",
    // textTransparent: "#fc5356",
    background: globalColors.button,
    text: globalColors.buttonText,
    shadow: "rgba(0,0,0,0.2)",//"#2AC062",

    backgroundDisable: globalColors.buttonDisable,
    textDisable: globalColors.buttonDisableText,

    backgroundTransparent: globalColors.buttonTransparent,
    textTransparent: globalColors.buttonTransparentText,
    white: globalColors.white
}
//@ts-ignore
interface allInterface extends componentInterface, TouchableOpacityProps {

}

export default class CustomButton extends Component<allInterface, any> {

    public static defaultProps = {
        mode: "default",
        disabled: false,
        textColor: colors.text,
        backgroundColor: colors.background,
        image: false,

        iconType: 'Ionicons',
        iconName: 'ios-camera',
        iconColor: '#fff',
        iconSize: 20,
        iconStyle: null,

        textOrientation: "center",
        loading: false

    };//end of DEFAULT PROPS DECLARATION



    render() {
        let { styleButton, textStyle, title, disabled, mode, backgroundColor, textColor, icon, iconType, iconStyle, iconColor, iconSize, iconName, textOrientation, loading,
            ...OtherProps } = this.props;

        if (icon) {
            let location = "center";
            if (textOrientation === "left") {
                location = "flex-start";
            } else if (textOrientation === "center") {
                location = "center";
            } else if (textOrientation === "right") {
                location = "flex-end";
            }
            else {
                location = "center";
            }
            return (

                <TouchableOpacity
                    style={[styles.buttonWithIcon, styleButton, {
                        backgroundColor: disabled ? colors.backgroundDisable : mode === "default" ? backgroundColor : backgroundColor !== colors.background ? backgroundColor : colors.backgroundTransparent
                    }]}
                    disabled={loading ? true : disabled}
                    {...OtherProps}>
                    <View style={{ flexDirection: "row" }}>
                        <View style={styles.iconContainer}>
                            <CustomIcon name={iconName} color={iconColor} size={iconSize} style={[iconStyle]} />
                        </View>
                        <View style={[styles.textContainer,
                        //@ts-ignore
                        {
                            alignItems: location,
                            paddingHorizontal: textOrientation === "left" || textOrientation === "right" ? marginSizesWidth._8 : 0,
                        }]}>
                            {loading ?
                                <ActivityIndicator color={
                                    disabled ? colors.textDisable : mode === "default" ? textColor : textColor !== colors.text ? textColor : colors.textTransparent
                                } size="small" />
                                :

                                <Text style={[styles.text, textStyle, {
                                    color: disabled ? colors.textDisable : mode === "default" ? textColor : textColor !== colors.text ? textColor : colors.textTransparent
                                }]}>{title}</Text>
                            }
                        </View>
                    </View>
                </TouchableOpacity>

            )
        }
        return (
            <TouchableOpacity
                disabled={loading ? true : disabled}
                style={[styles.button, {
                    backgroundColor: disabled ? colors.backgroundDisable : mode === "default" ? backgroundColor : backgroundColor !== colors.background ? backgroundColor : colors.backgroundTransparent
                }, styleButton]}
                {...OtherProps}>
                {loading ?
                    <ActivityIndicator color={
                        disabled ? colors.textDisable : mode === "default" ? textColor : textColor !== colors.text ? textColor : colors.textTransparent
                    } size="small" />
                    :
                    <Text style={[styles.text, textStyle, {
                        color: disabled ? colors.textDisable : mode === "default" ? textColor : textColor !== colors.text ? textColor : colors.textTransparent
                    }]}>{title}</Text>
                }
            </TouchableOpacity>
        )
    } // end of Function Render

} //end of class CustomButton

const buttonHeight = 45;
const styles = StyleSheet.create({
    button: {
        display: 'flex',
        height: buttonHeight,// heightSize._05,
        borderRadius: 3,
        justifyContent: 'center',
        alignItems: 'center',

        shadowColor: colors.shadow,
        // backgroundColor: '#2AC062',
        // shadowColor: '#2AC062',
        shadowOpacity: 0.4,
        shadowOffset: { height: 10, width: 0 },
        shadowRadius: 20,
    },

    buttonWithIcon: {
        display: 'flex',
        height: buttonHeight,//heightSize._05,
        borderRadius: 3,
        justifyContent: 'center',
        // alignItems: 'center',

        shadowColor: colors.shadow,
        // backgroundColor: '#2AC062',
        // shadowColor: '#2AC062',
        shadowOpacity: 0.4,
        shadowOffset: { height: 10, width: 0 },
        shadowRadius: 20,
    },

    iconContainer: {
        // flexGrow: 1, 
        paddingLeft: marginSizesWidth._8,
        justifyContent: "flex-start"
    },
    textContainer: {
        // flexGrow: 1,
        flex: 1,

        justifyContent: "center",
    },


    text: {
        fontSize: fontSizes._16,
        textTransform: 'uppercase',
        // color: '#FFFFFF',
    },
    image: {
        width: heightSize._08,
        height: heightSize._08,
    }
}); //end of StyleSheet STYLES
