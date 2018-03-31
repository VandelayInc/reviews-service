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
      filtered: []
    };
    this.term = '';
  }

  componentDidMount() {
    this.fetchReviews();
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
        return term.split(' ').length > 1 ? review.comments.toUpperCase().includes(term.toUpperCase()) : review.comments.toUpperCase().split(' ').includes(term.toUpperCase());
      })
    });
    this.term = term;
  }

  fetchReviews() {
    let listingId = window.location.href.split('/')[4];
    if (!listingId) {
      listingId = '500000';
    }
    $.ajax('/rooms/' + listingId + '/reviews/', {
      method: 'GET',
      dataType: 'json',
      success: (data) => {
        console.log(data);
        this.setState({
          reviews: data,
          filtered: data
        });
      }
    });
  }

  render() {
    return (
      <div>
        <Rating numReviews={this.state.reviews.length} numSearch={this.state.filtered.length} handleSearch={this.handleSearch.bind(this)} term={this.term} />
        <ReviewList reviews={this.state.filtered} />
      </div>
    );
  }
}

// let listingId = window.location.href.split('/')[4];
// if (!listingId) {
//   listingId = '500000';
// }

// ReactDOM.render(<ReviewService />, document.getElementById('reviews-service'));

export default ReviewService;

// || listingId.length !== 8 // line of code extracted from the conditional in line 62
