import { useState } from 'react'

const useInput = validationFunction => {
	const [enteredValue, setEnteredValue] = useState('')
	const [valueIsTouched, setValueIsTouched] = useState(false)

	const valueIsValid = validationFunction(enteredValue)
	const hasError = !valueIsValid && valueIsTouched

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
		valueIsValid,
		hasError,
		valueChangeHandler,
		valueBlurHandler,
		resetEnteredValue,
	}
}

export default useInput
