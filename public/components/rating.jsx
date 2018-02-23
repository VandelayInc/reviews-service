import React from 'react';
import $ from 'jquery';

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

  render() {
    return <h1> Rating Component: {
      this.state.ratings.star_rating
    } </h1>;
  }
}

export default Rating;