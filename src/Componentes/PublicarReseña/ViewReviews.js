import React, { Component } from 'react';
import { Grid } from '@material-ui/core';
import firebase from './../../base';
import ReviewCard from './ReviewCard';

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

    componentWillUnmount() {
        firebase.database().ref('reviews').off()
    }

    render() {
        return (
            <div>
                <Grid item xs>
                </Grid>
                <Grid container direction="row">
                {this.state.reviews.map(ele => {
                    return (
                        <li>
                        <Grid>
                            <ReviewCard
                            nombre={ele.store}
                            reseña={ele.review}
                            user={ele.user}
                            fecha={ele.date}
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

export default ShowReviews;