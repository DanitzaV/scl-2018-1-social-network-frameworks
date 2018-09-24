import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import { Grid, Input } from '@material-ui/core';
import SvgIcon from '@material-ui/core/SvgIcon';
import firebase from '../../base';



const styles = theme => ({
  paper: {
    position: 'absolute',
    width: theme.spacing.unit * 50,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
  },
});

function EditIcon(props) {
    return (
      <SvgIcon {...props}>
        <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04a.996.996 0 0 0 0-1.41l-2.34-2.34a.996.996 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" />
      </SvgIcon>
    );
}

class SimpleModal extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            open: false,
            name: '',
            phone: '',
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handlePhoneChange = this.handlePhoneChange.bind(this);
    }


  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
 };

  handleNameChange(event) {
    this.setState({
      name: event.target.value
    });
 }

handlePhoneChange(event) {
    this.setState({
      phone: event.target.value
    });
}

  handleSubmit(event) {
    const currentUser = firebase.auth().currentUser;
        console.log(currentUser);
     
        const newProfileKey = firebase.database().ref().child('profile').push().key;
        firebase.database().ref(`profile/${newProfileKey}`).set({
            creator : currentUser.uid,
            name: this.state.name,
            phone: this.state.phone,
            picture: this.state.img,
        });
        event.preventDefault();
  };

  render() {
    const { classes } = this.props;

    return (
      <div>
        <Button onClick={this.handleOpen} variant="fab" color="secondary" aria-label="Edit" className={classes.button}>
          <EditIcon />
        </Button>
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={this.state.open}
          onClose={this.handleClose}
        >
          <form onSubmit={this.handleSubmit} className={classes.paper}>
            <Typography variant="subheading" id="modal-title">
              Nombre
            </Typography>
            <Input type="text" onChange={this.handleNameChange}></Input>
            <Typography variant="subheading" id="simple-modal-description">
              Celular
            </Typography>
            <Input type="text" onChange={this.handlePhoneChange}></Input>
            <Button onClick={this.handleClose}>Cerrar</Button>
           <Button type="submit">Guardar</Button>
          </form>
        </Modal>
      </div>
    );
  }
}

SimpleModal.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleModal);