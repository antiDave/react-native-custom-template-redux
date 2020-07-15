import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { TouchableOpacity, StyleSheet, View, ViewPropTypes, ActivityIndicator } from 'react-native';
import Text from '../components/CustomText';
import { Language } from '../locales';
import globalStyle from '../constants/globalStyle';
import { hexToRgbA, emptyValidate } from '../helper/genericFunctions';
import colors from '../constants/colors';

const styles = StyleSheet.create({
    containerCenter: {
        flex: 1,
        alignSelf: "center",
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: globalStyle.screenPadding
    },
    container: {
        flex: 1,
        paddingHorizontal: globalStyle.screenPadding
    },
    heading: {
        ...globalStyle.heading,
        color: hexToRgbA(colors.text212121, 50),
        textAlign: "center"
    },
    text: {
        ...globalStyle.cardTitleStyle,
        color: hexToRgbA(colors.text212121, 40),
        textAlign: "center",
        fontWeight: "500"
    }
});


export default class AppEmpty extends Component {
    static propTypes = {

    };

    static defaultProps = {
        center: true,
        title: Language["34"],
        description: "",
        onPress: () => { },
        loader: false
    };

    constructor(props, context) {
        super(props, context);
        this.state = {

        };
    }

    componentDidMount() {
    }

    componentWillUnmount() {
    }


    render() {
        let { center, title, description, style, onPress, loader } = this.props;
        return (
            <View style={[center ? styles.containerCenter : styles.container, style]}>
                {loader &&
                    <ActivityIndicator size={"large"} />
                }
                <Text style={styles.heading}>
                    {title}
                </Text>
                {emptyValidate(description) &&
                    <TouchableOpacity onPress={() => { onPress() }}>
                        <Text style={styles.text}>
                            {description}
                        </Text>
                    </TouchableOpacity>
                }
            </View>

        )
    }
}