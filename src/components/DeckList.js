import React, { Component } from 'react'
import { SafeAreaView, FlatList } from 'react-native'
import Deck from './Deck'
import { connect } from 'react-redux'
import { Font, AppLoading } from 'expo'

class DeckList extends Component {
  state = {
    isLoaded: false
  }

  async componentDidMount() {
    await Font.loadAsync({
      MontSerratBold: require('../../assets/fonts/Montserrat-Bold.ttf'),
      MontSerratRegular: require('../../assets/fonts/Montserrat-Regular.ttf'),
      MontserratSemiBold: require('../../assets/fonts/Montserrat-SemiBold.ttf'),
    })

    this.setState({ isLoaded: true })
  }

  render() {
    const { decks, navigation } = this.props
    const { isLoaded } = this.state

    return (
      <SafeAreaView style={{ flex: 1 }}>
        {isLoaded === false
          ? <AppLoading />
          : <FlatList
            data={decks}
            renderItem={({ item }) =>
              <Deck
                key={item.title}
                id={item.id}
                title={item.title}
                qtdCard={item.questions.length}
                bgColor={item.cardBgColor}
                navigation={navigation} />}
            keyExtractor={(item, index) => index.toString()}
          />
        }
      </SafeAreaView>
    );
  }
}


const mapStateToProps = ({ decks: { decks } }) => {
  return {
    decks
  }
};

export default connect(mapStateToProps)(DeckList)