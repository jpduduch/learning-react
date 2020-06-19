import React from 'react'
import Product from './components/Product.js'
import vschoolProducts from './data/vschoolProducts.js'

function App() {
	const listOfProducts = vschoolProducts.map(arr =>
		<Product
			key={arr.id}
			products={arr}
		/>
	)

	return(
		<div>
			{listOfProducts}
		</div>
	)
}

export default App