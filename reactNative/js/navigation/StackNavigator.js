import {
    createStackNavigator
} from "react-navigation";
import DrawerNavigator from './DrawerNavigator'
import BottomTabNavigator from './BottomTabNavigator';

export default createStackNavigator({
	BottomTabNavigator,

},{
	// initialRouteName: 'BottomTabNavigator',
	defaultNavigationOptions: ({navigation}) => {
		// console.warn(navigation.getParam('BottomTabTittle'))
		// return {header: null,}
		// headerTitle: 'stack'
	}
})


