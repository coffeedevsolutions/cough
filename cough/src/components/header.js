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
                    <div onClick={() => navigate('/')} className="nav-link">Home</div>
                    <div onClick={() => navigate('/Links')} className="nav-link">Links</div>
                    <div onClick={() => navigate('/Essays')} className="nav-link">Essays</div>
                    <div onClick={() => navigate('/Projects')} className="nav-link">Projects</div>
                    {/* <li className="nav-item"><div onClick={() => navigate('/Taste')} className="nav-link">Taste</div></li> */}
                </ul>
            </nav>
            <nav className="navbar-mobile">
                <ul className="navlist-mobile">
                    <img 
                    src={`${process.env.PUBLIC_URL}/images/HOME.png`} 
                    alt="Home" 
                    className="navlink-mobile" 
                    onClick={() => navigate('/')} 
                    />
                    <img 
                    src={`${process.env.PUBLIC_URL}/images/Links.png`} 
                    alt="Links" 
                    className="navlink-mobile" 
                    onClick={() => navigate('/Links')} 
                    />
                    <img 
                    src={`${process.env.PUBLIC_URL}/images/Essays.png`} 
                    alt="Essays" 
                    className="navlink-mobile" 
                    onClick={() => navigate('/Essays')} 
                    />
                    <img 
                    src={`${process.env.PUBLIC_URL}/images/PROJECTS.png`} 
                    alt="Projects" 
                    className="navlink-mobile" 
                    onClick={() => navigate('/Projects')} 
                    />
                    <img 
                    src={`${process.env.PUBLIC_URL}/images/TASTE.png`} 
                    alt="Taste" 
                    className="navlink-mobile" 
                    onClick={() => navigate('/Taste')} 
                    />                
                </ul>
            </nav>
        </header>
    );
}

export default Header;