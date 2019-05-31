import React from 'react';
import StarRatingComponent from 'react-star-rating-component';
 
export default class RatingSearch extends React.Component {
  constructor() {
    super();
 
    this.state = {
      rating: 1
    };
  }
 onStarClick = (nextValue, prevValue, name) => {
   this.setState({ rating: nextValue },()=>this.props.searchByRate(nextValue))
   
  }
 
  render() {
    const { rating } = this.state;
    
    return (                
      <div>
        <h4 style={{color:'whitesmoke'}}>Search by Rating:</h4>
        <StarRatingComponent 
          name="rate1" 
          value={rating}
          onStarClick={this.onStarClick}
        />
      </div>
    );
  }
}
