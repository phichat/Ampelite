import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import classNames from 'classnames';
import Typography from 'material-ui/Typography';

const drawerWidth = 240;
const styles = theme => ({
   
})

class Content extends Component {
    state = {
        open: true,
        anchor: 'left',
    };
    render() {
        const { classes } = this.props;
        const { open, anchor } = this.state;
        return (
            <main
                className={classNames(classes.content, classes[`content-${anchor}`], {
                    [classes.contentShift]: open,
                    [classes[`contentShift-${anchor}`]]: open,
                })}>
                <Typography>{'You think water moves fast? You should see ice.'}</Typography>
            </main>
        );
    }
}

Content.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
}

export default withStyles(styles, { withTheme: true })(Content);