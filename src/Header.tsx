import { AppBar, Button, Toolbar, Typography } from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom'
import React, { ReactElement } from 'react';

// QQ: Spacing, maybe a click out menu etc - see what it needs later
class Header extends React.Component {
    render(): ReactElement {
        return (
            <AppBar position="sticky">
                <Toolbar>
                    <Typography>Time Manager</Typography>
                    <Button variant="outlined" color="secondary" component={RouterLink} to="/about">
                        About
                    </Button>
                    <Button variant="outlined" color="secondary" component={RouterLink} to="/tasks">
                        Tasks
                    </Button>
                </Toolbar>
            </AppBar>
        )
    }
}

export default Header;