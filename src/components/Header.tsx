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
  external: boolean;
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
        <i className={item.class} />
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
              onClick={() => setMobileMenuIsOpen(!mobileOpen)}
            />
          </div>
          <List
            component="nav"
            aria-label="mobile menu bar"
            className="header-sub"
            subheader={
              <ListSubheader
                component="nav"
                className="header-sub-nav"
                disableSticky
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
            onClick={() => setMobileMenuIsOpen(!mobileOpen)}
          />
        </div>
      )}
    </>
  );
};

const Header: React.FC = () => {
  const references: References[] = [
    {
      name: 'home',
      external: false,
      link: '/portfolio/',
      class: 'fas fa-home fa-2x',
    },
    {
      name: 'github',
      external: true,
      link: 'https://github.com/mie998',
      class: 'fa fa-github fa-2x',
    },
    {
      name: 'twitter',
      external: true,
      link: 'https://twitter.com/Mie98838',
      class: 'fa fa-twitter-square fa-2x',
    },
    {
      name: 'hatena',
      external: true,
      link: 'https://mie999.hatenablog.com/',
      class: 'fas fa-blog fa-2x',
    },
  ];
  const refItems: JSX.Element[] = references.map((item) =>
    item.external ? (
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
        <HashLink to="/portfolio/#about">About</HashLink>
        <HashLink to="/portfolio/#experience">Experience</HashLink>
        <HashLink to="/portfolio/#skill">Skill</HashLink>
        <HashLink to="/portfolio/#works">Works</HashLink>
        <Link to="/portfolio/posts/">Posts</Link>
      </div>
      <div className="header-right">{refItems}</div>
      <ResponsiveDrawer refItems={references} />
    </div>
  );
};
export default Header;
