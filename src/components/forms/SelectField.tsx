import React from 'react';
import { FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';

interface SelectFieldProps {
    label?: string,
    possibleValues: string[], 
    value?: string, 
    onChange?: (event: React.ChangeEvent<{ value: unknown }>) => void
}

const SelectField = ({label, possibleValues, value, onChange}: SelectFieldProps) => {
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
                    possibleValues.map(value => {
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
