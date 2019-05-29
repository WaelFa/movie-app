import React from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';
import StarRatingComponent from 'react-star-rating-component';

const MovieCard = (props) => {
  const movie = props.movie;
  return (
    <div>
      <Card>
        <CardImg top width="100%" src={movie.image} />
        <CardBody>
          <CardTitle>{movie.title}</CardTitle>
          <CardSubtitle>{movie.year}</CardSubtitle>
          <StarRatingComponent value={movie.rating} editing={false}/>
        </CardBody>
      </Card>
    </div>
  );
};

export default MovieCard;
