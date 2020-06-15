import React from 'react'

function Checkbox(props) {
	const checkStyle = {
		display: 'inline-block',
		marginLeft: 12
	}

	return(
		<div>
			<input type="checkbox" />
			<p style = {checkStyle}>{props.tipo.content} {props.tipo.categoria}</p>
		</div>
	)
}

export default Checkbox