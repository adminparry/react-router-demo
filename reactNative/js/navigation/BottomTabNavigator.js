import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Platform } from 'react-native';


import DrawerNavigator from './DrawerNavigator';
import MaterialTopTabNavigator from './MaterialTopTabNavigator'

import SettingsScreen from '../screen/SettingsScreen';
import HomeScreen from '../screen/HomeScreen';
import PageList from '../screen/PageList';
import TestScreen from '../screen/TestScreen';



const sbHomeScreen = createStackNavigator({
	MaterialTopTabNavigator:{
		screen:MaterialTopTabNavigator,
		navigationOptions:{
			headerTitle: '主页'
		}
	},
});
const sbSettingsScreen = createStackNavigator({

	// SettingsScreen,
	DrawerNavigator:{
		screen:DrawerNavigator,
		navigationOptions:{
			headerTitle: '设置'
		}
	},
});
const sbPageList = createStackNavigator({

	PageList:{
		screen:DrawerNavigator,
		navigationOptions:{
			headerTitle: '分也'
		}
	},
	// DrawerNavigator,
});

const ret = createBottomTabNavigator({
	HomeScreen: {
		screen:sbHomeScreen,
		navigationOptions: {
			tabBarLabel: '主而言',
			tabBarIcon: ({ tintColor, focused }) => (
				<Ionicons name="ios-home"
					size={26}
					style={{color: tintColor}} />
			)
		}
	},
	SettingsScreen: {
		screen:sbSettingsScreen,
		navigationOptions: {
			tabBarLabel: '设置',
			tabBarIcon: ({ tintColor, focused }) => (
				<Ionicons name="ios-people"
					size={26}
					style={{color: tintColor}} />
			)
		}
	},
	PageList: {
		screen:sbPageList,
		navigationOptions: {
			tabBarLabel: '分页列表',
			tabBarIcon: ({ tintColor, focused }) => (
				<Ionicons name="ios-wallet"
					size={26}
					style={{color: tintColor}} />
			)
		}
	}
},{
	tabBarOptions: {
		activeTintColor: Platform.OS === 'ios' ? '#e91e63' : '#fff',
		
	},
	defaultNavigationOptions: ({ navigation }) => {
		// console.warn(navigation.getParam('color'));
		return ({
			headerTitle: '名称',
			tabBarVisible: true,
		})
	}
})

export default {
	screen: ret,
	navigationOptions:{
		header: null
	}
};