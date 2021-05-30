import React, { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { SvgIconProps } from '@material-ui/core/SvgIcon';
import BackspaceIcon from '@material-ui/icons/Backspace';
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';

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
    { text: 'home', route: '/portfoilo/', hash: false },
    { text: 'about', route: '/portfoilo/#about', hash: true },
    { text: 'experience', route: '/portfoilo/#experience', hash: true },
    { text: 'skill', route: '/portfoilo/#skill', hash: true },
    { text: 'words', route: '/portfoilo/#works', hash: true },
    { text: 'posts', route: '/portfoilo/posts/', hash: false },
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
      <Button onClick={toggleDrawer(true)}>click button</Button>
      <Drawer anchor={'right'} open={open} onClose={toggleDrawer(false)}>
        <div
          className={classes.dividerList}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <List>
            {dividerRoutes.map((item) => (
              <ListItem button key={item.text} component={Link} to={item.route}>
                <ListItemText primary={item.text} />
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            {['All mail', 'Trash', 'Spam'].map((text, index) => (
              <ListItem button key={text}>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </div>
      </Drawer>
    </>
  );
};

export default MenuButton;
