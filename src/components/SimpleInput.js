import { useState } from 'react'

const SimpleInput = props => {
	const [enteredName, setEnteredName] = useState('')
	const [enteredNameTouched, setEnteredNameIsTouched] = useState(false)

	const enteredNameIsValid = enteredName.trim().length > 5
	const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched

	const [enteredEmail, setEnteredEmail] = useState('')
	const [enteredEmailTouched, setEnteredEmailTouched] = useState(false)

	const enteredEmailIsValid = enteredEmail.includes('@')
	const emailInputIsInvalid = !enteredEmailIsValid && enteredEmailTouched

	let formIsValid = false
	if (enteredNameIsValid && enteredEmailIsValid) formIsValid = true

	const nameInputChangeHandler = e => {
		setEnteredName(e.target.value)
	}

	const nameInputBlurHandler = e => {
		setEnteredNameIsTouched(true)
	}

	const emailInputChangeHandler = event => {
		setEnteredEmail(event.target.value)
	}

	const emailInputBlurHandler = event => {
		setEnteredEmailTouched(true)
	}

	const formSubmitHandler = e => {
		e.preventDefault()

		setEnteredNameIsTouched(true)
		setEnteredEmailTouched(true)

		if (!enteredNameIsValid || !enteredEmailIsValid) {
			console.log('DID NOT SUBMIT!!!!!')
			return
		}
		console.log('SUBMIT!!!!!')

		setEnteredName('')
		setEnteredNameIsTouched(false)

		setEnteredEmail('')
		setEnteredEmailTouched(false)
	}

	const nameInputClasses = nameInputIsInvalid
		? 'form-control invalid'
		: 'form-control'

	const emailInputClasses = emailInputIsInvalid
		? 'form-control invalid'
		: 'form-control'

	console.log(
		`%centeredNameIsValid ${enteredNameIsValid} && enteredNameTouched ${enteredNameTouched}`,
		'background: #444; color: #aadaff; padding: 2px; border-radius:2px;',
	)

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

	if (nameInputIsInvalid) {
		console.log(
			`%cnameInputIsInvalid ${nameInputIsInvalid}`,
			'background: #444; color: #da5555; padding: 2px; border-radius:2px;',
		)
	} else {
		console.log(
			`%cnameInputIsInvalid ${nameInputIsInvalid}`,
			'background: #444; color: #bada55; padding: 2px; border-radius:2px;',
		)
	}

	console.log(
		`%centeredEmailIsValid ${enteredEmailIsValid} && enteredEmailTouched ${enteredEmailTouched}`,
		'background: #444; color: #aadaff; padding: 2px; border-radius:2px;',
	)

	if (enteredEmail.includes('@')) {
		console.log(
			`%centeredEmail.includes('@')${enteredEmail.includes('@')}`,
			'background: #444; color: #bada55; padding: 2px; border-radius:2px;',
		)
	} else {
		console.log(
			`%centeredEmail.includes('@')${enteredEmail.includes('@')}`,
			'background: #444; color: #da5555; padding: 2px; border-radius:2px;',
		)
	}

	if (emailInputIsInvalid) {
		console.log(
			`%cemailInputIsInvalid ${emailInputIsInvalid}`,
			'background: #444; color: #da5555; padding: 2px; border-radius:2px;',
		)
	} else {
		console.log(
			`%cemailInputIsInvalid ${emailInputIsInvalid}`,
			'background: #444; color: #bada55; padding: 2px; border-radius:2px;',
		)
	}

	if (formIsValid) {
		console.log(
			`%cformIsValid ${formIsValid}`,
			'background: #444; color: #bada55; padding: 2px; border-radius:2px;',
		)
	} else {
		console.log(
			`%cformIsValid ${formIsValid}`,
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
				{nameInputIsInvalid && (
					<p className='error-text'>
						Name Input must be greater than 5 character, it's
						{enteredName.trim().length} characters now
					</p>
				)}
			</div>

			<div className={emailInputClasses}>
				<label htmlFor='email'>Your E-Mail</label>
				<input
					type='email'
					id='email'
					onChange={emailInputChangeHandler}
					onBlur={emailInputBlurHandler}
					value={enteredEmail}
				/>
				{emailInputIsInvalid && (
					<p className='error-text'>Please enter a valid email.</p>
				)}
			</div>
			<div className='form-actions'>
				<button>Submit</button>
				{/* <button disabled={!formIsValid}>Submit</button> */}
			</div>
		</form>
	)
}

export default SimpleInput
