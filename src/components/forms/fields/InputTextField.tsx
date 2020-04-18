import React from 'react';
import { State } from './state';
import InputField from './InputField';

interface InputTextFieldProps {
    label?: string
    errorText?: string
    state: State
    value?: string
    onValueChange?: (value: string) => void
}

const InputTextField = ({label, errorText, state, value, onValueChange}: InputTextFieldProps) => {
    return <>
        <InputField 
            label={label}
            errorText={errorText}
            state={state}
            inputType="text"
            value={value}
            onValueChange={onValueChange}
        />
    </>
}

export default InputTextField;