import React from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';
import { Button, Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';


export default class extends React.Component {
	static navigationOptions({navigation}) {
		return {
			header:null,
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

<Button
  icon={
    <Icon
      name="arrow-right"
      size={15}
      color="white"
    />
  }
  title="Button with icon component"
/>
				<TextInput
				style={styles.input}
				onChangeText={ text => {
					setParams({ BottomTabTittle: text })
				}} />
				<Input
  placeholder='BASIC INPUT'
/>
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