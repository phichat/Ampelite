import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { indigo } from 'material-ui/colors';
import Typography from 'material-ui/Typography';
import Divider from 'material-ui/Divider';
import IconButton from 'material-ui/IconButton';
import Scrollbars from 'react-custom-scrollbars';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import Collapse from 'material-ui/transitions/Collapse';
import ChevronLeftIcon from 'material-ui-icons/ChevronLeft';
import ChevronRightIcon from 'material-ui-icons/ChevronRight';
import ExpandLess from 'material-ui-icons/ExpandLess';
import ExpandMore from 'material-ui-icons/ExpandMore';

const styles = theme => ({
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
    state = {
        isCollapse: false,
        category:
            [
                {
                    key: 1,
                    mainitem: 'Account',
                    subitem:
                        [
                            {
                                program: "Marketing Report",
                                role: '',
                            }
                        ],

                },
                {
                    key: 2,
                    mainitem: 'Logistics',
                    subitem:
                        [
                            {
                                program: "Transportation cost I",
                                role: '',
                            },
                            {
                                program: "Transportation cost II",
                                role: '',
                            }
                        ]

                },
                {
                    key: 3,
                    mainitem: 'Marketing',
                    subitem:
                        [
                            {
                                program: "Goden report",
                                role: '',
                            }
                        ]
                }
            ]
    }

    handleDrawerClose = () => {
        this.props.handleDrawerClose(false)
    }
    handleCollapse = ({ target }) => {
        this.setState({ isCollapse: !this.state.isCollapse });
    };

    render() {
        const { classes, theme } = this.props;
        const { isCollapse, category } = this.state;
        return (
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
                    <List disablePadding>
                        {
                            category.map(main => (
                                <div key={`menu-${main.key}`}>
                                    <ListItem button onClick={this.handleCollapse} data-href={`menu-collapse-${main.key}`}>
                                        <ListItemText primary={`${main.mainitem}`} />
                                        {isCollapse ? <ExpandLess /> : <ExpandMore />}
                                    </ListItem>

                                    <Collapse component="li" in={isCollapse} timeout="auto" unmountOnExit>
                                        <List disablePadding>
                                            {
                                                main.subitem.map(sub => (
                                                    <ListItem button key={`item-${main.mainitem}-${sub.program}`}>
                                                        <ListItemText secondary={sub.program} />
                                                    </ListItem>
                                                ))
                                            }
                                        </List>
                                    </Collapse>
                                </div>
                            ))
                        }
                    </List>
                </Scrollbars >

            </div>
        );
    }
}

SidebarContainer.propTypes = {
    handleDrawerClose: PropTypes.func.isRequired,
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
}

export default withStyles(styles, { withTheme: true })(SidebarContainer);