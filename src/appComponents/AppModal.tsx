import React, { Component } from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import ReactNativeModal from 'react-native-modal';
import { marginSizesHeight } from '../constants/sizes';
import AppKeyboardAvoidingView from './AppKeyboardAvoidingView';
import KeyboardSpacer from './KeyboardSpacer';
//END OF IMPORT's


interface componentInterface {
    visible: boolean;
    hideModal(): any;
}//end of INTERFACE 

const colors = {
    background: '#fffff'
};//end of COLORS

export default class AppModal extends Component<componentInterface, any> {

    constructor(props: componentInterface) {
        super(props);
        this.state = {
        };
    }//end of CONSTRUCTOR

    public static defaultProps = {
        visible: false,
        hideModal() { },

    };//end of DEFAULT PROPS DECLARATION

    render() {
        let { visible, hideModal } = this.props;
        return (
            <ReactNativeModal isVisible={visible}

                backdropColor="#d6d6d6"
                onBackButtonPress={() => { hideModal() }}
                onBackdropPress={() => { hideModal() }}
                backdropOpacity={0.5}>
                <View style={{ maxHeight: "80%" }}>
                    <AppKeyboardAvoidingView>
                        <View style={{
                            backgroundColor: "#fff",
                            paddingVertical: marginSizesHeight._16,
                            paddingHorizontal: marginSizesHeight._22,
                            borderRadius: 5,
                            maxHeight: "100%"
                        }}>
                            {this.props.children}
                        </View>
                    </AppKeyboardAvoidingView>
                    <KeyboardSpacer />
                </View>
            </ReactNativeModal>
        )
    } // end of Function Render

} //end of class AppModal


const styles = StyleSheet.create({
    containerStyle: {
    }
}); //end of StyleSheet STYLES
