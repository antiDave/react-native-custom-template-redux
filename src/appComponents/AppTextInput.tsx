import React, { Component } from 'react';
import { StyleSheet, View, StyleProp, ViewStyle, TextInputProps, TextStyle } from 'react-native';
import { TextInput, HelperText } from 'react-native-paper';
import CustomIcon from '../components/CustomIcon';
import { emptyValidate } from '../helper/genericFunctions';
//END OF IMPORT's

const colors = {
    placeholderSelected: '#c3cdce',
    placeholderUnselected: '#FC5356',
    placeholderDisabled: '#dbdbdb',
    text: '#212121',
    primaryTrue: '#748891',
    primaryFalse: '#FC5356',
    underlineColor: 'transparent',
    background: '#ffffff',
    white: "#fff",
    correctIcon: '#d1d9da',

    bottomError: "#FC5356",
    bottomText: "#AAAAAA"
};//end of COLORS

const errorTheme = {
    colors: {
        placeholder: colors.placeholderUnselected,
        text: colors.text,
        primary: colors.primaryFalse,
        underlineColor: colors.underlineColor,
        background: colors.background,
    },
};
const activeTheme = {
    colors: {
        placeholder: colors.placeholderSelected,
        text: colors.text,
        primary: colors.primaryTrue,
        underlineColor: colors.underlineColor,
        background: colors.background,
    },
};


interface componentInterface {
    containerStyle?: StyleProp<ViewStyle>;
    mode?: "outlined" | "flat";
    errorVisible?: boolean;

    rightIconType?: 'Ionicons' | 'AntDesign' | 'Entypo' | 'EvilIcons' | 'Feather' | 'FontAwesome' | 'Fontisto' | 'MaterialCommunityIcons' | 'MaterialIcons';
    rightIconStyle?: StyleProp<ViewStyle>;
    rightIconName?: any;
    rightIconSize?: number;
    rightIconColor?: any;
    rightIconVisible?: boolean;

    bottomText?: any;
    errorText?: any;
    errorIconVisible?: boolean;

    spaceBetwen?: boolean;
}//end of INTERFACE 

interface AllInterface extends componentInterface, TextInputProps {

}

export default class AppTextInput extends Component<AllInterface, any> {

    constructor(props: AllInterface) {
        super(props);
        this.state = {

        };
    }//end of CONSTRUCTOR

    public static defaultProps = {
        containerStyle: null,
        mode: "outlined",
        errorVisible: false,

        rightIconType: 'Ionicons',
        rightIconName: 'md-checkmark',
        rightIconColor: colors.primaryTrue,
        rightIconSize: 30,
        rightIconStyle: null,
        rightIconVisible: true,

        bottomText: null,
        errorText: null,
        errorIconVisible: true,
        spaceBetwen: true
    };//end of DEFAULT PROPS DECLARATION

    render() {
        let { spaceBetwen, containerStyle, mode, errorVisible, rightIconColor, rightIconName, rightIconSize, rightIconStyle, rightIconType, rightIconVisible, bottomText, errorText, errorIconVisible } = this.props;
        let { ...OtherProps } = this.props;

        let helperVisible = false;
        if (emptyValidate(bottomText) || (errorVisible && emptyValidate(errorText))) {
            helperVisible = true;
        }
        let errorIconShow = false;
        if (errorIconVisible && errorVisible && emptyValidate(errorText)) {
            errorIconShow = true;
        }

        return (
            <View style={[styles.containerStyle, containerStyle]}>
                {/* ******************** TextInput Start ******************** */}

                <TextInput
                    mode={mode}
                    theme={errorVisible ? errorTheme : activeTheme}
                    {...OtherProps}

                />

                {/* ******************** TextInput End ******************** */}

                {/* ******************** Right Icon  Start ******************** */}
                {rightIconVisible || errorIconShow &&
                    <View style={styles.iconContainer}>
                        <CustomIcon
                            name={errorVisible ? "md-warning" : rightIconName}
                            color={errorVisible ? colors.placeholderUnselected : rightIconColor}
                            size={rightIconSize} style={rightIconStyle} iconType={rightIconType} />
                    </View>}

                {/* ******************** Right Icon  End ******************** */}



                {spaceBetwen ? <HelperText
                    style={[styles.helperText, {
                        color: errorVisible ? colors.bottomError : colors.bottomText
                    }]}
                    visible={helperVisible}
                    theme={errorVisible ? errorTheme : activeTheme}>
                    {errorVisible ? errorText : bottomText}
                </HelperText> : errorVisible || helperVisible ? <HelperText
                    style={[styles.helperText, {
                        color: errorVisible ? colors.bottomError : colors.bottomText
                    }]}
                    visible={helperVisible}
                    theme={errorVisible ? errorTheme : activeTheme}>
                    {errorVisible ? errorText : bottomText}
                </HelperText> : null
                }

            </View>
        )
    } // end of Function Render

} //end of class AppTextInput


const styles = StyleSheet.create({
    containerStyle: {
    },
    iconContainer: {
        zIndex: 1,
        position: 'absolute',
        right: 10,
        top: "25%",
        justifyContent: 'center'
    },
    helperText: {
        marginLeft: -10
    },
}); //end of StyleSheet STYLES
