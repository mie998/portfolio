import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import './styles/Header.scss';

const useStyles = makeStyles((theme) => ({
    aboutTitle: {
        textAlign: 'center',
    },
}));

const Header: React.FC = () => {
    return (
        <div class="header-wrapper">
            <div class="header-left">
                <a href="#about">About</a>
                <a href="#history">History</a>
                <a href="#skill">Skill</a>
                <a href="#works">Works</a>
            </div>
            <div className="header-right">
                <i class="fa fa-bars menu-icon"></i>
            </div>
        </div>
    );
};
export default Header;
