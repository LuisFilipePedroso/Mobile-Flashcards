import { saveDeck } from '../utils/api'
export const ADD_DECK = 'ADD_DECK'

function addDeck(deck) {
    return {
        type: ADD_DECK,
        deck
    }
}

export function handleAddDeck (deck) {
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