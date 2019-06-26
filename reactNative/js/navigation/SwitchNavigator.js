import { createSwitchNavigator } from "react-navigation";
// createSwitchNavigator(RouteConfigs, SwitchNavigatorConfig);
import StackNavigator from './StackNavigator';
import WelcomeScreen from '../screen/WelcomeScreen';
import LoginScreen from '../screen/LoginScreen';
const login = createSwitchNavigator({
    LoginScreen,
    StackNavigator,
})
export default createSwitchNavigator({
    WelcomeScreen,
    login,
},
{
    defaultNavigationOptions: {
       
    }
})