import React, { Component } from 'react';
import { Platform, StyleProp, StyleSheet, View, ViewStyle, TextStyle } from 'react-native';
import { RadioButton, TouchableRipple } from 'react-native-paper';
import { responsiveFontSize, responsiveHeight } from 'react-native-responsive-dimensions';
import Icon from 'react-native-vector-icons/Ionicons';
import globalColors from "../constants/colors";
import Text from './CustomText';

interface CRBInterface {
	containerStyle: StyleProp<ViewStyle>;
	checked: boolean;
	checkIcon: string;
	unCheckIcon: string;
	value: any;
	text: any;
	checkColor: any;
	unCheckColor: any;
	onPress(): string;
	textStyle: StyleProp<TextStyle>;
	rippleColor: any;
}


export default class CustomRadioButton extends Component<CRBInterface, any> {
	public static defaultProps = {
		checkIcon: 'md-radio-button-on',
		unCheckIcon: 'ios-radio-button-off',
		text: 'Default',
		value: 0,
		textStyle: null,
		rippleColor: null,
		onPress() { },
	};

	constructor(props: CRBInterface) {
		super(props);
	}

	render() {
		let { containerStyle, checked, onPress, checkIcon, unCheckIcon, value, text, rippleColor, checkColor, unCheckColor, textStyle } = this.props;
		checkColor = checkColor ? checkColor : colors.FC5356;
		unCheckColor = unCheckColor ? unCheckColor : colors.A6A6A6;
		rippleColor = rippleColor ? rippleColor : colors.FC5356;

		return (
			<View style={[styles.mainContainer, containerStyle]}>
				{Platform.OS === 'ios' ? (
					<View style={styles.radioButtonIOSContainer}>
						<TouchableRipple
							onPress={() => {
								onPress();
							}}
							rippleColor={colors.transparent}
							accessibilityStates={{}}>
							<Icon
								name={checked ? checkIcon : unCheckIcon}
								color={checked ? checkColor : unCheckColor}
								size={25}
								style={styles.radioButtonIcon}
							/>
						</TouchableRipple>
					</View>
				) : (
						<RadioButton
							value={value}
							status={checked ? 'checked' : 'unchecked'}
							onPress={() => {
								onPress();
							}}
							color={checkColor}
							uncheckedColor={unCheckColor}
						/>
					)}
				<TouchableRipple
					onPress={() => {
						onPress();
					}}
					rippleColor={colors.transparent}
					accessibilityStates={{}}>
					<Text style={[styles.radioButtonText, textStyle]}>{text}</Text>
				</TouchableRipple>
			</View>
		);
	} // end of Function Render
} //end of class CustomRadioButton

const styles = StyleSheet.create({
	mainContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		// justifyContent: 'center'
	},
	radioButtonIOSContainer: {
		flexDirection: 'row',
		marginTop: responsiveHeight(0.54),
		left: 10,
	},

	radioButtonIcon: {
		marginRight: 15,
	},
	radioButtonText: {

		// left: 20,
	},
}); //end of StyleSheet STYLES

const colors = {
	FC5356: globalColors.primary,
	A6A6A6: globalColors.textA6A6A6,
	212121: globalColors.text212121,
	transparent: globalColors.transparent,
};
