import React, { Component } from 'react'
import {
    StyleSheet,
    Text,
    Animated,
    TouchableOpacity,
    View,
    ImageBackground,
    Dimensions
} from 'react-native'
import Front from './Front'
import Back from './Back'
import { connect } from 'react-redux'
import { MaterialCommunityIcons } from '@expo/vector-icons'

class Play extends Component {

    state = {
        showingBack: false,
        rotate: new Animated.Value(0),
        value: 0,
        index: 0,
        qtdOfCorrectAnswer: 0
    }

    componentDidMount() {
        const { rotate } = this.state

        rotate.addListener(({ value }) => {
            this.setState({
                value
            })
        })
    }

    handleRotate = (callback) => {
        const { rotate, value, showingBack } = this.state

        if (value >= 90) {
            Animated.spring(rotate, {
                toValue: 0,
                tension: 10,
                friction: 8
            }).start()
        } else {
            Animated.spring(rotate, {
                toValue: 180,
                tension: 10,
                friction: 8
            }).start()
        }

        this.setState({
            showingBack: !showingBack
        })

        if (typeof callback === 'function') {
            callback()
        }
    }

    handleScore = answer => {
        this.setState(prevState => ({
            index: prevState.index + 1,
            qtdOfCorrectAnswer: answer === true ? prevState.qtdOfCorrectAnswer + 1 : prevState.qtdOfCorrectAnswer
        }))
    }

    resetData = () => {
        this.state.rotate.setValue(0)

        this.setState({
            index: 0,
            qtdOfCorrectAnswer: 0
        })
    }

    render() {
        const { showingBack, rotate, index, qtdOfCorrectAnswer } = this.state
        const { deck, navigation } = this.props
        const { id, title } = navigation.state.params
        const { questions } = deck

        const RotateData = rotate.interpolate({
            inputRange: [0, 180],
            outputRange: ['0deg', '180deg']
        })

        const RotateData1 = rotate.interpolate({
            inputRange: [0, 180],
            outputRange: ['180deg', '0deg']
        })

        if (index === questions.length) {
            const grade = (qtdOfCorrectAnswer / questions.length) * 100
            return (
                <ImageBackground
                    source={require('../images/background.jpg')}
                    style={[styles.bgImage, { justifyContent: 'center', alignItems: 'center' }]}>
                    <View style={styles.resultContainer}>
                        {grade >= 60
                            ? <Text style={[styles.resultText, { color: '#4cae4c' }]}>{grade}%. You Rock 😁</Text>
                            : <Text style={[styles.resultText, { color: '#d43f3a' }]}>You did {grade}% ☹️</Text>}
                    </View>
                    <View style={[styles.cardFooter, { width: Dimensions.get('window').width - 75 }]}>
                        <TouchableOpacity
                            style={[styles.btnBackToDeck, { width: Dimensions.get('window').width - 75 }]}
                            onPress={() => navigation.navigate('DeckDetail', { id, title })}>
                            <Text style={styles.btnBackToDeckText}>Back to Deck</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.containerBottom}>
                        <TouchableOpacity
                            style={[styles.btnRestartQuiz, { width: Dimensions.get('window').width - 50 }]}
                            onPress={this.resetData}>
                            <Text style={styles.btnRestartQuizText}>Restart Quiz</Text>
                        </TouchableOpacity>
                    </View>
                </ImageBackground >
            )
        }

        return (
            <ImageBackground
                source={require('../images/background.jpg')}
                style={styles.bgImage}>
                <View style={styles.container}>
                    {showingBack === false && (
                        <View>
                            <Animated.View
                                style={[{ transform: [{ rotateY: RotateData }] }, styles.height]}>
                                <Front question={questions[index].question} />
                            </Animated.View>
                            <View style={[styles.cardFooterNoBg, { width: Dimensions.get('window').width - 75 }]}>
                                <TouchableOpacity onPress={() => this.handleRotate()} style={styles.button}>
                                    <View style={{flexDirection: 'row'}}>
                                        <MaterialCommunityIcons name='rotate-3d' size={25} style={{ marginRight: 10, color: '#939292'}}/>
                                        <Text style={styles.btnText}>Show Answer</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                    )}

                    {showingBack === true && (
                        <View>
                            <Animated.View
                                style={[{ transform: [{ rotateY: RotateData1 }] }, styles.height]}>
                                <Back
                                    answer={questions[index].answer}
                                    handleRotate={this.handleRotate} />
                            </Animated.View>
                            <View style={styles.btnGroup}>
                                <TouchableOpacity
                                    onPress={() => this.handleRotate(() => this.handleScore(false))}
                                    style={[styles.button, styles.btnDanger, { borderBottomLeftRadius: 10 }]}>
                                    <Text style={styles.btnTextWhite}>Incorrect</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    onPress={() => this.handleRotate(() => this.handleScore(true))}
                                    style={[styles.button, styles.btnSuccess, { borderBottomRightRadius: 10 }]}>
                                    <Text style={styles.btnTextWhite}>Correct</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    )}
                </View>
            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    bgImage: {
        flex: 1,
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        width: 300,
        height: 35,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 3,
    },
    btnGroup: {
        flexDirection: 'row',
        height: 35,
    },
    btnDanger: {
        width: 150,
        borderColor: '#d43f3a',
        backgroundColor: '#d9534f',
        borderRadius: 0,
    },
    btnSuccess: {
        width: 150,
        borderColor: '#4cae4c',
        backgroundColor: '#5cb85c',
        borderRadius: 0,
    },
    btnText: {
        fontSize: 16,
        color: '#939292',
        fontFamily: 'MontserratSemiBold',
    },
    btnTextWhite: {
        fontSize: 20,
        color: '#fff',
        fontFamily: 'MontserratSemiBold',
    },
    height: {
        height: 500
    },
    cardFooter: {
        height: 50,
        backgroundColor: '#efffc1',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 80,
        borderBottomRightRadius: 10,
        borderBottomLeftRadius: 10,
    },
    cardFooterNoBg: {
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 5,
        borderBottomRightRadius: 10,
        borderBottomLeftRadius: 10,
    },
    resultContainer: {
        width: 300,
        height: 500,
        backgroundColor: 'white',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
    },
    resultText: {
        fontSize: 28,
        color: 'black',
        fontFamily: 'MontserratSemiBold',
        textAlign: 'center'
    },
    btnRestartQuiz: {
        alignItems: 'center',
    },
    btnRestartQuizText: {
        color: '#fff',
        fontFamily: 'MontserratSemiBold',
        fontSize: 14
    },
    containerBottom: {
        position: 'absolute',
        bottom: 40,
    },
    btnBackToDeck: {
        height: 35,
        justifyContent: 'center',
        alignItems: 'center',
    },
    btnBackToDeckText: {
        fontSize: 20,
        color: '#99bf1c',
        fontFamily: 'MontserratSemiBold',
    },
})

const mapStateToProps = ({ decks: { decks } }, { navigation }) => {
    const { id } = navigation.state.params
    const deck = decks.find(deck => deck.id === id)

    return {
        deck
    }
};

export default connect(mapStateToProps)(Play)