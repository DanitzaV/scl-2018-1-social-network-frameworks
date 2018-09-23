import React, { Component } from 'react';
import { Grid } from '@material-ui/core';
import firebase from './../../base';
import ImgMediaCard from './CardEvent';

class ShowEvents extends Component {
    constructor(props) {
        super(props);

        this.state = {
            events: []
        } 
    }

    componentWillMount() {
        firebase.database().ref('events')
          .on('child_added', (newEvent) => {
            console.log(newEvent.val())
            let infoe = {
                title: newEvent.val().title,
                description: newEvent.val().description,
                direction: newEvent.val().direction,
                user: newEvent.val().creatorcorreo,
                fecha: newEvent.val().date,
                hora: newEvent.val().hour,
                picture: newEvent.val().picture
            };
            this.setState({
                events: [infoe].concat(this.state.events)
            });
        });
    }

    render() {
        return (
            <div>
                <Grid item xs>
                </Grid>
                <Grid container row>
                {this.state.events.map(ele => {
                    return (
                        <li>
                        <Grid>
                            <ImgMediaCard
                            nombre={ele.title}
                            descripcion={ele.description}
                            direccion={ele.direction}
                            user={ele.user}
                            fecha={ele.fecha}
                            hora={ele.hora}
                            imagen={ele.picture}
                            />
                        </Grid>
                        </li>
                    )
                })}
                </Grid>
            </div>
        )
    }
}

export default ShowEvents;