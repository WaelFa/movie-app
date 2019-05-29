import React from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';

const MovieCard = ({movie: {title, year, image, rating}}) => {
  return (
    <div>
      <Card>
        <CardImg top width="100%" src={image} />
        <CardBody>
          <CardTitle>{title}</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>Some quick Card text to build on the card title and make up the bulk of the card's content.</CardText>
          <div>{rating}</div>
        </CardBody>
      </Card>
    </div>
  );
};

export default MovieCard;
