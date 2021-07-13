import useInput from '../hooks/use-input'

const BasicForm = props => {
	const {
		enteredValue: firstNameValue,
		valueIsValid: firstNameIsValid,
		hasError: firstNameError,
		valueChangeHandler: firstNameChangeHandler,
		valueBlurHandler: firstNameBlurHandler,
		resetEnteredValue: resetFirstName,
	} = useInput(value => value.trim().length > 5)

	const {
		enteredValue: lastNameValue,
		valueIsValid: lastNameIsValid,
		hasError: lastNameError,
		valueChangeHandler: lastNameChangeHandler,
		valueBlurHandler: lastNameBlurHandler,
		resetEnteredValue: resetLastName,
	} = useInput(value => value.trim().length > 5)

	const {
		enteredValue: emailValue,
		valueIsValid: emailIsValid,
		hasError: emailError,
		valueChangeHandler: emailChangeHandler,
		valueBlurHandler: emailBlurHandler,
		resetEnteredValue: resetEmail,
	} = useInput(value => value.trim().includes('@'))

	let formIsValid = firstNameIsValid && lastNameIsValid && emailIsValid

	console.log(
		'firstNameValid',
		firstNameIsValid,
		'lastNameValid',
		lastNameIsValid,
		'emailValid',
		emailIsValid,
	)
	console.log('formIsInvalid', formIsValid)

	const formSubmitHandler = e => {
		e.preventDefault()

		if (!formIsValid) {
			console.log(`didn't submit!`)
			return
		}
		console.log(`submited!`)

		resetFirstName()
		resetLastName()
		resetEmail()
	}

	let invalidFirstNameClass = firstNameError
		? 'form-control invalid'
		: 'form-control '

	let invalidLastNameClass = lastNameError
		? 'form-control invalid'
		: 'form-control '

	let invalidEmailClass = emailError ? 'form-control invalid' : 'form-control '

	return (
		<form onSubmit={formSubmitHandler}>
			<div className='control-group'>
				<div className={invalidFirstNameClass}>
					<label htmlFor='name'>First Name</label>
					<input
						type='text'
						id='name'
						onChange={firstNameChangeHandler}
						onBlur={firstNameBlurHandler}
						value={firstNameValue}
						autoComplete='off'
					/>
					{firstNameError && (
						<p className='error-text'>
							Firstname must be more than 5 characters
						</p>
					)}
				</div>
				<div className={invalidLastNameClass}>
					<label htmlFor='name'>Last Name</label>
					<input
						type='text'
						id='name'
						autoComplete='off'
						onChange={lastNameChangeHandler}
						onBlur={lastNameBlurHandler}
						value={lastNameValue}
					/>
					{lastNameError && (
						<p className='error-text'>
							Lastname must be more than 5 characters
						</p>
					)}
				</div>
			</div>
			<div className={invalidEmailClass}>
				<label htmlFor='name'>E-Mail Address</label>
				<input
					type='text'
					id='name'
					autoComplete='off'
					onChange={emailChangeHandler}
					onBlur={emailBlurHandler}
					value={emailValue}
				/>
				{emailError && <p className='error-text'>Enter a valid Email</p>}
			</div>
			<div className='form-actions'>
				<button disabled={!formIsValid}>Submit</button>
			</div>
		</form>
	)
}

export default BasicForm
