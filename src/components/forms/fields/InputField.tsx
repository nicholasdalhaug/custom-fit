import React from 'react';
import { FormControl, InputLabel, Input, FormHelperText } from '@material-ui/core';
import { State, useValidationStyleFromState } from './state';

interface InputFieldProps {
    label?: string
    errorText?: string
    state: State
    inputType?: string
    value?: string | number
    onValueChange?: (value: string) => void
    min?: number
    max?: number
    step?: number
}

const InputField = ({label, errorText, state, inputType, value, onValueChange, min, max, step}: InputFieldProps) => {
    const classes = useValidationStyleFromState(state);

    const onChange = onValueChange === undefined ? undefined : (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;

        onValueChange(value);
    }

    return <>
        <FormControl 
            required
            className={classes.validation}
            fullWidth={true}
        >
            {label !== undefined && 
                <InputLabel>{label}</InputLabel>
            }
            <Input 
                type={inputType} 
                value={value === undefined ? '' : value}
                onChange={onChange}
                inputProps={{
                    min: min,
                    max: max,
                    step: step
                }}
            />
            <FormHelperText>
                {state !== undefined && state === State.ERROR && 
                    errorText
                }
            </FormHelperText>
        </FormControl>
    </>
}

export default InputField;
