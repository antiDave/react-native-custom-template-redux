import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { emptyValidate } from '../helper/genericFunctions';
//END OF IMPORT's


interface componentInterface {
    dashed: boolean;
    color: string,
    borderColor: any,
    orientation: 'left' | 'center' | 'right' | "none",
    text?: any,
    weight?: "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900" | "bold"
}//end of INTERFACE 

const colors = {
    color: `rgba(0,0,0,.85)`,
    borderColor: 'rgba(171, 171, 171, 1)'

};//end of COLORS

export default class Divider extends Component<componentInterface, any> {

    constructor(props: componentInterface) {
        super(props);
        this.state = {
        };
    }//end of CONSTRUCTOR

    public static defaultProps = {
        dashed: false,
        orientation: 'none',
        color: colors.color,
        borderColor: colors.borderColor
    };//end of DEFAULT PROPS DECLARATION

    setColor = () => {
        let color = colors.borderColor;
        let { weight } = this.props;
        if (weight === "100") {
            color = `rgba(171, 171, 171, 0.1)`;
        } else if (weight === "200") {
            color = `rgba(171, 171, 171, 0.2)`;
        } else if (weight === "300") {
            color = `rgba(171, 171, 171, 0.3)`;
        } else if (weight === "400") {
            color = `rgba(171, 171, 171, 0.4)`;
        } else if (weight === "500") {
            color = `rgba(171, 171, 171, 0.5)`;
        } else if (weight === "600") {
            color = `rgba(171, 171, 171, 0.6)`;
        } else if (weight === "700") {
            color = `rgba(171, 171, 171, 0.7)`;
        } else if (weight === "800") {
            color = `rgba(171, 171, 171, 0.8)`;
        } else if (weight === "900") {
            color = `rgba(171, 171, 171, 0.9)`;
        } else if (weight === "bold") {
            color = `rgba(171, 171, 171, 1.0)`;
        } else {
            color = `rgba(171, 171, 171, 0.7)`;
        }


        return color;
    }

    render() {
        let { orientation, borderColor, dashed, color, text } = this.props;
        let textVisible = false;
        if (orientation !== "none" && emptyValidate(text)) {
            textVisible = true
        }
        borderColor = this.setColor();

        return (
            <View style={styles.container}>
                <View
                    style={[
                        styles.line,
                        { borderColor: borderColor },
                        dashed && styles.dashed,
                        orientation !== "none" && orientation === 'left' ? styles.shortWidth : { flex: 1 }
                    ]}
                />
                {textVisible &&
                    <Text style={[styles.text, { color: color }]}>{text}</Text>}
                <View
                    style={[
                        styles.line,
                        { borderColor: borderColor },
                        dashed && styles.dashed,
                        orientation !== "none" && orientation === 'right' ? styles.shortWidth : { flex: 1 }
                    ]}
                />
            </View>
        )
    } // end of Function Render

} //end of class Divider


const styles = StyleSheet.create({
    container: {
        height: 24,
        alignItems: 'center',
        flexDirection: 'row',
        marginVertical: 6
    },
    line: {
        height: 24,
        borderBottomWidth: 1,
        transform: [{ translateY: -12 }]
    },
    shortWidth: {
        width: 20
    },
    dashed: {
        borderStyle: 'dashed'
    },
    text: {
        paddingHorizontal: 24,
        fontSize: 16,
        fontWeight: '500'
    }
}); //end of StyleSheet STYLES







// import React, { Component } from 'react';
// import { StyleSheet, Text, View } from 'react-native';
// import PropTypes from 'prop-types';

// class Divider extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {};
//     }

//     static propTypes = {
//         dashed: PropTypes.bool,
//         color: PropTypes.string,
//         borderColor: PropTypes.string,
//         orientation: PropTypes.oneOf(['left', 'center', 'right'])
//     };

//     static defaultProps = {
//         dashed: false,
//         orientation: 'left',
//         color: 'rgba(0,0,0,.85)',
//         borderColor: '#e8e8e8'
//     };

//     render() {
//         const props = this.props;
//         return (
//             <View style={styles.container}>
//                 <View
//                     style={[
//                         styles.line,
//                         { borderColor: props.borderColor },
//                         props.dashed && styles.dashed,
//                         props.orientation === 'left' ? styles.shortWidth : { flex: 1 }
//                     ]}
//                 />
//                 <Text style={[styles.text, { color: props.color }]}>{props.children}</Text>
//                 <View
//                     style={[
//                         styles.line,
//                         { borderColor: props.borderColor },
//                         props.dashed && styles.dashed,
//                         props.orientation === 'right' ? styles.shortWidth : { flex: 1 }
//                     ]}
//                 />
//             </View>
//         );
//     }
// }
// const styles = StyleSheet.create({
//     container: {
//         height: 24,
//         alignItems: 'center',
//         flexDirection: 'row',
//         marginVertical: 6
//     },
//     line: {
//         height: 24,
//         borderBottomWidth: 1,
//         transform: [{ translateY: -12 }]
//     },
//     shortWidth: {
//         width: 20
//     },
//     dashed: {
//         borderStyle: 'dashed'
//     },
//     text: {
//         paddingHorizontal: 24,
//         fontSize: 16,
//         fontWeight: '500'
//     }
// });

// export default Divider;