import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import CustomHeader from '../../components/CustomHeader';
import { value } from "../../redux/actions/dashboardAction";
import { styles } from './styles';

class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }//end of Constructor

    render() {
        return (
            <View style={styles.container}>
                <CustomHeader />
                <Text> Index {this.props.number}</Text>


            </View>
        );
    }//end of Render
}//end of Class

function mapStateToProps(state) {
    return { number: state.dashboardReducer }
}

export default connect(mapStateToProps, { value })(index);