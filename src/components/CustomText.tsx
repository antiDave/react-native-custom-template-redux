import React, { Component } from 'react';
import { StyleSheet, Text } from 'react-native';

interface CTInterface {
    style: object;
}

export default class CustomText extends Component<CTInterface, any> {
    constructor(props: CTInterface) {
        super(props);
        this.state = {};
    }

    public static defaultProps = {
        style: null,
    };

    render() {
        let { style } = this.props;


        return (
            <Text style={{ ...styles.text, ...style }}>{this.props.children}</Text>
        );
    } // end of Function Render
} //end of class CustomText

const styles = StyleSheet.create({
    text: {

    }
}); //end of StyleSheet STYLES
