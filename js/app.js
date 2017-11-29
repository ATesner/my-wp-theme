import React, { Component } from 'react';
import { Link, Route, Switch, BrowserRouter } from 'react-router-dom';
import Home from './home';
import APropos from './apropos';

class App extends Component {
    render() {
        return (
                <BrowserRouter>
                <div className="app-layout">
                    <header>
                    <nav>
                            <Link to="/">Accueil</Link>
                            <Link to="/apropos">A Propos</Link>
                        </nav>
                    </header>
                    <main>
                        <Route path="/" exact component={Home} />
                        <Route path="/apropos" component={APropos} />
                    </main>
                </div>
                </BrowserRouter>
        );
    }
}

export default App;