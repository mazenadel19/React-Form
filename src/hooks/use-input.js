import { useState } from 'react'

const useInput = validationFunction => {
	const [enteredValue, setEnteredValue] = useState('')
	const [valueIsTouched, setValueIsTouched] = useState(false)

	const valueIsValid = validationFunction(enteredValue)
	const valueIsInvalid = !valueIsValid && valueIsTouched

	const valueChangeHandler = e => {
		setEnteredValue(e.target.value)
	}

	const valueBlurHandler = e => {
		setValueIsTouched(true)
	}

	const resetEnteredValue = e => {
		setEnteredValue('')
	}

	return {
		enteredValue,
		valueIsTouched,
		valueChangeHandler,
		valueBlurHandler,
		valueIsValid,
		valueIsInvalid,
		resetEnteredValue,
	}
}

export default useInput
