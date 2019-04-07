import React, { Component } from 'react'
import { SafeAreaView, Text, StyleSheet } from 'react-native'
import { connect } from 'react-redux'

export default function Front({ question }) {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.textAnswer}> { question } </Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 300,
    height: 500,
    backgroundColor: 'white',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textAnswer: {
    fontSize: 30,
    color: 'black',
    fontFamily: 'MontserratSemiBold',
    textAlign: 'center'
  },
})
