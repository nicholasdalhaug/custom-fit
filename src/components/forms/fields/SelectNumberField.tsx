import React from 'react';
import SelectField from './SelectField';

interface SelectNumberFieldProps {
    label?: string,
    possibleValues: number[], 
    value?: number, 
    onValueChange?: (value: string) => void
}

const SelectNumberField = ({label, possibleValues, value, onValueChange}: SelectNumberFieldProps) => {
    return <>
        <SelectField 
            label={label}
            possibleValues={possibleValues}
            value={value}
            onValueChange={onValueChange}
        />
    </>
}

export default SelectNumberField;
