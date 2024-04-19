import React from 'react';
import './header.css';
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate();

    return (
        <header className="header">
            <div className="headerContainer">
                <h1 className="headerMain1">Cough</h1>
                <h1 className="headerMain2">Cough</h1>
                <h1 className="headerMain3">Cough</h1>  
                <h1 className="headerMain4">Cough</h1>  
                <h1 className="headerMain5">Cough</h1>  
            </div>

            <nav className="navbar">
                <ul className="nav-list">
                    <li className="nav-item"><a onClick={() => navigate('/Home')} className="nav-link">Home</a></li>
                    <li className="nav-item"><a onClick={() => navigate('/Essays')} className="nav-link">Essays</a></li>
                    <li className="nav-item"><a onClick={() => navigate('/Projects')} className="nav-link">Projects</a></li>
                    <li className="nav-item"><a onClick={() => navigate('/Taste')} className="nav-link">Taste</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;