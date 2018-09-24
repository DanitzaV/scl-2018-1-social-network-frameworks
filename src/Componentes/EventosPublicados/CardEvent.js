import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import SvgIcon from "@material-ui/core/SvgIcon";
import { Grid } from "@material-ui/core";


const styles = {
  card: {
    maxWidth: 345,
    margin: 60
  },
  media: {
    // ⚠️ object-fit is not supported by IE11.
    objectFit: "cover"
  },
  icon: {
    color: "#727070"
  },
  typ: {
    marginTop: 16
  },
  lugar: {
    marginTop: 10
  },
  lugarP: {
    marginTop: 8
  },
  sub: {
    marginTop: -11
  }
};

function RelojIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm4.2 14.2L11 13V7h1.5v5.2l4.5 2.7-.8 1.3z" />
    </SvgIcon>
  );
}

function LugarIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 0 1 0-5 2.5 2.5 0 0 1 0 5z" />
    </SvgIcon>
  );
}


class ImgMediaCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { classes } = this.props;
    return (
      <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          component="img"
          className={classes.media}
          height="140"
          image= {this.props.imagen}
        />
        <CardContent>
          <Typography
            className="titulo"
            gutterBottom
            variant="headline"
            component="h2"
          >
            {this.props.nombre}
          </Typography>
          <Typography className={classes.sub} component="p" variant="subheading" color="textSecondary">
            Por {this.props.user}
          </Typography>

          <Grid container row className={classes.lugarP}>
            <Grid item xs={2}>
              <RelojIcon className={classes.icon} />
            </Grid>
            <Grid item xs={8}>
              <Typography component="p">
                {this.props.fecha}
              </Typography>
              <Typography component="p">a las {this.props.hora}</Typography>
            </Grid>
          </Grid>
          <Grid container row className={classes.lugar}>
            <Grid item xs={2}>
              <LugarIcon className={classes.icon} />
            </Grid>
            <Grid item xs={8}>
              <Typography component="p" className={classes.lugarP}>
                {this.props.direccion}
              </Typography>
            </Grid>
          </Grid>

          <Typography className={classes.typ} component="p">
            {this.props.descripcion}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    )
  }
}

export default withStyles(styles)(ImgMediaCard);