import React from 'react'
import './styles/Header.scss'

class Header extends React.Component {
    render() {
        return (
            <div class='header-wrapper'>
                <div class='header-left'>
                    <a href='#'>About</a>
                    <a href='#'>History</a>
                    <a href='#'>Skill</a>
                    <a href='#'>Work</a>
                </div>
                <div className='header-right'>
                    <i class='fa fa-bars menu-icon'></i>
                </div>
            </div>
        );
    }
}

export default Header;
