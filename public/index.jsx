import React from 'react';
import ReactDOM from 'react-dom';
import Rating from './components/rating.jsx';
import ReviewList from './components/reviewList.jsx';
import $ from 'jquery';

class ReviewService extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      reviews: []
    };

    this.fetchReviews();
  }

  handleSearch(term) {
    console.log('Searching reviews for: ', term);
  }

  fetchReviews() {
    $.ajax('/rooms/' + this.props.listing_id + '/reviews/', {
      method: 'GET',
      dataType: 'json',
      success: (data) => {
        this.setState({
          reviews: data
        });
      }
    });
  }

  render() {
    this.state.reviews = this.state.reviews.concat(this.state.reviews);
    return (
      <div>
        <Rating listing_id={this.props.listing_id} numReviews={this.state.reviews.length} />
        <ReviewList reviews={this.state.reviews} />
      </div>
    );
  }
}

ReactDOM.render( <ReviewService listing_id='12679234' />, document.getElementById('review-service'));
