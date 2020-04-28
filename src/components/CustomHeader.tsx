import React, { Component } from "react";
import { View, TouchableOpacity, StyleSheet, StatusBar, SafeAreaView, StyleProp, ViewStyle } from 'react-native';
import colors from "../constants/colors";
import CustomIcon from "./CustomIcon";
import Text from "./CustomText";
import { marginSizesWidth, marginSizesHeight, fontSizes } from "../constants/sizes";

interface CustomHeaderInterface {
    style: StyleProp<ViewStyle>;
    statusBarStyle: "dark-content" | "light-content" | "default";
    statusBarBackgroundColor: string;
    headerBackgroundColor: string;
    containerStyle: StyleProp<ViewStyle>;

    leftIconType: 'Ionicons' | 'AntDesign' | 'Entypo' | 'EvilIcons' | 'Feather' | 'FontAwesome' | 'Fontisto' | 'MaterialCommunityIcons' | 'MaterialIcons';
    leftIconStyle: StyleProp<ViewStyle>;
    leftIconName: any;
    leftIconSize: number;
    leftIconColor: any;

    rightIconType: 'Ionicons' | 'AntDesign' | 'Entypo' | 'EvilIcons' | 'Feather' | 'FontAwesome' | 'Fontisto' | 'MaterialCommunityIcons' | 'MaterialIcons';
    rightIconStyle: StyleProp<ViewStyle>;
    rightIconName: any;
    rightIconSize: number;
    rightIconColor: any;

    leftIconContainerStyle: StyleProp<ViewStyle>;
    rightIconContainerStyle: StyleProp<ViewStyle>;
    titleContainerStyle: StyleProp<ViewStyle>;
    titleStyle: StyleProp<ViewStyle>;
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
        style: {},
        statusBarStyle: "light-content",
        statusBarBackgroundColor: colors.statusbar,
        headerBackgroundColor: colors.header,
        containerStyle: {},

        leftIconType: 'Ionicons',
        leftIconName: 'md-arrow-back',
        leftIconColor: colors.white,
        leftIconSize: 30,
        leftIconStyle: {},

        rightIconType: 'Ionicons',
        rightIconName: 'md-search',
        rightIconColor: colors.white,
        rightIconSize: 30,
        rightIconStyle: {},

        leftIconContainerStyle: {},
        rightIconContainerStyle: {},
        titleContainerStyle: {},
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
            <View style={[containerStyle, { ...styles.container }]}>
                <SafeAreaView style={{ ...styles.safeAreaView, backgroundColor: headerBackgroundColor }} />

                <StatusBar barStyle={statusBarStyle} backgroundColor={statusBarBackgroundColor} />
                <View style={[style, { ...styles.headerContainer, backgroundColor: headerBackgroundColor }]}>

                    {leftIconVisible ?
                        <TouchableOpacity style={[leftIconContainerStyle, { ...styles.leftIconContainer }]} onPress={() => {
                            leftIconPress()
                        }}>
                            <CustomIcon name={leftIconName} color={leftIconColor} size={leftIconSize} style={leftIconStyle} iconType={leftIconType} />
                        </TouchableOpacity>
                        : <View />}

                    <View style={[titleContainerStyle, { ...styles.titleContainer, marginLeft: leftIconVisible ? -hori : 0 }]}>
                        <Text style={[titleStyle, { ...styles.titleStyle, }]}>{title}</Text>
                    </View>
                    {rightIconVisible ?
                        <TouchableOpacity style={[rightIconContainerStyle, { ...styles.rightIconContainerStyle, }]} onPress={() => {
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
