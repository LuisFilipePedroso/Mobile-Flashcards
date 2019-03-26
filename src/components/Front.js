import React, { Component } from 'react';
import { SafeAreaView, Text, StyleSheet } from 'react-native';

export default class Front extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={{ fontSize: 22, color: '#fff' }}> Front </Text>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 300,
    height: 500,
    backgroundColor: '#333',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#333',
    justifyContent: 'center',
    alignItems: 'center'
  }
});
