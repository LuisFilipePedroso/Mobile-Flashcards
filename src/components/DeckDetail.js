import React, { Component } from 'react'
import { View, Text, ImageBackground, StyleSheet } from 'react-native'

export default class DeckDetail extends Component {

    static navigationOptions = ({ navigation }) => {
        const { title } = navigation.state.params

        return {
            title
        }
    }

    render() {
        const { navigation } = this.props
        const { id } = navigation.state.params
        return (
            <ImageBackground
                source={require('../images/background.jpg')}
                style={styles.container}>
                <View>
                    <Text> DeckDetail of deck {id} </Text>
                </View>
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: null,
        height: null
    }
})
