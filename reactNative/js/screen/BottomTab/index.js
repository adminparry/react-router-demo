import {BottomTabBar} from 'react-navigation-tabs';
import React from 'react';
// import {connect} from 'react-redux';
import { createAppContainer, createBottomTabNavigator, createStackNavigator } from 'react-navigation';
import HomeScreen from './HomeScreen';


class TabBarComponent extends React.Component {
    constructor(props) {
        super(props);
        this.theme = {
            tintColor: props.activeTintColor,
            updateTime: new Date().getTime(),
        }
    }

    render() {
        return <BottomTabBar
            {...this.props}
            // activeTintColor={this.props.theme.themeColor}
        />
    }
}
class BottomTab extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            tabs:[
                {
                    name: 'HomeScreen',
                    icon: 'whatshot',
                    label: '我的',
                    screen: HomeScreen
                },
                
                
            ]
        }
    }
    _routeJson() {
        return this.state.tabs.reduce((ret, item) => {
            ret[item.name] = {
                screen: item.screen,
                navigationOptions: {
                    tabBarLabel: item.label,
                    tabBarIcon: (tintColor, focused) => (
                        <MaterialIcons
                        name={item.icon}
                        size={26}
                        style={{color: tintColor}} />
                    )
                }
            }
            return ret;
        },{})
    }
    _tabNavigator() {
        if(this.tabs){
            return this.tabs;
        }
        return this.tabs = createAppContainer(createBottomTabNavigator(this._routeJson(),{
            tabBarComponent: props => {
                return <TabBarComponent 
                // theme={this.props.theme}
                 {...props} />
            }
        }))
    }
    render() {
        const Tabs = this._tabNavigator();
        return (
            <Tabs  />
           
        )
    }
}

// export default BottomTab
// export default connect(
//     state => ({
//         theme: state.theme
//     })
// )(BottomTab)
export default createAppContainer(createStackNavigator({
    home: {
        screen: BottomTab
    }
}))