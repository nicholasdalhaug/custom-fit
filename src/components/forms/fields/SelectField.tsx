import React from 'react';
import { FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';

interface SelectFieldProps {
    label?: string,
    possibleValues: (string | number)[], 
    value?: string | number, 
    onValueChange?: (value: string) => void
}

const SelectField = ({label, possibleValues, value, onValueChange}: SelectFieldProps) => {
    const onChange = onValueChange === undefined ? undefined : (event: React.ChangeEvent<{ value: unknown }>) => {
        const value = (event.target.value as string);
        onValueChange(value);
    }

    return <>
        <FormControl 
            required
            fullWidth={true}
        >
            {label !== undefined && 
                <InputLabel>{label}</InputLabel>
            }
            <Select
                value={value === undefined ? possibleValues[0] : value}
                onChange={onChange}
            >
                {
                    possibleValues.map( (value) => {
                        return <MenuItem value={value} key={value}>
                            {value}
                        </MenuItem>
                    })
                }
            </Select>
        </FormControl>
    </>
}

export default SelectField;
