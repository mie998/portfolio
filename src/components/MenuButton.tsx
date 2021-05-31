import React, { FC, useState } from 'react';
import { Link as RouteLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Link from '@material-ui/core/Link';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { SvgIconProps } from '@material-ui/core/SvgIcon';
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';
import MenuOpenIcon from '@material-ui/icons/MenuOpen';

interface dividerRoute {
  text: string;
  route: string;
  hash: boolean;
}

interface dividerExternalLink {
  text: string;
  url: string;
  icon: React.ReactElement<SvgIconProps>;
}

const useStyles = makeStyles({
  menuButton: {
    height: '4.6rem',
    padding: '0',
    margin: '0 auto',
    color: 'black',
    backgroundColor: 'white',
    borderRadius: '10rem',
    // stylelint-disable-next-line
  },
  dividerList: {
    width: 250,
  },
});

const MenuButton: FC = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const toggleDrawer = (b: boolean) => (event: any) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setOpen(b);
  };

  const dividerRoutes: dividerRoute[] = [
    { text: 'home', route: '/portfolio/', hash: false },
    { text: 'about', route: '/portfolio/#about', hash: true },
    { text: 'experience', route: '/portfolio/#experience', hash: true },
    { text: 'skill', route: '/portfolio/#skill', hash: true },
    { text: 'works', route: '/portfolio/#works', hash: true },
    { text: 'posts', route: '/portfolio/posts/', hash: false },
  ];

  const dividerExternalLinks: dividerExternalLink[] = [
    {
      text: 'twitter',
      url: 'https://twitter.com/Mie98838',
      icon: <TwitterIcon />,
    },
    { text: 'github', url: 'https://github.com/mie998', icon: <GitHubIcon /> },
  ];

  return (
    <>
      <Button onClick={toggleDrawer(true)} className={classes.menuButton}>
        <MenuOpenIcon fontSize="large" />
      </Button>
      <Drawer anchor={'right'} open={open} onClose={toggleDrawer(false)}>
        <div
          className={classes.dividerList}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <List>
            {dividerRoutes.map((item) =>
              item.hash ? (
                <ListItem
                  button
                  key={item.text}
                  component={HashLink}
                  to={item.route}
                >
                  <ListItemText primary={item.text} />
                </ListItem>
              ) : (
                <ListItem
                  button
                  key={item.text}
                  component={RouteLink}
                  to={item.route}
                >
                  <ListItemText primary={item.text} />
                </ListItem>
              ),
            )}
          </List>
          <Divider />
          <List>
            {dividerExternalLinks.map((item) => (
              <ListItem button key={item.text} component={Link} href={item.url}>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItem>
            ))}
          </List>
        </div>
      </Drawer>
    </>
  );
};

export default MenuButton;
