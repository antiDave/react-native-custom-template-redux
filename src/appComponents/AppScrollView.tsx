import React, { Component } from 'react';
import { StyleSheet, ScrollView, StyleProp, ViewStyle, ScrollViewProps } from 'react-native';
//END OF IMPORT's


interface componentInterface {
    center?: boolean;
    userFlexGrow?: boolean;
    nestedScrollEnabled?: boolean;

    showVerticalScroll?: boolean;
    showHorizontialScroll?: boolean;

    style?: StyleProp<ViewStyle>;
}//end of INTERFACE 

interface AllInterface extends componentInterface, ScrollViewProps {

}//end of INTERFACE 

const colors = {
    background: '#fffff'
};//end of COLORS

export default class AppScrollView extends Component<AllInterface, any> {

    constructor(props: AllInterface) {
        super(props);
        this.state = {
        };
    }//end of CONSTRUCTOR

    public static defaultProps = {
        center: false,
        userFlexGrow: true,
        showVerticalScroll: false,
        showHorizontialScroll: false,

        nestedScrollEnabled: true,
    };//end of DEFAULT PROPS DECLARATION

    render() {
        let { center, showHorizontialScroll, showVerticalScroll, style, userFlexGrow, nestedScrollEnabled,
            ...otherProps } = this.props;
        return (
            <ScrollView
                bounces={false}
                showsVerticalScrollIndicator={showVerticalScroll}
                showsHorizontalScrollIndicator={showHorizontialScroll}
                nestedScrollEnabled={nestedScrollEnabled}
                keyboardShouldPersistTaps="handled"
                contentContainerStyle={[userFlexGrow ? styles.scrollView : {}, {
                    justifyContent: center ? "center" : "flex-start"
                },
                    style
                ]}
                {...otherProps}>
                {this.props.children}
            </ScrollView>

        )
    } // end of Function Render

} //end of class AppScrollView


const styles = StyleSheet.create({
    scrollView: {
        flexGrow: 1,

    },
}); //end of StyleSheet STYLES
