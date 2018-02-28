import React from 'react';
import ReviewListEntry from './reviewListEntry.jsx';

class ReviewList extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    let reviews = [];
    this.props.reviews.forEach((review, index) => {
      reviews.push(<ReviewListEntry review={review} key={index} />);
    });

    return <div className="reviews-section">{reviews}</div>;
  }
}

export default ReviewList;