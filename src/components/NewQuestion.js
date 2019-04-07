import React, { Component } from 'react'
import { View, Text, StyleSheet, TextInput, Dimensions, TouchableOpacity, KeyboardAvoidingView } from 'react-native'
import { connect } from 'react-redux'
import { handleAddQuestion } from '../actions/decks'

class NewQuestion extends Component {
    state = {
        question: "",
        answer: ""
    }

    handleNewQuestion = async () => {
        const { dispatch, navigation } = this.props
        const { id, title } = navigation.state.params
        const { question, answer } = this.state

        const newQuestion = {
            question,
            answer
        }

        await dispatch(handleAddQuestion(id, newQuestion))

        this.setState({
            question: "",
            answer: "",
        })

        navigation.navigate('DeckDetail', {
            id,
            title
        })
    }

    render() {
        const { navigation } = this.props
        const { title } = navigation.state.params
        return (
            <KeyboardAvoidingView style={styles.container} behavior="padding" keyboardVerticalOffset="65" enabled>
                <View style={styles.card}>
                    <Text style={styles.cardTitle}>{title}</Text>
                    <View style={styles.cardBody}>
                        <TextInput
                            onChangeText={(question) => this.setState({ question })}
                            style={[styles.input, { width: Dimensions.get('window').width - 120 }]}
                            value={this.state.question}
                            placeholder="Question" />

                        <TextInput
                            onChangeText={(answer) => this.setState({ answer })}
                            style={[styles.input, { width: Dimensions.get('window').width - 120 }]}
                            value={this.state.answer}
                            placeholder="Answer" />
                    </View>
                    <View style={[styles.cardFooter, { width: Dimensions.get('window').width - 75 }]}>
                        <TouchableOpacity
                            onPress={this.handleNewQuestion}
                            style={[styles.btnSave, { width: Dimensions.get('window').width - 75 }]}>
                            <Text style={styles.btnText}>Submit</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </KeyboardAvoidingView>
        )
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
        width: 300,
        height: 350,
        borderWidth: 1,
        borderColor: '#fff',
        borderRadius: 10,
        backgroundColor: '#fff',
        justifyContent: 'center'
    },
    cardTitle: {
        fontSize: 30,
        color: 'black',
        textAlign: 'left',
        fontFamily: 'MontserratSemiBold',
        marginBottom: 20,
        marginLeft: 20,
    },
    cardBody: {
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
        marginBottom: 25,
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
    }
})

export default connect()(NewQuestion)