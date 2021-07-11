import { useRef, useState } from 'react'

const SimpleInput = props => {
	const [enteredName, setEnteredName] = useState('')

	const inputRef = useRef()
	const btnRef = useRef()

	const inputHandler = e => {
		setEnteredName(e.target.value) // use state for validation with everykey stroke
	}

	const submitHandler = e => {
		e.preventDefault()
		console.log(inputRef.current.value) // use ref for validation once after form submitting
    // inputRef.current.value='' //-> not recommended
		setEnteredName('')
	}

	return (
		<form onSubmit={submitHandler}>
			<div className='form-control'>
				<label htmlFor='name'>Your Name</label>
				<input
					type='text'
					id='name'
					ref={inputRef}
					value={enteredName}
					onChange={inputHandler}
				/>
			</div>
			<div className='form-actions'>
				<button ref={btnRef}>Submit</button>
			</div>
		</form>
	)
}

export default SimpleInput
