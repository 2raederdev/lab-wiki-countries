import React from 'react';

import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <nav className="navbar navbar-dark bg-primary">
            <Link className="navbar-brand" to='/'>WikiCountries</Link>
        </nav>
    )
}

export default NavBar;
