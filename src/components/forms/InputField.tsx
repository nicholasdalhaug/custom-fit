import React from 'react';
import { FormControl, InputLabel, Input, FormHelperText, makeStyles, Theme } from '@material-ui/core';

export enum State {
    PRIMARY = "primary",
    ERROR = "error",
    SUCCESS = "success"
}

interface StateMapping {
    primary: string,
    error: string,
    success: string,
    [key: string]: any
}

interface StyleProps {
    state: State,
    [key: string]: any
}

const styledBy = (property: string, mapping: StateMapping) => (props: StyleProps) =>
  mapping[props[property]];

const useStyles = makeStyles((theme: Theme) => ({
    primary: {
        '& label.Mui-focused': {
          color: styledBy('state', {
              primary: theme.palette.primary.main,
              error: theme.palette.error.main,
              success: theme.palette.success.main,
          }),
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: styledBy('state', {
                primary: theme.palette.primary.main,
                error: theme.palette.error.main,
                success: theme.palette.success.main,
            })
        }, 
        // Colors when not in focus: 
        '& .MuiInput-underline:before': {
            borderColor: styledBy('state', {
                primary: '',
                error: theme.palette.error.main,
                success: theme.palette.success.main,
            })
        },
        '& .MuiInput-underline:hover:before': {
            borderColor: styledBy('state', {
                primary: '',
                error: theme.palette.error.main,
                success: theme.palette.success.main,
            })
        },
        '& label': {
            color: styledBy('state', {
                primary: '',
                error: theme.palette.error.main,
                success: theme.palette.success.main,
            })
        },
        '& .MuiFormHelperText-root': {
            color: theme.palette.error.main
        },
    }
}));

interface InputFieldProps {
    label?: string
    errorText?: string
    state?: State
    inputType?: string
    value?: string | number
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
    min?: number
    max?: number
    step?: number
}

const InputField = ({label, errorText, state, inputType, value, onChange, min, max, step}: InputFieldProps) => {
    const styleProps: StyleProps | undefined = state === undefined ? undefined : {state: state};
    const classes = useStyles(styleProps);
    
    return <>
        <FormControl 
            required
            className={classes.primary}
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
