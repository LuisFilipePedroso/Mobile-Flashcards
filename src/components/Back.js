import React, { Component } from 'react'
import { SafeAreaView, Text, StyleSheet, TouchableHighlight, View } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'

export default function Back({ answer, handleRotate }) {
  return (
    <SafeAreaView style={styles.container}>
      <TouchableHighlight onPress={handleRotate}>
        <View style={styles.btnWrapper}>
          <Text style={styles.btnText}>Show Question</Text>
          <MaterialCommunityIcons name='rotate-3d' size={25} />
        </View>
      </TouchableHighlight>
      <View style={styles.cardBody}>
        <Text style={styles.textAnswer}> {answer} </Text>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 300,
    height: 500,
    backgroundColor: 'white',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderWidth: 1,
    borderColor: 'white',
  },
  btnWrapper: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginRight: 15,
    marginTop: 15
  },
  btnText: {
    color: 'black',
    fontFamily: 'MontSerratRegular',
    fontSize: 15,
    marginRight: 5,
  },
  cardBody: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textAnswer: {
    fontSize: 25,
    color: 'black',
    fontFamily: 'MontserratSemiBold'
  },
});
