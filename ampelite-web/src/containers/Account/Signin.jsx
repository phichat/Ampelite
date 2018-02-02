import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import PropTypes from 'prop-types';
import { Auth } from '../../lib'
import { AuthForm } from '../../components';
import Button from 'material-ui/Button';
import Dialog, {
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
} from 'material-ui/Dialog';
import Slide from 'material-ui/transitions/Slide';

function Transition(props) {
    return <Slide direction="down" {...props} />;
}

class SiginContainer extends Component {
    state = {
        open: false,
        statusText: '',
        loadProgress: false,
    }

    handleOpenDialog = () => {
        this.setState({ open: true });
    };

    handleCloseDialog = () => {
        this.setState({ open: false });
    };


    handleFormSubmit = credential => {
        const { history } = this.props;
        this.setState({ loadProgress: true })
        fetch('/Api/Auth/SignIn', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify(credential),
        })
            .then(res => {
                if (res.status === 200) {
                    return res.json();
                } else if (res.status === 401) {
                    this.setState({ statusText: res.statusText })
                }
            })
            .then(data => {
                if (data !== undefined) {
                    Auth.setToken(data);
                }
            })
            .then(() => {
                if (Auth.getToken()) {
                    history.push('/')
                } else {
                    this.handleOpenDialog()
                }
                this.setState({ loadProgress: false })
            })

    }

    render() {
        let { loadProgress } = this.state;
        const Unauthorized = <div>
            <Dialog
                disableBackdropClick
                disableEscapeKeyDown
                maxWidth="sm"
                open={this.state.open}
                transition={Transition}
                keepMounted
                onClose={this.handleCloseDialog}
                aria-labelledby="alert-dialog-slide-title"
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle id="alert-dialog-slide-title">
                    {this.state.statusText} !
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-slide-description">
                        กรุณาตรวจสอบความถูกต้องของ "ชื่อผู้ใช้" หรือ "รหัสผ่าน" และ"อุปกรณ์" ที่ใช้ในการเข้าสู่ระบบ!
                </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={this.handleCloseDialog} color="primary">
                        OK
                </Button>
                </DialogActions>
            </Dialog>
        </div>

        return (
            <div>
                <AuthForm
                    formName='Sign in'
                    onSubmit={this.handleFormSubmit}
                    onLoadProgress={loadProgress}
                />
                {Unauthorized}
            </div>

        );
    }
}

SiginContainer.propTypes = {
    history: PropTypes.shape({
        push: PropTypes.func.isRequired
    }).isRequired
}

export default withRouter(SiginContainer);