import React from 'react';
import { createStackNavigator, createAppContainer,createDrawerNavigator,SafeAreaView,DrawerItems } from 'react-navigation';
import HomeScreen from './HomeScreen';
import LoginScreen from './LoginScreen'
import { View, Text , ScrollView} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import HeaderComponent from '../header'
class ContentComponent extends React.Component {
    render() {
        const { navigation } = this.props;

        return (
            <ScrollView
                style={{ backgroundColor: '#789', flex: 1 }}
            >
                <SafeAreaView forceInset={{ top: 'always', horizontal: 'never' }}>
                    <Text>23</Text>
                    <DrawerItems {...this.props}></DrawerItems>

                </SafeAreaView>
            </ScrollView>
        )
    }
}
class DrawerComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tabs: [
                {
                    component: HomeScreen,
                    name: 'HomeScreen',
                    label: '主页',
                    icon: 'drafts',
                    child: [
                        {
                            component: LoginScreen,
                            name: 'LoginScreen',
                            label: '测试子路由',
                            icon: 'drafts',
                        }
                    ]

                },
                {
                    component: LoginScreen,
                    name: 'LoginScreen',
                    label: '登录',
                    icon: 'drafts',

                },
                
            ]
        }
    }
    createDrawerRoute() {
        return this.state.tabs.reduce((ret, item) => {
            ret[item.name] = {
                screen: item.component,
                navigationOptions: {
                    drawerLabel: item.label,
                    drawerIcon: ({ tintColor }) => (
                        <MaterialIcons
                            name={item.icon}
                            size={24}
                            style={{ color: tintColor }} />
                    ),
                    items: item.child
                }
            }
            return ret;
        }, {})
    }
    FuckRender(){

        const config = this.createDrawerRoute();
        return createAppContainer(
            createDrawerNavigator(config, {
                // initialRouteName: 'Home',
                contentOptions: {
                    activeTintColor: '#e91e63',

                },
                contentComponent: (props) => (
                    <ContentComponent {...props} />
                ),
                defaultNavigationOptions: {
                    header: null,

                }
            })
        )
    }
    render() {
        const RetRender = this.FuckRender();
        // return <Text>asdf</Text>
        return <RetRender />
    }
}

class Index extends React.Component {
    stackGen(){
        
        const stack = createStackNavigator({HomeScreen})
        return createAppContainer(stack);
    }
    render(){
        const TestComponent = this.stackGen();
        return (
            <TestComponent />
        )
    }
}
class Home extends React.Component {
    static navigationOptions = {
        header: null
    }
    render() {
        return (
            <View>
                <HeaderComponent {...this.props} routerName="home" />
                <Text>测试暴露出去的是个什么东西</Text>
                <Index />
            </View>
        )
    }
}
export default createAppContainer(createStackNavigator({
    Home,
    home: {
        screen: DrawerComponent,
        navigationOptions:{
            header: null
        }
    },
   
}))