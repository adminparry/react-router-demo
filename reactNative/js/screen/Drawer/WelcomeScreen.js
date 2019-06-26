import React from 'react';
import {StyleSheet, View, Button, Text} from 'react-native';


export default class extends React.Component {
    render() {
        const { navigation } = this.props;
        return (
            <View style={styles.welcomeContainer}>
                <Text>welcome</Text>
                <Button
                title={'跳过'}
                onPress={() => {
                    navigation.navigate('LoginScreen')
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

});