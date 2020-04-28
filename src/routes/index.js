import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from "../redux/store";
// screens Import
import Dashboard from "../screens/Dashboard";

// screens Import End

const Stack = createStackNavigator();
const initialRouteName = "Dashboard";

console.disableYellowBox = true;

export default class index extends Component {

    render() {
        return (
            <Provider store={store}>
                <NavigationContainer independent={true}>
                    <Stack.Navigator initialRouteName={initialRouteName} screenOptions={{ headerShown: false }}>
                        <Stack.Screen name="Dashboard" component={Dashboard} />
                    </Stack.Navigator>
                </NavigationContainer>
            </Provider>
        )
    }//end oF RENDER

}//end of Class
