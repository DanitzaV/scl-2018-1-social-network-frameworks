import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';


const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
  chip: {
    margin: theme.spacing.unit,
  },
});

function PaperMessage(props) {
  const { classes } = props;

  return (
    <div >
    <Chip
        color="primary"
        avatar={<Avatar >{props.user.charAt(0).toUpperCase()}</Avatar>}
        label={props.user}
        className={classes.chip}
        variant="outlined"
      />
      <Paper  key={props.id} className={classes.root} elevation={1}  >
        <Typography component="p">
            {props.text}
        </Typography>
        <img src={props.imagen} width="200"/>
      </Paper>
      
    </div>
  );
}

PaperMessage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PaperMessage);
