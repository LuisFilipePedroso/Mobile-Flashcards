import { ADD_DECK, ADD_QUESTION } from '../actions/decks'
import { decks } from '../utils/data'

const INITIAL_STATE = { decks }

const addToState = (({ decks, deck }) => decks.concat(deck))
const replaceDeck = (({ decks, deck }) => {
    const removeDeck = decks.filter(d => d.id !== deck.id)
    return removeDeck.concat(deck)
})

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case ADD_DECK:
            return {
                ...state,
                decks: addToState({
                    ...state,
                    ...action
                })
            }
        case ADD_QUESTION: {
            return {
                ...state,
                decks: replaceDeck({
                    ...state,
                    ...action
                })
            }
        }
        default:
            return state
    }
}