import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom';



export default function SimpleMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
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
          <MenuItem onClick={handleClose}>Home</MenuItem>
        </Link>
        <Link to="/about">
          <MenuItem onClick={handleClose}>About</MenuItem>
        </Link>
        <Link to="/interventions">
          <MenuItem onClick={handleClose}>Interventions</MenuItem>
        </Link>
        <Link to="/blog">
          <MenuItem onClick={handleClose}>Blog</MenuItem>
        </Link>
      </Menu>
    </div>
  );
}