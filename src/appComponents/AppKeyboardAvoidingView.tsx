import React, { Component } from 'react';
import { StyleSheet, KeyboardAvoidingView, Platform, StyleProp, ViewStyle, View } from 'react-native';
import KeyboardSpacer from './KeyboardSpacer';
//END OF IMPORT's


interface componentInterface {
    style?: StyleProp<ViewStyle>;
}//end of INTERFACE 

export default class AppKeyboardAvoidingView extends Component<componentInterface, any> {

    constructor(props: componentInterface) {
        super(props);
        this.state = {
        };
    }//end of CONSTRUCTOR

    public static defaultProps = {

    };//end of DEFAULT PROPS DECLARATION

    render() {

        return (
            <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? undefined : undefined}
                style={this.props.style}
            >
                {this.props.children}
            </KeyboardAvoidingView>

        )
    } // end of Function Render

} //end of class AppKeyboardAvoidingView


const styles = StyleSheet.create({
    containerStyle: {
    }
}); //end of StyleSheet STYLES
