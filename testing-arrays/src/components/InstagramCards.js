import React from 'react'

function InstagramCards(props) {
	return(
		<div className="usuarias-instagram col s16 m8 l4 xl4">
			<a href={props.aHref} target="_blank" rel="noopener noreferrer">
				<figure>
					<img src={props.imgUrl} alt="Instagram" className="imagem-quadrada" />
					<span className="nome-user-instagram">{props.username}</span>
				</figure>
				<figcaption>
					<p>{props.quote}</p>
				</figcaption>
			</a>
		</div>
	)
}

export default InstagramCards