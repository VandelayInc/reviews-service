import React from 'react';
import $ from 'jquery';
import Search from './search.jsx';

class Rating extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ratings: {}
    };

    this.fetchRatings();
  }

  fetchRatings() {
    $.ajax('/rooms/' + this.props.listing_id + '/ratings/', {
      method: 'GET',
      dataType: 'json',
      success: (data) => {
        this.setState({
          ratings: data
        });
      }
    });
  }

  genStarRating(rating) {

    if (isNaN(rating)) {
      return [];
    }

    let starRating = [];

    for (let i = 1; i <= rating; i++) {
      if (i % 2 === 0) {
        starRating.push(<img key={i} className="reviews-rating-cell reviews-rating-star" src="http://18.219.35.229:80/assets/star.png"></img>);
      } else if (i === rating) {
        starRating.push(<img key={i} className="reviews-rating-cell reviews-rating-star-half" src="http://18.219.35.229:80/assets/star_half.png"></img>);
      }
    }
    for (let i = 0; i < starRating.length - 5; i++) {
      starRating.push(<span className="reviews-cell"></span>);
    }
      
    return starRating;
  }

  render() {
    let overallRating = this.genStarRating(this.state.ratings.star_rating * 2);
    let accRating = this.genStarRating(this.state.ratings.review_rating_accuracy);
    let commRating = this.genStarRating(this.state.ratings.review_rating_communication);
    let cleanRating = this.genStarRating(this.state.ratings.review_rating_cleanliness);
    let locRating = this.genStarRating(this.state.ratings.review_rating_location);
    let checkRating = this.genStarRating(this.state.ratings.review_rating_checkin);
    let valRating = this.genStarRating(this.state.ratings.review_rating_value);

    let body = <div className="reviews-rating-body">
      <div className="reviews-rating-container">
        <h3>Accuracy</h3>
        <span className="reviews-rating">
          {accRating}
        </span>
      </div>
      <div className="reviews-rating-container">
        <h3>Communication</h3>
        <span className="reviews-rating">
          {commRating}
        </span>
      </div>
      <div className="reviews-rating-container">
        <h3>Cleanliness</h3>
        <span className="reviews-rating">
          {cleanRating}
        </span>
      </div>
      <div className="reviews-rating-col">
      </div>
      <div className="reviews-rating-container">
        <h3>Location</h3>
        <span className="reviews-rating">
          {locRating}
        </span>
      </div>
      <div className="reviews-rating-container">
        <h3>Check In</h3>
        <span className="reviews-rating">
          {checkRating}
        </span>
      </div>
      <div className="reviews-rating-container">
        <h3>Value</h3>
        <span className="reviews-rating">
          {valRating}
        </span>
      </div>
    </div>;

    if (this.props.term !== '') {
      body = <div className="reviews-search-head">
        <span className="reviews-search-text"> {this.props.numSearch} guests have mentioned  &ldquo;<b>{this.props.term}</b>&rdquo; </span>
        <span className="reviews-search-return" onClick={this.props.handleSearch.bind(this, '')}> Back to all reviews </span>
      </div>;
    }

    return <div className="reviews-rating-section">
      <div className="reviews-rating-top">
        <div className="reviews-rating-head">
          <h2>{this.props.numReviews} Reviews</h2>
          <span className="reviews-rating">
            {overallRating}
          </span>
        </div>
        <Search handleSearch={this.props.handleSearch} />
      </div>
      {body}
    </div>;
  }
}

export default Rating;
