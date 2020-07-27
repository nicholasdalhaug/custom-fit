import React from 'react';
import { State } from './state';
import InputTextField from './InputTextField';

interface InputTextFieldWithValidationProps {
    label: string
    errorText: string
    state: State
    value: string | undefined
    onValueChange: (value: string) => void
    onValidationChange: (toState: State) => void
    minLength: number
    maxLength: number
}

const InputTextFieldWithValidation = ({label, errorText, state, value, onValueChange, onValidationChange, minLength, maxLength}: InputTextFieldWithValidationProps) => {
    const validityOfValue = (value: string | undefined) => {
        if(value === undefined){
            return State.ERROR;
        }
        else if(value.length < minLength || value.length > maxLength){
            return State.ERROR;
        }
        else{
            return State.SUCCESS;
        }
    }

    const validity = validityOfValue(value);

    const onChange = (value: string) => {
        const newValidity = validityOfValue(value);

        if(newValidity !== validity){
            onValidationChange(newValidity);
        }

        onValueChange(value);
    }
    
    return <>
        <InputTextField 
            label={label}
            errorText={errorText}
            state={state}
            value={value}
            onValueChange={onChange}
        />
    </>
}

export default InputTextFieldWithValidation;