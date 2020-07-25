import React, { Component } from 'react';
import { FlatList, SafeAreaView, StyleSheet, TouchableOpacity, View, Image } from 'react-native';
import globalStyle from '../constants/globalStyle';
import genericFunctions, { emptyValidate } from '../helper/genericFunctions';
import { Language } from '../locales';
import _deleteData from '../sharedPreferences/_deleteData';
import Device from '../utils/Device';
import Text from './CustomText';
import LocalImages, { sizesLocalImages } from '../helper/LocalImages';
import { marginSizesHeight } from '../constants/sizes';
import globalColor from "../constants/colors";

const menu = [
    {
        id: 1,
        name: Language["selectlanguage"],
        child: [{
            id: 1,
            name: Language["english"]
        }]
    },
    {
        id: 2,
        name: " ",
        child: [{
            id: "logout",
            name: Language["logout"]
        }]
    },

];

const colors = {
    black: "#000000",
    heading: "rgba(33, 33, 33, 0.7)",
    divider: "#E5E5E5",
    text: "#212121"
}

export default class CustomDrawer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loginId: null,
            menu: menu,
            name: null,
            phoneNumber: null,

            version: ""
        };
    }

    componentDidMount = async () => {
        let appVersion = await Device.appVersion();
        this.setState({
            version: appVersion
        })

        this.loadProfile()

    }

    loadProfile = async () => {

    }

    render() {
        let { name, phoneNumber } = this.state;

        return (
            <SafeAreaView style={{ flex: 1 }}>
                <View style={styles.container}>
                    {/* ******************** Logo and Heading Start ******************** */}
                    <View style={styles.logoContainer}>
                        <Image source={LocalImages.logo} style={styles.logo} />
                    </View>
                    {name !== null &&
                        <Text style={styles.title}>{name}</Text>
                    }
                    {phoneNumber !== null &&
                        <Text style={styles.phoneNumber}>{phoneNumber}</Text>
                    }

                    {/* ******************** Logo and Heading End ******************** */}

                    <View style={{ ...globalStyle.divider, ...styles.divider }} />

                    <FlatList
                        data={this.state.menu}
                        renderItem={(data) => {
                            let item = data.item;
                            let index = data.index;
                            return (
                                <View style={styles.flatListContainer}>
                                    {emptyValidate(item.name) &&
                                        <Text style={styles.heading}>{item.name}</Text>
                                    }
                                    {this.childRender(item.child)}
                                    {index !== this.state.menu.length - 1 &&
                                        <View style={{ ...globalStyle.divider, ...styles.divider }} />}
                                </View>
                            )
                        }} />

                </View>

                {/* ******************** VERSION Start ******************** */}
                <View style={styles.versionContainer}>
                    <Text style={styles.versionText}>{this.state.version}</Text>
                </View>

                {/* ******************** VERSION End ******************** */}
            </SafeAreaView>
        );
    }//end of Render

    childRender = (child) => {
        return (
            <FlatList
                data={child}
                renderItem={(data) => {
                    let item = data.item;
                    return (
                        <TouchableOpacity style={renderChild.container} onPress={() => { this.itemPress(item.id) }}>
                            <View style={renderChild.dividerIcon} />
                            <Text style={renderChild.text}>{item.name}</Text>
                        </TouchableOpacity>
                    )
                }} />
        )
    }//end of CHILD RENDER

    itemPress = async (id) => {
        console.warn('Drawer ID', id);
        if (id === "logout") {
            //Logout
            this.props.setIsLoggedIn(false)
        }
    }
}


const styles = StyleSheet.create({
    container: {
        paddingHorizontal: globalStyle.screenPadding
    },
    versionContainer: {
        alignSelf: "center",
        justifyContent: "flex-end",
        alignItems: "flex-end",
        flex: 1
    },
    logo: {
        height: sizesLocalImages.drawerLogo,
        width: sizesLocalImages.drawerLogo,
        borderRadius: sizesLocalImages.drawerLogo / 2,
        marginVertical: marginSizesHeight._16,
        resizeMode: "stretch"
    },
    versionText: {
        color: genericFunctions.hexToRgbA(globalColor.text212121, 50)
    },
    logoContainer: {
        alignItems: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        color: colors.black
    },
    phoneNumber: {
        fontSize: 16,
        fontWeight: "500",
        color: colors.black
    },

    // flatListRender
    flatListContainer: {
        flex: 1
    },
    heading: {
        color: colors.heading,
        fontSize: 14,
    },
    divider: {
        marginVertical: 16,
    },

});

const renderChild = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginVertical: 12,
    },
    dividerIcon: {
        marginRight: 8,
        height: 20,
        width: 20,
        borderRadius: 5,
        backgroundColor: colors.divider,
    },
    text: {
        color: colors.text,
        fontSize: 16,
    }
})