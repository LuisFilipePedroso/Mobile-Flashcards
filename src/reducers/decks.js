import { ADD_DECK } from '../actions/decks'
import { decks } from '../utils/data'

const INITIAL_STATE = { decks }

const addToState = (({ decks, deck }) => decks.concat(deck))

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
        default:
            return state
    }
}