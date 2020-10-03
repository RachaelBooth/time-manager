import React, { ReactElement } from 'react';
import { MemoryRouter as Router, Route, Link as RouterLink } from 'react-router-dom'
import { AppBar, CssBaseline, Toolbar, Button, Container } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core';
import theme from './theme';
import About from './About';
import Tasks from './Tasks';
import Header from './Header';

class App extends React.Component {
    render(): ReactElement {
        return (
            <div className="app">
                <ThemeProvider theme={theme}>
                    <CssBaseline />
                    <Router>
                        <Header />
                        <Container>
                        <Route path="/about" component={About} />
                        <Route path="/tasks" component={Tasks} />
                        </Container>
                    </Router>
                </ThemeProvider>
            </div>
        )
    }
}

export default App;