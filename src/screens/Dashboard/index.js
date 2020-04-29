import React, { Component } from 'react';
import { View, TouchableOpacity, Alert } from 'react-native';
import { connect } from 'react-redux';
import CustomHeader from '../../components/CustomHeader';
import globalStyle from '../../constants/globalStyle';
import { incrementNumber1, decrementNumber1, incrementNumber2, decrementNumber2 } from "../../redux/actions/dashboardAction";
import CustomText from "../../components/CustomText";
import { styles } from './styles';
import { widthSize, marginSizesHeight, fontSizes } from '../../constants/sizes';

class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }//end of Constructor

    render() {

        return (
            <View style={styles.container}>
                <CustomHeader leftIconVisible={true}
                    optionVisible={true}
                    searchVisible={true}
                    rightIconVisible={false}
                    rightMultiple={false}

                    onChangeText={(text) => {

                    }}
                    rightMultipleIcons={[
                        {
                            id: 1,
                            name: "md-search",
                            type: "Ionicons",
                            size: 30,
                            style: {},
                            color: "#fff",
                            onPress: () => {
                                alert("SEARCH");
                            }
                        },
                        {
                            id: 2,
                            name: "stepforward",
                            type: "AntDesign",
                            size: 30,
                            style: {},
                            color: "#fff",
                            onPress: () => {
                                alert("STEP FORWARD");
                            }
                        }
                    ]}
                    optionsData={
                        [
                            {
                                id: 1,
                                text: "GET",
                                onPress: () => { alert("GET") },
                            },
                            {
                                id: 2,
                                text: "POST",
                                onPress: () => { alert("POST") },
                            },
                            {
                                id: 3,
                                text: "PUT",
                                onPress: () => { alert("PUT") },
                            },
                            {
                                id: 4,
                                text: "DELETE",
                                onPress: () => { alert("DELETE") },
                            },




                        ]
                    }
                />
                <View style={{ ...globalStyle.card, width: widthSize._90, marginTop: marginSizesHeight._16 }}>
                    <CustomText>
                        Hello this is counter 1
                    </CustomText>
                    <TouchableOpacity style={styles.buttonContainer} onPress={this.props.incrementNumber1}>
                        <CustomText style={{ ...styles.buttonText }}>
                            +
                    </CustomText>
                    </TouchableOpacity>
                    <CustomText style={{ ...globalStyle.heading, alignSelf: 'center' }}>
                        {this.props.reduxState.data.number1}
                    </CustomText>
                    <TouchableOpacity style={styles.buttonContainer} onPress={this.props.decrementNumber1}>
                        <CustomText style={{ ...styles.buttonText }}>
                            -
                    </CustomText>
                    </TouchableOpacity>
                </View>

                <View style={{ ...globalStyle.card, width: widthSize._90, marginTop: marginSizesHeight._16 }}>
                    <CustomText>
                        Hello this is counter 2
                    </CustomText>
                    <TouchableOpacity style={styles.buttonContainer} onPress={this.props.incrementNumber2}>
                        <CustomText style={{ ...styles.buttonText }}>
                            +
                    </CustomText>
                    </TouchableOpacity>
                    <CustomText style={{ ...globalStyle.heading, alignSelf: 'center' }}>
                        {this.props.reduxState.data.number2}
                    </CustomText>
                    <TouchableOpacity style={styles.buttonContainer} onPress={this.props.decrementNumber2}>
                        <CustomText style={{ ...styles.buttonText }}>
                            -
                    </CustomText>
                    </TouchableOpacity>
                </View>

            </View>
        );
    }//end of Render
}//end of Class

function mapStateToProps(state) {
    return { reduxState: state.dashboardReducer }
}

export default connect(mapStateToProps, { incrementNumber1, decrementNumber1, incrementNumber2, decrementNumber2 })(index);

