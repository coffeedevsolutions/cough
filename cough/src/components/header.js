import React from 'react';
import './header.css';
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate();

    return (
        <header className="header">
            <div 
                className="headerContainer"
                onClick={() => navigate('/')}
                >
                <h1 className="headerMain1">Cough</h1>
                <h1 className="headerMain2">Cough</h1>
                <h1 className="headerMain3">Cough</h1>  
                <h1 className="headerMain4">Cough</h1>  
                <h1 className="headerMain5">Cough</h1>  
            </div>

            <nav className="navbar">
                <ul className="nav-list">
                    <li className="nav-item"><div onClick={() => navigate('/')} className="nav-link">Home</div></li>
                    <li className="nav-item"><div onClick={() => navigate('/Links')} className="nav-link">Links</div></li>
                    <li className="nav-item"><div onClick={() => navigate('/Essays')} className="nav-link">Essays</div></li>
                    <li className="nav-item"><div onClick={() => navigate('/Projects')} className="nav-link">Projects</div></li>
                    <li className="nav-item"><div onClick={() => navigate('/Taste')} className="nav-link">Taste</div></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;