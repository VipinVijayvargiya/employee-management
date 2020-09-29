import React from 'react';
import Badge from '@material-ui/core/Badge';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { connect } from "react-redux";

const Header = (props) => {
  return (
    <Badge badgeContent={props.badge} color="secondary">
      <NotificationsIcon />
    </Badge>
  );
}

const mapStateToProps = state => {
  return {
    badge: state.app.badge
  };
};
const mapDispatchToProps = {
  
};

const ConnectedHeader = connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);

export default ConnectedHeader;