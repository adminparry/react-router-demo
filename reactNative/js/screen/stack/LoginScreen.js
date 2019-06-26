import React from 'react';
import {StyleSheet, View, Button, Text, TextInput, ScrollView} from 'react-native';
import HeaderComponent from '../header';

export default class extends React.Component {
    render() {
        const { navigation } = this.props;
        return (
            
            <View>
                <HeaderComponent {...this.props}/>
                <ScrollView >
                    <Text>用户名</Text><TextInput style={styles.username} />
                    <Text>密码</Text><TextInput style={styles.username}
                    secureTextEntry={true}
                    />
                    
                    <Button
                    title={'跳过'}
                    onPress={() => {
                        navigation.navigate('HomeScreen')
                    }} />
                </ScrollView>
                
            </View>
        )
    }
}
const styles = StyleSheet.create({
    welcomeContainer: {
        flex:1,
        marginTop:30,
    },
    username: {
        borderWidth: 1,

    }

});