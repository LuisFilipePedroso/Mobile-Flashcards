import {
    addDeck,
} from './data'

export async function saveDeck(deck) {
    return  await addDeck(deck)
    // try {
    //     const returnedDeck = await addDeck(deck)
    //     return returnedDeck
    // } catch (e) {
    //     throw new Error("Error on add deck")
    // }
}