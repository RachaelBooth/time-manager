import { createMuiTheme } from '@material-ui/core';
import deepPurple from '@material-ui/core/colors/deepPurple';
import grey from '@material-ui/core/colors/grey';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: deepPurple[500],
        },
        secondary: {
            main: grey[300],
        },
    },
});

export default theme;