import React from 'react';
import { StyleSheet, View, Button, Text } from 'react-native';

export default class extends React.Component {
	static navigationOptions({navigation,navigationOptions}) {
		return {
			tabBarLabel: '设置',
			headerTitle: '设置',
			title: 'settings',
			tabBarOptions: {
				activeTintColor: navigation.getParam('color')
			}
		}
	}
	changeColor(){
		const { navigation } = this.props;
		const { setParams } = navigation;
		setParams({color:'green'})
	}
	render() {
		const { navigation } = this.props;
		return (
			<View style={ styles.settingsContainer}>
				<Text>{JSON.stringify(navigation)}</Text>
				<Text>settings</Text>
				<Text onPress={() => this.changeColor()}>change bottom tab color</Text>
				
				<Button title={'go to MaterialTopTabNavigator'} onPress={ () => navigation.push('MaterialTopTabNavigator')} />
				<Button title={'go to DrawerNavigator'} onPress={ () => navigation.navigate('DrawerNavigator')} />
				<Button title={'go to HomeScreen'} onPress={ () => navigation.push('HomeScreen')} />
				<Button title={'go to TestScreen'} onPress={ () => navigation.navigate('TestScreen')} />
				<Button title={'go to back'} onPress={ () => navigation.goBack()} />
				
				
			</View>
			)
	}
}

const styles = StyleSheet.create({
	settingsContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	}
})