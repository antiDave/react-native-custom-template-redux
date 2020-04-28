import React, { Component } from 'react';
import { StatusBar } from 'react-native';
import colors from '../constants/colors';

interface CSBInterface {
    translucent: boolean;
    backgroundColor: string;
    barStyle: 'light-content' | 'dark-content' | 'default';
}

export default class CustomStatusBar extends Component<CSBInterface, any> {
    public static defaultProps = {
        translucent: false,
        backgroundColor: colors.statusbar,
        barStyle: 'light-content',
    };

    constructor(props: CSBInterface) {
        super(props);
        this.state = {};
    }

    render() {
        let { translucent, backgroundColor, barStyle } = this.props;

        return <StatusBar translucent={translucent} backgroundColor={backgroundColor} barStyle={barStyle} />;
    } // end of Function Render
} //end of class CustomStatusBar

