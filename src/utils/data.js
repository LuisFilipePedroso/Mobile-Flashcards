export let decks = [
  {
    id: '4e7a2a9eda513',
    title: 'React',
    questions: [
      {
        question: 'What is React?',
        answer: 'A library for managing user interfaces'
      },
      {
        question: 'Where do you make Ajax requests in React?',
        answer: 'The componentDidMount lifecycle event'
      }
    ],
    cardBgColor: '#69eabd'
  },
  {
    id: '4e7a2a9eda520',
    title: 'JavaScript',
    questions: [
      {
        question: 'What is a closure?',
        answer: 'The combination of a function and the lexical environment within which that function was declared.'
      }
    ],
    cardBgColor: '#68aee8'
  },
  {
    id: '4e7a2a9eda52c',
    title: 'JavaScript',
    questions: [
      {
        question: 'What is a closure?',
        answer: 'The combination of a function and the lexical environment within which that function was declared.'
      }
    ],
    cardBgColor: '#68aee8'
  },
  {
    id: '4e7a2a9eda513',
    title: 'React',
    questions: [
      {
        question: 'What is React?',
        answer: 'A library for managing user interfaces'
      },
      {
        question: 'Where do you make Ajax requests in React?',
        answer: 'The componentDidMount lifecycle event'
      }
    ],
    cardBgColor: '#69eabd'
  },
  {
    id: '4e7a2a9eda520',
    title: 'JavaScript',
    questions: [
      {
        question: 'What is a closure?',
        answer: 'The combination of a function and the lexical environment within which that function was declared.'
      }
    ],
    cardBgColor: '#68aee8'
  },
  {
    id: '4e7a2a9eda52c',
    title: 'JavaScript',
    questions: [
      {
        question: 'What is a closure?',
        answer: 'The combination of a function and the lexical environment within which that function was declared.'
      }
    ],
    cardBgColor: '#68aee8'
  },
]

function generateUID() {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
}

// export async function _getDecks() {
//   try {
//     return setTimeout(() => ({ ...decks }), 1000)
//   } catch (e) {
//     throw e
//   }
// }

// export async function addDeck(deck) {
//   try { 
//       decks = {
//         ...decks,
//         deck: {
//           id: generateUID(),
//           ...deck
//         }
//       }
//       return setTimeout(() => ({ decks }), 1000)
//   } catch (e) {
//     throw e
//   }
// }

export function addDeck(deck) {
  return new Promise((res, rej) => {

    setTimeout(() => {
      deck = {
        id: generateUID(),
        questions: [],
        cardBgColor: '#f2b5d3',
        ...deck
      }

      decks = decks.concat({
        ...decks,
        ...deck
      })

      res(deck)
    }, 1000)
  })
}