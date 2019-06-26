import { createMaterialTopTabNavigator, createStackNavigator } from 'react-navigation';
import DrawerNavigator from './DrawerNavigator'

import home from '../screen/MaterialTopTab/B';
import set from '../screen/MaterialTopTab/A';
import page from '../screen/MaterialTopTab/C';
const pager = createStackNavigator({
	DrawerNavigator:{
		screen:DrawerNavigator,
		navigationOptions:{
			header: null
		}
	},

})
export default createMaterialTopTabNavigator({
	pager,
	set,
	home,
},{
	initialRouteName: 'set',
	tabBarOptions: {
		tabStyle: {
			mindWidth: 50,
		},
		upperCaseLabel: false,//标签是否大写 default:true
		scrollEnabled: true, //是否支持滚动选项卡 default: false
		style: {
			backgroundColor: '#567'
		},
		indicatorStyle: { //指示器的样式
			height: 2,
			backgroundColor: 'white',
		},
		labelStyle: { //标签的样式
			fontSize: 13,
			marginTop: 6,
			marginBottom: 6,
		}

	}
})