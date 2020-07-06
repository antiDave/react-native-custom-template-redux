import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { HelperText } from 'react-native-paper';
//END OF IMPORT's


interface componentInterface {

    text?: any;
}//end of INTERFACE 

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



export default class AppErrorText extends Component<componentInterface, any> {

    constructor(props: componentInterface) {
        super(props);
        this.state = {
        };
    }//end of CONSTRUCTOR

    public static defaultProps = {

    };//end of DEFAULT PROPS DECLARATION

    render() {
        let { text } = this.props;
        return (
            <HelperText
                style={[styles.helperText, {
                    color: colors.bottomError
                }]}
                visible={true}
                theme={errorTheme}>
                {text}
            </HelperText>
        )
    } // end of Function Render

} //end of class AppErrorText


const styles = StyleSheet.create({
    helperText: {
        marginLeft: -10
    },
}); //end of StyleSheet STYLES
