import React, { Component } from 'react';
import { ImageBackground, ImageBackgroundProps, StyleSheet, StyleProp, ImageStyle, Platform, View } from 'react-native';
import { marginSizesHeight } from '../constants/sizes';
import { hexToRgbA } from '../helper/genericFunctions';
import colors from '../constants/colors';
//END OF IMPORT's


interface componentInterface {
    imageStyle?: StyleProp<ImageStyle>,
}//end of INTERFACE 


interface allInterface extends componentInterface, ImageBackgroundProps {

}

export default class CustomImage extends Component<allInterface, any> {

    state = {
        loaded: false,
    }
    public static defaultProps = {
    };//end of DEFAULT PROPS DECLARATION

    render() {
        let { imageStyle,
            ...OtherProps } = this.props;

        let { loaded } = this.state;
        return (

            <ImageBackground
                style={[loaded ? styles.imageLoaded : styles.image, imageStyle, styles.borderStyle]}
                imageStyle={[loaded ? styles.imageLoaded : styles.image, imageStyle]}
                resizeMode={Platform.OS === "ios" ? "contain" : "stretch"}
                onLoad={() => { this.setState({ loaded: true }) }}
                {...OtherProps} >
                {this.props.children}
            </ImageBackground>
        )
    } // end of Function Render

} //end of class CustomImage


const styles = StyleSheet.create({
    container: {
    },
    image: {
        height: 80,
        width: 80,
        overflow: "hidden",
        resizeMode: "contain",
        backgroundColor: hexToRgbA(colors.divider, 50),
    },
    imageLoaded: {
        height: 80,
        width: 80,
        overflow: "hidden",
        resizeMode: "contain",
    },
    borderStyle: {
        borderColor: hexToRgbA(colors.divider, 30),
        borderWidth: 2
    }
}); //end of StyleSheet STYLES
