import React from 'react';
import ReactDOM from 'react-dom';
import Rating from './components/rating.jsx';
import ReviewList from './components/reviewList.jsx';
import $ from 'jquery';
import '../client/assets/styles.css';

class ReviewService extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      reviews: [],
      filtered: [],
      ratings: []
    };
    this.term = '';
    if (this.props.reviews) {
      this.state.reviews = this.props.reviews;
      this.state.filtered = this.props.reviews;
    }
    if (this.props.ratings) {
      this.state.ratings = this.props.ratings;
    }
  }

  handleSearch(term) {
    if (term === '') {
      this.term = '';
      this.setState({
        filtered: this.state.reviews
      });
      return;
    }

    this.setState({
      filtered: this.state.reviews.filter((review) => {
        return review.comments.includes(term);
      })
    });
    this.term = term;
  }

  render() {
    return (
      <div>
        <Rating ratings={this.state.ratings} listing_id={this.props.listing_id} numReviews={this.state.reviews.length} numSearch={this.state.filtered.length} handleSearch={this.handleSearch.bind(this)} term={this.term} />
        <ReviewList reviews={this.state.filtered} />
      </div>
    );
  }
}

//ReactDOM.render( <ReviewService listing_id={listingId} />, document.getElementById('reviews-service'));

export default ReviewService;
