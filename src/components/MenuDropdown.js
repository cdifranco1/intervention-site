import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom';




const StyledDropdownButton = ({ children, ariaControls, ariaHaspopup, onClick }) => 
  <button aria-controls="simple-menu" aria-haspopup="true" onClick={onClick} >{ children }</button>


export function ServicesDropdown() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <StyledDropdownButton ariaControls="simple-menu" ariaHaspopup="true" onClick={handleClick}>
        <span>Services</span>
      </StyledDropdownButton>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <Link to="/services/assessment-and-placement">
          <MenuItem onClick={handleClose}>Assessment & Placement</MenuItem>
        </Link>
        <Link to="/services/sober-coaching">
          <MenuItem onClick={handleClose}>Sober Coaching</MenuItem>
        </Link>
        <Link to="/services/interventions">
          <MenuItem onClick={handleClose}>Interventions</MenuItem>
        </Link>
      </Menu>
    </div>
  );
}

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
        <Link to="/services">
          <MenuItem onClick={handleClose}>Services</MenuItem>
        </Link>
        <Link to="/blog">
          <MenuItem onClick={handleClose}>Blog</MenuItem>
        </Link>
      </Menu>
    </div>
  );
}