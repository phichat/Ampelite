import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { indigo } from 'material-ui/colors';

import { Header, Content } from './';
import { Sidebar } from '../containers';
import { Auth } from '../lib';

const drawerWidth = 240;

const styles = theme => ({
  flex: {
    flex: 1,
  },
  root: {
    width: '100%',
    zIndex: 1,
    overflow: 'hidden',
  },
  appFrame: {
    position: 'relative',
    display: 'flex',
    width: '100%',
    height: '100%',
  },
  drawerPaper: {
    position: 'relative',
    height: '100vh',
    width: drawerWidth,
    overflow: "hidden",
    boxShadow: 'rgba(0, 0, 0, 0.16) 0px 3px 10px, rgba(0, 0, 0, 0.23) 0px 3px 10px',
    border: "none",
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    backgroundColor: indigo[500],
    boxShadow: 'rgba(0, 0, 0, 0.16) 0px 3px 10px, rgba(0, 0, 0, 0.23) 0px 3px 10px',
    ...theme.mixins.toolbar,
  },
});

class MainWarpper extends Component {
  constructor() {
    super();
    this.state = {
      open: true,
      anchor: 'left',
    };
    this.handleDrawerOpen = this.handleDrawerOpen.bind(this);
    this.handleDrawerClose = this.handleDrawerClose.bind(this);
  }
  componentDidMount() {
    if (!Auth.getToken()) {
      window.location.href = '/AmpeliteWeb/sign-in'
    }
  }

  handleDrawerOpen = open => {
    this.setState({ open: open });
  };

  handleDrawerClose = (open) => {
    this.setState({ open: open });
  };

  render() {
    const { classes } = this.props;
    const { open } = this.state;

    return (
      <div className={classes.root}>
        <div className={classes.appFrame}>
          {/* Header */}
          <Header
            open={open}
            handleDrawerOpen={this.handleDrawerOpen}
          />

          {/* Sidebar */}
          <Sidebar
            open={open}
            handleDrawerClose={this.handleDrawerClose}
          />

          {/* Content */}
          <Content />
        </div>
      </div>
    );
  }
}

MainWarpper.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(MainWarpper);