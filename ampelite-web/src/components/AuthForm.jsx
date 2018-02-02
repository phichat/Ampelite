import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { blue, grey } from 'material-ui/colors';
import Card, { CardContent, CardMedia } from 'material-ui/Card';
import { Typography, TextField, Button, } from 'material-ui';
import { Help } from 'material-ui-icons';
import { LinearProgress } from 'material-ui/Progress';
import Divider from 'material-ui/Divider/Divider';

const styles = theme => ({
    form: {
        minWidth: '320px',
        maxWidth: '700px',
        height: 'auto',
        position: 'absolute',
        top: '20%',
        left: '0px',
        right: '0px',
        margin: 'auto',
    },
    card: {
        display: 'flex',
    },
    details: {
        display: 'inline-block',
        width: '50%',
    },
    content: {
        flex: '1 0 auto',
    },
    cover: {
        display: 'inline-block',
        width: '50%',
        height: 'auto',
        backgroundColor: blue[500],
        textAlign: 'center',
    },
    textField: {
        // marginLeft: theme.spacing.unit,
        // marginRight: theme.spacing.unit,
        width: '100%',
    },
    button: {
        margin: theme.spacing.unit,
        color: grey[50],
    },
    iconInbutton: {
        padding: '0 8px',
    },
    flexGrow: {
        flex: '1 1 auto',
    },
    progress: {
        width: '100%',
    }
});

class AuthForm extends Component {
    constructor() {
        super();
        this.state = {
            UserName: '',
            Password: '',
        }
    }

    componentDidMount() {
        this.timer = setInterval(this.progress, 500);
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    onSubmit = event => {
        event.preventDefault()
        this.setState({ onLoadProgress: true })
        this.props.onSubmit(this.state)
    }

    onLeave = event =>{
        event.preventDefault()
        window.location.href = 'http://203.154.45.40/Ampelite.o/Login.aspx';
    }

    onFieldChange = event => {
        const { name, value } = event.target
        this.setState({ [name]: value })
    }

    handleChange = name => event => {
        this.setState({ [name]: event.target.checked });
    };

    render() {
        const { formName, classes, onLoadProgress } = this.props;

        return (
            <form className={classes.form}>
                <Card className={classes.card}>
                    <div className={classes.details}>
                        {
                            onLoadProgress && (<div className={classes.progress}><LinearProgress /></div>)
                        }
                        <CardContent className={classes.content}>
                            <Typography type="headline">Sign In</Typography>
                            <Divider />
                            <TextField
                                id="username"
                                name="UserName"
                                label="User name"
                                placeholder="User name"
                                className={classes.textField}
                                margin="normal"
                                onChange={this.onFieldChange}
                            />
                            <TextField
                                id="password"
                                name="Password"
                                label="Password"
                                placeholder="Password"
                                className={classes.textField}
                                type="password"
                                autoComplete="current-password"
                                margin="normal"
                                pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                                onChange={this.onFieldChange}
                            />


                        </CardContent>
                        {/* <div className={classes.flexGrow} /> */}
                        <Button raised color="primary" className={classes.button} onClick={this.onSubmit}>
                            {formName}
                        </Button>
                        <Button className={classes.button} style={{ color: grey[500], float: 'right' }}>
                            <Help className={classes.iconInbutton} />
                            {' Forgot'}
                        </Button>
                    </div>
                    <CardMedia className={classes.cover}>
                        <div style={{ marginTop: '20%' }}>
                            <Typography type="secondary"></Typography>
                            <Button color="primary" className={classes.button} onClick={this.onLeave}>Ampelite.o</Button>
                        </div>
                    </CardMedia>
                </Card>
            </form>

        );
    }
}

AuthForm.propTypes = {
    formName: PropTypes.string.isRequired,
    onSubmit: PropTypes.func.isRequired,
    onLoadProgress: PropTypes.bool.isRequired,
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
}

export default withStyles(styles, { withTheme: true })(AuthForm);