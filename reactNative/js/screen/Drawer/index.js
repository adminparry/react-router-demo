import React from 'react';
import { createDrawerNavigator, SafeAreaView, DrawerItems, createAppContainer,createStackNavigator } from 'react-navigation';
import {ScrollView, Text } from 'react-native';
import MaterialIcons from 'react-native-vector-icons';

import HomeScreen from './HomeScreen';
import LoginScreen from './LoginScreen';
import PageList from './PageList';
import SettingsScreen from './SettingsScreen';
import TestScreen from './TestScreen';
class ContentComponent extends React.Component {
    render() {
        return (
            <ScrollView
                style={{ backgroundColor: '#789', flex: 1 }}
            >
                <SafeAreaView forceInset={{ top: 'always', horizontal: 'never' }}>
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

                }
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
                    )
                }
            }
            return ret;
        }, {})
    }
    FuckRender(){

        const config = this.createDrawerRoute();
        return createAppContainer(
            createDrawerNavigator(config, {
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

// export default DrawerComponent
export default createAppContainer(createStackNavigator({
    home: {
        screen: DrawerComponent,
        navigationOptions: {
            header: null
        }
    }
}))