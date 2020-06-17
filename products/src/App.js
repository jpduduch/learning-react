import React from 'react'

import Joke from './components/Joke'
import jokesData from './content/jokesData'

function App() {
	const jokeComponents = jokesData.map(joke => <Joke key={joke.id} question={joke.question} answer={joke.answer} />)
	// essa linha acima é uma versão curta de:
	// const jokeComponents = jokesData.map(function(joke){
	// 	<Joke key={joke.id} question={joke.question} answer={joke.answer} />
	// })

	return(
		<div>{jokeComponents}</div>
	)
}	

export default App