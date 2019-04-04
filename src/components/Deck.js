import React, { Component } from 'react'
import { SafeAreaView, Text, StyleSheet, TouchableHighlight } from 'react-native'


export default class Deck extends Component {
    render() {
        const { title, qtdCard, bgColor, id, navigation } = this.props
        console.log(navigation)

        return (
            <TouchableHighlight onPress={() => navigation.navigate('DeckDetail', { id, title })}>
                <SafeAreaView style={[styles.container, { backgroundColor: bgColor }]}>
                    <Text style={styles.title}> {title} </Text>
                    <Text style={styles.subtitle}> {qtdCard} cards</Text>
                </SafeAreaView >
            </TouchableHighlight>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        height: 200,
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