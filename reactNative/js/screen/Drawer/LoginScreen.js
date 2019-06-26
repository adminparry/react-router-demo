import React from 'react';
import {StyleSheet, View, Button, Text, TextInput} from 'react-native';


export default class extends React.Component {
    render() {
        const { navigation } = this.props;
        return (
            <View style={styles.welcomeContainer}>

                <Text>用户名</Text><TextInput style={styles.username} />
                <Text>密码</Text><TextInput style={styles.username}
                secureTextEntry={true}
                />
                
                <Button
                title={'跳过'}
                onPress={() => {
                    navigation.navigate('StackNavigator')
                }} />
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