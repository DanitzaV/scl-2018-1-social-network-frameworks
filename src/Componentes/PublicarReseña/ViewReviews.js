import React, { Component } from 'react';

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
}

export default ShowReviews;