import { useState } from 'react'

const SimpleInput = props => {
	const [enteredName, setEnteredName] = useState('')
	const [enteredNameTouched, setEnteredNameIsTouched] = useState(false)

	const enteredNameIsValid = enteredName.trim().length > 5
	const invalid = !enteredNameIsValid && enteredNameTouched


	const nameInputChangeHandler = e => {
		setEnteredName(e.target.value)
	}

	const nameInputBlurHandler = e => {
		setEnteredNameIsTouched(true)
	}

	const formSubmitHandler = e => {
		e.preventDefault()

		setEnteredNameIsTouched(true)

		if (!enteredNameIsValid) {
			return
		}
    setEnteredName('')
    setEnteredNameIsTouched(false)
	}

	const nameInputClasses = invalid ? 'form-control invalid' : 'form-control'


  	console.log(
			`%centeredNameIsValid ${enteredNameIsValid} && enteredNameTouched ${enteredNameTouched}`,
			'background: #444; color: #aadaff; padding: 2px; border-radius:2px;',
		)

		if (invalid) {
			console.log(
				`%cInvalid ${invalid}`,
				'background: #444; color: #da5555; padding: 2px; border-radius:2px;',
			)
		} else {
			console.log(
				`%cInvalid ${invalid}`,
				'background: #444; color: #bada55; padding: 2px; border-radius:2px;',
			)
		}

		if (enteredName.trim().length > 5) {
			console.log(
				`%cEnteredName has ${enteredName.trim().length} characters now`,
				'background: #444; color: #bada55; padding: 2px; border-radius:2px;',
			)
		} else {
			console.log(
				`%cEnteredName has ${enteredName.trim().length} characters now`,
				'background: #444; color: #da5555; padding: 2px; border-radius:2px;',
			)
		}


	return (
		<form onSubmit={formSubmitHandler}>
			<div className={nameInputClasses}>
				<label htmlFor='name'>Your Name</label>
				<input
					type='text'
					id='name'
					value={enteredName}
					onBlur={nameInputBlurHandler}
					onChange={nameInputChangeHandler}
					autoComplete='off'
				/>
			</div>
			{invalid && (
				<p className='error-text'>
					Name Input must be greater than 5 character, it's{' '}
					{enteredName.trim().length} characters now
				</p>
			)}
			<div className='form-actions'>
				<button>Submit</button>
			</div>
		</form>
	)
}

export default SimpleInput
