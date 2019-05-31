import React, { Component } from 'react'
import './App.css';
import RatingSearch from './ratingSearch'
import Search from './search';
import MovieList from './movieList';
import ModalExample from './addMovies'



let movies = [
  {
    key: 1,
    image: 'https://m.media-amazon.com/images/M/MV5BMjUxMDQwNjcyNl5BMl5BanBnXkFtZTgwNzcwMzc0MTI@._V1_.jpg',
    rating: '5',
    title: 'Get out',
    year: '2017'
  },
  {
    key: 2,
    image: 'https://upload.wikimedia.org/wikipedia/en/2/25/The_Spy_Who_Dumped_Me.png',
    title: 'the spy who dumped me',
    rating: '3',
    year: '2018'
  },
  {
    key: 3,
    rating: '1',
    image: 'https://m.media-amazon.com/images/M/MV5BMTQ2NjE4NDE2NV5BMl5BanBnXkFtZTgwOTcwNDE5NzE@._V1_UX182_CR0,0,182,268_AL_.jpg',
    title: 'me before you',
    year: '2016'
  },
  {
    key: 4,
    image: 'https://upload.wikimedia.org/wikipedia/en/thumb/3/37/Theringpostere.jpg/220px-Theringpostere.jpg',
    rating: '4',
    title: 'the Ring',
    year: '2002'
  },
  {
    key: 5,
    image: 'https://cinemadefreddy.files.wordpress.com/2013/08/the-conjuring-new-poster.jpg',
    rating: '3',
    title: 'The conjuring',
    year: '2013'
  },
  {
    key: 6,
    image: 'https://m.media-amazon.com/images/M/MV5BMjE1OTU5MjU0N15BMl5BanBnXkFtZTcwMzI3OTU5Ng@@._V1_UX182_CR0,0,182,268_AL_.jpg',
    rating: '4',
    title: 'the Vow',
    year: '2012'
  }
]




export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      // movielist: movies,
      filtered: movies,
      filteredByN: movies,
      filteredByR :movies
      // rating1: 0,
      // keyword1:''
    }
  }
  search = (keyword) => {
    let filteredbyName =this.state.filtered.filter((el, i) => { return el.title.toLocaleLowerCase().indexOf(keyword) > -1 });
    this.setState({ filteredByN: filteredbyName })
  }
  ratingSearch = (rating) => {
    let filteredbyRating =this.state.filtered.filter((el) => { return el.rating >= rating })
    this.setState({filteredByR: filteredbyRating})
  }
  intersection = (tab1, tab2)=>{
    let filteredTab = tab1.filter(el => tab2.includes(el));
    return filteredTab
  }
  getstatefrom=(a) =>{
    this.setState({
      filtered: a,
    })
  }
  

  render() {
    return (
      <div className="App">
        <center>
          <Search searchByName={(keyword) => this.search(keyword)} />
          <RatingSearch searchByRate={(rating)=>this.ratingSearch(rating)}/>
        </center>
        <MovieList movies={this.intersection(this.state.filteredByN, this.state.filteredByR)} />
        <ModalExample newmovie={this.state.filtered} getstatefrom={this.getstatefrom} />
      </div>
    )
  }
}
