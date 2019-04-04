import React, { Component } from 'react'
import { SafeAreaView, Text, StyleSheet } from 'react-native'


export default class Deck extends Component {
    render() {
        const { title, qtdCard, bgColor, id } = this.props
        
        return (
            <SafeAreaView style={[styles.container, { backgroundColor: bgColor }]}>
                <Text style={styles.title}> {title} </Text>
                <Text style={styles.subtitle}> {qtdCard} cards</Text>
            </SafeAreaView >
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