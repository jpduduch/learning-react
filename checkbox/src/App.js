import React from 'react'

import Checkbox from './components/Checkbox'

function App(){
	return(
		<div>
			<Checkbox
				tipo = {{
					content: 'Banana',
					categoria: 'Nanica'
				}}
			/>
			<Checkbox
				tipo = {{
					content: 'Maçã',
					categoria: 'Fuji'
				}}
			/>
			<Checkbox
				tipo = {{
					content: 'Pera',
					categoria: 'Williams'
				}}
			/>
			<Checkbox
				tipo = {{
					content: 'Manga',
					categoria: 'Palmer'
				}}
			/>
			<Checkbox
				tipo = {{
					content: 'Melão',
					categoria: 'Rei'
				}}
			/>
		</div>
	)
}

export default App