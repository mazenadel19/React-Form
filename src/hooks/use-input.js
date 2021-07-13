import { useReducer } from 'react'

const initialInputState = {
	enteredValue: '',
	valueIsTouched: false,
}

const inputStateReducer = (state, action) => {
	if (action.type === 'INPUT')
		return { enteredValue: action.value, valueIsTouched: state.valueIsTouched }
	if (action.type === 'BLUR')
		return { valueIsTouched: true, enteredValue: state.enteredValue }
	if (action.type === 'RESET')
		return { enteredValue: '', valueIsTouched: false }

	return initialInputState
}

const useInput = validationFunction => {
	const [inputState, dispatch] = useReducer(
		inputStateReducer,
		initialInputState,
	)

	const valueIsValid = validationFunction(inputState.enteredValue)
	const hasError = !valueIsValid && inputState.valueIsTouched

	const valueChangeHandler = e => {
		dispatch({ type: 'INPUT', value: e.target.value })
	}

	const valueBlurHandler = e => {
		dispatch({ type: 'BLUR' })
	}

	const resetEnteredValue = e => {
		dispatch({ type: 'RESET' })
	}

	return {
		enteredValue: inputState.enteredValue,
		valueIsValid,
		hasError,
		valueChangeHandler,
		valueBlurHandler,
		resetEnteredValue,
	}
}

export default useInput
