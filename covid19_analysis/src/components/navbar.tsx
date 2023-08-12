import React from 'react';
import { Link } from 'react-router-dom';

export const NavBar: React.FC = () => {
    return (
        <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-light">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                <a className="navbar-brand" href="#">Covid19 Cases Visualisation</a>
                <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li className="nav-item">
                        <Link className="nav-link" to="/india">India</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/world">World</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/map">Map</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};