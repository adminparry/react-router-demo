import React from 'react';
import { View } from 'react-native';
import { Header,Icon, Button } from 'react-native-elements';
import { createAppContainer,createStackNavigator } from "react-navigation";
// import Drawer from '../../navigation/DrawerNavigator';
import Drawer from '../Drawer';
// import Bottom from '../BottomTab';

class LeftComponent extends React.Component {
    render() {
        const { navigation } = this.props;

        return <Icon
        name='menu'
        color="#fff"
        underlayColor="transparent"
        onPress={() => {
            navigation.toggleDrawer()
        }} />
    }
}

class HeaderComponent extends React.Component {
    static navigationOptions = {
        header: null
    }
    render() {
        return <Header
        leftComponent={<LeftComponent {...this.props} />}
        centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
        rightComponent={{ icon: 'home', color: '#fff' }}
      />
    }
}

class ContentComponent extends React.Component {
    static navigationOptions = {
        header: null
    }
    render() {
        const { navigation, routerName } = this.props;

        return (
            <View>
                <HeaderComponent {...this.props}/>
                <Button
                title="Solid Button"
                onPress={() => {
                    navigation.navigate(routerName)
                }}
                />

            </View>
           
        )
    }
}

export default ContentComponent
// const stack = createStackNavigator({ContentComponent})

// const container = createAppContainer(stack)

// export default container