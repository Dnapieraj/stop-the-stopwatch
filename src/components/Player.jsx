import { useState } from 'react'

export default function Player() {
	const [enteredPlayerName, setEnteredPlayerName] = useState('')
	const [sumbmitted, setSubmitted] = useState(false)

	const handleChange = e => {
		setEnteredPlayerName(e.target.value)
	}

	const handleClick = () => {
		setSubmitted(true)
	}
	return (
		<section id="player">
			<h2>Welcome {sumbmitted ? enteredPlayerName : 'unkown entity'}</h2>
			<p>
				<input type="text" onChange={handleChange} value={enteredPlayerName} />
				<button onClick={handleClick}>Set Name</button>
			</p>
		</section>
	)
}
