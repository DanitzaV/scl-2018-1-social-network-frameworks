import React, { Component } from 'react';
import { Grid } from '@material-ui/core';
import firebase from './../../base';
import MediaControlCard from './ReviewCard';

class ShowReviews extends Component {
    constructor(props) {
        super(props);
        this.state = {
            reviews: []
        } 
    }

    componentWillMount() {
        firebase.database().ref('reviews')
          .on('child_added', (newReview) => {
            console.log(newReview.val())
            let info = {
                store: newReview.val().store,
                review: newReview.val().review,
                user: newReview.val().creatorcorreo,
                date: newReview.val().date,
                picture: newReview.val().picture
            };
            this.setState({
                reviews: [info].concat(this.state.reviews)
            });
        });
    }

    render() {
        return (
            <div>
                <Grid item xs>
                </Grid>
                <Grid container alignItems="center" direction="row" justify="center" alignItems="center">
                {this.state.reviews.map(ele => {
                    return (
                        <Grid>
                            <MediaControlCard nombre={ele.store} reseña={ele.review} user={ele.user} fecha={ele.date} imagen={ele.picture}/>
                        </Grid>
                    )
                })}
                </Grid>
            </div>
        )
    }
}

export default ShowReviews;