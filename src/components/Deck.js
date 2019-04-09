import React, { Component } from 'react'
import { SafeAreaView, Text, StyleSheet, TouchableHighlight, Dimensions } from 'react-native'


export default class Deck extends Component {
    render() {
        const { title, qtdCard, bgColor, id, navigation } = this.props
        return (
            <TouchableHighlight onPress={() => navigation.navigate('DeckDetail', { id, title })}>
                <SafeAreaView style={[styles.container, { backgroundColor: bgColor, height: Dimensions.get('window').height / 4 }]}>
                    <Text style={styles.title}> {title} </Text>
                    <Text style={styles.subtitle}> {qtdCard} cards</Text>
                </SafeAreaView >
            </TouchableHighlight>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 30,
        color: '#fff',
        // fontFamily: 'MontSerratBold',
    },
    subtitle: {
        fontSize: 16,
        color: '#fff',
        // fontFamily: 'MontSerratRegular'
    }
})