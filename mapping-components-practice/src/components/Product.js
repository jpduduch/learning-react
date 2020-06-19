import React from 'react'

function Product(props) {
	return(
		<div>
			<h1>Name: {props.products.name}</h1>
			{/*<h3>Price: R$ {props.products.price.toFixed(2).replace('.', ',')}</h3>*/}
			<h3>Price: {props.products.price.toLocaleString("PT-br", {style: "currency", currency: "BRL"})}</h3>
			<p><strong>Description: </strong>{props.products.description}</p>
		</div>
	)
}

export default Product