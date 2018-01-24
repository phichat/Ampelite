import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { indigo } from 'material-ui/colors';
import Drawer from 'material-ui/Drawer';
import Typography from 'material-ui/Typography';
import Divider from 'material-ui/Divider';
import IconButton from 'material-ui/IconButton';
import Scrollbars from 'react-custom-scrollbars';
import List, { ListItem, ListItemText } from 'material-ui/List';
import ChevronLeftIcon from 'material-ui-icons/ChevronLeft';
import ChevronRightIcon from 'material-ui-icons/ChevronRight';

const drawerWidth = 240;
const styles = theme => ({
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
    drawerMenu: {
        height: '500px',
    },
    flex: {
        flex: 1,
    },
})

class SidebarContainer extends Component {
    constructor() {
        super();
        this.state = {
            open: true,
            anchor: 'left',
        };

        this.handleDrawerClose = this.handleDrawerClose.bind(this);
    }


    handleDrawerClose() {
        // this.setState({ open: !this.state.open });
    };

    render() {
        const { classes, theme, open } = this.props;
        const { anchor } = this.state;
        return (
            <Drawer
                type="persistent"
                classes={{
                    paper: classes.drawerPaper,
                }}
                anchor={anchor}
                open={open}>

                <div>
                    <div className={classes.drawerHeader}>
                        <Typography type="headline" className={classes.flex} style={{ color: '#fff' }}>Ampelite</Typography>
                        <IconButton onClick={this.handleDrawerClose}>
                            {theme.direction === 'rtl' ? <ChevronRightIcon color="contrast" /> : <ChevronLeftIcon color="contrast" />}
                        </IconButton>
                    </div>

                    <Divider />

                    <Scrollbars autoHeight
                        autoHeightMin={'30vh'}
                        autoHeightMax={'90vh'}>
                        <List>
                            {[0, 1, 2, 3, 4].map(sectionId => (
                                <div key={`section-${sectionId}`}>
                                    {[0, 1, 2].map(item => (
                                        <ListItem button key={`item-${sectionId}-${item}`}>
                                            <ListItemText primary={`Item ${item}`} />
                                        </ListItem>
                                    ))}
                                </div>
                            ))}
                        </List>
                    </Scrollbars >

                </div>
            </Drawer>
        );
    }
}

SidebarContainer.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
}

export default withStyles(styles, { withTheme: true })(SidebarContainer);