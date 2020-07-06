import React, { Component } from 'react';
import { StyleSheet, View, SafeAreaView, StatusBar, Platform } from 'react-native';
import globalColors from "../constants/colors";
//END OF IMPORT's


interface componentInterface {
    applyFlex?: boolean;
}//end of INTERFACE 

const colors = {
    background1: '#ecbb6f',
    background2: "#f67b74",

};//end of COLORS

export default class AppBackground extends Component<componentInterface, any> {

    constructor(props: componentInterface) {
        super(props);
        this.state = {
        };
    }//end of CONSTRUCTOR
    public static defaultProps = {
        applyFlex: true
    };
    componentDidMount = () => {
    }


    render() {
        let { applyFlex } = this.props;
        return (
            <View
                style={applyFlex ? { flex: 1 } : {}}>
                <StatusBar backgroundColor={globalColors.primary} barStyle="light-content" />
                <SafeAreaView />
                {this.props.children}
            </View>

        )
    } // end of Function Render

} //end of class AppBackground


const styles = StyleSheet.create({
    containerStyle: {
    }
}); //end of StyleSheet STYLES
