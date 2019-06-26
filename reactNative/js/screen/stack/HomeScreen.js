import React from 'react';
import { StyleSheet, View, Button, Text, TextInput } from 'react-native';
import HeaderComponent from '../header';

export default class extends React.Component {
	static navigationOptions({navigation}) {
		return {
			tabBarLabel: '主页',
			headerTitle: navigation.getParam('BottomTabTittle', '输入标题'),
		}
	}
	render() {
		const { navigation } = this.props;
		const { state, setParams } = navigation;
		const { params } = state;


		
		return (
			<View style={ styles.settingsContainer}>
				<HeaderComponent {...this.props}/>
				<Text>{JSON.stringify(navigation)}</Text>

				<TextInput
				style={styles.input}
				onChangeText={ text => {
					setParams({ BottomTabTittle: text })
				}} />
			</View>
			)
	}
}

const styles = StyleSheet.create({
	settingsContainer: {
		flex: 1,
		// justifyContent: 'center',
		// alignItems: 'center'
	},
	input: {
		borderWidth:1,
		borderColor: 'black',
		height: 20,
	}
})