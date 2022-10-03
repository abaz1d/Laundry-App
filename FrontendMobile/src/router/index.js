import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home, Pesanan, Akun, Splash } from '../pages';
import { BottomNavBox } from '../components';
import TopNavBox from '../components/TopNav/TopNavBox';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp = () => {
    return (
        <Tab.Navigator tabBar={props => <BottomNavBox {...props} />} ScreenOptions={{ tabBarHideOnKeyboard: true, tabBarStyle: [{ display: "flex" }, null]}}>
            <Tab.Screen name="Home" component={Home} options={{ headerShown: false }}/>
            <Tab.Screen name="Pesanan" component={Pesanan} options={{ headerShown: false }}/>
            <Tab.Screen name="Akun" component={Akun} options={{ headerShown: false }}/>
        </Tab.Navigator>
    )
}

const Router = () => {
    return (
        <Stack.Navigator initialRouteName="Splash">
            <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false }} />
            <Stack.Screen name="MainApp" component={MainApp} options={{ headerShown: false }} />
            <Stack.Screen name="TopNavBox" component={TopNavBox} options={{ headerShown: false }} />
        </Stack.Navigator>
    )
}

export default Router

const styles = StyleSheet.create({})