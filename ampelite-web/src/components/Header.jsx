import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import classNames from 'classnames';
import { AppBar } from 'material-ui';
import Toolbar from 'material-ui/Toolbar';
import { ListItemText, ListItemIcon } from 'material-ui/List';
import IconButton from 'material-ui/IconButton';
import Menu, { MenuItem } from 'material-ui/Menu';
import MenuIcon from 'material-ui-icons/Menu';
import { Person, PersonAdd, Help } from 'material-ui-icons';
import MoreVertIcon from 'material-ui-icons/MoreVert';
import { Auth } from '../lib'


const drawerWidth = 240;
const styles = theme => ({
    flex: {
        flex: 1,
    },
    menuButton: {
        marginLeft: 12,
        marginRight: 20,
    },
    appBar: {
        position: 'absolute',
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    'appBarShift-left': {
        marginLeft: drawerWidth,
    },
    hide: {
        display: 'none',
    },
});

class Header extends Component {
    constructor() {
        super();
        this.state = {
            open: false,
            anchorEl: null,
        }
        this.handleDrawerOpen = this.handleDrawerOpen.bind(this);
    }

    signOut = () => {
        this.handleCloseAnchorEl();
        Auth.removeToken()
        window.location.href = '/AmpeliteWeb/sign-in'
    }

    handleClickAnchorEl = (event) => {
        this.setState({ anchorEl: event.currentTarget });
    };

    handleCloseAnchorEl = (event) => {
        this.setState({ anchorEl: null })
    };

    handleDrawerOpen = () => {
        this.setState({ open: true });
        this.props.handleDrawerOpen(true)
    };

    render() {
        const { classes, open } = this.props;
        const { anchorEl } = this.state;

        return (
            <AppBar
                className={classNames(classes.appBar, {
                    [classes.appBarShift]: open,
                    [classes[`appBarShift-left`]]: open,
                })}
                position="static">

                <Toolbar disableGutters={!open}>
                    <IconButton
                        color="contrast"
                        aria-label="open drawer"
                        onClick={this.handleDrawerOpen}
                        className={classNames(classes.menuButton, open && classes.hide)}
                    >
                        <MenuIcon />
                    </IconButton>
                    <div className={classes.flex}></div>
                    <div>
                        <IconButton
                            aria-label="More"
                            aria-owns={anchorEl ? 'long-menu' : null}
                            aria-haspopup="true"
                            onClick={this.handleClickAnchorEl}
                            color="contrast"
                        >
                            <MoreVertIcon />
                        </IconButton>
                        <Menu
                            id="long-menu"
                            anchorEl={this.state.anchorEl}
                            open={Boolean(anchorEl)}
                            onClose={this.handleCloseAnchorEl}
                            PaperProps={{
                                style: {
                                    minWidth: 200,
                                },
                            }}>

                            <MenuItem onClick={this.handleCloseAnchorEl}>
                                <ListItemIcon>
                                    <Person />
                                </ListItemIcon>
                                <ListItemText inset primary="Profile" />
                            </MenuItem>
                            <MenuItem onClick={this.handleCloseAnchorEl}>
                                <ListItemIcon>
                                    <PersonAdd />
                                </ListItemIcon>
                                <ListItemText inset primary="My account" />
                            </MenuItem>
                            <MenuItem onClick={this.signOut} >
                                <ListItemIcon>
                                    <Help />
                                </ListItemIcon>
                                <ListItemText inset primary="Sign out" />
                            </MenuItem>
                        </Menu>
                    </div>
                </Toolbar>
            </AppBar>
        );
    }
}

Header.propTypes = {
    handleDrawerOpen: PropTypes.func.isRequired,
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};


export default withStyles(styles, { withTheme: true })(Header);