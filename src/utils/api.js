import {
    addDeck,
    addQuestion
} from './data'

export async function saveDeck(deck) {
    try {
        const returnedDeck = await addDeck(deck)
        return returnedDeck
    } catch (e) {
        throw new Error("Error on add deck")
    }
}

export async function saveQuestionToDeck(id, question) {
    try {
        const returnedDeck = addQuestion(id, question)
        return returnedDeck
    } catch (e) {
        throw new Error("Error on add deck")
    }
}