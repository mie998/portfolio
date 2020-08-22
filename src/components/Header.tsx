import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import './Header.scss';

const useStyles = makeStyles((theme) => ({
    aboutTitle: {
        textAlign: 'center',
    },
}));

const Header: React.FC = () => {
    return (
        <div className="header-wrapper">
            <div className="header-left">
                <a href="#about">About</a>
                <a href="#experience">History</a>
                <a href="#skill">Skill</a>
                <a href="#works">Works</a>
            </div>
            <div className="header-right">
                <a href="https://github.com/mie998">
                    <i className="fa fa-github fa-2x"></i>
                </a>
                <a href="https://twitter.com/Mie98838">
                    <i className="fa fa-twitter-square fa-2x"></i>
                </a>
                <a href="https://blog.hatena.ne.jp/MIE999/mie999.hatenablog.com/">
                    <i className="fas fa-blog fa-2x"></i>
                </a>
            </div>
            <div className="header-menu">
                <i className="fa fa-bars menu-icon"></i>
            </div>
        </div>
    );
};
export default Header;
