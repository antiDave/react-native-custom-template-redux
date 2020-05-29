//@ts-ignore
import * as React from "react";
//@ts-ignore
import { NativeSyntheticEvent, StyleSheet, TextInput, TextInputFocusEventData, TextInputProps, View } from "react-native";
import CustomText from "./CustomText";
import { emptyValidate } from "../helper/genericFunctions";
import { marginSizesWidth } from "../constants/sizes";

interface State {
    isFocused?: boolean;
}

interface customStates {
    bottomText?: any;
    errorText?: any;
    error?: boolean;
}

interface allInterface extends State, customStates, TextInputProps {

}

// const BLUE = "#428AF8";
const BLUE = "#616161";
const LIGHT_GRAY = "#D3D3D3";
const ERROR = "#BB0000";
const TEXT = "#bbbbbd"

// export default class CustomTextInput extends React.Component<TextInputProps, State> {
export default class CustomTextInput extends React.Component<allInterface, any> {
    state = {
        isFocused: false,
        error: false
    };

    handleFocus = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
        this.setState({ isFocused: true });
        if (this.props.onFocus) {
            this.props.onFocus(e);
        }
    };

    handleBlur = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
        this.setState({ isFocused: false });
        if (this.props.onBlur) {
            this.props.onBlur(e);
        }
    };

    render() {
        const { isFocused } = this.state;
        const { onFocus, onBlur, error, errorText, bottomText, ...otherProps } = this.props;
        if (this.props.style) {
            console.error("Cannot use Style in custom textinput");
            return;
        }
        return (
            <View>
                <TextInput
                    selectionColor={BLUE}
                    onFocus={this.handleFocus}
                    onBlur={this.handleBlur}
                    placeholderTextColor={error ? ERROR : TEXT}
                    style={[styles.textInput,
                    {
                        borderColor: error ? ERROR : isFocused ? BLUE : LIGHT_GRAY,
                    }
                    ]}
                    {...otherProps}
                />
                {emptyValidate(bottomText) || emptyValidate(errorText) &&
                    <CustomText style={{
                        color: error ? ERROR : TEXT
                    }} >{error ? errorText : bottomText}</CustomText>}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    textInput: {
        height: "auto",
        paddingHorizontal: marginSizesWidth._16,
        borderWidth: 2,
        borderRadius: 5,
    }
});