import React from 'react';
import './footer.scss';
import {Link, Typography} from '@material-ui/core';

const Footer = () => {
    return (
      <div className="footer-wrapper">
        <Typography variant="body2" color="textSecondary" align="center">
          {'Copyright © '}
          <Link color="inherit" href="#">
            Vipin Vijayvargiya
          </Link>{' '}
          {new Date().getFullYear()}
          {'.'}
        </Typography>
      </div>
    );
}
export default Footer;