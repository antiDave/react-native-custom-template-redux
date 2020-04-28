import React, { Component } from "react";
import { View, TouchableOpacity, StyleSheet, StatusBar, SafeAreaView } from 'react-native';
import colors from "../constants/colors";
import CustomIcon from "./CustomIcon";
import Text from "./CustomText";
import { marginSizesWidth, marginSizesHeight, fontSizes } from "../constants/sizes";

interface CustomHeaderInterface {
    style: object;
    statusBarStyle: "dark-content" | "light-content" | "default";
    statusBarBackgroundColor: string;
    headerBackgroundColor: string;
    containerStyle: object;

    leftIconType: 'Ionicons' | 'AntDesign' | 'Entypo' | 'EvilIcons' | 'Feather' | 'FontAwesome' | 'Fontisto' | 'MaterialCommunityIcons' | 'MaterialIcons';
    leftIconStyle: object;
    leftIconName: any;
    leftIconSize: number;
    leftIconColor: any;

    rightIconType: 'Ionicons' | 'AntDesign' | 'Entypo' | 'EvilIcons' | 'Feather' | 'FontAwesome' | 'Fontisto' | 'MaterialCommunityIcons' | 'MaterialIcons';
    rightIconStyle: object;
    rightIconName: any;
    rightIconSize: number;
    rightIconColor: any;

    leftIconContainerStyle: object;
    rightIconContainerStyle: object;
    titleContainerStyle: object;
    titleStyle: object;
    title: any;
    navigation: any;
    leftIconVisible: boolean;
    rightIconVisible: boolean;

    leftIconPress(): any;
    rightIconPress(): any;

}

const hori = marginSizesWidth._20;

export default class CustomHeader extends Component<CustomHeaderInterface, any> {

    public static defaultProps = {
        style: null,
        statusBarStyle: "light-content",
        statusBarBackgroundColor: colors.statusbar,
        headerBackgroundColor: colors.header,
        containerStyle: null,

        leftIconType: 'Ionicons',
        leftIconName: 'md-arrow-back',
        leftIconColor: colors.white,
        leftIconSize: 30,
        leftIconStyle: null,

        rightIconType: 'Ionicons',
        rightIconName: 'md-search',
        rightIconColor: colors.white,
        rightIconSize: 30,
        rightIconStyle: null,

        leftIconContainerStyle: null,
        rightIconContainerStyle: null,
        titleContainerStyle: null,
        title: "Default Title",
        navigation: null,
        leftIconVisible: true,
        rightIconVisible: false,

        rightIconPress() { },
        leftIconPress() { },

    };

    constructor(props: CustomHeaderInterface) {
        super(props);
        this.state = {
        };
    }



    render() {
        let { statusBarStyle, statusBarBackgroundColor, headerBackgroundColor, containerStyle, style, leftIconColor, leftIconName, leftIconSize, leftIconStyle, leftIconType,
            leftIconContainerStyle, rightIconContainerStyle, titleContainerStyle, titleStyle, title, rightIconColor, rightIconName, rightIconSize, rightIconStyle, rightIconType,
            leftIconPress, rightIconPress, leftIconVisible, rightIconVisible } = this.props;

        if (title.length > 20) {
            title = `${title.substring(0, 20)}...`
        }
        return (
            <View style={{ ...styles.container, ...containerStyle }}>
                <SafeAreaView style={{ ...styles.safeAreaView, backgroundColor: headerBackgroundColor }} />

                <StatusBar barStyle={statusBarStyle} backgroundColor={statusBarBackgroundColor} />
                <View style={{ ...styles.headerContainer, ...style, backgroundColor: headerBackgroundColor }}>

                    {leftIconVisible ?
                        <TouchableOpacity style={{ ...styles.leftIconContainer, ...leftIconContainerStyle }} onPress={() => {
                            leftIconPress()
                        }}>
                            <CustomIcon name={leftIconName} color={leftIconColor} size={leftIconSize} style={leftIconStyle} iconType={leftIconType} />
                        </TouchableOpacity>
                        : <View />}

                    <View style={{ ...styles.titleContainer, ...titleContainerStyle, marginLeft: leftIconVisible ? -hori : 0 }}>
                        <Text style={{ ...styles.titleStyle, ...titleStyle }}>{title}</Text>
                    </View>
                    {rightIconVisible ?
                        <TouchableOpacity style={{ ...styles.rightIconContainerStyle, ...rightIconContainerStyle }} onPress={() => {
                            rightIconPress()
                        }}>
                            <CustomIcon name={rightIconName} color={rightIconColor} size={rightIconSize} style={rightIconStyle} iconType={rightIconType} />
                        </TouchableOpacity>
                        : <View />}
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
    },
    safeAreaView: {
    },
    headerContainer: {
        flexDirection: 'row',
        paddingTop: marginSizesHeight._8,
        paddingBottom: marginSizesHeight._8
    },
    leftIconContainer: {
        // flex: 1,
        zIndex: 1,
        marginLeft: hori,
    },
    titleContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,

    },
    titleStyle: {
        fontSize: fontSizes._20,
        color: colors.white,
        flexShrink: 1,
        // paddingHorizontal: 20,
    },
    rightIconContainerStyle: {
        // flex: 1,
        alignItems: 'flex-end',
        marginRight: hori,
        justifyContent: 'flex-end'
    }

});
