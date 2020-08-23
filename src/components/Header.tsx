import React, { useState, useEffect } from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem, { ListItemProps } from '@material-ui/core/ListItem';
import ListSubheader from '@material-ui/core/ListSubheader';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import './Header.scss';
// import useWindowDimensions from './About';

const mobileSize = 670;
const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width: '100%',
            backgroundColor: theme.palette.background.paper,
            maxWidth: '500',
            position: 'fixed',
        },
        subHeader: {
            position: 'relative',
        },
    }),
);

const ListItemLink = (props: ListItemProps<'a', { button?: true }>) => {
    return <ListItem button component="a" {...props} />;
};
interface References {
    name: string;
    url: string;
    class: string;
}
type Props = {
    className?: string;
    refItems: References[];
};

export const useWindowDimensions: any = () => {
    const getWindowDimensions = () => {
        const { innerWidth: width, innerHeight: height } = window;
        return {
            width,
            height,
        };
    };

    const [windowDimensions, setWindowDimensions] = useState(
        getWindowDimensions(),
    );
    useEffect(() => {
        const onResize = () => {
            setWindowDimensions(getWindowDimensions());
        };
        window.addEventListener('resize', onResize);
        return () => window.removeEventListener('resize', onResize);
    }, []);
    return windowDimensions;
};

const ResponsiveDrawer: React.FC<Props> = (props) => {
    const [mobileOpen, setMobileMenuIsOpen] = useState(false);
    const classes = useStyles();
    const references = props.refItems;
    const refItems = references.map((item) => (
        <ListItemLink href={item.url}>
            <ListItemIcon>
                <i className={item.class}></i>
            </ListItemIcon>
            <ListItemText primary={item.name} />
        </ListItemLink>
    ));

    // if (width > mobileSize) {
    //     setMobileMenuIsOpen(false);
    // }
    return (
        <>
            {mobileOpen ? (
                <>
                    <div className="header-menu">
                        <i
                            className="fa fa-times menu-icon"
                            onClick={() =>
                                setMobileMenuIsOpen(mobileOpen ? false : true)
                            }
                        ></i>
                    </div>
                    <List
                        component="nav"
                        aria-label="mobile menu bar"
                        className={classes.root}
                        subheader={
                            <ListSubheader
                                component="nav"
                                className={classes.subHeader}
                            >
                                Find more!
                            </ListSubheader>
                        }
                    >
                        {refItems}
                    </List>
                </>
            ) : (
                <div className="header-menu">
                    <i
                        className="fa fa-bars menu-icon"
                        onClick={() =>
                            setMobileMenuIsOpen(mobileOpen ? false : true)
                        }
                    ></i>
                </div>
            )}
        </>
    );
};

const Header: React.FC = () => {
    const classes = useStyles();
    const references: References[] = [
        {
            name: 'github',
            url: 'https://github.com/mie998',
            class: 'fa fa-github fa-2x',
        },
        {
            name: 'twitter',
            url: 'https://twitter.com/Mie98838',
            class: 'fa fa-twitter-square fa-2x',
        },
        {
            name: 'hatena',
            url: 'https://blog.hatena.ne.jp/MIE999/mie999.hatenablog.com/',
            class: 'fas fa-blog fa-2x',
        },
    ];
    const refItems: JSX.Element[] = references.map((item) => (
        <a href={item.url}>
            <i className={item.class}></i>
        </a>
    ));

    return (
        <div className="header-wrapper">
            <div className="header-left">
                <a href="#about">About</a>
                <a href="#experience">History</a>
                <a href="#skill">Skill</a>
                <a href="#works">Works</a>
            </div>
            <div className="header-right">{refItems}</div>
            <ResponsiveDrawer refItems={references} />
        </div>
    );
};
export default Header;
