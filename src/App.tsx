import React, { ReactElement } from 'react';
import { HashRouter, Route, Link as RouterLink } from 'react-router-dom'
import { AppBar, CssBaseline, Toolbar, Button } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core';
import theme from './theme';
import About from './About';
import Tasks from './Tasks';


// QQ do an actual menu as a separate component and sort out spacing
class App extends React.Component {
    render(): ReactElement {
        return (
            <div className="app">
                <ThemeProvider theme={theme}>
                    <CssBaseline />
                    <HashRouter>
                        <AppBar position="static">
                            <Toolbar>
                                Time Manager
                            <Button variant="outlined" color="secondary" component={RouterLink} to="/about">
                                    About
                            </Button>
                                <Button variant="outlined" color="secondary" component={RouterLink} to="/tasks">
                                    Tasks
                            </Button>
                            </Toolbar>
                        </AppBar>
                        <Route path="/about" component={About} />
                        <Route path="/tasks" component={Tasks} />
                    </HashRouter>
                </ThemeProvider>
            </div>
        )
    }
}

export default App;