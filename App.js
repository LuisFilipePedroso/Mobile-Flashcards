import React, { Component } from 'react'
import { Platform, TouchableOpacity, StyleSheet, Text, SafeAreaView } from 'react-native'
import { createStackNavigator, createDrawerNavigator, createAppContainer } from 'react-navigation'
import New from './src/components/NewDeck'
import DeckList from './src/components/DeckList'
import { Entypo, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'
import { Provider } from 'react-redux'
import reducer from './src/reducers'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

const middleware = applyMiddleware(thunk)

const DecksNavigator = createStackNavigator({
  Decks: {
    screen: DeckList,
    navigationOptions: ({ navigation }) => ({
      title: 'Decks',
      headerLeft: Platform.OS === 'ios'
        ? <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
          <Ionicons name='ios-menu' style={styles.hamburguerMenu} />
        </TouchableOpacity>
        : <Ionicons name='md-menu' style={styles.hamburguerMenu} />
    }),
  },
})

const NewDeckNavigator = createStackNavigator({
  New: {
    screen: New,
    navigationOptions: ({ navigation }) => ({
      title: 'Decks',
      headerStyle: {
        backgroundColor: '#00bbea',
      },
      headerTintColor: '#fff',
      headerLeft: Platform.OS === 'ios'
        ? <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
          <Ionicons name='ios-menu' style={styles.hamburguerMenu} />
        </TouchableOpacity>
        : <Ionicons name='md-menu' style={styles.hamburguerMenu} />
    })
  }
})

const DrawerNavigator = createDrawerNavigator({
  Decks: {
    screen: DecksNavigator,
    navigationOptions: {
      title: 'Decks',
      drawerIcon: <MaterialCommunityIcons name='cards-outline' size={25} />
    }
  },
  New: {
    screen: NewDeckNavigator,
    navigationOptions: {
      title: 'Add New Deck',
      drawerIcon: <Entypo name='plus' size={25} />
    }
  }
})

const styles = StyleSheet.create({
  hamburguerMenu: {
    fontSize: 30,
    marginLeft: 10,
  }
})

const MainNavigator = createAppContainer(DrawerNavigator)

export default class App extends Component {

  render() {
    return (
      <Provider store={createStore(reducer, middleware)}>
        <MainNavigator />
      </Provider>
    )
  }
}