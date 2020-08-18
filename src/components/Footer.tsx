import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import './styles/Footer.scss';

const useStyles = makeStyles((theme) => ({
    aboutTitle: {
        textAlign: 'center',
    },
}));

const Footer: React.FC = () => {
    return (
        <div class="footer-wrapper">
            <p>Produced by Keisuke Nishiwaki</p>
            <p>last modified: 00/00</p>
        </div>
    );
};

export default Footer;
