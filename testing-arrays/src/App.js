import React from 'react'
import InstagramCards from './components/InstagramCards.js'

import cardsData from './data/cardsData.js'

function App(){
	//versão curta da expressão abaixo:
	// const InstaCards = cardsData.map(arr => <InstagramCards key={arr.key} aHref={arr.aHref} imgUrl={arr.imgUrl} username={arr.username} quote={arr.quote} />)
	const InstaCards = cardsData.map(function(arr) {
		return(
			<InstagramCards
				key={arr.key}
				aHref={arr.aHref}
				imgUrl={arr.imgUrl}
				username={arr.username}
				quote={arr.quote}
			/>
		)
	})
	return (
		<div className="depoimentos-caption-container row">{InstaCards}</div>
	)
}

export default App