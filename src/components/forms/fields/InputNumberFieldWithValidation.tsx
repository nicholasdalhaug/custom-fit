import React from 'react';
import { State } from './state';
import InputNumberField from './InputNumberField';

interface InputNumberFieldWithValidationProps {
    label: string
    errorText: string
    state: State
    value: number | undefined
    onValueChange: (value: string) => void
    onValidityChange: (toState: State) => void
    min: number
    max: number
    step: number
}

const InputNumberFieldWithValidation = ({label, errorText, state, value, onValueChange, onValidityChange, min, max, step}: InputNumberFieldWithValidationProps) => {
    const validityOfValue = (value: number | undefined) => {
        if(value === undefined) {
            return State.ERROR;
        }
        else if(value < min || value > max){
            return State.ERROR;
        }
        else{
            return State.SUCCESS;
        }
    }
    const validityOfValueAsString = (value: string) => {
        if(value === ''){
            return State.ERROR
        }
        else{
            const number: number = +value;
            return validityOfValue(number);
        }
    }

    const validity = state;

    const onChange = (value: string) => {
        const newValidity = validityOfValueAsString(value);

        if(newValidity !== validity){
            onValidityChange(newValidity);
        }

        onValueChange(value);
    }
    
    return <>
        <InputNumberField 
            label={label}
            errorText={errorText}
            state={state}
            value={value}
            onValueChange={onChange}
        />
    </>
}

export default InputNumberFieldWithValidation;