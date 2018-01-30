import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardContent, CardActions } from 'material-ui/Card';
import { Typography, TextField, Button, } from 'material-ui';
import { PersonAdd, Help } from 'material-ui-icons';
import { grey } from 'material-ui/colors';
// import { LinearProgress } from 'material-ui/Progress';

const styles = theme => ({
    form: {
        minWidth: '320px',
        maxWidth: '400px',
        height: 'auto',
        position: 'absolute',
        top: '20%',
        left: '0px',
        right: '0px',
        margin: 'auto',
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 'calc(100% - 16px)',
    },
    button: {
        margin: theme.spacing.unit,
        color: grey[500],
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
            completed: 0,
        }

    }

    componentDidMount() {
        this.timer = setInterval(this.progress, 500);
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    timer: number;

    progress = () => {
        const { completed } = this.state;
        if (completed > 100) {
            this.setState({ completed: 0 });
        } else {
            const diff = Math.random() * 10;
            this.setState({ completed: completed + diff });
        }
    };

    onSubmit = event => {
        event.preventDefault()
        this.props.onSubmit(this.state)
    }

    onFieldChange = event => {
        const { name, value } = event.target
        this.setState({ [name]: value })
    }

    handleChange = name => event => {
        this.setState({ [name]: event.target.checked });
    };

    render() {
        const { formName, classes, } = this.props;

        return (
            <form className={classes.form}>

                <Card>
                    {/* <div className={classes.progress}>
                        <LinearProgress mode="determinate" value={this.state.completed} />
                    </div> */}
                    <CardContent>
                        <Typography type="headline">{formName}</Typography>
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

                    <CardActions>
                        <div className={classes.flexGrow} />
                        <Button raised color="primary" onClick={this.onSubmit}>
                            {formName}
                        </Button>
                    </CardActions>
                </Card>

                <div style={{ textAlign: 'center' }}>
                    <Button className={classes.button}>
                        <PersonAdd className={classes.iconInbutton} />
                        {'Register'}

                    </Button>
                    <Button type="submit" className={classes.button}>
                        <Help className={classes.iconInbutton} />
                        {' Forgot password?'}
                    </Button>
                </div>

            </form>

        );
    }
}

AuthForm.propTypes = {
    formName: PropTypes.string.isRequired,
    onSubmit: PropTypes.func.isRequired,
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
}

export default withStyles(styles, { withTheme: true })(AuthForm);