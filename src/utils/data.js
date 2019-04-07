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
    id: '4e7a2a9eda526',
    title: 'Redux',
    questions: [
      {
        question: 'What is Redux?',
        answer: 'Redux is a predictable state container for JavaScript apps.'
      }
    ],
    cardBgColor: '#191966'
  },
  {
    id: '4e7a2a9eda586',
    title: 'CSS',
    questions: [
      {
        question: 'What is CSS?',
        answer: 'Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language like HTML. '
      }
    ],
    cardBgColor: '#006666'
  },
  {
    id: '4e7a2a9eda586',
    title: 'HTML',
    questions: [
      {
        question: 'What is HTML?',
        answer: 'Hypertext Markup Language'
      }
    ],
    cardBgColor: '#ff0066'
  },
]

const colors = ['#ffff66', '#ff00bf', '#006666', '#191966', '#ccffff', '#ccffe6']

export function generateColor() {
  return colors[Math.floor(Math.random() * colors.length)]
}

export function generateUID() {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
}



export function addDeck(deck) {
  return new Promise((res, rej) => {

    setTimeout(() => {
      decks = decks.concat({
        ...decks,
        ...deck
      })

      res(deck)
    }, 200)
  })
}

export function addQuestion(id, question) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      deck = decks.find(deck => deck.id === id)
      deck.questions.push(question)

      res(deck)
    }, 200)
  })
}