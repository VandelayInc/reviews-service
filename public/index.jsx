import React from 'react';
import ReactDOM from 'react-dom';
import Rating from './components/rating.jsx';

class ReviewService extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <Rating listing_id = {
      this.props.listing_id
    }
    />;
  }
}

ReactDOM.render( <ReviewService listing_id='21826970' />, document.getElementById('review-service'));