import React, { Component } from 'react';
import { StyleSheet, View, StyleProp, ViewStyle, TextStyle, Platform } from 'react-native';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import { TouchableRipple } from 'react-native-paper';
import Ionicon from 'react-native-vector-icons/Ionicons';
import { Checkbox } from 'react-native-paper';
import globalColors from "../constants/colors";
import Text from './CustomText';

interface CCBInterface {
	containerStyle: StyleProp<ViewStyle>;
	onPress(): any;
	checked: boolean;
	rippleColor: any;
	unCheckColor: any;
	checkColor: any;
	disabled?: boolean;
	textStyle?: StyleProp<TextStyle>;
	text?: any;
}

const colors = {
	FC5356: globalColors.primary,
	A6A6A6: globalColors.textA6A6A6,
	212121: globalColors.text212121,
	transparent: globalColors.transparent,
};

export default class CustomCheckBox extends Component<CCBInterface, any> {
	public static defaultProps = {
		checked: false,
		rippleColor: null,
		checkColor: null,
		unCheckColor: null,
		disabled: false,
		text: "",
		onPress() { },
	};

	constructor(props: CCBInterface) {
		super(props);
		this.state = {};
	}

	componentDidMount = async () => { };

	render() {
		let { containerStyle, onPress, checked, rippleColor,
			checkColor, unCheckColor, disabled, text, textStyle } = this.props;
		rippleColor = rippleColor ? rippleColor : colors.FC5356;
		checkColor = checkColor ? checkColor : colors.FC5356;
		unCheckColor = unCheckColor ? unCheckColor : colors.A6A6A6;

		return (
			<View style={[styles.mainContainer, containerStyle]}>
				{Platform.OS === 'ios' ? (
					<View style={styles.IOSContainer}>
						<TouchableRipple onPress={() => onPress()}
							disabled={disabled}
							accessibilityStates={{}}
							rippleColor={rippleColor}>
							<Ionicon
								name={checked ? 'ios-checkbox' : 'ios-square-outline'}
								color={checked ? checkColor : unCheckColor}
								size={25}
								style={styles.icon}
							/>
						</TouchableRipple>
					</View>
				) : (
						<Checkbox
							disabled={disabled}
							status={checked ? 'checked' : 'unchecked'}
							onPress={() => onPress()}
							color={checked ? checkColor : unCheckColor}
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
} //end of class CustomCheckBox

const styles = StyleSheet.create({
	mainContainer: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	IOSContainer: {
		flexDirection: 'row',
		left: 10,
	},
	icon: {
		marginRight: 20,
	},
	radioButtonText: {

		// left: 20,
	},
}); //end of StyleSheet STYLES
