import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';
import Drawer from 'material-ui/Drawer';
import { Header } from './';
import { Sidebar } from '../containers/';
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
  content: {
    width: '100%',
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    height: 'calc(100% - 56px)',
    marginTop: 56,
    [theme.breakpoints.up('sm')]: {
      content: {
        height: 'calc(100% - 64px)',
        marginTop: 64,
      },
    },
  },
  'content-left': {
    marginLeft: -drawerWidth,
  },
  'content-right': {
    marginRight: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  'contentShift-left': {
    marginLeft: 0,
  },
  'contentShift-right': {
    marginRight: 0,
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
      window.location.href = '/sign-in'
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
    const { open, anchor } = this.state;

    return (
      <div className={classes.root}>
        <div className={classes.appFrame}>
          {/* Header */}
          <Header open={open} handleDrawerOpen={this.handleDrawerOpen} />
          {/* End Header */}

          {/* Sidebar */}
          <Drawer type="persistent" classes={{ paper: classes.drawerPaper, }} anchor={anchor} open={open}>
            <Sidebar handleDrawerClose={this.handleDrawerClose} />
          </Drawer>
          {/* End Sidebar */}

          {/* Content */}
          <main
            className={classNames(classes.content, classes[`content-${anchor}`], {
              [classes.contentShift]: open,
              [classes[`contentShift-${anchor}`]]: open,
            })}>
            <Typography>{'You think water moves fast? You should see ice.'}</Typography>
          </main>
          {/* End Content */}
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