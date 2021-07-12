import { useState } from 'react'

const SimpleInput = props => {
	const [enteredName, setEnteredName] = useState('')
	const [enteredNameIsValid, setEnteredNameIsValid] = useState(false)
	const [enteredNameTouched, setEnteredNameIsTouched] = useState(false)

	const inputHandler = e => {
		setEnteredName(e.target.value)

		setEnteredNameIsTouched(true)

		if (enteredName.trim().length < 5) {
			return setEnteredNameIsValid(false)
		} else {
			setEnteredNameIsValid(true)
			console.log(enteredName)
			console.log(enteredNameIsValid)
		}
	}

	const submitHandler = e => {
		e.preventDefault()

		setEnteredNameIsTouched(true)
		setEnteredName('')
	}

	const invalid = !enteredNameIsValid && enteredNameTouched

	console.log(
		enteredNameIsValid,
		'enteredNameIsValid',
		enteredNameTouched,
		'enteredNameTouched',
	)
	console.log(invalid)

	const nameInputClasses = invalid ? 'form-control invalid' : 'form-control'

	return (
		<form onSubmit={submitHandler}>
			<div className={nameInputClasses}>
				<label htmlFor='name'>Your Name</label>
				<input
					type='text'
					id='name'
					value={enteredName}
					onChange={inputHandler}
				/>
			</div>
			{enteredNameIsValid ? 'true' : 'false'}
			{invalid && (
				<p className='error-text'>
					Name Input must be greater than 5 character
				</p>
			)}
			<div className='form-actions'>
				<button>Submit</button>
			</div>
		</form>
	)
}

export default SimpleInput
