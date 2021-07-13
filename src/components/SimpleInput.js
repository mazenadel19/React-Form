import useInput from '../hooks/use-input'

const SimpleInput = props => {
	const {
		enteredValue: enteredName,
		valueIsTouched: enteredNameTouched,
		valueChangeHandler: nameInputChangeHandler,
		valueBlurHandler: nameInputBlurHandler,
		valueIsValid: enteredNameIsValid,
		valueIsInvalid: nameInputIsInvalid,
		resetEnteredValue: resetName,
	} = useInput(value => value.trim().length > 5)

	const {
		enteredValue: enteredEmail,
		valueIsTouched: enteredEmailTouched,
		valueChangeHandler: emailInputChangeHandler,
		valueBlurHandler: emailInputBlurHandler,
		valueIsValid: enteredEmailIsValid,
		valueIsInvalid: emailInputIsInvalid,
		resetEnteredValue: resetEmail,
	} = useInput(value => value.includes('@'))

	let formIsValid = false
	if (enteredNameIsValid && enteredEmailIsValid) formIsValid = true

	const formSubmitHandler = e => {
		e.preventDefault()

		if (!enteredNameIsValid || !enteredEmailIsValid) {
			console.log('DID NOT SUBMIT!!!!!')
			return
		}
		console.log('SUBMIT!!!!!')

		resetName()
		resetEmail()
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
