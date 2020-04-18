import { makeStyles, Theme } from '@material-ui/core';

export enum State {
    PRIMARY = "primary",
    ERROR = "error",
    SUCCESS = "success"
}

interface StateMapping {
    primary: string;
    error: string;
    success: string;
    [key: string]: any;
}

export interface StyleProps {
    state: State;
    [key: string]: any;
}

export const useValidationStyleFromState = (state: State) => {
    const style = validationStyleFromState(state);
    return useValidationStyle(style);
}

const validationStyleFromState = (state: State) => {
    const validationStyle: StyleProps = {state: state};
    return validationStyle
}

const styledBy = (property: string, mapping: StateMapping) => (props: StyleProps) => mapping[props[property]];

const useValidationStyle: (props: StyleProps) => Record<"validation", string> = makeStyles((theme: Theme) => ({
    validation: {
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
