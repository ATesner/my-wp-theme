import React, { Component } from 'react';
import APropos from './apropos';
import { Link } from 'react-router-dom';
import Contact from './contact';

class Navigation extends Component {
    render() {
        return (
            <nav>
                {/* <Link to="/home">Accueil</Link>
                <Link to="/apropos">A Propos</Link> */}
            </nav>
        );
    }
}

export default Navigation;