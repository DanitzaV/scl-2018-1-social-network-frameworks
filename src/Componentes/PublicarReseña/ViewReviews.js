import React, { Component } from 'react';
import { Grid } from '@material-ui/core';
import firebase from './../../base';
import ReviewCard from './ReviewCard';

class ShowReviews extends Component {
    constructor(props) {
        super(props);
        this.state = {
            reviews: [],
            spacing: '24'
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

    componentWillUnmount() {
        firebase.database().ref('reviews').off()
    }

    render() {
        const { spacing } = this.state;
        return (
            <div>
                <Grid item xs>
                </Grid>
                <Grid container column>
                {this.state.reviews.map(ele => {
                    return (
                        <Grid container>
                        <Grid item xs></Grid>
                        <Grid item xs={8}>
                            <ReviewCard
                            nombre={ele.store}
                            reseña={ele.review}
                            user={ele.user}
                            fecha={ele.date}
                            imagen={ele.picture}/>
                            </Grid>
                            <Grid item xs></Grid>
                        </Grid>
                    )
                })}
                </Grid>
            </div>
        )
    }
}

export default ShowReviews;