import React, { Component } from 'react'
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Dimensions, KeyboardAvoidingView } from 'react-native'
import { handleAddDeck as addDeck } from '../actions/decks'
import { connect } from 'react-redux'

class New extends Component {
  state = {
    text: ""
  }

  handleAddDeck = () => {
    const { text: title } = this.state
    const { dispatch } = this.props
    const deck = {
      title
    }

    dispatch(addDeck(deck))
    this.setState({
      text: ""
    })
  }

  render() {
    const { decks } = this.props
    return (
      <View style={styles.container}>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>What's the title of your deck?</Text>
          <View style={styles.cardBody}>
            <TextInput
              onChangeText={(text) => this.setState({ text })}
              style={[styles.input, { width: Dimensions.get('window').width - 50 }]}
              value={this.state.text}
              placeholder="Your deck title" />
          </View>
          <View style={[styles.cardFooter, { width: Dimensions.get('window').width - 30 }]}>
            <TouchableOpacity
              onPress={this.handleAddDeck}
              style={[styles.btnSave, { width: Dimensions.get('window').width - 50 }]}>
              <Text style={styles.btnText}>Create deck</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View >
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00bbea',
  },
  card: {
    width: 350,
    height: 350,
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 10,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardTitle: {
    fontSize: 26,
    color: 'black',
    textAlign: 'center',
    fontFamily: 'MontSerratBold',
    marginTop: 20,
  },
  cardBody: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    height: 35,
    borderWidth: 1,
    borderColor: '#bababa',
    borderRadius: 3,
    paddingLeft: 15,
    fontSize: 18,
    color: '#333',
    fontFamily: 'MontSerratRegular',
  },
  cardFooter: {
    height: 50,
    backgroundColor: '#efffc1',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnSave: {
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    fontSize: 20,
    color: '#99bf1c',
    fontFamily: 'MontserratSemiBold',
  }
})

const mapStateToProps = ({ decks }) => ({
  decks
});

export default connect(mapStateToProps)(New)