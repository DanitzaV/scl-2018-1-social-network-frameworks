import React, { Component } from 'react';
import { Grid } from '@material-ui/core';
import firebase from './../../base';
import Card from './Card';

class ShowEvents extends Component {
    constructor(props) {
        super(props);
        this.state = {
            events: []
        } 
    }

    componentWillMount() {
        firebase.database().ref('reviews')
          .on('child_added', (newReview) => {
            console.log(newReview.val())
            let info = {
                title: newReview.val().title,
                description: newReview.val().description,
                direccion: newReview.val().direction,
                user: newReview.val().creatorcorreo,
                fecha: newReview.val().fecha,
                hora: newReview.val().hora,
                picture: newReview.val().picture
            };
            this.setState({
                events: [info].concat(this.state.events)
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
                            <Card
                            nombre={ele.title}
                            descripcion={ele.description}
                            direccion={ele.direccion}
                            user={ele.user}
                            fecha={ele.fecha}
                            hora={ele.hora}
                            imagen={ele.picture}/>
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