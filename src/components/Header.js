import React from 'react'
import './styles/Header.scss'

class Header extends React.Component {
    render() {
        return (
            <div class='header-wrapper'>
                <div class='header-left'>
                    <a href='#about'>About</a>
                    <a href='#history'>History</a>
                    <a href='#skill'>Skill</a>
                    <a href='#works'>Works</a>
                </div>
                <div className='header-right'>
                    <i class='fa fa-bars menu-icon'></i>
                </div>
            </div>
        );
    }
}

export default Header;
