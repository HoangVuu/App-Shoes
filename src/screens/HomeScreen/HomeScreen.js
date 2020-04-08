import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../Home';
import Store from './Store'
import SignUp from '../SignUp';
import Login from '../Login'
import ProductDetail from '../ProductDetail'
import IconF from 'react-native-vector-icons/FontAwesome5';
import IconM from 'react-native-vector-icons/MaterialCommunityIcons'

const Tab = createBottomTabNavigator();


const { activeIcon, inactiveIcon } = StyleSheet.create({
    activeIcon: {
        color: 'orange',
        fontWeight: "bold",
        fontSize: 10
    },
    inactiveIcon: {
        fontSize: 10
    }
})

export default class HomeScreen extends Component {
    render() {
        return (
            <Tab.Navigator>
                <Tab.Screen name="home" component={Home} options={{
                    tabBarIcon: ({ focused, color, size }) => focused ? <IconF color='orange' size={size} name='store' /> : <IconF size={size} name='store' />,
                    tabBarLabel: ({ focused, color }) => focused ? <Text style={[activeIcon]}>Store</Text> : <Text style={[inactiveIcon]}>Store</Text>
                }}>
                </Tab.Screen>
                <Tab.Screen name="favorites" component={SignUp} options={{
                    tabBarIcon: ({ focused, color, size }) => focused ? <IconF style={{ color: 'orange' }} size={size} name='heart' /> : <IconF size={size} name='heart' />,
                    tabBarLabel: ({ focused, color }) => focused ? <Text style={[activeIcon]}>Favorites</Text> : <Text style={[inactiveIcon]}>Favorites</Text>
                }}></Tab.Screen>

                <Tab.Screen name="ProductList" component={Store} options={{
                    tabBarIcon: ({ focused, color, size }) => focused ? <IconM style={{ color: 'orange' }} size={42} name='shoe-formal' /> : <IconM size={42} name='shoe-formal' />,
                    tabBarLabel: ({ focused, color }) => focused ? <Text style={[activeIcon]}>Shoes</Text> : <Text style={[inactiveIcon]}>Shoes</Text>
                }}></Tab.Screen>

                <Tab.Screen name="You" component={ProductDetail} options={{
                    tabBarIcon: ({ focused, color, size }) => focused ? <IconF style={{ color: 'orange' }} size={size} name='history' /> : <IconF size={size} name='history' />,
                    tabBarLabel: ({ focused, color }) => focused ? <Text style={[activeIcon]}>History</Text> : <Text style={[inactiveIcon]}>History</Text>
                }}></Tab.Screen>

            </Tab.Navigator>
        )
    }
}
