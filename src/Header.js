

import React, { useState } from 'react';
import './Header.css';
import SearchIcon from "@material-ui/icons/Search";
import LanguageIcon from "@material-ui/icons/Language";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Avatar } from "@material-ui/core";
import { Link } from "react-router-dom";

function Header() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false); // Dropdown khula hai ya nahi, yeh track karta hai

    return (
        <div className='header'>
            <Link to='/'>
                <img
                    className="header__icon"
                    src="https://i.pinimg.com/originals/3c/bf/be/3cbfbe148597341fa56f2f87ade90956.png"
                    alt="Airbnb Logo"
                />
            </Link>
           
            <div className='header__center'>
                <input type="text" placeholder="Where are you going?" />
                <SearchIcon />
            </div>

            <div className='header__right'>
                <Link to="/become-a-host" className="header__hostLink">
                    <p>Become a host</p>
                </Link>
                <LanguageIcon />
                <div className="header__dropdownContainer">
                    <button 
                        className="header__dropdownButton"
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    >
                        <ExpandMoreIcon />
                        <Avatar className="header__avatar" />
                    </button>
                    {/* Agar dropdown open hai toh menu dikhao */}
                    {isDropdownOpen && (
                        <div className="header__dropdownMenu">
                            <Link to="/signup" className="header__dropdownItem">Sign up</Link>
                            <Link to="/login" className="header__dropdownItem">Log in</Link>
                            <div className="header__dropdownDivider"></div>
                            <Link to="/host-experience" className="header__dropdownItem">Host an experience</Link>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Header;
