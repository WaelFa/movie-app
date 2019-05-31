import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Form, FormGroup, Label, Input, FormText } from 'reactstrap';


class ModalExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      movieTitle: '',
      movieDate: '',
      rating: '',
      imageUrl: ''
    };
    this.toggle = this.toggle.bind(this);
  }

  titlechange = (event) => {
    this.setState({ movieTitle: event.target.value })
  }
  datechange = (event) => {
    this.setState({ movieDate: event.target.value })
  }
  ratingchange = (event) => {
    this.setState({ rating: event.target.value })
  }
  imagechange = (event) => {
    this.setState({ imageUrl: event.target.value })
  }

  handleclick = (movie) => {
    movie.push({
      key: movie.lengh + 1,
      image: this.state.imageUrl,
      rating: this.state.rating,
      title: this.state.movieTitle,
      year: this.state.movieDate
    })
    this.props.getstatefrom(movie);
    console.log(movie);
    return movie
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }
  
  render() {
    return (
      <div className="Add">
        <Button className="Add-button btn-secondary"  onClick={this.toggle}>{this.props.buttonLabel}+</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
          <Form>
            <FormGroup>
              <Label >Movie tilte: </Label>
              <Input type="text" placeholder="title" onChange={this.titlechange} />
            </FormGroup>
            <FormGroup>
              <Label >Release date: </Label>
              <Input type="text" placeholder="date" onChange={this.datechange} />
            </FormGroup>
            <FormGroup>
              <Label for="exampleSelect">Select</Label>
              <Input type="select" name="select" id="exampleSelect" onChange={this.ratingchange}>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </Input>
            </FormGroup>

            <FormGroup>
              <Label >Image link: </Label>
              <Input type="text" name="Image link" onChange={this.imagechange} />
            </FormGroup>

          </Form>
          <ModalFooter>
            <Button color="primary" onClick={(movies)=>this.handleclick(this.props.newmovie)}>Submit</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default ModalExample;