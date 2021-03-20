import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom';
import { Popper } from "./ServicesDropdown";
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  menuItem: {
    color: '#68808f'
  }
})

export default function SimpleMenu() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const outerContainer = React.useRef(null)

  const [showServiceOptions, setShowServiceOptions] = React.useState(false);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleServiceToggle = (e) => {
    e.preventDefault();

    setTimeout(() => setShowServiceOptions(!showServiceOptions), 1);

    window.addEventListener('click', () => setShowServiceOptions(false));
  };


  return (
    <div ref={outerContainer}>
      <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        <MenuIcon fontSize={'large'} />
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <Link to="/">
          <MenuItem className={classes.menuItem} onClick={handleClose}>Home</MenuItem>
        </Link>
        <Link to="/about">
          <MenuItem className={classes.menuItem} onClick={handleClose}>About</MenuItem>
        </Link>
        <MenuItem className={classes.menuItem} onClick={handleServiceToggle}>Services</MenuItem>
        <Link to="/blog">
          <MenuItem className={classes.menuItem} onClick={handleClose}>Blog</MenuItem>
        </Link>
        <Link to="/resources">
          <MenuItem className={classes.menuItem} onClick={handleClose}>Resources</MenuItem>
        </Link>
      </Menu>
      <Popper 
        anchorEl={outerContainer} 
        context={"mobile"} 
        isOpen={showServiceOptions} 
        handleClose={handleClose} 
        setShowServiceOptions={setShowServiceOptions} 
      />
    </div>
  );
}
