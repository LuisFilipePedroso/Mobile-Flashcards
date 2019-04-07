import { saveDeck, saveQuestionToDeck } from '../utils/api'
export const ADD_DECK = 'ADD_DECK'
export const ADD_QUESTION = 'ADD_QUESTION'

function addDeck(deck) {
    return {
        type: ADD_DECK,
        deck
    }
}

function addQuestion(deck) {
    return {
        type: ADD_QUESTION,
        deck,
    }
}

export function handleAddDeck(deck) {
    return (dispatch) => {
        return saveDeck(deck)
            .then((deck) => {
                return dispatch(addDeck(deck))
            })
            .catch((e) => {
                console.log("Error")
            })
    }
}

export function handleAddQuestion(id, question) {
    return (dispatch) => {
        return saveQuestionToDeck(id, question)
            .then((deck) => {
                return dispatch(addQuestion(deck))
            })
            .catch((e) => {
                console.log("Error")
            })
    }
}