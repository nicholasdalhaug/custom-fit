import { createMuiTheme } from '@material-ui/core/styles';
import { grey, blue } from '@material-ui/core/colors';

// Colors: https://material-ui.com/customization/color/

export const theme = createMuiTheme({
    palette: {
        primary: {
            main: blue[500],  // '#2196f3', 
            dark: blue[800]
        },
        background: {
            default: blue[50]
        },
        text: {
            primary: grey[600]
        }
    }
});
