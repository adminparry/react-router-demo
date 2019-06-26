import { createDrawerNavigator, SafeAreaView, DrawerItems } from 'react-navigation';
import { ScrollView } from 'react-native';
import React from 'react';

import drawerA from '../screen/Drawer/SettingsScreen';
import drawerB from '../screen/Drawer/HomeScreen';
import drawerC from '../screen/Drawer/PageList';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';


export default createDrawerNavigator({
    // MaterialTopTabNavigator,
    
    setting:{
        screen: drawerA,
        navigatorOptions: {
            drawerLabel: 'SettingsScreen',
            drawerIcon: ({tintColor}) => (
                <MaterialIcons
                    name={'drafts'}
                    size={24}
                    style={{color: tintColor}} />
            )
        }
    },
    home:{
        screen: drawerB,
        navigatorOptions: {
            drawerLabel: 'HomeScreen',
            drawerIcon: ({tintColor}) => (
                <MaterialIcons
                    name={'drafts'}
                    size={24}
                    style={{color: tintColor}} />
            )
        }
    },
    page:{
        screen: drawerC,
        navigatorOptions: {
            drawerLabel: 'PageList',
            drawerIcon: ({tintColor}) => (
                <MaterialIcons
                    name={'drafts'}
                    size={24}
                    style={{color: tintColor}} />
            )
        }
    },
},{
    initialRouteName: 'page',
    contentOptions: {
        activeTintColor: '#e91e63',

    },
    contentComponent: (props) => (
        <ScrollView
        style={{backgroundColor:'#789', flex:1}}
        >
            <SafeAreaView forceInset={{top:'always',horizontal:'never'}}>
                <DrawerItems {...props}></DrawerItems>
            </SafeAreaView>
        </ScrollView>
    ),
    defaultNavigationOptions:{
        header: null,
       
    }
    
})