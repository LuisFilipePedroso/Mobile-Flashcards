import React, { Component } from 'react'
import { View, Text, ImageBackground, StyleSheet, Dimensions, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'

class DeckDetail extends Component {

    static navigationOptions = ({ navigation }) => {
        const { title } = navigation.state.params

        return {
            title
        }
    }

    render() {
        const { navigation, deck, qtdOfCards } = this.props
        const { id, title } = navigation.state.params
        const random = Math.random() * 100

        return (
            <ImageBackground
                source={require('../images/background.jpg')}
                style={styles.bgImage} key={random}>
                <View style={styles.container}>
                    <View style={styles.card}>
                        <Text style={styles.cardTitle}>{title}</Text>
                        <View style={styles.cardBody}>
                            {qtdOfCards === 0
                                ? <Text style={styles.textInfo}> Deck is empty </Text>
                                : <Text style={styles.textInfo}> {qtdOfCards} cards </Text>
                            }
                        </View>
                        {qtdOfCards > 0 &&
                            <View style={[styles.cardFooter, { width: Dimensions.get('window').width - 75 }]}>
                                <TouchableOpacity
                                    style={[styles.btnSave, { width: Dimensions.get('window').width - 75 }]}
                                    onPress={() => navigation.navigate('Play', { id, title })}>
                                    <Text style={styles.btnText}>Start Quiz</Text>
                                </TouchableOpacity>
                            </View>
                        }
                    </View>
                    <View style={styles.containerBottom}>
                        <TouchableOpacity
                            style={[styles.btnAddCard, { width: Dimensions.get('window').width - 50 }]}
                            onPress={() => navigation.navigate('NewQuestion', { id, title, navigation })}>
                            <Text style={styles.btnAddCardText}>Add Card</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ImageBackground>
        );
    }
}

const mapStateToProps = ({ decks: { decks } }, { navigation }) => {
    const { id } = navigation.state.params
    const deck = decks.find(deck => deck.id === id)
    const qtdOfCards = deck.questions.length

    return {
        deck,
        qtdOfCards
    }
};

const styles = StyleSheet.create({
    bgImage: {
        flex: 1,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    card: {
        width: 300,
        height: 350,
        borderWidth: 1,
        borderColor: '#fff',
        borderRadius: 10,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
    },
    cardTitle: {
        fontSize: 28,
        color: 'black',
        textAlign: 'center',
        fontFamily: 'MontSerratBold',
        marginTop: 20,
    },
    textInfo: {
        color: '#c6c6c6',
        marginTop: 8,
    },
    cardFooter: {
        height: 50,
        backgroundColor: '#efffc1',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 0,
        borderBottomRightRadius: 10,
        borderBottomLeftRadius: 10,
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
    },
    btnAddCard: {
        alignItems: 'center',
    },
    btnAddCardText: {
        color: '#fff',
        fontFamily: 'MontserratSemiBold',
        fontSize: 14
    },
    containerBottom: {
        position: 'absolute',
        bottom: 40,
    }
})

export default connect(mapStateToProps)(DeckDetail)
