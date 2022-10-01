import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import DalamProses from './DalamProsesPesanan';
import RiwayatPesanan from './RiwayatPesanan';
import { TopNavItem } from './TopNavItem';

const Stack = createNativeStackNavigator();
const Tab = createMaterialTopTabNavigator();

function HomeScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Home!</Text>
        </View>
    );
}

function SettingsScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Settings!</Text>
        </View>
    );
}

const MainApp = () => {
    return (
        <Tab.Navigator tabBar={props => <TopNavItem {...props} />}>
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Settings" component={SettingsScreen} />
            {/* <Tab.Screen name="Dalam Proses" component={DalamProses} options={{ headerShown: false }}/>
      <Tab.Screen name="Riwayat" component={RiwayatPesanan} options={{ headerShown: false }}/> */}
        </Tab.Navigator>
    );
}

export default function TopNavBox() {
    return (
        <Stack.Navigator initialRouteName="MainApp">
            <Stack.Screen name="MainApp" component={MainApp} options={{ headerShown: false }} />
        </Stack.Navigator>
    )
}

const styles = StyleSheet.create({})