import React, { useState } from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem, { ListItemProps } from '@material-ui/core/ListItem';
import ListSubheader from '@material-ui/core/ListSubheader';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import EventListener from 'react-event-listener';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

import './styles/Header.scss';

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

interface References {
  name: string;
  foreign: boolean;
  link: string;
  class: string;
}
type Props = {
  className?: string;
  refItems: References[];
};

const ListItemLink = (props: ListItemProps<'a', { button?: true }>) => {
  return <ListItem button component="a" {...props} />;
};
const ResponsiveDrawer: React.FC<Props> = (props: Props) => {
  const [mobileOpen, setMobileMenuIsOpen] = useState(false);
  const classes: any = useStyles();
  const references: References[] = props.refItems;
  const refItems = references.map((item) => (
    <ListItemLink href={item.link}>
      <ListItemIcon>
        <i className={item.class}></i>
      </ListItemIcon>
      <ListItemText primary={item.name} />
    </ListItemLink>
  ));

  const handleResize = (): void => {
    setMobileMenuIsOpen(false);
  };
  return (
    <>
      <EventListener target="window" onResize={handleResize} />
      {mobileOpen ? (
        <>
          <div className="header-menu">
            <i
              className="fa fa-times menu-icon"
              onClick={() => setMobileMenuIsOpen(mobileOpen ? false : true)}
            ></i>
          </div>
          <List
            component="nav"
            aria-label="mobile menu bar"
            className={classes.root}
            subheader={
              <ListSubheader component="nav" className={classes.subHeader}>
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
            onClick={() => setMobileMenuIsOpen(mobileOpen ? false : true)}
          ></i>
        </div>
      )}
    </>
  );
};

const Header: React.FC = () => {
  const references: References[] = [
    {
      name: 'home',
      foreign: false,
      link: '/',
      class: 'fas fa-home fa-2x',
    },
    {
      name: 'github',
      foreign: true,
      link: 'https://github.com/mie998',
      class: 'fa fa-github fa-2x',
    },
    {
      name: 'twitter',
      foreign: true,
      link: 'https://twitter.com/Mie98838',
      class: 'fa fa-twitter-square fa-2x',
    },
    {
      name: 'hatena',
      foreign: true,
      link: 'https://mie999.hatenablog.com/',
      class: 'fas fa-blog fa-2x',
    },
  ];
  const refItems: JSX.Element[] = references.map((item) =>
    item.foreign ? (
      <a href={item.link} key={item.name}>
        <i className={item.class} />
      </a>
    ) : (
      <Link to="/" key={item.name}>
        <i className={item.class} />
      </Link>
    ),
  );

  return (
    <div className="header-wrapper">
      <div className="header-left">
        <HashLink	to="/#about">About</HashLink>
        <HashLink	to="/#experience">Experience</HashLink>
        <HashLink	to="/#skill">Skill</HashLink>
        <HashLink	to="/#works">Works</HashLink>
        <Link to="/posts/">Posts</Link>
      </div>
      <div className="header-right">{refItems}</div>
      <ResponsiveDrawer refItems={references} />
    </div>
  );
};
export default Header;
