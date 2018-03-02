import React from 'react';
import ReviewListEntry from './reviewListEntry.jsx';

class ReviewList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      curIdx: 0
    };
  }

  handleClick(index, event) {
    if (index === -2) {
      if (this.state.curIdx > 0) {
        this.setState({
          curIdx: this.state.curIdx - 7
        });
        if (this.selected) {
          this.selected.classList.remove('reviews-btn-selected');
        }
        this.selected = event.target;
        this.selected.classList.add('reviews-btn-selected');
      }
    } else if (index === -1) {
      if (this.state.curIdx <= this.props.reviews.length - 7) {
        this.setState({
          curIdx: this.state.curIdx + 7
        });
      }
    } else if (index !== this.state.curIdx) {
      this.setState({
        curIdx: (index - 1) * 7
      });
    }
    console.log('Click curIndex: ', this.state.curIdx);
  }
  
  render() {
    let once = true;
    let reviews = [];
    let lastPage = Math.ceil(this.props.reviews.length / 7);
    let reviewsNav = [
      <button className="reviews-btn" onClick={this.handleClick.bind(this, -2)}>&lt;</button>,
      <button className="reviews-btn" onClick={this.handleClick.bind(this, 1)}>1</button>
    ];
    this.props.reviews.forEach((review, index) => {
      if (index >= this.state.curIdx && index < this.state.curIdx + 7) {
        reviews.push(<ReviewListEntry review={review} key={index} />);
      }
      if (index > 0 && index % 7 === 0 && index / 7 + 1 < lastPage) {
        reviewsNav.push(<button className="reviews-btn" onClick={this.handleClick.bind(this, index / 7 + 1)}>{index / 7 + 1}</button>);
      }
    });
    reviewsNav.push(<button className="reviews-btn" onClick={this.handleClick.bind(this, lastPage)}>{lastPage}</button>);
    reviewsNav.push(<button className="reviews-btn" onClick={this.handleClick.bind(this, -1)}>&gt;</button>);

    return (
      <div className="reviews-section">
        {reviews}
        <div className="reviews-nav">
          {reviewsNav}
        </div>
      </div>
    );

  }
}

export default ReviewList;