import React from 'react';
import { State } from './state';
import InputField from './InputField';

interface InputNumberFieldProps {
    label?: string
    errorText?: string
    state: State
    value?: number
    onValueChange?: (value: string) => void
    min?: number
    max?: number
    step?: number
}

const InputNumberField = ({label, errorText, state, value, onValueChange, min, max, step}: InputNumberFieldProps) => {
    return <>
        <InputField 
            label={label}
            errorText={errorText}
            state={state}
            inputType="number"
            value={value}
            onValueChange={onValueChange}
            min={min}
            max={max}
            step={step}
        />
    </>
}

export default InputNumberField;
